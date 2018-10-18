import { Injectable, InjectionToken, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PortalInjector, PortalOutlet, DomPortalHost, ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef } from '@angular/core/src/render3';

export const SIDENAV_DATA = new InjectionToken<{}>('SIDENAV_DATA');

@Injectable({
  providedIn: 'root'
})
export class NtxSidenavService {

  private sidenavPortalOutlet: PortalOutlet;

  private openSource = new Subject<void>();
  private closeSource = new Subject<void>();

  open$ = this.openSource.asObservable();
  close$ = this.closeSource.asObservable();

  constructor(
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  open(): void {
    this.openSource.next();
  }

  close(): void {
    this.closeSource.next();
  }

  createData(data: any): PortalInjector {
    const injectorTokens = new WeakMap().set(SIDENAV_DATA, data);

    return new PortalInjector(this.injector, injectorTokens);
  }

  attachComponent(portal: ComponentPortal<any>,
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector): ComponentRef<any> {
    this.sidenavPortalOutlet = new DomPortalHost(
      document.querySelector('#sidenav-outlet'),
      componentFactoryResolver,
      this.applicationRef,
      injector
    );

    return this.sidenavPortalOutlet.attach(portal);
  }

  detachComponent(): void {
    this.sidenavPortalOutlet.detach();
  }
}
