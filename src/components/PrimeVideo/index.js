import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesDataList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesDataList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="logo"
      />
      <div className="movie-container">
        <h1> Action Movies</h1>

        <MoviesSlider moviesList={actionMoviesDataList} />

        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesDataList} />
      </div>
    </div>
  )
}
export default PrimeVideo
