import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome {username} 🎉</h1>
        <p>You have successfully logged in.</p>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;