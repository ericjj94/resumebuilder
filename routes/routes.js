const userService = require('../controllers/userService/users');
var appRouter = function(app) {
    app.get('/',userService.getPdf);
};
module.exports = appRouter;

