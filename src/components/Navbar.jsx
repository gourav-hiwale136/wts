const Navbar = ({ toggle }) => {
  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #d0d8e0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
        height: "60px"
      }}
    >
      <h1
        style={{
          color: "#3a4a5c",
          fontSize: "24px",
          margin: 0,
          fontWeight: "600"
        }}
      >
        Admin Panel
      </h1>

      <button
        onClick={toggle}
        style={{
          backgroundColor: "#e8ecf2",
          color: "#3a4a5c",
          border: "1px solid #c5cfd9",
          padding: "10px 15px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#dce2ea";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#e8ecf2";
        }}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;