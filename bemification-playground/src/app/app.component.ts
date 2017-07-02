import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sourceCodeEditor') sourceCodeEditor;
  @ViewChild('resultCodeEditor') resultCodeEditor;

  sourceCode: string = '';
  resultCode: string = '';

  public translate(code) {
    this.resultCode = code;
  }
}
