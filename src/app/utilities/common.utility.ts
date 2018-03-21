import { defer } from 'RxJS/observable/defer';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}

export function handleError(error: HttpErrorResponse) {
    console.log('inside error');
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
