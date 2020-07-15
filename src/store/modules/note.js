import { createAction, handleActions } from "redux-actions";

const INPUT_TITLE = "note/INPUT_TITLE";
const INPUT_CONTENT = "note/INPUT_CONTENT";
const ADD_NOTE = "note/ADD_NOTE";
const REMOVE_NOTE = "note/REMOVE_NOTE";

let id = 0;

export const changeInputTitle = createAction(INPUT_TITLE, (title) => title);
export const changeInputContent = createAction(
  INPUT_CONTENT,
  (content) => content
);
export const addNote = createAction(ADD_NOTE, (title, content) => ({
  id: ++id,
  title,
  content,
}));
export const removeNote = createAction(REMOVE_NOTE, (id) => id);

const initialState = {
  inputTitle: "",
  inputContent: "",
  noteList: [],
};

export default handleActions(
  {
    [INPUT_TITLE]: (state, action) => ({
      ...state,
      inputTitle: action.payload,
    }),
    [INPUT_CONTENT]: (state, action) => ({
      ...state,
      inputContent: action.payload,
    }),
    [ADD_NOTE]: (state, action) => ({
      ...state,
      noteList: state.noteList.concat({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
      }),
    }),
    [REMOVE_NOTE]: (state, action) => ({
      ...state,
      noteList: state.noteList.filter((note) => note.id !== action.payload),
    }),
  },
  initialState
);
