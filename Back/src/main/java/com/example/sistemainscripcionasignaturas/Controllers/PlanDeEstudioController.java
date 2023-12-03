package com.example.sistemainscripcionasignaturas.Controllers;

import com.example.sistemainscripcionasignaturas.Entities.Estudiante;
import com.example.sistemainscripcionasignaturas.Entities.PlanDeEstudio;
import com.example.sistemainscripcionasignaturas.Repositories.EstudianteRepo;
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






}
