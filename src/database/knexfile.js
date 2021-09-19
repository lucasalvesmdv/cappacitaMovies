// Update with your config settings.
const api_base = process.env.API_BASE
const api_base_key = process.env.API_BASE_KEY
const api_base_user = process.env.API_BASE_USER


module.exports ={
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : api_base_user,
    password : api_base_key,
    database : api_base
  },
  debug: true
}
