import { ComponentPortal, DomPortalHost, PortalInjector, PortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentRef } from '@angular/core/src/render3';
import { Subject } from 'rxjs';

export const PANEL_DATA = new InjectionToken<{}>('PANEL_DATA');

@Injectable({
	providedIn: 'root'
})
export class PanelService {

	private panelPortalOutlet: PortalOutlet;

	private openSource = new Subject<void>();
	private closeSource = new Subject<void>();

	private panelWidthSource = new Subject<string>();
	panelWidth$ = this.panelWidthSource.asObservable();

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

	/** Used to create the data injected to the component
	 * that's going to be attached to the panel PortalOutlet.
	 * @param {any} data - The data to be injected into the component.
	 * @returns {PortalInjector} Returns the injector that's needed when
	 * creating a ComponentPortal instance.
	 */
	createData(data: any): PortalInjector {
		const injectorTokens = new WeakMap().set(PANEL_DATA, data);

		return new PortalInjector(this.injector, injectorTokens);
	}

	/** Used to attach a ComponentPortal instance to the sidenav PortalOutlet.
	 * @param {ComponentPortal} portal - The ComponentPortal instance that's
	 * going to be attached to the sidenav PortalOutlet.
	 * @param {ComponentFactoryResolver} componentFactoryResolver - The component
	 * factory resolver instance of the module which the instantiated component belongs to.
	 * @param {Injector} injector - The injector instance of the module which the
	 * instantiated component belongs to.
	 * @returns {ComponentRef} Reference to the instantiated component.
	*/
	attachComponent(
		portal: ComponentPortal<any>,
		componentFactoryResolver: ComponentFactoryResolver,
		injector: Injector
	): ComponentRef<any> {
		this.panelPortalOutlet = new DomPortalHost(
			document.querySelector('#panel-outlet'),
			componentFactoryResolver,
			this.applicationRef,
			injector
		);

		return this.panelPortalOutlet.attach(portal);
	}

	/** Used to detach a ComponentPortal from the sidenav PortalOutlet.*/
	detachComponent(): void {
		this.panelPortalOutlet.detach();
	}
	
	/** Used to set panel width dinamically */
	panelWidth(width: string) {
		this.panelWidthSource.next(width);
	}

}
