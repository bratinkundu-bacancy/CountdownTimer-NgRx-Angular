import { Action } from '@ngrx/store'
import { ActionTypes } from './countdowntimer.enums';
import { ActionsUnion, Payload } from './countdowntimer.actions';


export const initialState: Payload = {
  milliseconds: 0,
  init: true
}

export function countdownReducer(state = initialState, action: Action) {
  switch(action.type) {
    case ActionTypes.Start: 
      return {
        ...state,
        ...action.payload,
        paused: false,
        cancelled: false,
        init: true
      }
    
    case ActionTypes.Pause:
      return {
        ...state,
        paused: true,
        cancelled: false,
        init: false
      }
    
    case ActionTypes.Update: 
      return {
        ...state,
        ...action.payload,
        paused: false,
        cancelled: false,
        init: false
      }
    
    case ActionTypes.Resume: 
      return {
        ...state,
        paused: false,
        cancelled: false,
        init: false
      }
    
    case ActionTypes.Cancel: 
      return {
        ...state,
        ...action.payload,
        paused: false,
        cancelled: true,
        init: false
      }

    default: 
      return state
  }
}
