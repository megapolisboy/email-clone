import {
  configureStore,
  ThunkAction,
  Action,
  MiddlewareArray,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";
import { rootSaga } from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
