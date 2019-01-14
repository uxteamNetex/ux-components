import { Component, OnInit, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { PanelService } from '../../../shared/services/panel.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { DummyComponent } from '../dummy/dummy.component';
import { PanelTabsComponent } from '../panel-tabs/panel-tabs.component';
import { PanelUserProfileComponent } from '../panel-user-profile/panel-user-profile.component';

@Component({
  selector: 'app-panels-examples',
  templateUrl: './panels-examples.component.html',
  styleUrls: ['./panels-examples.component.scss']
})
export class PanelsExamplesComponent implements OnInit {

  public panelWidths = [100,80,60,40];

  private dummyComponent: ComponentRef<DummyComponent>;
  private panelTabsComponent: ComponentRef<PanelTabsComponent>;
  private panelUserProfileComponent: ComponentRef<PanelUserProfileComponent>;

  constructor(
    private panelService: PanelService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit() {}

  onButtonClick(width: string) {
    this.panelService.panelWidth(width);
    const data = this.panelService.createData({ width: width });
    const portal = new ComponentPortal(DummyComponent, undefined, data);

    this.dummyComponent = this.panelService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    this.panelService.open();
  }

  onButtonClick2(width: string) {
    this.panelService.panelWidth(width);
    const data = this.panelService.createData({ width: width });
    const portal = new ComponentPortal(PanelTabsComponent, undefined, data);

    this.panelTabsComponent = this.panelService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    this.panelService.open();
  }

  onButtonClick3(width: string) {
    this.panelService.panelWidth(width);
    const data = this.panelService.createData({ width: width });
    const portal = new ComponentPortal(PanelUserProfileComponent, undefined, data);

    this.panelUserProfileComponent = this.panelService.attachComponent(
      portal, this.componentFactoryResolver, this.injector);

    this.panelService.open();
  }

}
