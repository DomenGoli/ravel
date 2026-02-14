import { configureStore } from "@reduxjs/toolkit";
import galeryReducer from "@/app/_lib/redux/galerySlice"

const store = configureStore({
    reducer: {
        galery: galeryReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false})
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
