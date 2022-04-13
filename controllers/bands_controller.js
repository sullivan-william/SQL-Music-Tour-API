const bands = require('express').Router()
const db = require('../models')
const { Band } = db
const { Op } = require('sequelize')

//Find all bands
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [ ['available_start_time', 'ASC'] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    }
    catch (error) {
        res.status(500).json(error)
    }
})

//find specific band
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

//create a band
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: "successfully created band",
            data: newBand
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//update a band
bands.put('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(req.body, {
            where: {band_id: req.params.id}
        })
        res.status(200).json({
            message: `updated ${updatedBand}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete band
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBand = await Band.destroy({
            where: {band_id: req.params.id}
        })
        res.status(200).json({
            message: `deleted ${deletedBand}`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = bands