using System.Text;
using AutoMapper;
using citas_medica_Api.db;
using citas_medica_Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace citas_medica_Api.Controllers
{
    [ApiController]
    public class CitasController : ControllerBase
	{
        private readonly CitasMedicasContext _context;
        private readonly IMapper _mapper;

        public CitasController(CitasMedicasContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<string>> IniciarSesion(string username,string  password)
        {
            try
            {

                // Consultar la base de datos para verificar las credenciales
                var usuarioAutenticado = await _context.ValidarCredencialesAsync(username, password);

                if (usuarioAutenticado != null)
                {
                    // El usuario se ha autenticado exitosamente.
                    return Ok(new { message = "Inicio de sesión exitoso" });
                }
                else
                {
                    // Las credenciales no son válidas o el usuario no se pudo autenticar.
                    return BadRequest(new { message = "Credenciales no válidas o usuario no encontrado." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Error al iniciar sesión: " + ex.Message });
            }
        }
        [HttpPost]
        [Route("cita")]
        public async Task<ActionResult<CitaPosDto>> CrearCita([FromBody] CitaPosDto nuevaCita)
        {
            try
            {
                var medicoExistente = await _context.Medicos.FindAsync(nuevaCita.IdMedico);
                if (medicoExistente == null)
                {
                    return BadRequest("El médico especificado no existe.");
                }

                // Validar que el usuario exista
                var usuarioExistente = await _context.Usuarios.FindAsync(nuevaCita.IdUsuario);
                if (usuarioExistente == null)
                {
                    return BadRequest("El usuario especificado no existe.");
                }


                var cita = _mapper.Map<Cita>(nuevaCita);
                _context.Citas.Add(cita);
                await _context.SaveChangesAsync();

                var citaCreadaDto = _mapper.Map<CitaPosDto>(cita);


                return citaCreadaDto;
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error al crear la cita: " + ex.Message);
            }
        }

        [HttpGet]
        [Route("citas")]
        public async Task<ActionResult<IEnumerable<CitaDto>>> ObtenerTodasLasCitas()
        {
            try
            {
                var citas = await _context.Citas.Include(c => c.IdMedicoNavigation).ToListAsync();

                if (citas == null)
                {
                    return NotFound(); // Devolver un resultado 404 si no se encuentran citas
                }

                var citasDto = _mapper.Map<List<CitaDto>>(citas);

                return Ok(citasDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error al obtener las citas: " + ex.Message);
            }
        }

        [HttpGet]
        [Route("pacientes")]
        public async Task<ActionResult<IEnumerable<UsuarioDto>>> ObtenerPacientes()
        {
            try
            {
                var paciente = await _context.Usuarios.Where(u=>u.TipoUsuario == "paciente").ToListAsync();

                if (paciente == null)
                {
                    return NotFound(); // Devolver un resultado 404 si no se encuentran citas
                }

                var citasDto = _mapper.Map<List<UsuarioDto>>(paciente);

                return Ok(citasDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error al obtener los pacientes: " + ex.Message);
            }
        }

        [HttpGet]
        [Route("medicos")]
        public async Task<ActionResult<IEnumerable<MedicoDto>>> ObtenerMedicos()
        {
            try
            {
                var med = await _context.Medicos.ToListAsync();

                if (med == null)
                {
                    return NotFound(); // Devolver un resultado 404 si no se encuentran citas
                }

                var result = _mapper.Map<List<MedicoDto>>(med);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error al obtener las citas: " + ex.Message);
            }
        }


    }
}

