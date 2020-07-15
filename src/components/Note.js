import React from "react";
import { Card, Button, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const note = (props) => {
  return (
    <Card
      hoverable="true"
      key={props.id}
      id={props.id}
      title={<h3>{props.title}</h3>}
      extra={
        <Button danger type="ghost" onClick={() => props.onRemove(props.id)}>
          {<DeleteOutlined />}
        </Button>
      }
    >
      <Paragraph>{props.content}</Paragraph>
    </Card>
  );
};

export default note;
