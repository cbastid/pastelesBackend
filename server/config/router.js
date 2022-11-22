const datasController = require('../controller/quotes')

module.exports = function(app){

app.get('/dataAll', function (req, res) {
        datasController.dataAll(req,res);
    });

app.post('/dataNew', function (req, res) {
        datasController.dataNew(req,res);
    });

app.get('/dataId/:id', function (req, res) {
        datasController.dataId(req,res);
    });

app.put('/dataUpdate/:id', function (req, res) {
        datasController.dataUpdate(req,res);
    });

// app.delete('/dataDelete/:id', function (req, res) {
//         datasController.dataDelete(req,res);
//     });

}