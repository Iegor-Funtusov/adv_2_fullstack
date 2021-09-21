package ua.com.alevel.fullstackserver.exception;

public class RestBadRequestException extends RestException {

    public RestBadRequestException(String message) {
        super(message);
    }
}
