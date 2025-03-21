package backend.myfilmapp.module;

import jakarta.persistence.*;

@Entity
public class Passwords {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int passwd_id;

    @Column(columnDefinition = "varchar(16) NOT NULL CHECK (passwd <> '' AND passwd LIKE '____%')")
    private String passwd;

    @OneToOne
    private Client client_username;





    public Passwords() {

    }

    public int getPasswd_id() {
        return passwd_id;
    }

    public void setPasswd_id(int passwd_id) {
        this.passwd_id = passwd_id;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public Client getClient_username() {
        return client_username;
    }

    public void setClient_username(Client client_username) {
        this.client_username = client_username;
    }
}
