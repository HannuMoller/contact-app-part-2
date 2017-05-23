using ContactsService.Model;

namespace ContactsService.Services
{
    public interface IUserService
    {
        User FindUserByUsername(string username);
        User FindUserByUsernameAndPassword(string username, string password);
    }
}
