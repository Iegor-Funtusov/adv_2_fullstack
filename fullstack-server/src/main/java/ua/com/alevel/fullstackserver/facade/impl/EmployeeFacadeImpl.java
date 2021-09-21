package ua.com.alevel.fullstackserver.facade.impl;

import org.springframework.stereotype.Service;
import ua.com.alevel.fullstackserver.api.dto.request.EmployeeRequestDto;
import ua.com.alevel.fullstackserver.api.dto.response.EmployeeResponseDto;
import ua.com.alevel.fullstackserver.facade.EmployeeFacade;
import ua.com.alevel.fullstackserver.persistence.entity.Department;
import ua.com.alevel.fullstackserver.persistence.entity.Employee;
import ua.com.alevel.fullstackserver.service.DepartmentService;
import ua.com.alevel.fullstackserver.service.EmployeeService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeFacadeImpl implements EmployeeFacade {

    private final EmployeeService employeeService;
    private final DepartmentService departmentService;

    public EmployeeFacadeImpl(EmployeeService employeeService, DepartmentService departmentService) {
        this.employeeService = employeeService;
        this.departmentService = departmentService;
    }

    @Override
    public void create(EmployeeRequestDto employeeRequestDto) {
        Employee employee = new Employee();
        employee.setEmail(employeeRequestDto.getEmail());
        employee.setFirstName(employeeRequestDto.getFirstName());
        employee.setLastName(employeeRequestDto.getLastName());
        employee.setBirthDay(employeeRequestDto.getBirthDay());
        Department department = departmentService.findById(employeeRequestDto.getDepartmentId());
        employee.setDepartment(department);
        employeeService.create(employee);
    }

    @Override
    public void update(Long id, EmployeeRequestDto employeeRequestDto) {
        Employee employee = employeeService.findById(id);
        employee.setFirstName(employeeRequestDto.getFirstName());
        employee.setLastName(employeeRequestDto.getLastName());
        employee.setBirthDay(employeeRequestDto.getBirthDay());
        employeeService.update(employee);
    }

    @Override
    public void delete(Long id) {
        employeeService.delete(id);
    }

    @Override
    public EmployeeResponseDto findById(Long id) {
        return new EmployeeResponseDto(employeeService.findById(id));
    }

    @Override
    public List<EmployeeResponseDto> findAll() {
        return employeeService.findAll().stream().map(EmployeeResponseDto::new).collect(Collectors.toList());
    }

    @Override
    public List<EmployeeResponseDto> findAllByDepartment(Long departmentId) {
        return employeeService.findAllByDepartment(departmentService.findById(departmentId))
                .stream().map(EmployeeResponseDto::new).collect(Collectors.toList());
    }
}
