import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * This Service fetches inventory data from the server.
 */
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  public currentInventory: JSON;
  public finishedFetching:boolean=false;
  constructor(private http: HttpClient) {
  }
  
  public fetchInventory() {    
    this.http.get("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json")
      .subscribe((response) => { this.currentInventory = JSON.parse(JSON.stringify(response));this.finishedFetching=true; });
  }
}
