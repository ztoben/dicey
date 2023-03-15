import styles from './App.module.css';
import Face from './Face';

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.container}>
        <div class={styles.cube}>
          <Face position="top" number="1" />
          <Face position="bottom" number="2" />
          <Face position="left" number="3" />
          <Face position="right" number="4" />
          <Face position="front" number="5" />
          <Face position="back" number="6" />
        </div>
      </div>
    </div>
  );
}

export default App;
