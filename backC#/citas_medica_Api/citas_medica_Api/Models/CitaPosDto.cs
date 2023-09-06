using System;
namespace citas_medica_Api.Models
{
	public class CitaPosDto
	{
        public int IdMedico { get; set; }

        public int IdUsuario { get; set; }

        public string NombrePaciente { get; set; } = null!;

        public DateTime FechaHora { get; set; }

        public string? DescripcionCita { get; set; }
    }
}

