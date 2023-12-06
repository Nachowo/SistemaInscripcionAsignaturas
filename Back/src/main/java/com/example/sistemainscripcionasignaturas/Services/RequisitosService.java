package com.example.sistemainscripcionasignaturas.Services;

import com.example.sistemainscripcionasignaturas.Entities.PreRequisitos;
import com.example.sistemainscripcionasignaturas.Repositories.PrerrequisitosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequisitosService {

    @Autowired
    private PrerrequisitosRepo prerrequisitosRepo;

    public List<PreRequisitos> getRequisitos(Long id){
        return prerrequisitosRepo.findPreRequisitosByAsignatura(id);
    }

    public List<PreRequisitos> getPostRequisitos(Long id) {
        return prerrequisitosRepo.findPreRequisitosBypreRequisito(id);
    }
}
