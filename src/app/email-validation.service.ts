import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import {EmailCheck} from './email-check';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class EmailValidationService {

  constructor(private http: HttpClient) { }

  isEmailValid(email: String): Observable<EmailCheck> {
    return this.http.get<EmailCheck>(environment.apiUrl + `/emailcheck?email=${email}`).pipe(
      catchError(this.handleError<EmailCheck>('searchTracks', null))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
