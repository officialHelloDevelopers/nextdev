import './not-found.css'

export default function NotFound() {
return (
  <div className="not-found">
    <div className="container">
      <h1>404... Not Found!</h1>
      <h2>Oops! Page not found.</h2>
      <p>The page you're looking for doesn't exist or have been moved.</p>
      <a href="/">Go Home</a>
    </div>
  </div>
)
}