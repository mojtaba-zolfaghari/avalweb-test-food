import { Directive } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Directive()
export class UnsubscribeAllBaseDirective {

  unsubscribeAll$ = new Subject<void>();

  onDestroy?(): void;

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
    if (this.onDestroy) {
      this.onDestroy();
    }
  }

  safeObservable<T = any>(observable: Observable<T>) {
    return observable.pipe(takeUntil(this.unsubscribeAll$));
  }

}