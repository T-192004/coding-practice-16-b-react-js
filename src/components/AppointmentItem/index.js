// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {eachAppointment, toggleIsFavorite} = props
  const {id, title, date, isFavoraite} = eachAppointment
  const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const favoraiteImg = isFavoraite ? (
    <img
      className="star-img"
      src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
      alt="star"
    />
  ) : (
    <img
      className="star-img"
      src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
      alt="star"
    />
  )
  const OnClickUpdateFavoraite = () => {
    toggleIsFavorite(id)
  }
  return (
    <li className="appointment-list-card">
      <div className="header">
        <p className="title">{title}</p>
        <button
          className="favoraite-btn"
          type="button"
          data-testid="star"
          onClick={OnClickUpdateFavoraite}
        >
          {favoraiteImg}
        </button>
      </div>
      <p className="date">{formatedDate}</p>
    </li>
  )
}

export default AppointmentItem
