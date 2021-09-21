package ua.com.alevel.fullstackserver.persistence.repository;

import org.springframework.stereotype.Repository;
import ua.com.alevel.fullstackserver.persistence.entity.Department;
import ua.com.alevel.fullstackserver.persistence.entity.Employee;

import java.util.List;

@Repository
public interface EmployeeRepository extends BaseRepository<Employee> {

    boolean existsByEmail(String email);

    List<Employee> findAllByDepartment(Department department);
}
