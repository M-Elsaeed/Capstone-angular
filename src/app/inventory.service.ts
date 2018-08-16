import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
/**
 * This Service fetches inventory data from the server.
 */
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  public currentInventory: Observable<any> = null;
  public isFetched: boolean = false;
  private inventoryObject = undefined;
  constructor(private http: HttpClient) {
    this.currentInventory = this.http.get("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json");
    this.currentInventory.subscribe((response) => {
      this.isFetched = true;

      this.inventoryObject = response;
    });
  }

  public getItemRefrences(item) {
    let i = 0;

    for (i = 0; i < this.inventoryObject.length; i++) {
      if (item.category === this.inventoryObject[i].category)
        break;
    }

    let j = 0;

    for (j = 0; j < this.inventoryObject[i].subcategories.length; j++) {
      if (item.subcategory.trim().toLowerCase() === this.inventoryObject[i].subcategories[j].name.trim().toLowerCase())
        break;
    }

    let k = 0;

    for (k = 0; k < this.inventoryObject[i].subcategories[j].items.length; k++) {
      if (item.name === this.inventoryObject[i].subcategories[j].items[k].name)
        break;
    }

    return [i, j, k];
  }
  public getItemUrl(item) {

    let indexParams = this.getItemRefrences(item);
    let url = "/Products?ind=" + indexParams[0] + "&subCatInd=" + indexParams[1] + "&itemInd=" + indexParams[2];

    return url;
  }
}











