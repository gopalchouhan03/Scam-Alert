import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("user");
navigate("/login");
};

return (
<button className="btn btn-outline-danger" onClick={handleLogout}>
Logout
</button>
);
}

export default LogoutButton;