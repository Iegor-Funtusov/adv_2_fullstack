package ua.com.alevel.fullstackserver.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.BeanUtils;
import ua.com.alevel.fullstackserver.persistence.entity.Department;
import ua.com.alevel.fullstackserver.persistence.type.DepartmentType;

@Getter
@Setter
@NoArgsConstructor
public class DepartmentResponseDto extends ResponseDto {

    private String name;
    private DepartmentType departmentType;

    public DepartmentResponseDto(Department department) {
        BeanUtils.copyProperties(department, this);
    }
}
