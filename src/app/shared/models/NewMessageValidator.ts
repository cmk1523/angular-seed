import {Message} from './Message';
import {ValidationResponse} from './ValidationResponse';

export class NewMessageValidator {
  constructor() {
  }

  public static Validate(i: Message): ValidationResponse {
    const response: ValidationResponse = {
      source: 'NewMessageValidator',
      status: false
    } as ValidationResponse;

    if (i.user == null) {
      response.message = 'Message user is missing';
      return response;
    } else if (i.text == null || i.text === '') {
      response.message = 'Message text is missing';
      return response;
    } else if (i.date == null) {
      response.message = 'Message date is missing';
      return response;
    }

    response.status = true;
    return response;
  }
}
