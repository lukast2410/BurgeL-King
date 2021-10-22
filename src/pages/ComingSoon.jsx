import ReactPlayer from 'react-player'
import styles from '../styles/ComingSoon.module.scss'

export default function ComingSoon() {
	return (
		<div className={styles.comingSoon}>
			<div className={styles.title}>
				<h1>Coming Soon</h1>
				<h2>Meet the Beef Burger</h2>
			</div>
			<div className={styles.comingSoonVideo}>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=a8069RMHPzs'
            playing={true}
            muted={true}
            width='100%'
            height='100%'
            loop={true}
            className={styles.reactPlayer}
            controls
          />
        </div>
			</div>
			<div className={styles.container}>
        <div className={styles.heading}>
          <img src="/assets/beef-burger2.png" alt="" />
          <h1>Smoked Bacon Beef Burger</h1>
          <h2>950 Cal</h2>
        </div>
        <div className={styles.description}>
          <p>
          Features a flame-grilled patty made from plants topped with tomatoes, lettuce, mayo, ketchup, pickles, and onions. *For guests looking for a meat-free option, a non-broiler method of preparation is available upon request. Certified Angus Beef, American cheese, applewood smoked bacon, lettuce, tomatoes, mayo, toasted bun.
          </p>
        </div>
      </div>
		</div>
	)
}
