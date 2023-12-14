import { Component, OnInit } from '@angular/core';
import { CKEditorComponent } from 'ckeditor4-angular';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  file: File | null = null;
  ckeConfig: any;
  constructor() { }

  ngOnInit(): void {

    this.ckeConfig = {
      removePlugins: 'maximize,resize,elementspath,magicline,image',
      extraPlugins: 'divarea',
      allowedContent: true,
      toolbar: [
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', 'Outdent', 'Indent'] },
      ],
      removeButtons: 'Subscript,Superscript',
      toolbarLocation: 'bottom',
      entities: false,
      title: "Text Area",
      height: 600,
      width: 900,
      forcePasteAsPlainText: true
    };
  }

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
    }
  }

}
