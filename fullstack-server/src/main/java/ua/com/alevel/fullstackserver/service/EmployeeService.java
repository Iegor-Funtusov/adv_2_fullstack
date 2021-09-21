package ua.com.alevel.fullstackserver.service;

import ua.com.alevel.fullstackserver.persistence.entity.Department;
import ua.com.alevel.fullstackserver.persistence.entity.Employee;

import java.util.List;

public interface EmployeeService extends CrudService<Employee> {

    List<Employee> findAllByDepartment(Department department);
}
