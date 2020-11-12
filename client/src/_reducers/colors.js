import {
  COLOR_UPDATED,
} from "../_actions/types";

const initialState = {
  primary: {
    light: "#757ce8",
    main: "#3f50b5",
    dark: "#002884",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ff7961",
    main: "rgb(177 63 19 / 78%)",
    dark: "#ba000d",
    contrastText: "#000",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COLOR_UPDATED:
      return { ...state, colors: action.payload };
    default:
      return state;
  }
}
