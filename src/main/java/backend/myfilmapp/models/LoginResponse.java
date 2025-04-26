package backend.myfilmapp.models;

public class LoginResponse {
    private Integer id;
    private String usernameResponse;
    private boolean onlineStatus;

    public LoginResponse(Integer id, String usernameResponse, boolean onlineStatus) {
        this.id = id;
        this.usernameResponse = usernameResponse;
        this.onlineStatus = onlineStatus;
    }

    // Getters
    public Integer getId() { return id; }
    public String getUsernameResponse() { return usernameResponse; }
    public boolean isOnlineStatus() { return onlineStatus; }
}
