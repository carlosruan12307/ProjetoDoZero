import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CadastrarNoticia from "./CadastrarNoticia";
import Home from "./Home";
function App() {
  const [objNo, setobjNo] = useState({
    tituloNoticia: "",
    conteudoNoticia: "",
  });
  const [noticias, setnoticias] = useState([]);
  const [val, setval] = useState();
  const [teste, setteste] = useState(true);

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
  useEffect(() => {
    fetch("http://localhost:8080/listarNoticias")
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
        setnoticias(resJson);
      })
      .catch((err) => console.log(err));
  }, []);

  const digitarTeclado = (x) => {
    const { name, value } = x.target;
    setobjNo({ ...objNo, [name]: value });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home noticias={noticias} />
            </>
          }
        ></Route>
        <Route
          path="/cadastrarNoticia"
          element={
            <>
              <Header />
              <CadastrarNoticia
                atualizarCampos={atualizarCampos}
                cadastrarNoticia={cadastrarNoticia}
                val={val}
                validacao={validacao}
              />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
