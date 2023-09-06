using System;
using citas_medica_Api.db;

namespace citas_medica_Api.Models
{
	public class MedicoDto
	{
        public int IdMedico { get; set; }

        public string Nombre { get; set; } = null!;

        public string Especializacion { get; set; } = null!;


    }
}

