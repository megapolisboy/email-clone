import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../app/store";
import { getUserFromFirebase, signOutWithFirebase } from "../firebase";

export interface Email {
  to: string;
  subject: string;
  message: string;
  timestamp: any;
}

export interface UserState {
  currentUser: User | null;
  emails: Email[];
}

const initialState: UserState = {
  currentUser: null,
  emails: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state) => {},

    signOut: (state) => {
      signOutWithFirebase();
      state.currentUser = getUserFromFirebase();
    },

    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },

    addEmail: (state, action: PayloadAction<Email>) => {},

    fetchEmails: (state) => {
      console.log("fetched");
    },

    setEmails: (state, action: PayloadAction<Email[]>) => {
      state.emails = action.payload;
    },
  },
});

export const { signIn, signOut, setUser, addEmail, setEmails, fetchEmails } =
  userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectEmails = (state: RootState) => state.user.emails;

export default userSlice.reducer;
