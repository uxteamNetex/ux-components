import { Component, OnInit, ViewEncapsulation, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { PanelService } from '../../../shared/services/panel.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { EntityDetailPanelComponent } from '../entity-detail-panel/entity-detail-panel.component';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

  public panelWidths = [80];

  private entitydetailpanelComponent: ComponentRef<EntityDetailPanelComponent>;

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
    const portal = new ComponentPortal(EntityDetailPanelComponent, undefined, data);

    this.entitydetailpanelComponent = this.panelService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    this.panelService.open();
  }

}
