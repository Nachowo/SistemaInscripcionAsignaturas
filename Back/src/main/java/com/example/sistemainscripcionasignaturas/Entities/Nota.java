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
@Table(name = "notas")
@Data
@AllArgsConstructor
@NoArgsConstructor
@IdClass(Nota.class)
public class Nota implements Serializable {

    @Id
    private int anio;

    @Id
    private int semestre;

    @Id
    private Long asignatura;

    @Id
    private Long estudiante;

    private int nota;

    // Constructor, getters y setters
}

