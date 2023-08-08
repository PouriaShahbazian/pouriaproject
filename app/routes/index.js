const guestsController = require( "../controllers" ).guestsController;
const reservationsController = require( "../controllers" ).reservationsController;

module.exports = app => {

    app.get( "/guest/:guestId", guestsController.get );
    app.get( "/reservation/:id", reservationsController.get );
};
