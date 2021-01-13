import { Action } from '@ngrx/store';
import { ActionTypes } from './countdowntimer.enums';

export interface Payload {
  milliseconds: number,
  init?: boolean
}

export class Start implements Action {
  readonly type = ActionTypes.Start;
  constructor(public payload: Payload) {}
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
  constructor(public payload: Payload) {}
}

export class Pause implements Action {
  readonly type = ActionTypes.Pause;
}

export class Resume implements Action {
  readonly type = ActionTypes.Resume;
}

export class Cancel implements Action {
  readonly type = ActionTypes.Cancel
  constructor(
    public payload: Payload = {
      milliseconds: 0
    }
  ) {}
}
export type ActionsUnion = Start | Update | Resume | Pause | Cancel