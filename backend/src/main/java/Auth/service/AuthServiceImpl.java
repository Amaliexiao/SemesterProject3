package Auth.service;

import Auth.model.Users;
import Auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public AuthServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String login(String email, String password) {

        Users user = userRepository.findByEmail(email);

        // Check if the user exists
        if (user == null) {
            return "User not found";
        }

        // Check if the provided password matches the stored hashed password
        if (passwordEncoder.matches(password, user.getPassword())) {
            return "Login successful";
        } else {
            return "Incorrect password";
        }
    }

    @Override
    public String signup(String username, String email, String password) {
        try {
            // Check if the user with the given email already exists
            if (userRepository.findByEmail(email) != null) {
                return "Email already in use";
            }

            // Create a new user
            Users newUser = new Users();
            newUser.setUsername(username);
            newUser.setEmail(email);
            newUser.setPassword(passwordEncoder.encode(password)); // Hash the password

            // Save the user to the database
            userRepository.save(newUser);

            // Return a success message along with the redirect URL
            return "Signup successful";
        } catch (Exception e) {
            e.printStackTrace();
            return "Signup failed: " + e.getMessage();
        }
    }

}

