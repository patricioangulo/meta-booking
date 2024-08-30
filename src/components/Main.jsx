

import { useState } from "react";

export function Main() {
  // const see = today.toISOString()
  // console.log(see)
  // const [minDate, setMinDate] = useState('2024-08-30')

  const minDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0];
  }

  const maxDate = () => {
    const today = new Date()
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    return nextWeek.toISOString().split('T')[0];
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject)
  }

  return (
    <main>
      <section id="hero" className="markazi">
        <h1>Booking a table</h1>
        <h2>Chicago</h2>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" name="res-date" id="res-date" min={minDate()} max={maxDate()} />
        <label htmlFor="res-time">Choose time</label>
        <select name="res-time" id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guest">Number of guest</label>
        <input type="number" name="guest" id="guest" placeholder="1" min="1" max="10" />
        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your Reservation</button>
      </form>
    </main>
  )
}

