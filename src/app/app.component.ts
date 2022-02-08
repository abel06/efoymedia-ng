import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { AfterContentChecked, AfterViewInit, Component, ElementRef, HostListener, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';
import { localStorageSync } from 'ngrx-store-localstorage';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'efoymedia';
  innerWidth: number;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private authService: AuthService) { }
  ngAfterViewInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth < 800)
    if (this.innerWidth < 800) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
  }

  ngOnInit(): void {
    this.authService.autologIn();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
      if (window.innerWidth < 800) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
  }
}
