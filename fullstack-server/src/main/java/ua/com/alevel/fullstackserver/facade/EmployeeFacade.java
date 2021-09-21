package ua.com.alevel.fullstackserver.facade;

import ua.com.alevel.fullstackserver.api.dto.request.EmployeeRequestDto;
import ua.com.alevel.fullstackserver.api.dto.response.EmployeeResponseDto;

import java.util.List;

public interface EmployeeFacade extends CrudFacade<EmployeeRequestDto, EmployeeResponseDto> {

    List<EmployeeResponseDto> findAllByDepartment(Long departmentId);
}
