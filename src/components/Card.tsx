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
      <div className={styles.searchContainer}>
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
      </div>

      {weatherData && (
        <div className={styles.mediumBox}>
          <h2 className={styles.city_name}>{weatherData.name}</h2>

          <p className={styles.temperature}>
            {Math.round(weatherData.main.temp)}ºC
          </p>

          <div className={styles.smallerBox}>
            <img
              className={styles.weather_img}
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="icon-info-weather"
            />
            <p className={styles.weather}>
              {weatherData.weather[0].description}
            </p>
          </div>

          <p className={styles.humidity}>Umidade: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Card;
