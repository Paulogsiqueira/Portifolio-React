import { configureStore } from '@reduxjs/toolkit';
import sliceMenu from '@/redux/sliceMenu';

// Definindo o tipo do estado global
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    menu: sliceMenu,
  },
});

export default store;