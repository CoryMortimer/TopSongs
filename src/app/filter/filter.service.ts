// Help from https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6

import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  EventEmitter
} from '@angular/core';

@Injectable()
export class FilterService {
  private componentRef: ComponentRef<{}>
  private componentEvents = new EventEmitter();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  openComponent(component, inputs) {
    if (this.componentRef) { throw new Error('Component already opened'); }
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    for (const input in inputs) {
      this.componentRef.instance[input] = inputs[input];
    }

    this.applicationRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
    return this.componentEvents;
  }

  closeComponent(values) {
    if (!this.componentRef) { throw new Error('Component is not open'); }
    this.applicationRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    this.componentRef = null;
    this.componentEvents.next(values);
  }
}
