package api.model;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "meetings")
public class Meeting {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private long id;

  @Column(name = "topic")
  private String topic;

  @Column(name = "pass")
  private String pass;

  @Column(name = "date")
  private LocalDateTime date;



/* 
  @ManyToMany(mappedBy = "meetings", cascade = { CascadeType.ALL })
  @JsonIgnoreProperties("meetings")
  private Set<Contact> contacts = new HashSet<Contact>();
*/


  @ManyToMany(fetch = FetchType.LAZY,
          cascade =
          {
                  CascadeType.DETACH,
                  CascadeType.MERGE,
                  CascadeType.REFRESH,
                  CascadeType.PERSIST
          },
          targetEntity = Contact.class)
  @JoinTable(name = "XTB_CONTACTS_MEETINGS",
          joinColumns = @JoinColumn(name = "MEETING_ID",
                  nullable = false,
                  updatable = false),
          inverseJoinColumns = @JoinColumn(name = "CONTACT_ID",
                  nullable = false,
                  updatable = false),
          foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
          inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
  @JsonIgnoreProperties("meetings")
  private Set<Contact> contacts = new HashSet<Contact>();

  public Meeting() {}

  public Meeting(String topic, String pass,LocalDateTime date) {
    this.topic = topic;
    this.pass = pass;
    this.date=date;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTopic() {
    return topic;
  }

  public void setTopic(String topic) {
    this.topic = topic;
  }

  public String getPass() {
    return pass;
  }

  public void setPass(String pass) {
    this.pass = pass;
  }

  public LocalDateTime getDate() {
    return date;
  }

  public void setDate(LocalDateTime date) {
    this.date = date;
  }

  public Set<Contact> getContacts() {
    return contacts;
  }

  public void setContacts(Set<Contact> contacts) {
    this.contacts = contacts;
  }
  public Contact addContact(Contact c){
    this.contacts.add(c);
    c.getMeetings().add(this);
    return c;
  }


  @Override
  public String toString() {
    return "Meeting [id=" + id + ", topic=" + topic + ", pass=" + pass + ", date=" + date + ", contacts=" + contacts
        + "]";
  }








}
