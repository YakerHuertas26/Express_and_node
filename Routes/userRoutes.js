import express from 'express';

const route= express.Router();

// especifico el método HTTP
// route.get('/',(req,res)=>{
//     res.json({msj:'<h1>hello word the server con route</h1>',       puerto:3000,autor:'yaker'})
// })

// route.post('/nosotros',(req,res)=>{
//     res.json({msj:'información sobre nosotros', tipo:'post'})
// })

// // Engloba un conjunto de rutas
// route.route('/section')
//     .get((req,res)=>{
//         res.json({mjs:'engloba pero es un get'})
//     })
//     .post((req,res)=>{
//         res.json({msj:'engloba pero es un post '})
//     })

    // render shows a view
    route.get('/login',(req,res)=>{
        res.render('Auth/login')
        }) 

export {route};