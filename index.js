require( "dotenv" ).config();
const express = require( "express" );
const cors = require( "cors" );


const app = express();


app.use( express.json() );
app.use( express.urlencoded({ extended: true } ) );
app.use( cors( { origin: `http://localhost:${ process.env.PORT }` } ) );
require( "./app/routes" )( app );
app.get( "/", ( request, response ) => response.send(  ) );
app.listen( process.env.PORT, () => console.log( `Listening: port ${ process.env.PORT }` ) );


