package ua.com.alevel.fullstackserver.exception;

public class RestException extends RuntimeException {

    public RestException(String message) {
        super(message);
    }
}
