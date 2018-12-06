import { Component, OnInit, } from '@angular/core';
import { ComponentOneService } from '../shared/component-one.service';
@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor(private service: ComponentOneService) { }

  
  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
 

  onsubmit(){
  
    if(this.service.form.valid){
      alert('submited')

    }
}

}
