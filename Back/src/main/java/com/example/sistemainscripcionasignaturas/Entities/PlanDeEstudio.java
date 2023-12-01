package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "planesDeEstudio")
@Data

@NoArgsConstructor
@AllArgsConstructor
@IdClass(PlanDeEstudio.class)
public class PlanDeEstudio implements Serializable {
    @Id
    private String planDeEstudioId;
    private int nivel;
    private String nombreAsignatura;
    @Id
    private Long asignatura;
    @Id
    private Long carrera;
    
    private String horarios;
}
