import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'http://localhost:3000/';
    public apiUrl = 'api/v1/';
    public serverWithApiUrl = this.server + this.apiUrl;
}