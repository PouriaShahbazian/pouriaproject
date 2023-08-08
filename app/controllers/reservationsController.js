const Guest = require('../models').Guest;
const Rerservation = require('../models').Rerservation;
const reservationOption = {
    include: [
        {
            model: Guest,
            as: "id",
        }
    ]
};
exports.get = ( request, response ) => {
    return Guest.findByPk( request.params.guestId, reservationOptionOptions )
        .then( Guest => {
            if ( !Guest ) { response.status( 404 ).send( { error: "Guest not found" } ); }
            else { response.status( 200 ).send( Guest ); }
        } )
        .catch( error => response.status( 400 ).send( error.message ) );
}
