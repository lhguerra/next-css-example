import styles from '../style.css'

// import wally from '/static/wally.jpg'

export default () => (
  <div className={ styles.main }>
    Welcome to next.js!
    <span className={ styles.truco }>truco</span>
    <img src='/static/wally.jpg' />
  </div>
)
