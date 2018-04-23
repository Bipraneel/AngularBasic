import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {Http} from '@angular/http'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [
    // Define animations here.

    trigger('myAwesomeAnimation', [
      state('small', style({
          background : '#cfd8dc',
          color : 'black',
          transform: 'scale(1)',
      })),
      state('large', style({
          background : 'black',
          color : 'white',
          transform: 'scale(3)',
      })),

      // transition('small => large', [
      //   style({
      //     backgroundColor: '#cfd8dc',
      //     transform: 'scale(2)'
      //   }),
      //   animate('2000ms ease-in', style({
      //     backgroundColor: '#eee',
      //     //transform: 'scale(1)'
      //   }))
      // ]),

     transition('small => large', animate('2000ms ease-in')),

     transition('large => small', animate('2000ms ease-out')),

      // transition('small <=> large', animate('300ms ease-in', style({
      //   transform: 'translateY(40px)'
      // }))),

      // transition('small <=> large', animate('2000ms ease-in', keyframes([
      //   style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
      //   style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
      //   style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      // ]))),

  ]),
   ]
})
export class MessagesComponent //implements OnInit {
{
  message : string;
  
  anime : string = 'Make Me BIG';
  constructor(private http:Http) {  }


  state: string = 'small';


   data : any = {title: 'foo',  body: 'bar', userId: 1};
   
   httpCall(){
    
    this.http.post('http://localhost/angular/script.php', JSON.stringify(this.data))
   .subscribe((data) => {
     console.log("Successfully Data Entered",data);
   })   
  }

  animateMe() {
      this.anime = (this.anime == 'Make Me SMALL' ? 'Make Me BIG' : 'Make Me SMALL');
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

  // callService(){
  //   this.messageService.add(this.message);
  //   this.message="";
  // }

  // clearMessage(){
  //   this.message="";
  //   this.messageService.clear();
  // }



  // ngOnInit() {
  // }

}
