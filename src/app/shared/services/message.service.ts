import {Observable, ReplaySubject} from 'rxjs';
import {first, timeout} from 'rxjs/operators';
import {EventService} from './event.service';
import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Message} from '../models/Message';
import {LoremIpsum} from 'lorem-ipsum';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService {
  protected messagesUrl = this.baseUrl + 'api/v1/messages';
  private messages: Message[] = [];

  constructor(protected http: HttpClient,
              protected eventService: EventService,
              protected snackBar: MatSnackBar,
              protected appService: AppService) {
    super(http, eventService, snackBar);

    const lorem = new LoremIpsum({
      sentencesPerParagraph: { max: 8, min: 4 },
      wordsPerSentence: { max: 16, min: 4 }
    });

    this.appService.appInfo.pipe(first()).subscribe((appInfo: any) => {
      for (let i = 0; i < 3; i++) {
        this.messages.push({
          id: i.toString(),
          text: lorem.generateSentences(this.getRandomInt(10)),
          date: new Date(this.getRandomInt(10)),
          user: AppService.APP_INFO.user
        } as Message);
      }
    });
  }

  createMessage(i: Message): Observable<Message> {
    return new Observable((observer) => {
      this.eventService.loading.next(true);

      this.http.post(this.messagesUrl, i).pipe(first()).subscribe((newItem: Message) => {
        this.eventService.loading.next(false);
        observer.next(newItem);
        observer.complete();
      }, (e: any) => {
        console.error('MessageService.createMessage: ', e);
        this.eventService.loading.next(false);
        observer.error(e);
        observer.complete();
      });
    });
  }

  createFakeMessage(i: Message): Observable<Message> {
    return new Observable((observer) => {
      const newMessage: Message = JSON.parse(JSON.stringify(i)) as Message;
      newMessage.id = new Date().getDate().toString();
      this.messages.push(i);
      observer.next(newMessage);
      observer.complete();
    });
  }

  getMessage(i: Message): Observable<Message[]> {
    return new Observable((observer) => {
      this.eventService.loading.next(true);

      this.http.get(this.messagesUrl).pipe(first()).subscribe((items: Message[]) => {
        this.eventService.loading.next(false);
        observer.next(items);
        observer.complete();
      }, (e: any) => {
        console.error('MessageService.getMessage: ', e);
        this.eventService.loading.next(false);
        observer.error(e);
        observer.complete();
      });
    });
  }

  getFakeMessages(): Observable<Message[]> {
    return new Observable((observer) => {
      observer.next(this.messages);
      observer.complete();
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
