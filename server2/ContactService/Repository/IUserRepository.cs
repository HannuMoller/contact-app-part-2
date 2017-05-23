using ContactsService.Model;

namespace ContactsService.Repository
{
    public interface IUserRepository
    {
        User FindByUsername(string username);
        User FindByUsernameAndPassword(string username, string password);
    }
}
