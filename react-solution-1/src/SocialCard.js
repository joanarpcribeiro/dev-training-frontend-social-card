import React, { Component } from 'react'
import Tooltip from './Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialCard.css'

export default class SocialCard extends Component {
  render() {
    let { name, city, profilePicture, backgroundPicture, commonFollowers } = this.props.user
    let nbOfFollowersToShow = Math.min(9, commonFollowers.length)
    let nbOfExtraFollowers = commonFollowers.length - nbOfFollowersToShow
    return (
      <div className="SocialCard">
        <div className="SocialCard__background-img" style={{backgroundImage: `url(${backgroundPicture})`}}></div>
        <img className="SocialCard__profile-picture" src={profilePicture} />
        <div className="SocialCard__main-info">
          <div className="SocialCard__name">{name}</div>
          <div className="text text--light">
            <FontAwesomeIcon className="icon icon--left" icon="map-marker-alt" />
            {city}
          </div>
        </div>
        <div className="SocialCard__call-to-action">
          <a className="button button--block button--primary" href="#">Follow</a>
          <a className="button button--block" href="#">Message</a>
        </div>

        <div className="SocialCard__footer">
          <div className="SocialCard__followers-text text text--light">
            <FontAwesomeIcon className="icon icon--left" icon="user" />
            <span className="SocialCard__nb-of-followers">{commonFollowers.length}</span> Followers you know
          </div>


          <div className="SocialCard__followers-group">
            {commonFollowers.slice(0,nbOfFollowersToShow).map((follower,i) => (<Tooltip className="SocialCard__followers-tooltip" text={follower.name}><img
                className="SocialCard__followers-picture"
                src={follower.picture}
                style={{zIndex: 50-i}}
              />
            </Tooltip>))}

            {nbOfExtraFollowers > 0 && <button className="SocialCard__followers-more">
              +{nbOfExtraFollowers}
            </button>}

          </div>
        </div>
      </div>
    )
  }
}
