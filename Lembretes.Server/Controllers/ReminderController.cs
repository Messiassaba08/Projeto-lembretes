using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reminder.Server.Configuracao;
using reminder.Server.Model;
using System.Reflection.Metadata.Ecma335;
using static reminder.Server.Model.ReminderStruct;

namespace reminder.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly Contexto _context;

        public ProdutosController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Produtos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReminderStruct>>> GetProduto()
        {
            return await _context.ReminderStruct.ToListAsync();
        }

        // GET: api/Produtos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReminderStruct>> GetProduto(int id)
        {
            var produto = await _context.ReminderStruct.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        // PUT: api/Produtos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(int id, [FromForm] ReminderStruct ReminderStruct)
        {
            if (id != ReminderStruct.Id)
            {
                return BadRequest();
            }

            _context.Entry(ReminderStruct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Produtos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReminderStruct>> PostProduto([FromForm] ReminderStruct ReminderStruct)
        {
            _context.ReminderStruct.Add(ReminderStruct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduto", new { id = ReminderStruct.Id }, ReminderStruct);
        }

        // DELETE: api/Produtos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduto(int id)
        {
            var produto = await _context.ReminderStruct.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }

            _context.ReminderStruct.Remove(produto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdutoExists(int id)
        {
            return _context.ReminderStruct.Any(e => e.Id == id);
        }
    }
}
