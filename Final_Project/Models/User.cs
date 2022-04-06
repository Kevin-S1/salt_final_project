

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Final_Project.Models;
public class User
{
    public int Id { get; set; }
    public string? UserName { get; set; } 
    public string? City { get; set; }
    public string? Country { get; set; }
    public string? PhoneNumber { get; set; }

    public virtual ICollection<Toy>? Toys { get; set; }
    public virtual ICollection<Rating>? Ratings { get; set; }

    [Required]
    [JsonPropertyName("sub")]
    public string AuthId { get; set; }
    
    [Required]
    [JsonPropertyName("name")]
    public string FullName { get; set; }

    [Required]
    [JsonPropertyName("email")]
    public string Email { get; set; }

    [Required]
    [JsonPropertyName("picture")]
    public string ProfilePictureUrl { get; set; }
    
}