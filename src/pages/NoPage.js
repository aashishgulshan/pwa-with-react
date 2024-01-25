import { Link } from "react-router-dom";
function NoPage() {
  return (
    <div className="text-center">
      <h1>404</h1>
      <p>App Not Found !!</p>
      <Link to="/">HOME</Link>
    </div>
  );
}

export default NoPage;
