import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotigyService } from '../../services/spotigy.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;


  constructor( private router: ActivatedRoute,
               private spotify: SpotigyService) {

    this.router.params.subscribe( params => {

      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );

    });

   }


   getArtist( id: string ) {
    this.loadingArtist = true;
    this.spotify.getArtist( id )
          .subscribe( artista => {
            console.log(artista);
            this.artista = artista;
            this.loadingArtist = false;
          });

   }

   getTopTracks( id: string ) {

    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          console.log( topTracks );
          this.topTracks = topTracks;
        })


   }


}


