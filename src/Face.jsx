import styles from './Face.module.css';

const dotGrid = {
  1: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
  2: [[1, 0, 0], [0, 0, 0], [0, 0, 1]],
  3: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  4: [[1, 0, 1], [0, 0, 0], [1, 0, 1]],
  5: [[1, 0, 1], [0, 1, 0], [1, 0, 1]],
  6: [[1, 0, 1], [1, 0, 1], [1, 0, 1]],
}

function Face({position, number}) {
  return (
    <div class={`${styles.face} ${styles[position]}`}>
      <div class={styles.dotContainer}>
        {dotGrid[number].map((row, i) => (
          <div class={styles.row} key={i}>
            {row.map((dot, j) => (
              <div class={dot ? styles.dot : styles.empty} key={j} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Face;
