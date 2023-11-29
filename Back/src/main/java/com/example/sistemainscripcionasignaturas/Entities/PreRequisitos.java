package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "preRequisitos")
@AllArgsConstructor
@Data
@NoArgsConstructor
@IdClass(PreRequisitos.class)
public class PreRequisitos implements Serializable {
    @Id
    private Long asignatura;
    @Id
    private Long preRequisito;
}
