import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QuestionsComponent } from './questions/questions.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  {path: 'start', component: StartComponent},
  {path: '', component: MainViewComponent},
  {path: 'question/:id', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
