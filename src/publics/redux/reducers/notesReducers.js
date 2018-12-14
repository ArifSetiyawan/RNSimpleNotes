import { ADD_NOTE,DELETE_NOTE,EDIT_NOTE,TOGGLE_GRID } from '../actions/actionTypes'

const initialState = {
    notes: [],
    isGrid: false
}

export default notesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                notes: [...state.notes, action.payload],
                isGrid: state.isGrid
            }

        case EDIT_NOTE:
            return {
                notes: state.notes.map(note => (note.id == action.payload.id) ? action.payload : note),
                isGrid: state.isGrid
            }

        case DELETE_NOTE:
            return {
                notes: state.notes.filter(note => note.id !== action.payload.id),
                isGrid: state.isGrid
            }

        case TOGGLE_GRID:
            return {
                notes: [...state.notes],
                isGrid: !state.isGrid
            }

        default:
            return state;
    }
}