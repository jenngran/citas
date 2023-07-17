import psycopg2

class Cita:
    def __init__(self, id_cita, nombre_paciente, fecha_hora, medico, motivo):
        self.id_cita = id_cita
        self.nombre_paciente = nombre_paciente
        self.fecha_hora = fecha_hora
        self.medico = medico
        self.motivo = motivo

class HistorialMedico:
    def __init__(self, db_user, db_password, db_name, paciente, db_host='localhost', db_port='5432'):
        self.paciente = paciente
        self.citas = []
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

    def guardar_cita_en_db(self, cita):
        query = "INSERT INTO citas (nombre_paciente, fecha_hora, medico, motivo) VALUES (%s, %s, %s, %s) RETURNING id_cita"
        params = (cita.nombre_paciente, cita.fecha_hora, cita.medico, cita.motivo)

        try:
            with self.conn.cursor() as cursor:
                cursor.execute(query, params)
                cita.id_cita = cursor.fetchone()[0]
                self.citas.append(cita)
            self.conn.commit()
        except psycopg2.Error as e:
            print("Error al guardar la cita en la base de datos:", e)

    def obtener_citas_del_paciente(self):
        # Obtener citas del paciente desde la base de datos y agregarlas a la lista de citas
        query = "SELECT id_cita, fecha_hora, medico, motivo FROM citas WHERE nombre_paciente = %s"
        params = (self.paciente,)

        try:
            with self.conn.cursor() as cursor:
                cursor.execute(query, params)
                rows = cursor.fetchall()
                for row in rows:
                    id_cita, fecha_hora, medico, motivo = row
                    cita = Cita(id_cita, self.paciente, fecha_hora, medico, motivo)
                    self.citas.append(cita)
        except psycopg2.Error as e:
            print("Error al obtener las citas del paciente:", e)

        """
        Obtener citas del paciente desde la base de datos y agregarlas a la lista de citas.
        ---
        responses:
          200:
            description: Lista de citas del paciente.
        """

