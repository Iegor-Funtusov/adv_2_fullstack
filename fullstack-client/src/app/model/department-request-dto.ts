export interface DepartmentRequestDto {

  name: string,
  departmentType: DepartmentType
}

export enum DepartmentType {

  JAVA = 'Java',
  JS = 'JS',
  DEV_OPS = 'Devops'
}
