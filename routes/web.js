

const visitorControllers = require('../app/http/controllers/visitorControllers')

function initRoutes(app){
    app.get('/', visitorControllers().home)
}

module.exports = initRoutes