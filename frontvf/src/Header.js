import { useState } from "react";

function Header({digitar}) {
 


  return (
    <header>
      <div>
        <nav className="navbar navbar-expand navbarzinha">
          <h4 className="text-primary Logo  p-3 ">LOGO</h4>

          <div className="navbar-nav  ms-auto" style={{ width: "50%" }}>
            <li className="nav-item ms-auto">
              <a className="nav-link text-primary Link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ms-auto me-auto">
              <a
                className="nav-link text-primary Link"
                href="/cadastrarNoticia"
              >
                Cadastrar Noticias
              </a>
            </li>
          </div>

          <form className="ms-auto me-auto">
            <div className="input-group">
              <input
                onChange={digitar}
                className="form-control rounded-pill"
                style={{ zIndex: 1 }}
              ></input>

              <button
                className="input-group-addon btn btn-primary border border-danger me-1 float rounded-pill"
                style={{ position: "relative", right: "50px", zIndex: 1 }}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUJJREFUSEu9le0xBEEURc9GQAhEgAzIgAjIABmQARmQgQwQARnYEIiAOlWv1avR3TO7NWOq9sdOd9/z+r6PWbHws1pYnx5gD7gEjoHDCOQdeAHugfWU4FqAuxDvabjnegxSAxjlQRx8BBTynY83uQLO042OepAhoET+FdYU4aGGIK3aCbuEVp8M0POP2GVULfEiJOQt/uy3cpIBJXoT2IxoEOZD2NU8kwHF+ynRD2/h2WouMuA7Tm3aG91zcwEsit1aluey6DWq7g/jX5O8bZlqjyVbHR2tRvsETjq9oOBz+H4L3ExptLInjwrr3BrPo8IBeJEEXTMYg+rmIC+ODTttcc9pzK0mZGxc29GOa4efogr5U1zPLU1nkutVyKZNVXOhC5kDIDRDzoCnEslcgALRzl9xX84JGP0e9D5MW68tfoMfCXxMGRHr0pcAAAAASUVORK5CYII=" />
              </button>
            </div>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;
