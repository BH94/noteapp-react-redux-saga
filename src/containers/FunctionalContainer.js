import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteLayout from "../components/NoteLayout";

import {
  changeInputTitle,
  changeInputContent,
  addNote,
  removeNote,
} from "../store/modules/note";

const NoteLayoutContainer = () => {
  const { inputTitle, inputContent, noteList } = useSelector(({ note }) => ({
    inputTitle: note.inputTitle,
    inputContent: note.inputContent,
    noteList: note.noteList,
  }));

  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    dispatch(changeInputTitle(e.target.value));
  };

  const handleChangeContent = (e) => {
    dispatch(changeInputContent(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(inputTitle, inputContent));
    dispatch(changeInputTitle(""));
    dispatch(changeInputContent(""));
  };

  const handleRemove = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <NoteLayout
      inputTitle={inputTitle}
      inputContent={inputContent}
      noteList={noteList}
      onChangeTitle={handleChangeTitle}
      onChangeContent={handleChangeContent}
      onSubmit={handleSubmit}
      onRemove={handleRemove}
    />
  );
};

export default NoteLayoutContainer;
