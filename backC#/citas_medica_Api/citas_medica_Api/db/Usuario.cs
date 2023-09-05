using System;
using System.Collections.Generic;

namespace citas_medica_Api.db;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string UserName { get; set; } = null!;

    public string Pass { get; set; } = null!;

    public string TipoUsuario { get; set; } = null!;

    public bool? Active { get; set; }

    public virtual ICollection<Cita> Cita { get; set; } = new List<Cita>();
}
