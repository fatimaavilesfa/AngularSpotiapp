import { Component} from '@angular/core';
import { SpotigyService } from 'src/app/services/spotigy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {


  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotigyService) {



  }



  searchArtist(termino: string) {
    this.loading = true;
    this.spotify.getArtists( termino )
        .subscribe( (data: any) => {
          console.log( data );
          this.artists = data;
          this.loading = false;
        });
  }

}
