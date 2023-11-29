package com.example.sistemainscripcionasignaturas.Repositories;

import com.example.sistemainscripcionasignaturas.Entities.Nota;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotaRepo extends CrudRepository<Nota, Long> {
}
