import { Component, OnInit } from '@angular/core';
import { ComponentTwoService } from '../shared/component-two.service'
@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private service: ComponentTwoService) { }

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
