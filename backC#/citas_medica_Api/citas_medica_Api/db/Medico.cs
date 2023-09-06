using System;
using System.Collections.Generic;

namespace citas_medica_Api.db;

public partial class Medico
{
    public int IdMedico { get; set; }

    public string Nombre { get; set; } = null!;

    public string Especializacion { get; set; } = null!;

    public virtual ICollection<Cita> Cita { get; set; } = new List<Cita>();
}
