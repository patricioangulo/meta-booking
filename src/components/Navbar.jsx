import logo from './../assets/icons_assets/Logo.svg'

export function Navbar() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <nav data-testid="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservation</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>

  )
}