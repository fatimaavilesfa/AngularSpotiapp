import { Component } from '@angular/core';
import { SpotigyService } from 'src/app/services/spotigy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

newSongs: any[] = [];
loading: boolean;

error: boolean;
menssageErr: string;

  constructor( private spotify: SpotigyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
          .subscribe( (data: any) => {
            this.newSongs = data;
            this.loading = false;
          }, ( errorServicio ) => {

            this.loading = false;
            this.error = true;
            this.menssageErr = errorServicio.error.error.message;
            console.log( errorServicio );
            console.log( errorServicio.error.error.message);

          });

  }



}
