package com.vf.vf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vf.vf.model.NoticiaModel;
import com.vf.vf.repository.NoticiaRepository;
import com.vf.vf.response.NoticiaResponse;

import lombok.Getter;
import lombok.Setter;

@Service
@Getter
@Setter
public class NoticiaService {

    @Autowired
    private NoticiaResponse r;

    @Autowired
    private NoticiaRepository nr;

    public ResponseEntity<NoticiaResponse> cadastrarNoticia(NoticiaModel noticia) {
        nr.save(noticia);
        r.setMensagem("noticia cadastrada com sucesso");
        return new ResponseEntity<NoticiaResponse>(r, HttpStatus.OK);
    }

    public ResponseEntity<NoticiaResponse> alterarNoticia(NoticiaModel noticia) {
        nr.save(noticia);
        r.setMensagem("noticia alterada com sucesso");
        return new ResponseEntity<NoticiaResponse>(r, HttpStatus.OK);
    }

    public ResponseEntity<NoticiaResponse> deletarNoticia(Long idNoticia) {
        nr.deleteById(idNoticia);
        r.setMensagem("noticia deletada com sucesso");
        return new ResponseEntity<NoticiaResponse>(r, HttpStatus.OK);
    }

    public List<NoticiaModel> listarNoticias() {
        nr.findAll();
        r.setMensagem("listado de boa");
        return nr.findAll();
    }

}
