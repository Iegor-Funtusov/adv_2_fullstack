package ua.com.alevel.fullstackserver.api.dto.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class EmployeeRequestDto extends RequestDto {

    private String firstName;
    private String lastName;
    private String email;
    private Date birthDay;
    private Long departmentId;
}
