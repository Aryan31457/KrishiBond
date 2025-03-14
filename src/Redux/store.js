import { combineReducers, configureStore } from "@reduxjs/toolkit";

import FarmerSlice from "./Farmer/FarmerSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CompanySlice from "./Company/CompanySlice";
import AuthSlice from "./Auth/AuthSlice";

const rootReducer = combineReducers({
  farmer: FarmerSlice,
  company: CompanySlice,
  auth: AuthSlice,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
