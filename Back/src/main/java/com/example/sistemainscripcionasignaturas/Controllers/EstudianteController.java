package com.example.sistemainscripcionasignaturas.Controllers;

import com.example.sistemainscripcionasignaturas.Entities.Estudiante;
import com.example.sistemainscripcionasignaturas.Services.EstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Estudiante")
public class EstudianteController {

    @Autowired
    private EstudianteService estudianteService;

    @GetMapping("/getByRut/{rut}")
    public ResponseEntity<Estudiante> getEstudianteByRut(@PathVariable String rut){
        Estudiante estudiante = estudianteService.findEstudiante(rut);
        if (estudiante == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(estudiante);
    }

}
