import { useState, useEffect } from "react";

const Settings = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [adminEmail, setAdminEmail] = useState("admin@gmail.com");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("adminSettings");
    if (saved) {
      const data = JSON.parse(saved);
      setAdminName(data.name);
      setAdminEmail(data.email);
    }
  }, []);

  const saveSettings = () => {
    if (adminName === "" || adminEmail === "") {
      alert("Please fill all fields");
      return;
    }

    const settings = {
      name: adminName,
      email: adminEmail
    };

    localStorage.setItem("adminSettings", JSON.stringify(settings));
    setMessage("Settings saved!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div>
      <h2 style={{ color: "#3a4a5c", fontSize: "28px", marginBottom: "30px", fontWeight: "600" }}>
        Settings
      </h2>

      {message && (
        <p style={{
          backgroundColor: "#e6f5f2",
          color: "#2a6a5a",
          padding: "15px",
          borderRadius: "5px",
          marginBottom: "20px",
          border: "1px solid #c5dfd8"
        }}>
          ✓ {message}
        </p>
      )}

      <div style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e0e6ed",
        maxWidth: "500px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)"
      }}>
        <h3 style={{ color: "#3a4a5c", marginTop: 0, fontWeight: "600" }}>Admin Profile</h3>

        <label style={{ display: "block", color: "#5a6a7c", marginBottom: "8px", fontWeight: "500", fontSize: "14px" }}>
          Admin Name
        </label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #d0d8e0",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa",
            color: "#3a4a5c",
            boxSizing: "border-box"
          }}
        />

        <label style={{ display: "block", color: "#5a6a7c", marginBottom: "8px", fontWeight: "500", fontSize: "14px" }}>
          Admin Email
        </label>
        <input
          type="email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #d0d8e0",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa",
            color: "#3a4a5c",
            boxSizing: "border-box"
          }}
        />

        <button
          onClick={saveSettings}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4a6a8a",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#3a5a7a";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4a6a8a";
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
