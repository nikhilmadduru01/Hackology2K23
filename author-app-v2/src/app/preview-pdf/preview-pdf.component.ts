import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-preview-pdf',
  templateUrl: './preview-pdf.component.html',
  styleUrls: ['./preview-pdf.component.scss']
})
export class PreviewPdfComponent implements OnInit {

  pdfSrc: SafeResourceUrl | undefined;
  constructor(private sanitizer: DomSanitizer,
  public dialogRef: MatDialogRef<PreviewPdfComponent>,
  @Inject(MAT_DIALOG_DATA) public pdfContent: any) {
    this.pdfSrc = pdfContent;
  }
  
  ngOnInit(): void {
  }
}
