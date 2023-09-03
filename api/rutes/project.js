'use strict'

var express = require('express')
var ProjectController = require('../controllers/project')

var router = express.Router();


router.post('/save-Project', ProjectController.saveProject)
router.get('/project/:id', ProjectController.getProject)
router.get('/projects', ProjectController.getProjects)
router.put('/projects/:id', ProjectController.updateProject)
router.delete('/project-delete/:id', ProjectController.deleteProject)

module.exports = router
