using System;
using System.Collections.Generic;

namespace citas_medica_Api.db;

public partial class Cita
{
    public int IdCitas { get; set; }

    public string ?NombrePaciente { get; set; } = null!;

    public DateTime ?FechaHora { get; set; }

    public int IdMedico { get; set; }

    public int IdUsuario { get; set; }

    public string? DescripcionCita { get; set; }

    public virtual Medico IdMedicoNavigation { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
