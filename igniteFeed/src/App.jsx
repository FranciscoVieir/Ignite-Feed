import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';

import './global.css'

import styles from './App.module.css'

const ṕosts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/franciscovieir.png',
      name: 'Francisco Vieira',
      role: 'Front End Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-02 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LucasDants.png',
      name: 'Lucas Dantas',
      role: 'Front End Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-29 20:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {ṕosts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

