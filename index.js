import express from 'express'
import { router } from './Routes/userRoutes.js';

const APP= express();
const puerto= 3000;

// set up PUG (set)


// direction  ruote
APP.use('/',router)

// escuchar 
APP.listen(puerto,()=>{
    console.log(`hello del server with puert:${puerto}`);
})

