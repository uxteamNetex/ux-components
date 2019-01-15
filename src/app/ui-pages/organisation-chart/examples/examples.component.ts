import { Component, OnInit, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { PanelService } from '../../../shared/services/panel.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { PanelTreeComponent } from '../panel-tree/panel-tree.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

  public panelWidths = [100];

  private paneltreeComponent: ComponentRef<PanelTreeComponent>;

  constructor(
    private panelService: PanelService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit() {
  }

  onButtonClick(width: string) {
    this.panelService.panelWidth(width);
    const data = this.panelService.createData({ width: width });
    const portal = new ComponentPortal(PanelTreeComponent, undefined, data);

    this.paneltreeComponent = this.panelService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    this.panelService.open();
  }

}
