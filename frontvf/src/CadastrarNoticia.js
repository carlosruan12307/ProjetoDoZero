import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function CadastrarNoticia() {
  const navigate = useNavigate();
  const [objNo, setobjNo] = useState({
    tituloNoticia: "",
    conteudoNoticia: "",
  });


  const [val, setval] = useState();
  const atualizarCampos = (e) => {
    const { name, value } = e.target;
    setobjNo({ ...objNo, [name]: value });
  };
  const validacao = () => {
    switch (val) {
      case true:
        return (
          <div className="fade show mt-2 alert alert-success alert-dismissible">
            <h6>Noticia Cadastrada Com Sucesso</h6>
          </div>
        );
        break;
      case false:
        return (
          <div
            id="teste"
            className={"fade show mt-2 alert alert-danger alert-dismissible"}
          >
            <h6>Campos Incorretos</h6>
          </div>
        );

        break;

      default:
        <div></div>;
        break;
    }
  };
  const cadastrarNoticia = (x) => {
    x.preventDefault();
    fetch("http://localhost:8080/cadastrarNoticia", {
      method: "post",
      body: JSON.stringify(objNo),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        try {
          if (res.ok) {
            setval(true);
            return res.json();
          } else {
            throw new Error(res);
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .then((resJson) => {
        if (resJson.mensagem !== undefined) {
        } else {
          setval(true);
        }
      })
      .catch((err) => setval(false));
  };

  return (
    <form className="p-3 formulario bg-gradient">
      <h2 className="w-25 mb-5 text-light">Cadastro De Noticias</h2>

      <div className="form-floating mb-3 inputNoticia">
        <input
          type="text"
          onChange={atualizarCampos}
          className="form-control"
          id="titulofloat"
          name="tituloNoticia"
        />
        <label htmlfor="titulofloat">Titulo Da Noticia</label>
      </div>
      <div className="form-floating mb-3 inputNoticia">
        <input
          onChange={atualizarCampos}
          type="text"
          className="form-control"
          id="conteudofloat"
          name="conteudoNoticia"
        />
        <label htmlfor="conteudofloat">Conteudo Da Noticia</label>
      </div>
      <div className="container-fluid mt-5 d-flex flex-wrap justify-content-end">
        <a onClick={() => navigate(-1)} type="button" className=" btn btn-outline-primary">
          Voltar
        </a>
        <button
          type="button"
          onClick={cadastrarNoticia}
          className="btn btn-primary"
        >
          Salvar
        </button>
      </div>
      {validacao()}
    </form>
  );
}

export default CadastrarNoticia;
