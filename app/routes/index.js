const guestsController = require( "../controllers" ).guestsController;
module.exports = app => {

    app.get( "/guest/:guestId", guestsController.get );
};
