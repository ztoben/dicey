import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.container}>
        <div class={styles.cube}>
          <div class={`${styles.face} ${styles.top}`}>Top</div>
          <div class={`${styles.face} ${styles.bottom}`}>Bottom</div>
          <div class={`${styles.face} ${styles.left}`}>Left</div>
          <div class={`${styles.face} ${styles.right}`}>Right</div>
          <div class={`${styles.face} ${styles.front}`}>Front</div>
          <div class={`${styles.face} ${styles.back}`}>Back</div>
        </div>
      </div>
    </div>
  );
}

export default App;
