import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
    const style = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
    });
    return (
        <>
            <h1>React Router</h1>
            <main style={{ padding: "1rem 0" }}>
                <Outlet />
            </main>
        </>
    );
};
export default Layout;
