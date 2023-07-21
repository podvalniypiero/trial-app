import styles from './Post.module.scss'
export default function Post() {
  return (
    <div className={styles.post__container}>
      <img
        src="https://cloud.codesupply.co/endpoint/react/images/post-img-1.jpg"
        srcset="https://cloud.codesupply.co/endpoint/react/images/post-img-1.jpg 500w, https://cloud.codesupply.co/endpoint/react/images/post-img-1@2x.jpg 1000w"
        width="360px"
        alt="img"
      />
      <div className={styles.post__container__data}>
        <h4>Lifestyle</h4>
        <h2>Eat Right For Your Exercise Regime</h2>
        <ul> <li id={styles.container__data__author}>Niek Bove</li>
            
                <li><svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7"/></svg>
                April 8, 2018</li>
                <li><svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7"/></svg>
                3K Views</li>
            
        </ul>
      <p>Structured gripped tape invisible moulded cups for<br/>sauppor firm hold strong powermesh front liner sport <br/> detail. Warmth comfort hangs loosely from the body large <br/> pocket at the front full button…</p>
      </div>
    </div>
  )
}
