const events = require('express').Router()
const db = require('../models')
const { Event } = db

// Index
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Show - specific event
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: "event successfully created",
            data: newEvent
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update
events.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: { event_id: req.params.id }
        })
        res.status(200).json({
            message: `${updatedEvent} successfully updated`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Delete
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: { event_id: req.params.id }
        })
        res.status(200).json({
            message: `${deletedEvent} deleted`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = events