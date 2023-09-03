import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.services';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [ProjectService]
})
export class ProyectosComponent implements OnInit{
  public projects: Project[]  //sacar los objetos de la carpte modelos

  public title: string;
  public project: Project;
  public status: String = '';

  constructor(
    private _projectService: ProjectService //hacer el llamado a las funciones get y post
  ){
    this.projects = []//iniciarlizar la variable en el constructor con un array vacio

    this.title = "Crear Proyecto";
    this.project= new Project('','','','')
  }

  ngOnInit() {
    this.getProjects(); //llamar la funcion del project.services
  }

  onSubmit(projectForm: any) {
    
    this._projectService.saveProject(this.project).subscribe( //metodo para enviar datos a la api y ver que resultado da
      response => {
        if (response.project) {
          this.status = "success"
          this.project = new Project('', '', '', ''); // Resetear campos
          projectForm.resetForm(); // Resetear formulario
        } else {
          this.status = "failed"
        }
      },
      error => {
        console.error(<any>error);
        // Aquí puedes manejar el error, si es necesario
      }
    );
  }

  getProjects(){
    this._projectService.getProject().subscribe(
      response =>{
        if (response.projects) {
            this.projects = response.projects
        }
      }
    )

  }

}
