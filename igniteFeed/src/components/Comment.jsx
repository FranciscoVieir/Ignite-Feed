import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  // function handleLikeComment() {
  //   setLikeCount(likeCount + 1)
  // }

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

            <button onClick={handleDeleteComment} title='Deleter comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}