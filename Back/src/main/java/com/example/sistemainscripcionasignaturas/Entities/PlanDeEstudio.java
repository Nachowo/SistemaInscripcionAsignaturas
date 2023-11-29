package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "planesDeEstudio")
@Data

@NoArgsConstructor
@AllArgsConstructor
public class PlanDeEstudio {
    @Id
    private Long planDeEstudioId;
    private int nivel;
    private String nombreAsignatura;
    private Long asignatura;
    private Long carrera;
}
