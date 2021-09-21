package ua.com.alevel.fullstackserver.api.dto.request;

import lombok.Getter;
import lombok.Setter;
import ua.com.alevel.fullstackserver.persistence.type.DepartmentType;

@Getter
@Setter
public class DepartmentRequestDto extends RequestDto {

    private String name;
    private DepartmentType departmentType;
}
