import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class TabsHeaderService {

    private path = new Subject<string>();

    getPath(): Observable<string> {
        return this.path.asObservable();
    }

    setPath(path: string): void {
        this.path.next(path);
    }
}
