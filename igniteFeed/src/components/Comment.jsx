import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/franciscoVieir.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Francisco Vieira</strong>
              <time title='11 de maio às 8h:13' dateTime='2022-05-11 08:13:43'>Aproximadamente há 1h atrás</time>
            </div>

            <button title='Deleter comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}