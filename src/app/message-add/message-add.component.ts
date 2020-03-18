import { Component, OnInit } from '@angular/core';
import {Message} from '../shared/models/Message';
import {AppService} from '../shared/services/app.service';
import {NewMessageValidator} from '../shared/models/NewMessageValidator';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ValidationResponse} from '../shared/models/ValidationResponse';
import {MessageService} from '../shared/services/message.service';
import {Router} from '@angular/router';
import {BaseAngularComponent} from '../shared/components/base-angular/base-angular.component';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.scss']
})
export class MessageAddComponent extends BaseAngularComponent implements OnInit {
  message: Message = {
    user: AppService.APP_INFO.user
  } as Message;

  constructor(protected appService: AppService,
              protected messageService: MessageService,
              protected snackBar: MatSnackBar,
              protected router: Router) {
    super(appService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  submitBtnClicked() {
    this.message.date = new Date();
    const validate: ValidationResponse = NewMessageValidator.Validate(this.message);

    if (validate.status) {
      this.messageService.createFakeMessage(this.message).subscribe((i) => {
        console.log('Created message');
        this.snackBar.open('Successfully created message', '', { duration: AppService.DEFAULT_SNACKBAR_DURATION } );

        setTimeout(() => {
          this.router.navigate(['/messages']).then();
        }, AppService.DEFAULT_SNACKBAR_DURATION);
      }, (e: any) => {
        console.error('MessageService.createMessage: ', e);
      });
    } else {
      console.error('MessageAddComponent.submitBtnClicked', validate);
      this.snackBar.open(validate.message, 'Enter a valid message text', { duration: AppService.DEFAULT_SNACKBAR_DURATION } );
    }
  }
}
