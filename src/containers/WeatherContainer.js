import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Weather from "../components/Weather";
import { getWeather } from "../store/modules/weather";

const WeatherContainer = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(({ weather }) => ({
    data: weather.data,
    loading: weather.loading,
    error: weather.error,
  }));

  const getWeatherData = () => {
    dispatch(getWeather());
  };

  return (
    <Weather
      data={data}
      error={error}
      loading={loading}
      getWeatherData={getWeatherData}
    />
  );
};

export default WeatherContainer;
