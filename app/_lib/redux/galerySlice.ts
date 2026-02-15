import {createSlice} from "@reduxjs/toolkit"

//Types
type InitialStateType = {
    imageArray: string[];
    userId: string;
    downloadedFiles: string
}
// Initial State
const initialState: InitialStateType = {
    imageArray: [],
    userId: "",
    downloadedFiles: "",
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
        },
        markAsDownloaded(state, action) {
            // state.downloadedFiles.push(action.payload)
            state.downloadedFiles = action.payload
        }
    }
})

//export
export default galerySlice.reducer
export const {cacheImages, cacheId, markAsDownloaded} = galerySlice.actions