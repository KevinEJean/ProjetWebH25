package backend.myfilmapp.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
// import java.util.List;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "varchar(20)")
    private String lname;

    @Column(columnDefinition = "varchar(20)")
    private String fname;

    @Column(columnDefinition ="BOOLEAN DEFAULT true")
    private boolean active = true;

    @Column(columnDefinition = "varchar(50) NOT NULL CHECK (email <> '' AND email LIKE '%_@__%.__%')")
    private String email;

    @Column(unique = true, nullable = false, columnDefinition = "varchar(20)")
    private String username;

    @Column(columnDefinition = "varchar(16) NOT NULL CHECK (password <> '' AND password LIKE '____%')")
    private String password;

//    @OneToMany(mappedBy = "clientId")
//    private List<FavoriteList> favorites;

    private LocalDateTime creationDate = LocalDateTime.now();

    @Column(columnDefinition = "BOOLEAN DEFAULT false")
    private boolean onlineStatus;


    public Client(String username, String email, String password, LocalDateTime creationDate) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;
    }

    public Client() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public boolean getOnlineStatus() {
        return onlineStatus;
    }

    public void setOnlineStatus(boolean onlineStatus) {
        this.onlineStatus = onlineStatus;
    }
}
