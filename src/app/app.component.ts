import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form = this.fb.group({
    nombre: new FormControl(null),
    int: new FormControl(null),

    maxlengthNumber(obj){
      if(obj.value.length > obj.maxLength){
        obj.value = obj.value.slice(0, obj.maxLength);
      }
    
    }  
  });

  constructor(private fb: FormBuilder) {}

  
}
