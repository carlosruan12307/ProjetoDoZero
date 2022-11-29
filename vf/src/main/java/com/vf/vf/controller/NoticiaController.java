package com.vf.vf.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vf.vf.model.NoticiaModel;
import com.vf.vf.response.NoticiaResponse;
import com.vf.vf.service.NoticiaService;

import jakarta.validation.Valid;
import lombok.Getter;
import lombok.Setter;

@RestController
@Getter
@Setter
@CrossOrigin(origins = "*")
public class NoticiaController {
    @Autowired
    private NoticiaService ns;
    
    @GetMapping("/")
    public String inicio(){
        return "bem vindo a api de noticias";
    }
    @GetMapping("/listarNoticias")
    public List<NoticiaModel> listarNoticias(){
        return  ns.listarNoticias();
    }
    @PostMapping("/cadastrarNoticia")
    public ResponseEntity<NoticiaResponse> cadastrarNoticia( @RequestBody @Valid NoticiaModel noticia){
    
        return ns.cadastrarNoticia(noticia);
    }

    @PutMapping("/alterarNoticia")
    public ResponseEntity<NoticiaResponse> alterarNoticia(@RequestBody @Valid NoticiaModel noticia){
        return ns.alterarNoticia(noticia);
    }
    @DeleteMapping("/deletarNoticia/{idNoticia}")
    public ResponseEntity<NoticiaResponse> deletarNoticia(@PathVariable @Valid Long idNoticia){
        return ns.deletarNoticia(idNoticia);
    }
}
