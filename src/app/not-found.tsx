import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glitch} data-text="404">
        404
      </div>
    </div>
  );
}