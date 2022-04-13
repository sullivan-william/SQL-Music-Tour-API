const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

// Index
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Show - specific stage
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: "new stage created",
            data: newStage
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: { stage_id: req.params.id }
        })
        res.status(200).json({
            message: `${updatedStage} updated`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Delete
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: { stage_id: req.params.id }
        })
        res.status(200).json({
            message: `${deletedStage} deleted`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = stages