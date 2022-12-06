using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;

namespace API.Controllers
{
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController : ControllerBase
    {
        private readonly DataContext _context;
        public UsuarioController(DataContext context) =>
            _context = context;

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            return Created("", usuario);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar()
        {
            List<Usuario> Usuarios = _context.Usuarios.ToList();
            return Usuarios.Count != 0 ? Ok(Usuarios) : NotFound();
        }
        
    }
}      