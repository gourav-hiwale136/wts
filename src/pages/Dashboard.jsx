import React from "react";
const Dashboard = () => {
  return (
    <div>
      <h2 style={{ color: "#3a4a5c", fontSize: "28px", marginBottom: "30px", fontWeight: "600" }}>
        Dashboard
      </h2>

      {/* Stats */}
      <div style={{display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",gap: "20px",marginBottom: "30px"}}>
        <div style={{backgroundColor: "#ffffff",color: "#3a4a5c",padding: "20px",borderRadius: "8px",border: "1px solid #e0e6ed",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)"}}>
          <h3 style={{ margin: 0, color: "#7a8a9c", fontSize: "14px" }}>Total Users</h3>
          <p style={{ fontSize: "32px", fontWeight: "700", margin: "10px 0 0 0", color: "#4a6a8a" }}>150</p>
        </div>

        <div style={{backgroundColor: "#ffffff",color: "#3a4a5c",padding: "20px",borderRadius: "8px",border: "1px solid #e0e6ed",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)"}}>
          <h3 style={{ margin: 0, color: "#7a8a9c", fontSize: "14px" }}>Active Users</h3>
          <p style={{ fontSize: "32px", fontWeight: "700", margin: "10px 0 0 0", color: "#5a7a7f" }}>100</p>
        </div>

        <div style={{backgroundColor: "#ffffff",color: "#3a4a5c",padding: "20px",borderRadius: "8px",border: "1px solid #e0e6ed",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)"}}>
          <h3 style={{ margin: 0, color: "#7a8a9c", fontSize: "14px" }}>Growth</h3>
          <p style={{ fontSize: "32px", fontWeight: "700", margin: "10px 0 0 0", color: "#6a6a9a" }}>1000</p>
        </div>
      </div>

      {/* Welcome Message */}
      <div style={{backgroundColor: "#ffffff",color: "#3a4a5c",padding: "20px", borderRadius: "8px",border: "1px solid #e0e6ed",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)"}}>
        <h3 style={{ margin: "0 0 10px 0" }}>Welcome to Admin Panel</h3>
        <p style={{ margin: "0", color: "#7a8a9c" }}>Manage your users and settings from the sidebar menu.</p>
      </div>
    </div>
  );
};

export default Dashboard;