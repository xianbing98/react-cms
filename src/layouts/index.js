import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <header className={styles.header}>固定在顶部</header>
      {props.children}
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default BasicLayout;
