package ua.com.alevel.fullstackserver.service;

import ua.com.alevel.fullstackserver.persistence.entity.BaseEntity;

import java.util.List;

public interface CrudService<E extends BaseEntity> {

    void create(E e);
    void update(E e);
    void delete(Long id);
    E findById(Long id);
    List<E> findAll();
}
