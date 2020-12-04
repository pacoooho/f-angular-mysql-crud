import { Component, OnInit,HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
 
  @HostBinding('class') classes ='row'

public games : any =  [];

  constructor(private gamesService: GamesService) {

  }

    ngOnInit() {
  this.getGames();

  }

getGames() {
    this.gamesService.getGames().subscribe(
    res =>{ 
     console.log(res); 
     this.games = res;
    },
    err => console.log("DdDDDDD",err)
  );
}

  deleteGame(id: string){
    this.gamesService.deleteGame(id).subscribe(
      res =>{ 
        console.log(res); 
       this.getGames();
       },
       err => console.log("DdDDDDD",err)
    )
    console.log(id)
  }

// editGame(id: string){
//   console.log(id);

// }

}
