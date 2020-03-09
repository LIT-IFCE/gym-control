const express = require('express')
const routes = express.Router()

routes.get('/', function(req,res){
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req,res){
    return res.render("instructors/index")
})

routes.get('/members', function(req,res){
    return res.render("/members")
})

module.exports = routes 