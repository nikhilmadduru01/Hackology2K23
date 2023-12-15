import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { CKEditorModule } from 'ckeditor4-angular';
import { MatButtonModule } from '@angular/material/button';
import { McqQuestionsListComponent } from './mcq-questions-list/mcq-questions-list.component';
import { McqQuestionComponent } from './mcq-question/mcq-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    McqQuestionsListComponent,
    McqQuestionComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    CKEditorModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
