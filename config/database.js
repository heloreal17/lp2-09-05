//importar o pacote mongoose
const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://useradmin:heloreal17@cluster0.1k2zm.mongodb.net/AC02-Aloizio') 
} 

module.exports = conn
