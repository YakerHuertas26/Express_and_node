import express from 'express'
import { route } from './Routes/userRoutes.js';

const APP= express();
const puerto= 3000;

// setting PUG (set)
APP.set('view engine', 'pug')
// views file location 
APP.set('views','./View')


// direction  ruote (use)
APP.use('/auth',route)

// escuchar 
APP.listen(puerto,()=>{
    console.log(`hello del server with puert:${puerto}`);
})

