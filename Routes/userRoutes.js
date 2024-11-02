import express from 'express';

const router= express.Router();

// especifico el método HTTP
router.get('/',(req,res)=>{
    res.json({msj:'<h1>hello word the server con route</h1>',       puerto:3000,autor:'yaker'})
})

router.post('/nosotros',(req,res)=>{
    res.json({msj:'información sobre nosotros', tipo:'post'})
})

// Engloba un conjunto de rutas
router.route('/section')
    .get((req,res)=>{
        res.json({mjs:'engloba pero es un get'})
    })
    .post((req,res)=>{
        res.json({msj:'engloba pero es un post '})
    })

export {router};