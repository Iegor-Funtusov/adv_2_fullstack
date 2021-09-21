package ua.com.alevel.fullstackserver.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import ua.com.alevel.fullstackserver.persistence.listener.AgeEntityListener;
import ua.com.alevel.fullstackserver.persistence.listener.FullNameEntityListener;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "employees")
@EntityListeners({
        FullNameEntityListener.class,
        AgeEntityListener.class
})
public class Employee extends BaseEntity {

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "birth_day")
    private Date birthDay;

    @ManyToOne
    private Department department;

    @Transient
    private String fullName;

    @Transient
    private Integer age;

    public Employee() {
        super();
    }
}
