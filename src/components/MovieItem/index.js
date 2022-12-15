import {Popup} from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {moviesData} = props
  const {thumbnailUrl, videoUrl} = moviesData

  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-container"
      >
        {close => (
          <div className="pop-con">
            <button
              type="button"
              onClick={() => close()}
              // testid="closeButton"
              className="close-btn"
            >
              <IoMdClose />
            </button>

            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
            <h5> Naveen Dosani</h5>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
