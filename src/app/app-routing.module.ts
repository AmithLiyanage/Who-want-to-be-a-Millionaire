import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path: 'start', component: StartComponent},
  {path: 'question/:id', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
