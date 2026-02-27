import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedUsers = localStorage.getItem("adminUsers");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      setUsers([
        { id: 1, name: "John Doe", email: "john@gmail.com" },
        { id: 2, name: "Jane Smith", email: "jane@gmail.com" }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("adminUsers", JSON.stringify(users));
  }, [users]);

  const addUser = () => {
    if (name === "" || email === "") {
      setError("Please fill all fields");
      return;
    }

    if (email.indexOf("@") === -1) {
      setError("Invalid email");
      return;
    }

    setError("");

    const newUser = {
      id: Date.now(),
      name: name,
      email: email
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  const deleteUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ color: "#3a4a5c", fontSize: "28px", marginBottom: "20px", fontWeight: "600" }}>
        User Management
      </h2>

      <div style={{
        backgroundColor: "#ffffff",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px",
        border: "1px solid #e0e6ed",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
        maxWidth: "500px"
      }}>
        <h3 style={{ color: "#3a4a5c", marginTop: 0, fontSize: "16px", fontWeight: "600" }}>
          Add New User
        </h3>

        {error && (
          <p style={{ color: "#d63030", marginBottom: "10px", backgroundColor: "#ffe5e5", padding: "8px", borderRadius: "5px", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #d0d8e0",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa",
            color: "#3a4a5c",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #d0d8e0",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa",
            color: "#3a4a5c",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
        />

        <button
          onClick={addUser}
          style={{
            width: "100%",
            padding: "8px 15px",
            backgroundColor: "#4a6a8a",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#3a5a7a";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4a6a8a";
          }}
        >
          Add User
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "530px",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #d0d8e0",
          borderRadius: "5px",
          backgroundColor: "#ffffff",
          color: "#3a4a5c",
          fontSize: "14px",
          boxSizing: "border-box"
        }}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "15px"
      }}>
        {filteredUsers.length === 0 ? (
          <p style={{ color: "#7a8a9c", gridColumn: "1 / -1", textAlign: "center", padding: "20px" }}>
            No users found
          </p>
        ) : (
          filteredUsers.map(user => (
            <div
              key={user.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e6ed",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#4a6a8a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "12px"
              }}>
                {user.name.charAt(0).toUpperCase()}
              </div>

              <h3 style={{
                color: "#3a4a5c",
                fontSize: "16px",
                fontWeight: "600",
                margin: "0 0 8px 0"
              }}>
                {user.name}
              </h3>

              <p style={{
                color: "#7a8a9c",
                fontSize: "13px",
                margin: "0 0 12px 0",
                wordBreak: "break-all"
              }}>
                {user.email}
              </p>

              <div style={{
                display: "flex",
                gap: "8px"
              }}>
                <button
                  onClick={() => deleteUser(user.id)}
                  style={{
                    flex: 1,
                    padding: "6px 10px",
                    backgroundColor: "#d63030",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#c02020";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#d63030";
                  }}
                >
                  Delete
                </button>

                <button
                  style={{
                    flex: 1,
                    padding: "6px 10px",
                    backgroundColor: "#e8ecf2",
                    color: "#3a4a5c",
                    border: "1px solid #d0d8e0",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#dce2ea";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#e8ecf2";
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;