import {
  OPEN_BIRTHDAY_MODAL,
  CLOSE_BIRTHDAY_MODAL,
  ADD_BIRTHDAY,
  ADD_WISHES,
  OPEN_WISH_MODAL,
  CLOSE_WISH_MODAL,
  ADD_MEMORIES,
  IS_LOADING,
  NEXT_PAGE,
} from "../_actions/types";

const initialState = {
  pagination: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case OPEN_BIRTHDAY_MODAL:
      return { ...state, modalStatus: action.payload };
    case CLOSE_BIRTHDAY_MODAL:
      return { ...state, modalStatus: action.payload };
    case OPEN_WISH_MODAL:
      return { ...state, wishModalStatus: action.open, wish: action.payload };
    case CLOSE_WISH_MODAL:
      return { ...state, wishModalStatus: action.payload };
    case ADD_BIRTHDAY:
      return { ...state, addBirthdayResponse: action.payload };
    case ADD_WISHES:
      return { ...state, addWishes: action.payload };
    case ADD_MEMORIES:
      return { ...state, addMemories: action.payload };
    case NEXT_PAGE:
      return { ...state, pagination: action.payload };
    default:
      return state;
  }
}
