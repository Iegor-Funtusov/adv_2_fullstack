package ua.com.alevel.fullstackserver.facade.impl;

import org.springframework.stereotype.Service;
import ua.com.alevel.fullstackserver.api.dto.request.DepartmentRequestDto;
import ua.com.alevel.fullstackserver.api.dto.response.DepartmentResponseDto;
import ua.com.alevel.fullstackserver.facade.DepartmentFacade;
import ua.com.alevel.fullstackserver.persistence.entity.Department;
import ua.com.alevel.fullstackserver.service.DepartmentService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DepartmentFacadeImpl implements DepartmentFacade {

    private final DepartmentService departmentService;

    public DepartmentFacadeImpl(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @Override
    public void create(DepartmentRequestDto departmentRequestDto) {
        Department department = new Department();
        department.setName(departmentRequestDto.getName());
        department.setDepartmentType(departmentRequestDto.getDepartmentType());
        departmentService.create(department);
    }

    @Override
    public void update(Long id, DepartmentRequestDto departmentRequestDto) {
        Department department = departmentService.findById(id);
        department.setName(departmentRequestDto.getName());
        department.setDepartmentType(departmentRequestDto.getDepartmentType());
        departmentService.update(department);
    }

    @Override
    public void delete(Long id) {
        departmentService.delete(id);
    }

    @Override
    public DepartmentResponseDto findById(Long id) {
        return new DepartmentResponseDto(departmentService.findById(id));
    }

    @Override
    public List<DepartmentResponseDto> findAll() {
        return departmentService.findAll().stream().map(DepartmentResponseDto::new).collect(Collectors.toList());
    }
}
