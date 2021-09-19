const cors = require("cors");
const express = require("express");
const app = express();
const dataBase = require ("./database/databaseMysql")
require("dotenv/config");
const axios = require("axios");
const api_key = process.env.API_KEY;

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=pt-BR&page=2`
    );
    return res.json(data.results);
  } catch (error) {
    console.error(error);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${api_key}&language=pt-BR`
    );
    res.send(data);
  } catch (error) {}
});

app.post("/comentario", async (req,res) =>{
  const  createComentario = {nome:req.body.nome, comentario:req.body.comentario}
  const insertComentario = `INSERT TO cappacita_filmes `
   


})

app.listen(3003);
