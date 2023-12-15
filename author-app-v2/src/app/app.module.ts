import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';

import { CKEditorModule } from 'ckeditor4-angular';
import { MatButtonModule } from '@angular/material/button';
import { McqQuestionsListComponent } from './mcq-questions-list/mcq-questions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    McqQuestionsListComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    CKEditorModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
