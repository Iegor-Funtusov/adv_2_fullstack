package ua.com.alevel.fullstackserver.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import ua.com.alevel.fullstackserver.persistence.type.DepartmentType;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "departments")
public class Department extends BaseEntity {

    @Column(name = "name", unique = true)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "department_type")
    private DepartmentType departmentType;

    public Department() {
        super();
    }
}
