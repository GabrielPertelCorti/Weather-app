import styles from "./Card.module.css";
import type { WeatherData } from "../App";


type CardProps = {
  city: string,
  setCity: (city: string) => void,
  weatherData: WeatherData | null,
  getWeatherData: () => void
};

function Card({ city, setCity, weatherData, getWeatherData }: CardProps) {
  return (
    <div className={styles.biggerBox}>
      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeatherData}>
        <img
          className={styles.search_img}
          src="https://www.svgrepo.com/show/488200/find.svg"
          alt="lupa"
        />
      </button>

      {weatherData && (
        <div className={styles.mediumBox}>
          <h2 className={styles.city_name}>Tempo em {weatherData.name}</h2>

          <p className={styles.temperature}>{Math.round(Number(weatherData.main.temp.toFixed(2)))}ºC</p>

          <div className={styles.smallerBox}>
            <img
              className={styles.weather_img}
              src="https://openweathermap.org/img/wn/04n.png"
              alt="icon-info-weather"
            />{" "}
            <p className={styles.weather}> {weatherData.weather[0].description}</p>
          </div>

          <p className={styles.humidity}>Umidade: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Card;
