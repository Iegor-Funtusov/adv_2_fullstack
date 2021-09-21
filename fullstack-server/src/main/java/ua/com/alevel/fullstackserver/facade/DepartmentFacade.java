package ua.com.alevel.fullstackserver.facade;

import ua.com.alevel.fullstackserver.api.dto.request.DepartmentRequestDto;
import ua.com.alevel.fullstackserver.api.dto.response.DepartmentResponseDto;

public interface DepartmentFacade extends CrudFacade<DepartmentRequestDto, DepartmentResponseDto> { }
