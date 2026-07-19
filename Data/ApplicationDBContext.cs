using Microsoft.EntityFrameworkCore;

namespace PersonalWebsite.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
        {

        }
    }
}