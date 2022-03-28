

namespace Final_Project.Models;
public class User
{
    public int Id { get; set; }
    public string  City { get; set; }
    public string Country { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public ICollection<Rating> Ratings { get; set; }
    public float AvgRating => (float)Ratings.Select(x=> x.Value).Average();
    
    public virtual ICollection<Toy> Toys { get; set; }


}