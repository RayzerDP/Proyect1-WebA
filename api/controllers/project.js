'use strict';

var Project = require('../models/project');

var controller = {
   

    saveProject: async function (req, res) {
        var project = new Project();

        var params = req.body; //objeto json listo
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.categoria = params.categoria;
        project.lenguajes = params.lenguajes;

        try {
            const projectStored = await project.save(); //uso de promesas async/await 
            return res.status(200).send({ project: projectStored });
        } catch (err) {
            console.error(err);
            return res.status(500).send({ message: 'Error al guardar el proyecto' });
        }
    },

    getProject:  async function (req, res) { 
        var projectId = req.params.id;
        try {
   
            const project = await Project.findById(projectId);
        
            if (!project) {
              return res.status(404).send({ message: 'Proyecto no encontrado' });
            }
        
            return res.status(200).send({ project });
          } catch (err) {
            console.error(err);
            return res.status(500).send({ message: 'Error en el servidor' });
          }
     },

     getProjects: async function (req, res) {
        
        try {
            const projects = await Project.find({}).exec();
        
            return res.status(200).send({ projects });
          } catch (err) {
            console.error(err);
            return res.status(500).send({ message: 'Error en el servidor' });
          }
        },

      updateProject: async function (req, res) {
        try {
            const projectId = req.params.id;
            const update = req.body;
        
            const project = await Project.findByIdAndUpdate(projectId, update, { new: true });//Utilizamos { new: true } como tercer argumento en findByIdAndUpdate para que nos devuelva la versión actualizada del proyecto
        
            if (!project) {
              return res.status(404).send({ message: 'Proyecto no encontrado' });
            }
        
            return res.status(200).send({ project });
          } catch (err) {
            console.error(err);
            return res.status(500).send({ message: 'Error al actualizar' });
          }
        },

        deleteProject: async function (req, res) {
            try {
                const projectId = req.params.id

                const project = await Project.findByIdAndDelete(projectId)

                if (!project){
                    return res.status(500).send({message: 'Proyecto no encontrado'})
                }
                return res.status(200).send({project})
            } catch (err) {
                console.error(err);
                return res.status(500).send({ message: 'Proyecto no removido' });
            }
        }
};

module.exports = controller;
