package com.example.sistemainscripcionasignaturas.Repositories;

import com.example.sistemainscripcionasignaturas.Entities.PlanDeEstudio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanRepo extends CrudRepository<PlanDeEstudio,Long> {
}
