const router = require('express').Router()

const Btools = require('./borrowed-tools-model')

router.get('/:id', (req, res) => {
    const { id } = req.params

    Btools.getBtools(id)
        .then(btools => {
            res.status(200).json(btools)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not load borrowed tools'})
        })
})






module.exports = router