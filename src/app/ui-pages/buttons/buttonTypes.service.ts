import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ButtonType } from './buttonType.interface';

@Injectable({
	providedIn: 'root'
})
export class ButtonTypesService {
    
    private url = environment.resourcesPath + 'buttonTypes.json';

    constructor(private http: HttpClient) { }
  
    getButtonTypes() {
        return this.http.get<ButtonType[]>(this.url);
    }
}