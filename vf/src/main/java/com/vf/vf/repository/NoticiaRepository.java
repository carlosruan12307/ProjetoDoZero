package com.vf.vf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vf.vf.model.NoticiaModel;

@Repository

public interface NoticiaRepository extends JpaRepository<NoticiaModel,Long> {

    
}
