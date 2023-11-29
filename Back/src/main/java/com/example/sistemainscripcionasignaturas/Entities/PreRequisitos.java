package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "preRequisitos")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class PreRequisitos {
    @Id
    private Long asignatura;
    @Id
    private Long preRequisito;
}
