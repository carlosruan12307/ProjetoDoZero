

function CadastrarNoticia({atualizarCampos,cadastrarNoticia,validacao}) {
  
 
  
  return (
    <form className="p-3 formulario">
      <h2 className="w-25 mb-5">Cadastro De Noticias</h2>

      <div className="form-floating mb-3 inputNoticia">
        <input type="text"  onChange={atualizarCampos} className="form-control" id="titulofloat" name="tituloNoticia" />
        <label htmlfor="titulofloat">Titulo Da Noticia</label>
      </div>
      <div className="form-floating mb-3 inputNoticia">
        <input onChange={atualizarCampos} type="text" className="form-control" id="conteudofloat" name="conteudoNoticia" />
        <label htmlfor="conteudofloat">Conteudo Da Noticia</label>
      </div>
      <div className="container-fluid mt-5 d-flex flex-wrap justify-content-end">
        <button type="button" className=" btn btn-outline-primary">Voltar</button>
        <button type="button"  onClick={cadastrarNoticia} className="btn btn-primary">Salvar</button>
      </div>
     {
   validacao()
     }
    </form>
  );
}

export default CadastrarNoticia;
