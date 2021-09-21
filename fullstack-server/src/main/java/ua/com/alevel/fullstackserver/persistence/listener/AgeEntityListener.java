package ua.com.alevel.fullstackserver.persistence.listener;

import org.joda.time.LocalDate;
import org.joda.time.Years;
import ua.com.alevel.fullstackserver.persistence.entity.Employee;

import javax.persistence.PostLoad;
import javax.persistence.PostPersist;
import javax.persistence.PreUpdate;

public class AgeEntityListener {

    @PostLoad
    @PostPersist
    @PreUpdate
    public void generateAge(Employee employee) {
        if (employee.getBirthDay() != null) {
            Years years = Years.yearsBetween(new LocalDate(employee.getBirthDay()), new LocalDate());
            employee.setAge(years.getYears());
        }
    }
}
