import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewPdfComponent } from '../preview-pdf/preview-pdf.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  file: File | null = null;
  ckeConfig: any;
  pdfContent: any;

  constructor(public dialog: MatDialog,
              private httpClient: HttpClient) { }

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
      width: 700,
      forcePasteAsPlainText: true
    };
  }

  onChange(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.readPDFContent(file);
    }
  }

  readPDFContent(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      // e.target.result contains the content of the file
      const fileContent: string | ArrayBuffer = e.target.result;

      // Display the PDF content using data URL
       this.pdfContent = this.decodeBase64(this.sanitizeURL(fileContent.toString()));
      //this.pdfContent = this.sanitizeURL(fileContent.toString());
      console.log(this.pdfContent);
    };

    reader.readAsDataURL(file);
    // Using readAsDataURL to display content in an iframe
  }

  private sanitizeURL(url: string): string {
    // Sanitization to prevent security risks
    // This step is crucial to avoid potential security vulnerabilities
    // You might want to implement a more robust sanitization mechanism
    return url; // Return the sanitized URL for now
  }

  private decodeBase64(encodedText: string) {
   return atob(encodedText);
  }

  // private decodeBase64(encodedText: string): Promise<string| undefined> {
  //   const url = 'data:text/plain;base64,' + encodedText;
  //   const headers = new HttpHeaders().set('Content-Type', 'text/plain');

  //   return this.httpClient.get(url, { headers, responseType: 'text' }).toPromise();
  // }

  openPreview(event: Event){
    debugger
    this.dialog.open(PreviewPdfComponent, {
      width: '600px',
      height: '600px',
      data : this.pdfContent
    });
  }
}
