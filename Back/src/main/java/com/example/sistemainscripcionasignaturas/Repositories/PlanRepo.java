package com.example.sistemainscripcionasignaturas.Repositories;

import com.example.sistemainscripcionasignaturas.Entities.PlanDeEstudio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepo extends JpaRepository<PlanDeEstudio,Long> {
    //PlanDeEstudio findByAsignatura(Long asignatura);

    @Query("SELECT p FROM PlanDeEstudio p WHERE p.asignatura = :asignaturaId")
    PlanDeEstudio findByAsignatura(@Param("asignaturaId") Long asignaturaId);


    List<PlanDeEstudio> findAllByCarrera(Long carrera);
}
