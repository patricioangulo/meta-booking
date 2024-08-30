export function Main() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
      <section id="hero" className="markazi">
        <h1>Booking a table</h1>
        <h2>Chicago</h2>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" name="res-date" id="res-date" />
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

