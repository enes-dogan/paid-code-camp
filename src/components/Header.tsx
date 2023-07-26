import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img
          src='./src/img/logo-white.png'
          alt='Logo'
          className={styles.logo}
        />
      </div>
      <div className={styles.headerTextBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimaryMain}>Outdoors</span>
          <span className={styles.headingPrimarySub}>
            is where life happens
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
