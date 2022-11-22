const { Pastel } = require('../models/model')

module.exports = {
    dataAll: async function (req, res) {
        await Pastel.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))
    },

    dataNew: async function (req, res) {
        const body = req.body;
        Pastel.create(body)
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    dataId: async function (req, res) {
        let id = req.params.id;
        Pastel.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
    dataUpdate: async function (req, res) {

        const id = req.params.id;
        const body = req.body;


        console.log(id);
        console.log(body.puntuacion)
        console.log(body.comentario)
        Pastel.findOneAndUpdate({_id: id}, {$push: { comentarioPastel: { puntuacion: body.puntuacion, comentario: body.comentario }} }, function(err, data){
            if (err) {
                res.json(err)    
            }else{
                res.json(data);
            }
        });
    }

  
};