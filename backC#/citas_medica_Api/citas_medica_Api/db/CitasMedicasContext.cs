using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace citas_medica_Api.db;

public partial class CitasMedicasContext : DbContext
{
    public CitasMedicasContext()
    {
    }

    public CitasMedicasContext(DbContextOptions<CitasMedicasContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cita> Citas { get; set; }

    public virtual DbSet<Medico> Medicos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cita>(entity =>
        {
            entity.HasKey(e => e.IdCitas);

            entity.Property(e => e.IdCitas).HasColumnName("Id_Citas");
            entity.Property(e => e.DescripcionCita)
                .HasMaxLength(50)
                .HasColumnName("Descripcion_cita");
            entity.Property(e => e.FechaHora)
                .HasColumnType("datetime")
                .HasColumnName("Fecha_hora");
            entity.Property(e => e.IdMedico).HasColumnName("Id_Medico");
            entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");
            entity.Property(e => e.NombrePaciente)
                .HasMaxLength(50)
                .HasColumnName("Nombre_Paciente");

            entity.HasOne(d => d.IdMedicoNavigation).WithMany(p => p.Cita)
                .HasForeignKey(d => d.IdMedico)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Fk_Id_Medico");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Cita)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Fk_Id_Usuario");
        });

        modelBuilder.Entity<Medico>(entity =>
        {
            entity.HasKey(e => e.IdMedico);

            entity.Property(e => e.IdMedico)
                .ValueGeneratedNever()
                .HasColumnName("Id_Medico");
            entity.Property(e => e.Especializacion)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario);

            entity.ToTable("Usuario");

            entity.Property(e => e.IdUsuario)
                .ValueGeneratedNever()
                .HasColumnName("Id_Usuario");
            entity.Property(e => e.Pass).HasMaxLength(50);
            entity.Property(e => e.TipoUsuario)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Tipo_usuario");
            entity.Property(e => e.UserName).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }
    public async Task<Usuario> ValidarCredencialesAsync(string usuario, string contrasena)
    {
        try
        {
            
            // Buscar el usuario en la base de datos por nombre de usuario y contraseña
            var usuarioAutenticado = await Usuarios
                .Where(u => u.UserName == usuario && u.Pass == contrasena && u.Active == true)
                .FirstOrDefaultAsync();

            return usuarioAutenticado!;
        }
        catch (Exception ex)
        {
            // Manejar errores, como problemas de decodificación o consultas a la base de datos
            throw new Exception("Error al validar las credenciales: " + ex.Message);
        }
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
