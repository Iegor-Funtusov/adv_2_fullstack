package ua.com.alevel.fullstackserver.facade;

import ua.com.alevel.fullstackserver.api.dto.request.RequestDto;
import ua.com.alevel.fullstackserver.api.dto.response.ResponseDto;

import java.util.List;

public interface CrudFacade<REQUEST extends RequestDto, RESPONSE extends ResponseDto> {

    void create(REQUEST request);
    void update(Long id, REQUEST request);
    void delete(Long id);
    RESPONSE findById(Long id);
    List<RESPONSE> findAll();
}
