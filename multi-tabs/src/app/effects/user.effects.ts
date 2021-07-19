// import { Injectable } from "@angular/core";
// import { Effect, Actions, ofType } from '@ngrx/effects';
// import { switchMap, map, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { UserService } from '../user.service';

// import * as fromUser from '../store/user';

// @Injectable()
// export class UserEffects {
//     constructor(private actions: Actions, private userService: UserService) {

//     }
//     @Effect()
//     login$ = this.actions.pipe(
//         ofType<fromUser.Login>(fromUser.EUserActions.LOGIN),
//         switchMap(action => {
//             const { email, password } = action.payload;
//             return this.userService.login(email, password).pipe(
//                 map(res => new fromUser.LoginSuccess(email)),
//                 catchError(e => of(new fromUser.LoginFail()))
//             );
//         })
//     );
// };