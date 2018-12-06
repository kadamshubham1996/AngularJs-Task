import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComponentThreeService {
  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Today1: new FormControl('', Validators.required),
    Today2: new FormControl('', Validators.required),
    Today3: new FormControl('', Validators.required),
    Today4: new FormControl('', Validators.required),
    isUnknown: new FormControl(false),
    family_at_bedside: new FormControl(0),
    mi_in_previous_weeks: new FormControl('1'),
    stroke_in_previous_months: new FormControl('1'),
    history_of_ich: new FormControl('1'),
    Coumadian_eliquis_pradaxa: new FormControl('1'),
    history_of_Neoplasm: new FormControl('1'),
    was_this_interacronal: new FormControl('1'),
   
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Today1: '',
      Today2: '',
      Today3: '',
      Today4: '',
      isUnknown: false,
      family_at_bedside: 0,
      mi_in_previous_weeks: '1',
      stroke_in_previous_months: '1',
      history_of_ich: '1',
      Coumadian_eliquis_pradaxa: '1',
      history_of_Neoplasm: '1',
      was_this_interacronal: '1',

    });
  }
}
