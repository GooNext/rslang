import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
// style={{ backgroundColor: bgColor, ...style }}
function Card({ photo, name, github, description, bgColor, role }) {
  return (
    <div className={styles.CardWrapper}>
      <img className={styles.image} src={photo} alt="photoDev" />
      <div className={styles.TextWrapper}>
        <div className={styles.Name}>
          <a
            href={github}
            className={styles.IconGit}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/images/Team/iconGit.svg" alt="iconGit" />
          </a>
          <div className={styles.NameDev}>
            {name}
            <br />
            {role}
          </div>
        </div>
        <p className={styles.TextDev}>{description}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  github: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.object,
}

Card.defaultProps = {
  photo: '',
  name: '',
  github: '',
  description: '',
  bgColor: '',
  role: '',
}

export default Card
