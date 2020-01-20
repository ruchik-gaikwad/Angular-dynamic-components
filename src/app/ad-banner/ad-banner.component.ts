import { Component, OnInit, OnDestroy,Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../ad.directive';


@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy{

  @Input() ads; 
  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  interval:any;

  constructor(private componentfactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length; 
    const addItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentfactoryResolver.resolveComponentFactory(addItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = addItem.data;
    console.log((<AdComponent>componentRef.instance))
    

  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  ngOnDestroy() {

  }



}


export interface AdComponent {
  data: any;
}