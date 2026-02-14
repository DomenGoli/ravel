import {createSlice} from "@reduxjs/toolkit"

//Types
type InitialStateType = {
    imageArray: string[];
    userId: string
}
// Initial State
const initialState: InitialStateType = {
    imageArray: [],
    userId: ""
}

// reducer
const galerySlice = createSlice({
    name:"galery",
    initialState,
    reducers: {
        cacheImages(state,action){
            state.imageArray = action.payload
        },
        cacheId(state,action){
            state.userId = action.payload
        }
    }
})

//export
export default galerySlice.reducer
export const {cacheImages, cacheId} = galerySlice.actions