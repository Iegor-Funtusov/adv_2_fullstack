package ua.com.alevel.fullstackserver.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ua.com.alevel.fullstackserver.api.dto.response.DataContainer;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(value = RestBadRequestException.class)
    public ResponseEntity<DataContainer<String>> handleBadRequest(RestBadRequestException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new DataContainer<>(exception.getMessage()));
    }
}
