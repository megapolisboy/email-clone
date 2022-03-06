import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

export interface MailState {
  sendMessageIsOpen: boolean;
  selectedMail: SelectedMail | null;
}

interface SelectedMail {
  id: string;
  title: string;
  subject: string;
  description: string;
  time: string;
}

const initialState: MailState = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },

    selectMail: (state, action: PayloadAction<SelectedMail | null>) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state: RootState) =>
  state.mail.sendMessageIsOpen;
export const selectSelectedMail = (state: RootState) => state.mail.selectedMail;

export default mailSlice.reducer;
