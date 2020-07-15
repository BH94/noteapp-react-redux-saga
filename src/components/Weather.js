import React from "react";
import { Button, Descriptions, Spin } from "antd";
import { LoadingOutlined, QuestionOutlined } from "@ant-design/icons";

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const weather = ({ data, error, loading, getWeatherData }) => {
  return (
    <div
      style={{
        padding: "1rem 0.5rem",
        margin: "1rem 1rem",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Button onClick={getWeatherData}>날씨 불러오기</Button>
      <Descriptions bordered title="Weather">
        <Descriptions.Item label="Area">
          {loading && <Spin indicator={loadingIcon} />}
          {error ? <QuestionOutlined /> : data.area}
        </Descriptions.Item>
        <Descriptions.Item label="Temp">
          {loading && <Spin indicator={loadingIcon} />}
          {error ? <QuestionOutlined /> : data.temp}
        </Descriptions.Item>
        <Descriptions.Item label="Weather">
          {loading && <Spin indicator={loadingIcon} />}
          {error ? <QuestionOutlined /> : data.weather}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default weather;
