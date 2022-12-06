using API.Models;
using API.Utils;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/imc")]
    public class ImcController : ControllerBase
    {
        private readonly DataContext _context;

        public ImcController(DataContext context) =>
            _context = context;

        // POST: /api/folha/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Imc imc)
        {            
            imc.CalculoImc = 
                Calculos.CalcularImc
                    (imc.Altura, imc.Peso);

            _context.Imcs.Add(imc);
            _context.SaveChanges();
            return Created("", imc);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Imcs.ToList());


         [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar([FromRoute] int id)
        {
            Imc imc = _context.Imcs.
                Include(x => x.NomeA).
                Include(x => x.NascimentoAId).
                FirstOrDefault(x => x.Id == id);
            return imc != null ? Ok(imc) : NotFound();
        }

         [HttpPut]
        [Route("alterar")]
        public IActionResult Alterar([FromBody] Imc imc)
        {
            _context.Imcs.Update(imc);
            _context.SaveChanges();
            return Created("", imc);
        }

    }
    }
