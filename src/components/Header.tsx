import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img
          src='./src/img/logo-whitee.png'
          alt='Logo'
          className={styles.logo}
        />
      </div>
      <div className={styles.headerTextBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimaryMain}>paidCodeCamp($)</span>
          <span className={styles.headingPrimarySub}>
            a paid coding bootcamp (not freeCodeCamp)
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
