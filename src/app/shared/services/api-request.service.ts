import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private http = inject(HttpClient)

  apiKey = "48ffa9a539fb1c64be59c554afe9235b"
  

  getMovies(){
    const url = new URL(`https://api.themoviedb.org/3/moive/11?api_key=48ffa9a539fb1c64be59c554afe9235b`)

    return this.http.get(url.toString())

  }

}
