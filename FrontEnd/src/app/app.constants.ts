import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
  public server = "http://40.112.51.107:3000/";
  public apiUrl = "api/v1/";
  public serverWithApiUrl = this.server + this.apiUrl;
}
