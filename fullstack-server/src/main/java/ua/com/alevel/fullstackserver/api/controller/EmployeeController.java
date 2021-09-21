package ua.com.alevel.fullstackserver.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.com.alevel.fullstackserver.api.dto.request.EmployeeRequestDto;
import ua.com.alevel.fullstackserver.api.dto.response.DataContainer;
import ua.com.alevel.fullstackserver.api.dto.response.EmployeeResponseDto;
import ua.com.alevel.fullstackserver.facade.EmployeeFacade;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeFacade employeeFacade;

    public EmployeeController(EmployeeFacade employeeFacade) {
        this.employeeFacade = employeeFacade;
    }

    @PostMapping
    public ResponseEntity<DataContainer<Boolean>> create(@RequestBody EmployeeRequestDto dto) {
        employeeFacade.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new DataContainer<>(true));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DataContainer<Boolean>> update(@RequestBody EmployeeRequestDto dto, @PathVariable Long id) {
        employeeFacade.update(id, dto);
        return ResponseEntity.ok(new DataContainer<>(true));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<DataContainer<Boolean>> delete(@PathVariable Long id) {
        employeeFacade.delete(id);
        return ResponseEntity.ok(new DataContainer<>(true));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DataContainer<EmployeeResponseDto>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(new DataContainer<>(employeeFacade.findById(id)));
    }

    @GetMapping
    public ResponseEntity<DataContainer<List<EmployeeResponseDto>>> findAll() {
        return ResponseEntity.ok(new DataContainer<>(employeeFacade.findAll()));
    }

    @GetMapping("/department/{id}")
    public ResponseEntity<DataContainer<List<EmployeeResponseDto>>> findAllByDepartment(@PathVariable Long id) {
        return ResponseEntity.ok(new DataContainer<>(employeeFacade.findAllByDepartment(id)));
    }
}
