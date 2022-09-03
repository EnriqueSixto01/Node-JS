const { response } =  require('express');

const usersGet = (req, res = response)=>{
    const {name } = req.query;
    res.json({
        msg: "This is a GET - controller",
        name
    })
};

const usersPost = (req, res = response)=>{
    // const {nombre, edad} = req.body
    const body = req.body; //body sera un objeto con el json que se pasa por el parametro req
    res.json({
        msg: "This is a POST- controller",
        body
    })
};

const usersPut = (req, res = response)=>{
    let { id } = req.params;
    id = parseInt(id)
    res.json({
        msg: "This is a PUT - controller",
        id
    })
}

const usersDelete = (req, res = response)=>{
    res.json({
        msg: "This is a DELETE - controller"
    })
}




module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}