import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ComponentOneService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    physician_requesting_consult: new FormControl('', Validators.required),
    historian: new FormControl('', Validators.required),
    hospital_campus:new FormControl('',Validators.required),
    nurses_name: new FormControl('',Validators.required),
    reason_for_consult: new FormControl('1'),
    other:new FormControl('',Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      physician_requesting_consult: '',
      historian: '',
      hospital_campus: '',
      nurses_name: '',
      reason_for_consult: '1',
      other: ''
    });
  }
}