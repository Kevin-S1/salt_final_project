using Final_Project.Models;

namespace Final_Project.DTOs;

public class ToyDetailsDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int UserId { get; set; }
    
    public int LendeeId { get; set; }
    public string UserName { get; set; }
    public string Image { get; set; }
    public string UserEmail { get; set; }
    public string PhoneNumber { get; set; }
    
    public string UserCity { get; set; }
    
    public string UserCountry { get; set; }
    
    public Statuses Status { get; set; }

    public Categories Category { get; set; }

    public Ages Age { get; set; }
}