// AuthController.java
package Auth.controller;

import Auth.model.Users;
import Auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your front-end URL
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public String login(@RequestBody Users authRequest) {
        return authService.login(authRequest.getEmail(), authRequest.getPassword());
    }

    @PostMapping("/signup")
    public String signup(@RequestBody Users signupRequest) {
        return authService.signup(signupRequest.getUsername(), signupRequest.getEmail(), signupRequest.getPassword());
    }

    // Define AuthRequest and SignupRequest classes with email, password, etc.
}
