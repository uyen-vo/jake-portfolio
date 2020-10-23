import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get("./file.json")
                    .map((res:any) => res.json())
                    .catch((error:any) => console.log(error));
  }
}
