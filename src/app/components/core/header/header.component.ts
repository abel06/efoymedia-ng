import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Observable } from "rxjs";
import { ThemeOptionDTO } from "src/app/data/models/theme-option.model";
import { AuthService } from "src/app/services/auth.service";
import { ThemeService } from "../../../services/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit  {
  @Input() sidenav : MatSidenav;
  @Output() toogleSideNav = new EventEmitter<void>()
  options$: Array<ThemeOptionDTO> = this.themeService.getThemeOptions();
  selectedTheme: ThemeOptionDTO;
  showFiller = false;
  isLoggedIn: boolean = false;

  constructor(private readonly themeService: ThemeService,private authService: AuthService) {}

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.isLoggedIn = user != null;
    });
  }

  themeChangeHandler(themeToSet:string) {
    this.themeService.setTheme(themeToSet);

  }
  logOut() {
    this.authService.logOut();
  }
}

