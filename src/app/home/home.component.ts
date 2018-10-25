import { Component, OnInit, ComponentFactoryResolver, Injector, OnDestroy } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ComponentRef } from '@angular/core/src/render3';
import { NtxSidenavService } from '@netex/ux-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private dynamicComponent: ComponentRef<DynamicComponent>;

  constructor(
    private sidenavService: NtxSidenavService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit() { }

  onButtonClick() {
    const data = this.sidenavService.createData({ title: 'Hello', info: 'World' });
    const portal = new ComponentPortal(DynamicComponent, undefined, data);

    this.dynamicComponent = this.sidenavService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    // this.emitterSubscription = this.dynamicComponent.instance
    //   .emitter$.subscribe((str: string) => console.log(str));

    this.sidenavService.open();
  }

  ngOnDestroy() {
    //this.emitterSubscription.unsubscribe();
  }

}
