import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on  the map" />
    );

  const country = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <div className={styles.countryList}>
      {country.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </div>
  );
}