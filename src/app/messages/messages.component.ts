import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseAngularComponent} from '../shared/components/base-angular/base-angular.component';
import {AppService} from '../shared/services/app.service';
import {Message} from '../shared/models/Message';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MessageService} from '../shared/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent extends BaseAngularComponent implements OnInit {
  messages: Message[] = [];

  displayedColumns: string[] = ['id', 'text', 'date', 'user'];
  displayedColumns2: string[] = ['user', 'text'];
  dataSource = new MatTableDataSource<Message>(this.messages);
  dataSource2 = new MatTableDataSource<Message>(this.messages);

  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  @ViewChild('paginator2', {static: true}) paginator2: MatPaginator;

  constructor(protected appService: AppService,
              protected messageService: MessageService) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.messageService.getFakeMessages().subscribe((messages: Message[]) => {
      this.messages = messages;

      this.dataSource = new MatTableDataSource<Message>(this.messages);
      this.dataSource.paginator = this.paginator;

      this.dataSource2 = new MatTableDataSource<Message>(this.messages);
      this.dataSource2.paginator = this.paginator2;
    }, (e: any) => {
      console.error('MessagesComponent.ngOnInit - Unable to getFakeMessages: ', e);
    });
  }
}
