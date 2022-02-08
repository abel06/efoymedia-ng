import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StyleManagerService } from "./style-manager.service";
import { Observable } from "rxjs";
import options from '../../assets/themeOptions.json'
import { ThemeOptionDTO } from "../data/models/theme-option.model";

@Injectable()
export class ThemeService {
  options: Array<ThemeOptionDTO> = options;
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Array<ThemeOptionDTO> {
    return options
  }

  // getThemeOptions(): Observable<Array<ThemeOptionDTO>> {
  //   return this.http.get<Array<ThemeOptionDTO>>("../../../assets/themeOptions.json");
  // }


  setTheme(themeToSet:string) {
    this.styleManager.setStyle('theme',
      `../../../assets/themes/${themeToSet}.css`
    );
  }
}
