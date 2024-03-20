// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {appointmentList: [], appTitle: '', appDate: '', isStarred: false}

  updateTitle = event => {
    this.setState({appTitle: event.target.value})
  }

  updateDate = event => {
    this.setState({appDate: event.target.value})
  }

  updateAppoitment = event => {
    event.preventDefault()
    const {appTitle, appDate} = this.state
    const newAppointmentList = {
      id: uuidv4(),
      title: appTitle,
      date: appDate,
      isFavoraite: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointmentList],
      appTitle: '',
      appDate: '',
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isFavoraite: !eachAppointment.isFavoraite}
        }
        return eachAppointment
      }),
    }))
  }

  updateStarred = () => {
    this.setState(prevState => ({
      isStarred: !prevState.isStarred
    }))
  }

  render() {
    const {appointmentList, appTitle, appDate, isStarred} = this.state
    const resultList = [...appointmentList]
    if (isStarred === true) {
      resultList = appointmentList.filter(
        eachAppointment => eachAppointment.isFavoraite === true,
      )
      console.log(resultList)
    }
    return (
      <div className="app-container">
        <div className="app-card">
          <div className="content-card-container">
            <form
              className="content-form-container"
              onSubmit={this.updateAppoitment}
            >
              <h1 className="title">Add Appointment</h1>
              <label className="input-label" htmlFor="inputTitle">
                TITLE
              </label>
              <input
                className="input-box"
                type="text"
                id="inputTitle"
                placeholder="Title"
                value={appTitle}
                onChange={this.updateTitle}
              />
              <label className="input-label" htmlFor="inputDate">
                DATE
              </label>
              <input
                className="input-box"
                type="date"
                id="inputDate"
                placeholder="dd/MM/yyyy"
                value={appDate}
                onChange={this.updateDate}
              />
              <button className="submit-btn" type="submit">
                Add
              </button>
            </form>
            <img
              className="image"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr className="line" />
          <div className="appointments-card">
            <div className="appointment-header">
              <h1 className="title">Appointments</h1>
              <button
                className="header-btn"
                type="button"
                onClick={this.updateStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list">
              {resultList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  eachAppointment={eachAppointment}
                  toggleIsFavorite={this.toggleIsFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
