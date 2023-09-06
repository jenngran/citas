using System;
using citas_medica_Api.db;

namespace citas_medica_Api.Models
{
	public class UsuarioDto
	{
        public int IdUsuario { get; set; }

        public string UserName { get; set; } = null!;

        //public string Pass { get; set; } = null!;

        public string TipoUsuario { get; set; } = null!;

        public bool? Active { get; set; }

        //public virtual ICollection<Cita> Cita { get; set; } = new List<Cita>();
    }
}

