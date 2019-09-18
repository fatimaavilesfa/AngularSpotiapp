import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotigyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service ready');
   }

   getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAr2l2RKBFjVj_dn8c2esjHA4pfeYkR-vPyiDXQlbwGYLqA5SVBZ1CsvRX2sbvNAyRbgLIwqCEaezByuv4'
    });
      return this.http.get(url, { headers });
   }



   getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items));
   }

   getArtists( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=7`)
               .pipe( map( data => data['artists'].items));
              }
   getArtist( id: string ) {

    return this.getQuery(`artists/${ id }`);
              //  .pipe( map( data => data['artists'].items));
   }

   getTopTracks( id: string ) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe( map( data => data['tracks']));
   }

}
