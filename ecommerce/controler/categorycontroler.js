const catModel = require("../models/categorymodel")
module.exports = {
    addCategory: async (req, res) => {
        const category = new catModel(req.body)
        await category.save(req.body, (err, item) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "failed",
                    err
                })
            }
            else {
                res.status(201).json({
                    success: true,
                    message: "success",
                    data: item
                })
            }
        })
    },
    getAll: async (req, res) => {
        await catModel.find().exec((err, item) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "false",
                    err
                })
            }
            else {
                res.status(200).json({
                    success: true,
                    message: "true",
                    data: item
                })
            }
        })
    },
    update: (req, res) => {
        catModel.findByIdAndUpdate(req.params.id, req.body).exec((err, item) => {
            if (err) {
                res.status(400).json({
                    sucess: false,
                    message: "false",
                    err
                })

            }
            else {
                res.status(200).json({
                    sucess: true,
                    message: "true",
                    data: item
                })
            }
        })
    },
    delete: (req, res) => {
        catModel.findByIdAndDelete(req.params.id).exec((err, item) => {
            if (err) {
                res.status(400).json({
                    sucess: false,
                    message: "false",
                    err
                })
            } else {
                res.status(200).json({
                    sucess: true,
                    message: "delete",

                })
            }
        })
    },
    getById: (req, res) => {
        catModel.findById(req.params.id).exec((err, item) => {
            if (err) {
                res.status(400).json({
                    sucess: false,
                    message: "false",
                    err
                })
            } else {
                res.status(200).json({
                    sucess: true,
                    message: "true",
                    data: item
                })
            }
        })
    }
}

