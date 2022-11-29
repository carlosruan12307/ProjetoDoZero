package com.vf.vf.model;

import jakarta.validation.constraints.NotBlank;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "noticias")
public class NoticiaModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idNoticia;
    @NotBlank
    private String tituloNoticia;
    @NotBlank
    private String conteudoNoticia;
}
