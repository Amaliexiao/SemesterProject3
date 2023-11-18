package Auth.service;

public interface AuthService {
    String login(String email, String password);

    String signup(String username, String email, String password);
}
