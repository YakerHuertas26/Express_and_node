const formularioLogin= (req,res)=>{
    res.render('Auth/login'),{
        // paso los valores
        // autenticado:true
    }
}

const formularioRegistro=(req,res)=>{
    res.render('Auth/RegistroUsuario')
}
export {formularioLogin,formularioRegistro}