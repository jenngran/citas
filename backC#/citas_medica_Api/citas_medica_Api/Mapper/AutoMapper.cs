using System;
using AutoMapper;
using citas_medica_Api.db;
using citas_medica_Api.Models;

namespace citas_medica_Api.Mapper
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<Cita, CitaDto>()
                .ForMember(m => m.Nombre,opt => opt.MapFrom(x=>x.IdMedicoNavigation.Nombre))
                .ForMember(m => m.Especialidad, opt => opt.MapFrom(x => x.IdMedicoNavigation.Especializacion))
                .ReverseMap();
            CreateMap<Cita, CitaPosDto>().ReverseMap();
            CreateMap<Medico, MedicoDto>().ReverseMap();
            CreateMap<Usuario, UsuarioDto>().ReverseMap();
        }
    }
}