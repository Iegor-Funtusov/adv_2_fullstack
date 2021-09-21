package ua.com.alevel.fullstackserver.persistence.type;

import lombok.Getter;

@Getter
public enum DepartmentType {

    JAVA("Java"),
    JS("JS"),
    DEV_OPS("DevOps");

    private final String type;

    DepartmentType(String type) {
        this.type = type;
    }
}
