import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ComponentTwoService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    isArm_or_leg_weakness: new FormControl(false),
    isConfusion: new FormControl(false),
    isDizziness: new FormControl(false),
    isFacial_droop: new FormControl(false),
    isNumbness_tingling: new FormControl(false),
    isBalance_problems: new FormControl(false),
    isHeadache: new FormControl(false),
    isSpeech_difficulties: new FormControl(false),
    isVision_changes: new FormControl(false),
    isRight_sided_flaccid_weakness: new FormControl(false),
    isLeft_sided_flaccid_weakness : new FormControl(false),
    other:new FormControl('',Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      isArm_or_leg_weakness: false,
      isConfusion: false,
      isDizziness: false,
      isFacial_droop: false,
      isNumbness_tingling: false,
      isBalance_problems: false,
      isHeadache: false,
      isSpeech_difficulties: false,
      isVision_changes: false,
      isRight_sided_flaccid_weakness: false,
      isLeft_sided_flaccid_weakness: false,
      other:''
    });
  }
}
