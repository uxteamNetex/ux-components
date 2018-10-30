import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
@Injectable({
	providedIn: 'root'
})
export class SidenavService {
    public menu: MatSidenav;
    public panel: MatSidenav;
}
