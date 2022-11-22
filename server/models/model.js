const mongoose = require('../config/mongoose');
// mongoose.connect('mongodb://localhost/pastelDB', { useNewUrlParser: true });

const comentarioPastelSchema = new mongoose.Schema(
    {
        puntuacion: { type: Number },
        comentario: { type: String }
       
    }
);

const PastelSchema = new mongoose.Schema(
    {
        nombrePastelero: { type: String },
        fotoPastelero: { type: String, default:'' },
        comentarioPastel: [comentarioPastelSchema]
       
    }
);

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const Pastel = mongoose.model('pastelesDBv2', PastelSchema);

const Comentario = mongoose.model('comentarioDB', comentarioPastelSchema);

module.exports = { Pastel, Comentario };