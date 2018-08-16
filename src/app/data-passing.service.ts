import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassingService {
  dataToPass: any = {};
  constructor() { }
  /**
   * * This function allows passing of data of any type between components and it acts as a receiver.
   * @param componentName The name of the component receiving the data.
   */
  getPassedData(componentName){
    // console.log(this.dataToPass[componentName ]);
    return this.dataToPass[componentName];
  }
  /**
   * This function allows passing of data of any type between components and it acts as a sender.
   * @param dataToPass The data you want to pass to receive on another side.
   * @param toComponent The component which you want to be registered as the receiver of the data.
   */
  passThisData(dataToPass,toComponent){    
    // console.log(this.dataToPass);
    this.dataToPass[toComponent] = dataToPass;
  }
}
