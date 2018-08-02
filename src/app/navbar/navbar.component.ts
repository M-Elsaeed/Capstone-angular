import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  private loaded:boolean=false;
  private scrolledPercent: string;
  private scrolledMass: boolean = false;
  private divPlaceHolder:string = "";
  scrollUpdate() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    this.scrolledMass = scrolled >= 1 ? true : false;
    this.divPlaceHolder = this.scrolledMass?"i":"";
    this.scrolledPercent = scrolled + "%";
    return this.scrolledPercent;
  }

  constructor(private cdRef: ChangeDetectorRef) {
    window.onscroll = this.scrollUpdate;
  }
  ngOnInit() {

  }
}

