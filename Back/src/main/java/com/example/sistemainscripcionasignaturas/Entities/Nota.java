package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "notas")
@NoArgsConstructor
@AllArgsConstructor
public class Nota {
    private int ano;
    @Id
    private int semestre;
    private int nota;
    @Id
    private Long asignatura;
    @Id
    private Long estudiante;
}
