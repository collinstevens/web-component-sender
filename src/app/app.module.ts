import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReceiverComponent } from './receiver/receiver.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ReceiverComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [ReceiverComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const senderElement = createCustomElement(ReceiverComponent, {
      injector: this.injector
    });
    customElements.define('web-receiver', senderElement);
  }
}
