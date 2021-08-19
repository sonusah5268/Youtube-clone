import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'
function VideoCard({ image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
         {/* <img src="" alt=""/> */}
          <img className="videoCard_thumbnail" src={image} alt=""/>
          <div className="videoCard_info">
            <Avatar 
                className="videoCard__avatar"
                alt={channel}
                src={channelImage}
              />
              <div className="videoCrad__text">
                  <h4>{title}</h4>
                  <p>{channel}</p>
                  <p>
                      {views} . {timestamp}
                  </p>

              </div>

          </div>
        </div>
    )
}

export default VideoCard
