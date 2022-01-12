import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import {
//   // persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts/contacts-reducer';
import { contactApi } from './contacts/contactSlice';

// const middleware = [
//   ...getDefaultMiddleware,
//   // {
//   // serializableCheck: {
//   //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   // },
//   // }
//   contactApi.middleware,
// ];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsPersistConfig, contactsReducer),
    // contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const persistStorage = { store, persistor };

// export default persistStorage;
// export default store;

setupListeners(store.dispatch);
