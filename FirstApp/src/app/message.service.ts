import { Injectable } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Injectable()
export class MessageService {
 
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}