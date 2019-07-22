import * as types from "./../constants/ActionTypes";
import { bindActionCreators } from "redux";
import v4 from 'uuid/v4';

export const nextLyric = (currentSongId) => ({
    type: types.NEXT_LYRIC,
    currentSongId
});

export const restartSong = (currentSongId) => ({
    type: types.RESTART_SONG,
    currentSongId
});

export const changeSong = (newSelectedSongId) => ({
    type: types.CHANGE_SONG,
    newSelectedSongId
});

export function fetchSongId(title) {
    return function (dispatch) {
        const localSongId = v4();
        title = title.replace(' ', '_';
        return fetch('http://api.musixmatch.com/ws/1.1/track.search?&q_track=' + title + '&page_size=1&s_track_rating=desc&apikey=f3ac453719ca5698c7e72bd9de753ba1').then(
            response => response.json(),
            error => console.log('Ya done fucked up.', error)
        ).then(function (json) {
            console.log('SHIT CAME BACK:', json)
        });
    };
}