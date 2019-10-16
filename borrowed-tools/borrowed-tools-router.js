const router = require('express').Router()

const Btools = require('./borrowed-tools-model')

router.get('/:id', (req, res) => {
    const { id } = req.params

    Btools.getBtools(id)
        .then(btools => {
            if(btools.length > 0){
                res.status(200).json(btools)
            } else {
               return res.status(400).json({ message: 'The user is currently not borrowing any tools'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Could not load borrowed tools'})
        })
})




module.exports = router