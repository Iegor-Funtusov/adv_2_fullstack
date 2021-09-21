package ua.com.alevel.fullstackserver.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.com.alevel.fullstackserver.api.dto.request.DepartmentRequestDto;
import ua.com.alevel.fullstackserver.api.dto.response.DataContainer;
import ua.com.alevel.fullstackserver.api.dto.response.DepartmentResponseDto;
import ua.com.alevel.fullstackserver.facade.DepartmentFacade;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentFacade departmentFacade;

    public DepartmentController(DepartmentFacade departmentFacade) {
        this.departmentFacade = departmentFacade;
    }

    @PostMapping
    public ResponseEntity<DataContainer<Boolean>> create(@RequestBody DepartmentRequestDto dto) {
        departmentFacade.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new DataContainer<>(true));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DataContainer<Boolean>> update(@RequestBody DepartmentRequestDto dto, @PathVariable Long id) {
        departmentFacade.update(id, dto);
        return ResponseEntity.ok(new DataContainer<>(true));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<DataContainer<Boolean>> delete(@PathVariable Long id) {
        departmentFacade.delete(id);
        return ResponseEntity.ok(new DataContainer<>(true));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DataContainer<DepartmentResponseDto>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(new DataContainer<>(departmentFacade.findById(id)));
    }

    @GetMapping
    public ResponseEntity<DataContainer<List<DepartmentResponseDto>>> findAll() {
        return ResponseEntity.ok(new DataContainer<>(departmentFacade.findAll()));
    }
}
