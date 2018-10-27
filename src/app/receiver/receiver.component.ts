import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {
  @HostBinding('attr.my-value')
  myValue: string | undefined = 'attr default';
}
