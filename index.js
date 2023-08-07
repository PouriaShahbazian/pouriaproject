require( "dotenv" ).config();
const express = require( "express" );
const cors = require( "cors" );

console.log( process.env.TEST );
const app = express();


app.use( express.json() );
app.use( express.urlencoded({ extended: true } ) );
app.use( cors( { origin: `http://localhost:${ process.env.PORT }` } ) );
app.get( "/", ( request, response ) => response.send(  ) );
app.listen( process.env.PORT, () => console.log( `Listening: port ${ process.env.PORT }` ) );

