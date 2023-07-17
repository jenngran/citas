import psycopg2

class Usuario:
    def __init__(self, id_usuario, nombre_usuario, contrasena, tipo_usuario):
        self.id_usuario = id_usuario
        self.nombre_usuario = nombre_usuario
        self.contrasena = contrasena
        self.tipo_usuario = tipo_usuario

class GestorUsuarios:
    def __init__(self, db_user, db_password, db_name, db_host='localhost', db_port='5432'):
        self.usuarios = []
        self.conn = self.connect_to_db(db_user, db_password, db_name, db_host, db_port)

    def connect_to_db(self, db_user, db_password, db_name, db_host, db_port):
        try:
            conn = psycopg2.connect(
                user=db_user,
                password=db_password,
                dbname=db_name,
                host=db_host,
                port=db_port
            )
            return conn
        except psycopg2.Error as e:
            print("Error al conectar a la base de datos:", e)
            return None

    def agregar_usuario(self, nombre_usuario, contrasena, tipo_usuario):
        query = "INSERT INTO usuarios (nombre_usuario, contrasena, tipo_usuario) VALUES (%s, %s, %s) RETURNING id_usuario"
        params = (nombre_usuario, contrasena, tipo_usuario)

        try:
            with self.conn.cursor() as cursor:
                cursor.execute(query, params)
                id_usuario = cursor.fetchone()[0]
                usuario = Usuario(id_usuario, nombre_usuario, contrasena, tipo_usuario)
                self.usuarios.append(usuario)
            self.conn.commit()
        except psycopg2.Error as e:
            print("Error al agregar el usuario en la base de datos:", e)
        """
        Agregar un nuevo usuario a la base de datos.
        ---
        parameters:
          - name: nombre_usuario
            in: formData
            type: string
            required: true
            description: Nombre del usuario a agregar.
          - name: contrasena
            in: formData
            type: string
            required: true
            description: Contraseña del usuario a agregar.
          - name: tipo_usuario
            in: formData
            type: string
            required: true
            description: Tipo de usuario a agregar (admin o paciente).
        responses:
          201:
            description: Usuario creado exitosamente.
        """

    def autenticar_usuario(self, nombre_usuario, contrasena):
        for usuario in self.usuarios:
            if usuario.nombre_usuario == nombre_usuario and usuario.contrasena == contrasena:
                return usuario
        return None

    def listar_usuarios(self):
        for usuario in self.usuarios:
            print(f"ID: {usuario.id_usuario}, Nombre de usuario: {usuario.nombre_usuario}, Tipo de usuario: {usuario.tipo_usuario}")
