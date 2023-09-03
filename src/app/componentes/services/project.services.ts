import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url
    }
    
    saveProject(project : Project): Observable<any>{
        let params = JSON.stringify(project) //convertir los objetos en json
        let headers = new HttpHeaders().set('Content-type','application/json') //para que la info viaje en ese formato json a la api

        return this._http.post(this.url+'save-Project',params,{headers:headers}) //hacer comunicacion con la api con el metodo post llamado "save-protjec"

    }

    getProject(): Observable<any>{
        let headers = new HttpHeaders().set('content-type','application/json')

        return this._http.get(this.url+'projects',{headers:headers})
    }
}