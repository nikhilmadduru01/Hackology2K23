import { Component, OnInit } from '@angular/core';
import { CKEditorComponent } from 'ckeditor4-angular';


@Component({
  selector: 'app-student-app',
  templateUrl: './student-app.component.html',
  styleUrls: ['./student-app.component.scss']
})
export class StudentAppComponent implements OnInit {

  constructor() { }

 ckeConfig: any;
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
      title: "",
      height: 500,
      width: 800,
      forcePasteAsPlainText: true
    };
  }

}
