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



module.exports = router