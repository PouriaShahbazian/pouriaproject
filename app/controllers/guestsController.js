const {request} = require("express");
const Guest = require('../models').Guest;

exports.get = (request, response) => {
    return Guest.findByPk(request.params.guestId)
        .then(guest => {
            if (!guest) {
                response.status(404).send({error: "Guest Not Found"});
            } else {
                response.status(200).send(guest);
            }
        })
        .catch(error => response.status(400).send(error.message));

};
