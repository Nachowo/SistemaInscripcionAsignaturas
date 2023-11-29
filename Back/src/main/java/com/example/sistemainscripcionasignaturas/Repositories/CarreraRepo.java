package com.example.sistemainscripcionasignaturas.Repositories;

import com.example.sistemainscripcionasignaturas.Entities.Carrera;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarreraRepo extends CrudRepository<Carrera, Long> {
}
