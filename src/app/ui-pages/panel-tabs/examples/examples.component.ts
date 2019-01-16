import { Component, OnInit, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { PanelService } from '../../../shared/services/panel.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { PanelTabsContentComponent } from '../panel-tabs-content/panel-tabs-content.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamplesComponent implements OnInit {

  public panelWidths = [80];

  private paneltabscontentComponent: ComponentRef<PanelTabsContentComponent>;

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
    const portal = new ComponentPortal(PanelTabsContentComponent, undefined, data);

    this.paneltabscontentComponent = this.panelService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    this.panelService.open();
  }

}
