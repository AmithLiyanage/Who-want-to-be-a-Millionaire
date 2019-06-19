import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { QuestionsComponent } from './questions/questions.component';
import { StartComponent } from './start/start.component';
import { QuestionsService } from './questions.service';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    QuestionsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
