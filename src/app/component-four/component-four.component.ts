import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.css']
})
export class ComponentFourComponent implements OnInit {

  constructor() { }

  listelement=[
    {id:'1', name:'Reason for Consult',link:'/'},
    {id:'2', name:'Symptoms',link:'/symptoms'},
    {id:'3', name:'TPA Eligibility',link:'/tpa_Eligibility'},
    {id:'4', name:'Vital Signs',link:'#'},
    {id:'5', name:'Post Medical & Surgical History',link:'#'},
    {id:'6', name:'Family & Social History',link:'#'}
    
  ]
  ngOnInit() {

    $(document).ready(function(){
      
      $("a").click(function(){
        $(this).addClass("active").siblings().removeClass('active');
        
        var id = $(this).attr('id');
        //alert(id);
        console.log(id);
        var ch = id-1; 
        $('#check'+ch).removeClass('check_circle');
        $('#check'+id).addClass('check_circle');
        
        $('#arrow'+ch).addClass('display_arrow');
        $('#arrow'+id).removeClass('display_arrow');
      })
      $("p").click(function(){
        $(this).hide();
    })
    
    })

  } 
 


}
