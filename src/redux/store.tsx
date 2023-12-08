import { configureStore } from '@reduxjs/toolkit';
import sliceMenu from '@/redux/sliceMenu';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    menu: sliceMenu,
  },
});
export type AppDispatch = typeof store.dispatch;

export default store;