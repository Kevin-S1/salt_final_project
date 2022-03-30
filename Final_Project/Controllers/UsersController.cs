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
    public class UsersController : ControllerBase
    {
        private readonly SwappieContext _context;

        public UsersController(SwappieContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.User.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {

            
            var user = await _context
                    .User
                    .Include(u => u.Toys)
                    .FirstOrDefaultAsync(u => u.Id == id);
            Console.WriteLine(id);
            // var user = await _context.User.FindAsync(authId);
            // var toys = await _context.Toy.Where(t => t.UserId == user.Id).Select(t => t).ToListAsync();
            
            

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{authId}")]
        public async Task<IActionResult> PutUser(string authId, [FromBody] UserInputDTO userInputDto)
        {
            
            if (!UserExists(authId))
            {
                return BadRequest();
            }

            var user = _context.User.FirstOrDefault(u => u.AuthId == authId);

            user.City = userInputDto.City;
            user.Country = userInputDto.Country;
            user.PhoneNumber = userInputDto.PhoneNumber;
            
            _context.Entry(user).State = EntityState.Modified;
 
            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine(user);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(authId))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser([FromBody] User user)
        {
            var matchingUser = _context.User.Where(u => u.AuthId == user.AuthId).ToList();
            if (matchingUser.Count == 0)
            {
                _context.User.Add(user);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetUser", new { id = user.Id }, user);
            }

            return Ok(matchingUser[0]);     
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(string authId)
        {
            return _context.User.Any(e => e.AuthId == authId);
        }
    }
}