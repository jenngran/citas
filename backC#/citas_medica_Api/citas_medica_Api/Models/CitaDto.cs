using System;
using citas_medica_Api.db;

namespace citas_medica_Api.Models
{
	public class CitaDto
	{
        public string NombrePaciente { get; set; } = null!;

        public string? Nombre { get; set; }

        public DateTime FechaHora { get; set; }

        public string? DescripcionCita { get; set; }

        public string? Especialidad { get; set; }

    }
}

