import styles from './CountryItem.module.css';

function CountryItem({ country }) {
  const { emoji } = country;
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>name</span>
    </li>
  );
}

export default CountryItem;
