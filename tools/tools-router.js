const router = require('express').Router()

const Tools = require('./tools-model')

router.get('/:id', (req, res) => {
    const { id } = req.params
    Tools.getTools(id)
        .then(tools => {
            res.status(200).json(tools)
        })
        .catch((error => {
            console.log(error);
            return res.status(500).json({ error: 'Could not load tools' })
        }))
})

router.get('/', (req, res) => {
    
    Tools.avTools()
        .then(tools => {
            res.status(200).json(tools)
        })
        .catch((error => {
            console.log(error);
            return res.status(500).json({ error: 'Could not load tools' })
        }))
})

router.post('/addtool', (req, res) => {
    const body = req.body

    if(body.name){
        Tools.addTool(body)
        .then(tool => {
            res.status(201).json(tool)
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ error: 'Could not add tool'})
        })
    } else {
        res.status(400).json({ message: 'Name is a required field'})
    }

})

router.put('/edittool/:id', (req, res) => {
    const body = req.body
    const id = req.params.id


        Tools.editTool(id, body)
            .then(tool => {
                res.status(200).json(tool)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: 'Could not edit tool'})
            })

})

router.delete('/edittool/:id', (req, res) => {
    const id = req.params.id

    Tools.deleteTool(id)
        .then(tool => {
            if(tool){
                res.json({ removed: tool })
            } else {
                res.status(400).json({ message: `Tool with id ${id} does not exist`})
            }  
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: 'Could not delete tool'})
        })
})

router.get('/requested/:id', (req, res) => {
    const { id } = req.params

    Tools.reqTools(id)
        .then(tools => {
                res.status(200).json(tools)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Could not find requested tools'})
            })
})



module.exports = router