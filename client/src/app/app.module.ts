import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

import {GamesService} from './services/games.service';
import { from } from 'rxjs';
import {NgGanttEditorModule} from 'ng-gantt';
import { GanttComponent } from './gantt/gantt.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    GanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgGanttEditorModule
  ],
  providers: [ 
GamesService
  ],
  bootstrap: [AppComponent,GanttComponent]
})
export class AppModule { }
