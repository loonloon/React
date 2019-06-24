import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "thank u, next", duration: "3:05" },
        { title: "Dancing With A Stranger", duration: "5:05" },
        { title: "Please Me", duration: "3:15" },
        { title: "I Can't Get Enough", duration: "1:45" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});