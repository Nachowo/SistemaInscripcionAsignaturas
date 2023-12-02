package com.example.sistemainscripcionasignaturas.Services;

import com.example.sistemainscripcionasignaturas.Entities.PlanDeEstudio;
import com.example.sistemainscripcionasignaturas.Repositories.PlanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlanDeEstudioService {

    @Autowired
    private PlanRepo planRepo;

    public PlanDeEstudio findAsignatura(Long id){
        return planRepo.findByAsignatura(id);

    }

    public void subirHorario(String horario){
        System.out.println(horario);
    }


}
