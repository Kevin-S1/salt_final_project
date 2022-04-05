using Final_Project.Data;
using Final_Project.Models;
using Microsoft.AspNetCore.Mvc;

namespace Final_Project.Controllers;

[Route("api/[controller]")]
[ApiController]
public class InformationController : ControllerBase
{
    private readonly SwappieContext _context;

    public InformationController(SwappieContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> PostInformation([FromBody]Information information)
    {
        _context.Information.Add(information);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}