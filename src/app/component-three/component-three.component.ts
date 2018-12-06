import { Component, OnInit } from '@angular/core';
import { ComponentThreeService } from '../shared/component-three.service'
import { AmazingTimePickerService } from 'amazing-time-picker'
@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit {
  constructor(private service: ComponentThreeService) { }
  
  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  
  startDate = new Date(1990, 0, 1);
  
  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onsubmit(){
    if(this.service.form.valid){
      alert('hello')
    }
}


}
