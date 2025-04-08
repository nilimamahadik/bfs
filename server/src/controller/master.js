
const express = require("express");
const master = require("../models/master");

exports.getMaster = async (req, res) => {
    // console.log(req);
    try {
        const allusers = await master.find()
        // console.log(allusers);
        
        return res.status(201).json({
            data: allusers,
            status: "success",
            message: "candidate get successfully",
            count: allusers.length
        })
    }
    catch (err) {
        console.log(err.message)
    }
}