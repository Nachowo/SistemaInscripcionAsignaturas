package com.example.sistemainscripcionasignaturas.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "carreras")
@AllArgsConstructor
@NoArgsConstructor
public class Carrera {
    private String nombre;
    @Id
    private Long carrera;
}
