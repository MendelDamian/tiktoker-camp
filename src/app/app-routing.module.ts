import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { ParentsInfoComponent } from './parents-info/parents-info.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'rodzice', component: ParentsInfoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
