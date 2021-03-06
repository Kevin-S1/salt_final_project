#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Final_Project.Data;
using Final_Project.DTOs;
using Final_Project.Models;

namespace Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToysController : ControllerBase
    {
        private readonly SwappieContext _context;

        public ToysController(SwappieContext context)
        {
            _context = context;
        }

        // GET: api/Toys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Toy>>> GetToy()
        {
            return await _context.Toy
                .Include(t => t.User)
                .ToListAsync();
        }

        // GET: api/Toys/5
        [HttpGet("getbyid/{id}")]
        public async Task<ActionResult<ToyDetailsDTO>> GetToy(int id)
        {
            var toy = await _context.Toy.FindAsync(id);
            if (toy == null)
            {
                return NotFound();
            }
            
            var toyOwner = _context.User.Where(u => u.Id == toy.UserId).Single();

            var lendeeCheck = toy.LendeeId != null ? toy.LendeeId : 0;
            
            var toyDTO = new ToyDetailsDTO() { 
                Id = toy.Id,
                Name = toy.Name, 
                Description = toy.Description,
                UserId = toyOwner.Id,
                LendeeId = (int)lendeeCheck,
                Status = toy.Status,
                Age = toy.Age,
                Category = toy.Category,
                UserName = toyOwner.UserName,
                Image = toy.Image,
                UserEmail = toyOwner.Email,
                PhoneNumber = toyOwner.PhoneNumber,
                UserCity = toyOwner.City,
                UserCountry = toyOwner.Country
            };
            
            return toyDTO;
        }
        
        [HttpGet("myloans/{lendeeId}")]
        public async Task<ActionResult<IEnumerable<ToyDetailsDTO>>> GetLendToys(int lendeeId)
        {
            return await _context.Toy
                .Include(t=> t.User)
                .Where(t=> t.LendeeId == lendeeId)
                .Select(t =>
                    new ToyDetailsDTO() { 
                        Id = t.Id,
                        Name = t.Name, 
                        Description = t.Description,
                        UserId = t.User.Id,
                        LendeeId = (int)t.LendeeId,
                        Status = t.Status,
                        Age = t.Age,
                        Category = t.Category,
                        UserName = t.User.UserName,
                        Image = t.Image,
                        UserEmail = t.User.Email,
                        PhoneNumber = t.User.PhoneNumber,
                        UserCity = t.User.City,
                        UserCountry = t.User.Country
                    }

                )
                .ToListAsync();
        }

        // PUT: api/Toys/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToy(int id, [FromBody]ToyDetailsDTO toyDTO)
        {
            if (!ToyExists(id))
            {
                BadRequest();
            }

            var toy = _context.Toy.FindAsync(id).Result;
            toy.Age = toyDTO.Age;
            toy.Category = toyDTO.Category;
            toy.Name = toyDTO.Name;
            toy.Description = toyDTO.Description;
            toy.LendeeId = toyDTO.LendeeId;
            toy.Status = toyDTO.Status;
            toy.Image = toyDTO.Image;
            
            _context.Entry(toy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToyExists(id))
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

        // POST: api/Toys
        [HttpPost]
        public async Task<ActionResult<Toy>> PostToy([FromBody]ToyInputDTO toy)
        {
            Console.WriteLine(toy);
            Toy newToy = new Toy()
            {
                Name = toy.Name,
                Description = toy.Description,
                UserId = toy.UserId,
                Status = toy.Status,
                Category = toy.Category,
                Age = toy.Age,
                Image = toy.ImgUrl
            };
            
            _context.Toy.Add(newToy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToy", new { id = newToy.Id }, toy);
        }

        // DELETE: api/Toys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToy(int id)
        {
            var toy = await _context.Toy.FindAsync(id);
            if (toy == null)
            {
                return NotFound();
            }

            _context.Toy.Remove(toy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ToyExists(int id)
        {
            return _context.Toy.Any(e => e.Id == id);
        }
    }
}
