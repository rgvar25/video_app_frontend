import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for the web
import authSlice from "./authSlice.js";

//for making store persistent over refreshes
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
});

const persistor = persistStore(store);

export { store, persistor };
