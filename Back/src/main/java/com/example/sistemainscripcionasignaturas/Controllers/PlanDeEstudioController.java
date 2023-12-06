package com.example.sistemainscripcionasignaturas.Controllers;

import com.example.sistemainscripcionasignaturas.Entities.Carrera;
import com.example.sistemainscripcionasignaturas.Entities.Estudiante;
import com.example.sistemainscripcionasignaturas.Entities.PlanDeEstudio;
import com.example.sistemainscripcionasignaturas.Repositories.EstudianteRepo;
import com.example.sistemainscripcionasignaturas.Services.CarreraService;
import com.example.sistemainscripcionasignaturas.Services.PlanDeEstudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/planDeEstudio")
public class PlanDeEstudioController {

    @Autowired
    private PlanDeEstudioService planDeEstudioService;

    @Autowired
    private CarreraService carreraService;


    @GetMapping("/asignatura/{id}")
    public ResponseEntity<PlanDeEstudio> findAsignatura(@PathVariable Long id){
        System.out.println(id);
        PlanDeEstudio plan = planDeEstudioService.findAsignatura(id);
        if (plan == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(plan);
    }

    @PostMapping("/horario")
    public void subirHorario(@RequestBody Map<String, Object> requestBody) {
        int asignatura = (int) requestBody.get("asignatura");
        List<String> horario = (List<String>) requestBody.get("horario");
        System.out.println(horario);
        System.out.println(asignatura);
        String horarioString = "";
        for (String s : horario) {
            horarioString += s + ",";
        }
        planDeEstudioService.guardarHorario(horarioString, (long) asignatura);

    }

    @GetMapping("/carrera/{carrera}")
    public ResponseEntity<List<PlanDeEstudio>> getMalla(@PathVariable Long carrera){
        List<PlanDeEstudio> malla = planDeEstudioService.getMalla(carrera);
        if (malla == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(malla);
    }

    @GetMapping("/nombreCarrera/{idCarrera}")
    public ResponseEntity<String> getCarrera(@PathVariable Long idCarrera){
        Carrera carrera = carreraService.findCarrera(idCarrera);
        if (carrera == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(carrera.getNombre());
    }






}
