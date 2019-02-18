import { Component } from '@angular/core';


interface ItemDefinition {
  name: string;
  description: string;
  checked: boolean;
  count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  items = <ItemDefinition[]>[
    {
      name: 'First',
      description: 'This is the first item',
      checked: false,
      count: 0
    },
    {
      name: 'Second',
      description: 'This is the second item',
      checked: false,
      count: 0
    }
  ];

  itemsToExport = <ItemDefinition[]>[];

  refreshPayload() {
    this.itemsToExport = this.items.filter(x => x.checked);
  }

}
