import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
    const logout = () => {
        window.open("http://localhost:7575/auth/logout", "_self");
    };

    return (
        <div class="header">
            <h1>Secret Family Recipes</h1>
            <label class="toggle">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
            {user ? (
                <ul className="list">
                    <li className="listItem">
                        <img
                            src={user.photos[0].value}
                            alt=""
                            className="avatar"
                        />
                    </li>
                    <li className="listItem">{user.displayName}</li>
                    <li className="listItem" onClick={logout}>
                        Logout
                    </li>
                </ul>
            ) : (
                <Link className="link" to="login">
                    Login
                </Link>
            )}
        </div>
    );
};
export default NavBar;
