import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private api : ApiService
  ) { }

  url: string = 'contact'

  getAll() {
    return this.api.Get(this.url);
  }

  getDetail(id: number) {
    return this.api.Get(`${this.url}/${id}`);
  }

  store(requestBody : any) {
    return this.api.Post(this.url, requestBody);
  }

  update(id: number, requestBody : any) {
    return this.api.Put(`${this.url}/${id}` , requestBody);
  }

  destroy(id: number) {
    return this.api.Delete(`${this.url}/${id}`);
  }
}
