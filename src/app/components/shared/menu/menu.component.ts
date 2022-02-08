import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ThemeOptionDTO } from "src/app/data/models/theme-option.model";
import { ThemeService } from "src/app/services/theme.service";



@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  @Input() options: Array<ThemeOptionDTO> | any;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {}

  changeTheme(themeToSet:string) {
    this.themeChange.emit(themeToSet);
  }
}
