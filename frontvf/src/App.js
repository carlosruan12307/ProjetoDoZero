import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CadastrarNoticia from "./CadastrarNoticia";
import Home from "./Home";
import AlterarNoticia from "./AlterarNoticia";
function App() {
  const [search, setsearch] = useState({ searchf: "" });
  const [noticias, setnoticias] = useState([]);


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


  const digitar = (x) => {
    const { value } = x.target;
    const valueLC = value.toLowerCase();
    setsearch({ ...search, searchf: valueLC });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header  digitar={digitar} />
              <Home noticias={noticias} teste={search} />
            </>
          }
        ></Route>
        <Route
          path="/cadastrarNoticia"
          element={
            <>
              <Header digitar={digitar} />
              <CadastrarNoticia
          
      
      
         
              />
            </>
          }
        ></Route>
        <Route path="/alterarNoticia/:id"
        element={
          <>
          <Header digitar={digitar}/>
          <AlterarNoticia   
             
         
                noticias={noticias}
             />
          </>
        }>
        
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
