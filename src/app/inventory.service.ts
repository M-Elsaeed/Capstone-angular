import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * This Service fetches inventory data from the server.
 */
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  public data: JSON;
  constructor(private http: HttpClient) {
    this.http.get("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json")
      .subscribe((response) => this.data = JSON.parse(JSON.stringify(response)));
  }
}
