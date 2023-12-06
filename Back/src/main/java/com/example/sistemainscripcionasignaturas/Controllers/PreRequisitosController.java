package com.example.sistemainscripcionasignaturas.Controllers;

import com.example.sistemainscripcionasignaturas.Entities.PreRequisitos;
import com.example.sistemainscripcionasignaturas.Services.RequisitosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Prerequisitos")
public class PreRequisitosController {

    @Autowired
    private RequisitosService RequisitosService;

    @GetMapping("/getAnteriores/{id}")
    public ResponseEntity<List<PreRequisitos>> getRequisitos(@PathVariable Long id){
        List<PreRequisitos> requisitos = RequisitosService.getRequisitos(id);
        if (requisitos == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(requisitos);
    }

    @GetMapping("/getPosteriores/{id}")
    public ResponseEntity<List<PreRequisitos>> getPostRequisitos(@PathVariable Long id){
        List<PreRequisitos> requisitos = RequisitosService.getPostRequisitos(id);
        if (requisitos == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(requisitos);
    }

}
