package com.example.sistemainscripcionasignaturas.Services;

import com.example.sistemainscripcionasignaturas.Entities.Estudiante;
import com.example.sistemainscripcionasignaturas.Repositories.EstudianteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstudianteService {

    @Autowired
    EstudianteRepo estudianteRepo;

    public Estudiante findEstudiante(String rut){
        return estudianteRepo.findEstudianteByRut(rut);
    }
}
