const userService = require('../controllers/userService/users');
var appRouter = function(app) {
    app.get('/get-pdf',userService.getPdf);
};
module.exports = appRouter;

