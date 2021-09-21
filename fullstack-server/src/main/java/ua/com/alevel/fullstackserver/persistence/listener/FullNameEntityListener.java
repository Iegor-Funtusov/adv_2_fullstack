package ua.com.alevel.fullstackserver.persistence.listener;

import org.apache.commons.lang.StringUtils;
import ua.com.alevel.fullstackserver.persistence.entity.Employee;

import javax.persistence.PostLoad;
import javax.persistence.PostPersist;
import javax.persistence.PreUpdate;

public class FullNameEntityListener {

    @PostLoad
    @PostPersist
    @PreUpdate
    public void generateFullName(Employee employee) {
        if (StringUtils.isNotBlank(employee.getFirstName()) && StringUtils.isNotBlank(employee.getLastName())) {
            employee.setFullName(employee.getFirstName() + " " + employee.getLastName());
        }
    }
}
