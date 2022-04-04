using Final_Project.Models;

namespace Final_Project.DTOs;

public class ToyInputDTO
{
    public string Name { get; set; }
    public string Description { get; set; }
    public int UserId { get; set; }

    public Statuses Status { get; set; } = Statuses.Available;
    
    public Categories Category { get; set; }

    public Ages Age { get; set; }
}