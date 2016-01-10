import { MARK_ITEM, UNMARK_ITEM, TOGGLE_ITEM } from '../constants/ActionTypes';

export function markItem() {
  return { type: MARK_ITEM };
}

export function unmarkItem() {
  return { type: UNMARK_ITEM };
}

export function toggleItem() {
  return { type: TOGGLE_ITEM };
}

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();
//
//     if (counter.count % 2 === 0) {
//       return;
//     }
//
//     dispatch(increment());
//   };
// }

