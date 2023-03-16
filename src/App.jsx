import { createSignal } from "solid-js";
import styles from './App.module.css';
import Face from './Face';

function getRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  const [roll, setRoll] = createSignal(0);

  return (
    <div class={styles.App}>
      <div class={styles.container}>
        <div class={styles.cube} data-roll={roll()}>
          <Face position="front" number="1" />
          <Face position="top" number="2" />
          <Face position="left" number="3" />
          <Face position="right" number="4" />
          <Face position="bottom" number="5" />
          <Face position="back" number="6" />
        </div>
      </div>
      <button class={styles.button} onClick={() => setRoll(getRoll())}>
        Roll Me!
      </button>
      {roll() !== 0 && (
        <div class={styles.result}>
          You rolled a <span class={styles.number}>{roll()}!</span>
        </div>
      )}
    </div>
  );
}

export default App;
