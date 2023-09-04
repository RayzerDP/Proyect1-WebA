import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.services';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css'],
  providers: [ProjectService]
})
export class SobremiComponent implements OnInit{
  
  public title: string;
  public project: Project;
  public status: String = '';

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear Proyecto";
    this.project= new Project('','','','')
  }

  ngOnInit() {
    
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
  
}
