import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function AlterarNoticia({ noticias }) {
  const [objAlterado, setobjAlterado] = useState({});
  const [valorT, setvalorT] = useState("");
  const [valorC, setvalorC] = useState("");
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
    <form className="p-3 formulario">
      <h2 className="w-25 mb-5">Alterar Noticia</h2>

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
    </form>
  );
}

export default AlterarNoticia;
