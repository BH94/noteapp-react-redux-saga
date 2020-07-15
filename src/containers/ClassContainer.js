import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as noteActions from "../store/modules/note";

import NoteLayout from "../components/NoteLayout";

class NoteListContainer extends Component {
  //inputTitle 변경 이벤트
  handleChangeTitle = (e) => {
    const { NoteActions } = this.props;
    NoteActions.changeInputTitle(e.target.value);
  };

  //inputContent 변경 이벤트
  handleChangeContent = (e) => {
    const { NoteActions } = this.props;
    NoteActions.changeInputContent(e.target.value);
  };

  //등록 이벤트
  handleSubmit = (e) => {
    e.preventDefault();
    const { NoteActions, inputTitle, inputContent } = this.props;
    NoteActions.addNote(inputTitle, inputContent);
    NoteActions.changeInputTitle("");
    NoteActions.changeInputContent("");
  };

  //삭제 이벤트
  handleRemove = (id) => {
    const { NoteActions } = this.props;
    NoteActions.removeNote(id);
  };

  render() {
    const { inputTitle, inputContent, noteList } = this.props;
    return (
      <NoteLayout
        inputTitle={inputTitle}
        inputContent={inputContent}
        noteList={noteList}
        onChangeTitle={this.handleChangeTitle}
        onChangeContent={this.handleChangeContent}
        onSubmit={this.handleSubmit}
        onRemove={this.handleRemove}
      />
    );
  }
}

//props값으로 불러올 store의 state값
const mapStateToProps = ({ note }) => ({
  inputTitle: note.inputTitle,
  inputContent: note.inputContent,
  noteList: note.noteList,
});

//props로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch) => ({
  NoteActions: bindActionCreators(noteActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer);
