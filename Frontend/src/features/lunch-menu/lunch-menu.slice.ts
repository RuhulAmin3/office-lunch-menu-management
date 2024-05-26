import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getIntoLocalStorage, setIntoLocalStorage } from "../../common/utils";
import { SELECTED_LUNCH_MENU } from "../../common/constants";

type LunchMenuState = {
  menus: string[];
};

const initialState: LunchMenuState = {
  menus: [],
};

const lunchMenuSlice = createSlice({
  name: "lunch-menu",
  initialState,
  reducers: {
    selectLunchmenu(state, action: PayloadAction<string>) {
      state.menus.push(action.payload);
      setIntoLocalStorage(SELECTED_LUNCH_MENU, JSON.stringify(state.menus));
    },

    deselectSelectLunchmenu(state, action: PayloadAction<string>) {
      const selectedMenu = getIntoLocalStorage(SELECTED_LUNCH_MENU);
      if (selectedMenu) {
        const parsedMenu = JSON.parse(selectedMenu) as string[];
        const restMenu = parsedMenu.filter(
          (selectId) => selectId != action.payload
        );

        state.menus = restMenu;
        setIntoLocalStorage(SELECTED_LUNCH_MENU, JSON.stringify(restMenu));
      }
    },

    setStoreToLocalStorage(state) {
      const selectedMenu = getIntoLocalStorage(SELECTED_LUNCH_MENU);
      if (selectedMenu) {
        const parsedMenu = JSON.parse(selectedMenu) as string[];
        state.menus = parsedMenu;
      }
    },
  },
});

export const {
  selectLunchmenu,
  deselectSelectLunchmenu,
  setStoreToLocalStorage,
} = lunchMenuSlice.actions;

export const lunchMenuReducer = lunchMenuSlice.reducer;
