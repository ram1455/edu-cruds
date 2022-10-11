const fs = require('fs')
const path = require('path')
const Product = require('./model')
const  port = process.env.PORT || 3000

const create = async (req, res)=>{
    const {users_id, name, price, stock, status} = req.body
    const image = req.file
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target)
        try {
            await Product.sync()
            const result = await Product.create({users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`})
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    }
}

const view =  async(req,res)=>{

    if (req.params.id) {
        try {
            const result = await Product.findAll({where :{
                id: req.params.id
            }})
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    } else {
        try {
            const result = await Product.findAll()
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    }

}

const update = async (req,res) =>{
    const {users_id, name, price, stock, status} = req.body
    const image = req.file

    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target)

        try {
            await Product.update({users_id, name, price, stock, status, image_url: `http://localhost:${port}/public/${image.originalname}`}, 
            {where : {id : req.params.id}})

            const result = await Product.findAll({where : {id : req.params.id}})
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    } else {
        try {
            await Product.update({users_id, name, price, stock, status},{where : {id : req.params.id}})
            const result = await Product.findAll({where : {id : req.params.id}})
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    }
}

const destroy = async (req,res) => {
    const {users_id, name, price, stock, status} = req.body
    const image = req.file
    try {
        await Product.destroy({where : {id : req.params.id}})
        const result = await Product.findAll({where : {id : req.params.id}})
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    create,
    view,
    update,
    destroy
}