package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "PlanDeEstudios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlanDeEstudios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long idPlanDeEstudios;
    private Long carrera;
    private Long asignatura;
    private int nivel;
    private String nombreAsignatura;
}
