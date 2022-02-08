import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMenuClick(value: string) {
    switch (value) {
      case 'Home':
        this.router.navigate(['/']);
        break
      case 'Music':
        this.router.navigate(['/music']);
        break
      case 'Movie':
        this.router.navigate(['/movie']);
        break
      case 'News':
        this.router.navigate(['/news']);
        break
      case 'Social':
        this.router.navigate(['/social']);
        break
      case 'Entertainment':
        this.router.navigate(['/entertainment']);
        break
      case 'Religious':
        this.router.navigate(['/religious']);
        break
      case 'Song':
        this.router.navigate(['/song']);
        break
    }
  }

}
