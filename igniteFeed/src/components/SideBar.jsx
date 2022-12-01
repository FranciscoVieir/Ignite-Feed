import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="" />

      <div className={styles.profile}>

        <Avatar src='https://github.com/franciscovieir.png' />

        <strong>Francisco Vieira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  )
}