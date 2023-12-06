package com.example.sistemainscripcionasignaturas.Services;

import com.example.sistemainscripcionasignaturas.Entities.PlanDeEstudio;
import com.example.sistemainscripcionasignaturas.Repositories.PlanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public void guardarHorario(String horario, Long asignatura){
        PlanDeEstudio plan = planRepo.findByAsignatura(asignatura);
        plan.setHorarios(horario);
        planRepo.save(plan);
    }

    public List<PlanDeEstudio> getMalla(Long carrera) {
        return planRepo.findAllByCarrera(carrera);
    }


}
