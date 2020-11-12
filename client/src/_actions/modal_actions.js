import axios from "axios";
import {
  CLOSE_BIRTHDAY_MODAL,
  OPEN_BIRTHDAY_MODAL,
  ADD_BIRTHDAY,
  ADD_WISHES,
  OPEN_WISH_MODAL,
  CLOSE_WISH_MODAL,
  ADD_MEMORIES,
  IS_LOADING,
  NEXT_PAGE,
} from "./types";
import { BIRTHDAY_SERVER } from "../components/Config.js";

export function setIsLoading(isLoading) {
  return {
    type: IS_LOADING,
    payload: isLoading,
  };
}

export function openAddBirthdays() {
  return {
    type: OPEN_BIRTHDAY_MODAL,
    payload: true,
  };
}
export function closeAddBirthdays() {
  return {
    type: CLOSE_BIRTHDAY_MODAL,
    payload: false,
  };
}
export function openWishModal(wish) {
  return {
    type: OPEN_WISH_MODAL,
    open: true,
    payload: wish,
  };
}
export function closeWishModal() {
  return {
    type: CLOSE_WISH_MODAL,
    open: false,
    payload: false,
  };
}

export function addBirthday(dataToSubmit) {
  return (dispatch) => {
    console.log(dataToSubmit)
    const request = axios
      .post(`${BIRTHDAY_SERVER}/addBirthday`, dataToSubmit)
      .then((response) => {
        return response.data;
      });

    return {
      type: ADD_BIRTHDAY,
      payload: request,
    };
  };
}

export function getNextPage(page) {
  return {
    type: NEXT_PAGE,
    payload: page
  };
}

export function getWishes(email, pagination) {
  console.log(pagination)
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(`${BIRTHDAY_SERVER}/getWishes?email=${email}&pagination=${pagination}`)
      .then((response) => {
        dispatch(setIsLoading(false));
        dispatch(addWishes(response.data.Data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setIsLoading(false));
      });
  };
}

export function addWishes(data) {
  return {
    type: ADD_WISHES,
    payload: data,
  };
}

export function getMemories() {
  return (dispatch, getState) => {
    const { _id } = getState().user.userData;
    axios
      .get(`${BIRTHDAY_SERVER}/getMemories?_id=${_id}`)
      .then((response) => {
        dispatch(addMemories(response.data.Data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addMemories(data) {
  return {
    type: ADD_MEMORIES,
    payload: data,
  };
}
