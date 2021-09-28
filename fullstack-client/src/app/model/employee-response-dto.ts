import { ResponseDto } from './response-dto';

export interface EmployeeResponseDto extends ResponseDto {

  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  birthDay: Date;
  age: number;
}
