from model.usuario import Usuario, GestorUsuarios
from model.cita import Cita, HistorialMedico

if __name__ == '__main__':
    db_user = 'postgres'
    db_password = 'jenniffergr4'
    db_name = 'proyecto'

    # Crear un gestor de usuarios y agregar usuarios
    gestor_usuarios = GestorUsuarios(db_user, db_password, db_name)
    gestor_usuarios.agregar_usuario("user123", "contrasena123", "paciente")
    gestor_usuarios.agregar_usuario("admin", "admin123", "administrador")

    # Autenticar usuarios (ejemplo básico)
    usuario_autenticado = gestor_usuarios.autenticar_usuario("user123", "contrasena123")
    if usuario_autenticado:
        print(f"Usuario autenticado: {usuario_autenticado.nombre_usuario}")
    else:
        print("Usuario o contraseña incorrectos.")

    usuario_no_autenticado = gestor_usuarios.autenticar_usuario("user123", "contrasena456")
    if not usuario_no_autenticado:
        print("Usuario o contraseña incorrectos.")

    # Crear un historial médico y agregar citas (solo para usuarios autenticados)
    if usuario_autenticado and usuario_autenticado.tipo_usuario == "paciente":
        paciente = usuario_autenticado.nombre_usuario
        historial = HistorialMedico(db_user, db_password, db_name, paciente)
        cita1 = Cita(None, paciente, "2023-07-20 14:30", "Dr. García", "Control de presión arterial")
        historial.guardar_cita_en_db(cita1)
        print("Cita agregada exitosamente.")
    else:
        print("No tienes permiso para agregar citas.")
