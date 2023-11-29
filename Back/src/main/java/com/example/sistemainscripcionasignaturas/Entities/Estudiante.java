package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "estudiantes")
public class Estudiante {
    @Id
    private String rut;
    private String nombre;
    private String apellido;
    private String correo;
    private Long carrera;
}
