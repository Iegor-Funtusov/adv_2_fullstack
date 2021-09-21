package ua.com.alevel.fullstackserver.api.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.BeanUtils;
import ua.com.alevel.fullstackserver.persistence.entity.Employee;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class EmployeeResponseDto extends ResponseDto {

    private String firstName;
    private String lastName;
    private String email;
    private Date birthDay;
    private String fullName;
    private Integer age;

    public EmployeeResponseDto(Employee employee) {
        BeanUtils.copyProperties(employee, this);
    }
}
