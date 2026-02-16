import {createSlice} from "@reduxjs/toolkit"

//Types
type InitialStateType = {
    imageArray: string[] | null;
    userId: string;
    downloadedFiles: string
}
// Initial State
const initialState: InitialStateType = {
    imageArray: null,
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
        },
        galeryToInitialState(state) {
            state.imageArray = null
            state.userId = ""
        }
    }
})

//export
export default galerySlice.reducer
export const {cacheImages, cacheId, markAsDownloaded, galeryToInitialState} = galerySlice.actions