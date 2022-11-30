import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function AlterarNoticia({ noticias }) {
  const [objAlterado, setobjAlterado] = useState({});
  const[val,setval] = useState("")

  const idN = useParams().id;

  useEffect(() => {
    setobjAlterado({
        idNoticia: idN,
      tituloNoticia: noticias
        .filter((e) => e.idNoticia == idN)
        .map((e) => e.tituloNoticia)[0],
      conteudoNoticia: noticias
        .filter((e) => e.idNoticia == idN)
        .map((e) => e.conteudoNoticia)[0],
    });
  }, [noticias]);
  const validacao = () => {
    switch (val) {
      case true:
        return (
          <div className="fade show mt-2 alert alert-success alert-dismissible">
            <h6>Noticia Alterada Com Sucesso</h6>
          </div>
        );
        break;
      case false:
        return (
          <div
            id="teste"
            className={"fade show mt-2 alert alert-success alert-dismissible"}
          >
            <h6 className="text-center">Noticia Excluida Com Sucesso</h6>
          </div>
        );

        break;

      default:
        <div></div>;
        break;
    }
  };
  const excluirNoticia = (e) => {
    fetch("http://localhost:8080/deletarNoticia/" + idN, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        try {
          if (res.ok) {
          setval(false)
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
        
        }
      })
      .catch((err) => err);
  };
  const alterarNoticia = (e) => {
    fetch("http://localhost:8080/alterarNoticia", {
      method: "put",
      body: JSON.stringify(objAlterado),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        try {
          if (res.ok) {
            setval(true)
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
        }
      })
      .catch((err) => err);
  };
  const atualizarCampos = (e) => {
    const { name, value } = e.target;
    setobjAlterado({ ...objAlterado, [name]: value });
  };
  return (
<div>
  {
    val !== false?
    <form className="p-3 formulario bg-gradient">
      <h2 className="w-25 mb-5 text-light">Alterar Noticia</h2>

      <div className="mb-3 ">
        <label>Titulo Da Noticia</label>
        <input
          type="text"
          defaultValue={objAlterado.tituloNoticia}
          onChange={atualizarCampos}
          className="form-control"
          id="titulofloat"
          name="tituloNoticia"
        />
      </div>
      <div className=" mb-3 ">
        <label>Conteudo Da Noticia</label>
        <input
          defaultValue={objAlterado.conteudoNoticia}
          type="text"
          className="form-control"
          id="conteudofloat"
          name="conteudoNoticia"
        />
      </div>
     
      
      <div className="container-fluid mt-5 d-flex flex-wrap justify-content-end">
        <button
          onClick={excluirNoticia}
          type="button"
          className=" btn btn-danger"
        >
          Excluir
        </button>
        <button type="button" className="btn btn-primary" onClick={alterarNoticia}>
          Alterar
        </button>
      </div>
      {validacao()}
    </form>
    :
    validacao()
    }
     
    </div>
  );
}

export default AlterarNoticia;
