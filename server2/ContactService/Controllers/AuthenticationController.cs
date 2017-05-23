using System;
using Microsoft.AspNetCore.Mvc;
using ContactsService.Config;
using ContactsService.Controllers.Communication;
using ContactsService.Services;

namespace ContactsService.Controllers
{
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetInfo()
        {
            var id = "kukkuu";
            var token = "töktök";

            return new JsonResult(new AuthResponse(id, token));
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {
            Console.WriteLine("AuthenticationController.POST");
            var user = _userService.FindUserByUsernameAndPassword(authRequest.Username, authRequest.Password);
            if (user == null) return Unauthorized();
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(), token));
        }
    }
}
