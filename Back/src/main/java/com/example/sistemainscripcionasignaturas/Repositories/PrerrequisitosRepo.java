package com.example.sistemainscripcionasignaturas.Repositories;

import com.example.sistemainscripcionasignaturas.Entities.PreRequisitos;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PrerrequisitosRepo extends CrudRepository<PreRequisitos, Long> {
    List<PreRequisitos> findPreRequisitosByAsignatura(Long id);

    List<PreRequisitos> findPreRequisitosBypreRequisito(Long id);
}
