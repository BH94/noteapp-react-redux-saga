import React from "react";
import { Card, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const addForm = (props) => {
  return (
    <Card
      key="addForm"
      id="addForm"
      title={
        <Input
          required
          value={props.inputTitle}
          placeholder="제목을 입력하세요."
          style={{ width: "60%" }}
          onChange={props.onChangeTitle}
        ></Input>
      }
      extra={
        <Button type="primary" onClick={props.onSubmit}>
          {<PlusOutlined />}
        </Button>
      }
    >
      <TextArea
        placeholder="내용을 입력하세요."
        rows={3}
        onChange={props.onChangeContent}
        value={props.inputContent}
      ></TextArea>
    </Card>
  );
};

export default addForm;
