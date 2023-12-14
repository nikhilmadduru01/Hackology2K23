import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAppComponent } from './student-app/student-app.component';
 import {MatButtonModule} from '@angular/material/button';
import { QuestionInterfaceComponent } from './question-interface/question-interface.component';
import { CKEditorModule } from 'ckeditor4-angular';



@NgModule({
  declarations: [
    AppComponent,
    StudentAppComponent,
    QuestionInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,  
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
