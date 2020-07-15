import React from "react";
import Note from "./Note";
import AddForm from "./AddNoteForm";
import { Layout } from "antd";

const noteLayout = ({
  inputTitle,
  inputContent,
  noteList,
  onChangeTitle,
  onChangeContent,
  onSubmit,
  onRemove,
}) => {
  const notes = noteList.map((n) => (
    <Note
      key={n.id}
      title={n.title}
      content={n.content}
      id={n.id}
      onRemove={() => onRemove(n.id)}
    />
  ));

  return (
    <Layout>
      <AddForm
        inputTitle={inputTitle}
        inputContent={inputContent}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onSubmit={onSubmit}
      ></AddForm>
      <div>{notes}</div>
    </Layout>
  );
};

export default noteLayout;
