async function redId(id) {
  try {
    const req = await fetch(`http://localhost:3003/${id}`);
    const json = await req.json();
    console.log(json);

    document.querySelector("#tituloFilme").innerHTML = json.title;
    document.querySelector("#descricaoFilme").innerHTML = json.overview;
    document.querySelector(
      "#imagemFilme"
    ).innerHTML = `<img src=https://image.tmdb.org/t/p/w300${json.backdrop_path}  />`;

    const myModal = new bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    myModal.show();
  } catch (error) {
    console.log(error.message);
  }
}

async function name() {
  try {
    const req = await fetch("http://localhost:3003");
    const json = await req.json();

    let lista = "";
    for (let filme of json)
      lista += `
      <div class="movie-list" >
            
            
      <div class="movie-container">
          <div class="movie">
          <img src=https://image.tmdb.org/t/p/w500${filme.poster_path} id =${filme.id} onclick = "redId(${filme.id})" />
              <p class="movie-title">${filme.title}</p>
          </div>
      </div>
      
  </div> 

      `;

    document.querySelector("#imagem").innerHTML = lista;
  } catch (error) {
    console.log(error.message);
  }
}
name();
