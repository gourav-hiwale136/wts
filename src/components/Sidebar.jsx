import { useNavigate } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#ffffff",
        color: "#3a4a5c",
        padding: "20px",
        minHeight: "100vh",
        borderRight: "1px solid #d0d8e0"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "20px",
          color: "#5a6a7c",
          fontWeight: "600"
        }}
      >
        Menu
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <button
          onClick={() => handleNavClick("/dashboard")}
          style={{
            backgroundColor: "#e8ecf2",
            color: "#3a4a5c",
            border: "1px solid #c5cfd9",
            padding: "15px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            textAlign: "left",
            transition: "0.3s",
            fontWeight: "500"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#dce2ea";
            e.target.style.color = "#2a3a4c";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#e8ecf2";
            e.target.style.color = "#3a4a5c";
          }}
        >
          📊 Dashboard
        </button>

        <button
          onClick={() => handleNavClick("/users")}
          style={{
            backgroundColor: "#e8ecf2",
            color: "#3a4a5c",
            border: "1px solid #c5cfd9",
            padding: "15px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            textAlign: "left",
            transition: "0.3s",
            fontWeight: "500"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#dce2ea";
            e.target.style.color = "#2a3a4c";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#e8ecf2";
            e.target.style.color = "#3a4a5c";
          }}
        >
          👥 Users
        </button>

        <button
          onClick={() => handleNavClick("/settings")}
          style={{
            backgroundColor: "#e8ecf2",
            color: "#3a4a5c",
            border: "1px solid #c5cfd9",
            padding: "15px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            textAlign: "left",
            transition: "0.3s",
            fontWeight: "500"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#dce2ea";
            e.target.style.color = "#2a3a4c";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#e8ecf2";
            e.target.style.color = "#3a4a5c";
          }}
        >
          ⚙️ Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;