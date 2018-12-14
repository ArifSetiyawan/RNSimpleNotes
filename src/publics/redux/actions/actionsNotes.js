import { ADD_NOTE,DELETE_NOTE,EDIT_NOTE,TOGGLE_GRID } from '../actions/actionTypes';

//actions ADD NOTES
export const addNote = notes => ({
    type: ADD_NOTE,
    payload: notes
})

//actions DELETE NOTES
export const deleteNote = notes => ({
    type: DELETE_NOTE,
    payload: notes
})

//actions EDIT NOTES
export const editNote = notes => ({
    type: EDIT_NOTE,
    payload: notes
})

//actions TOGGLE GRID
export const gridNote = notes => ({
    type: TOGGLE_GRID,
    payload: notes
})