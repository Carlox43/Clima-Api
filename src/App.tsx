import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import Spiners from "./components/Spiners/Spiners";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } =
    useWeather();

  return (
    <>
      <h1 className={styles.title}>clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spiners />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad No encontrada</Alert>}
      </div>
    </>
  );
}

export default App;
