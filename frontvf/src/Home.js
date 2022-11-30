function Home({noticias,teste}){

  
    return(
        <div className="container-fluid " >
           <div className="row  justify-content-center">

   
            {
               noticias.length === 0?
               <h3 className="col d-inline-flex  justify-content-center mt-5">Nenhuma Noticia Encontrada!</h3>
               :
               noticias.slice(0).reverse().filter((e) => e.tituloNoticia.toLowerCase().includes(teste.searchf)).map((post,index) => {
                return(
                    <div className="card flex-wrap cardzinho  col-10 col-md-5 col-sm-5 col-lg-5 ms-4 mb-4 mt-5 me-4" style={{height: "380px"}} >
                    <div className="card-header">
                    <h1 className="card-title">{post.tituloNoticia}</h1>
                    <h6 className="card-subtitle">{post.conteudoNoticia}</h6>
                    </div>
                    
                    <div className="card-body">
    
                    </div>
                    
                    <div className="card-footer  text-center">
                        <button className="btn btn-primary" >Acessar</button>
    
                    </div>
                </div>
                )
               
            })
                }
                
          
                
            
                   </div>
        </div>
    )
}

export default Home;