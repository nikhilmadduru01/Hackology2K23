import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatButtonModule } from '@angular/material/button';
import { PreviewPdfComponent } from './preview-pdf/preview-pdf.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { MatToolbarModule} from '@angular/material/toolbar';

import { CKEditorModule } from 'ckeditor4-angular';
=======
>>>>>>> b67672c22886d06a4de36ae976a70bcf30caa5d7
import { MatButtonModule } from '@angular/material/button';
import { McqQuestionsListComponent } from './mcq-questions-list/mcq-questions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PreviewPdfComponent,
    McqQuestionsListComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    CKEditorModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
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
