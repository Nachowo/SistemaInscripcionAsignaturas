package com.example.sistemainscripcionasignaturas.Services;

import com.example.sistemainscripcionasignaturas.Entities.Carrera;
import com.example.sistemainscripcionasignaturas.Repositories.CarreraRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarreraService {

    @Autowired
    private CarreraRepo carreraRepo;

    public Carrera findCarrera(Long id){
        return carreraRepo.findCarreraBycarrera(id);
    }
}
