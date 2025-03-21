package backend.myfilmapp.module;

import jakarta.persistence.*;

@Entity
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "varchar(50) NOT NULL CHECK (email <> '' AND email LIKE '%_@__%.__%')")
    private String email;

    @Column(unique = true, columnDefinition = "varchar(20)")
    private String username;

    @Column(columnDefinition = "varchar(20)")
    private String lname;

    @Column(columnDefinition = "varchar(20)")
    private String fname;

    @Column(columnDefinition ="BOOLEAN DEFAULT true")
    private boolean active = true;





    public Client(String username, String email) {
        this.username = username;
        this.email = email;
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
}
