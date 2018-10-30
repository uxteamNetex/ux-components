import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icon } from './icon.interface';
import { environment } from '@env/environment';

@Injectable({
	providedIn: 'root'
})
export class IconsService {
    
    private url = environment.resourcesPath + 'icons.json';

    constructor(private http: HttpClient) { }
  
    getIcons() {
        return this.http.get<Icon[]>(this.url);
    }
}