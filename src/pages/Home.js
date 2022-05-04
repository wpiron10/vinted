import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/offer"> Go to offer </Link>
      </div>
      <p>Hello, cest Home</p>
    </div>
  );
};
export default Home;
