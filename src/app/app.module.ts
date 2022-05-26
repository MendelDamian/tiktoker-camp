import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { ParentsInfoComponent } from './parents-info/parents-info.component';
import { FormComponent } from './form/form.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { QuizResultsComponent } from './quiz/quiz-results/quiz-results.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    QuizComponent,
    ParentsInfoComponent,
    FormComponent,
    QuizQuestionComponent,
    QuizResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTiktok,
      faFacebook,
      faInstagram
    );
  }
}
