package com.example.sistemainscripcionasignaturas.Repositories;

import com.example.sistemainscripcionasignaturas.Entities.Estudiante;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteRepo extends CrudRepository<Estudiante, String> {
}
