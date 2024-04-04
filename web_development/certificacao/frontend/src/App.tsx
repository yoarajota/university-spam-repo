import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import { Dashboard } from "./components/Dashboard";
import { InitialDashboard } from "./components/InitialDashboard";
import { Button } from "@/components/ui/button"


export default function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route
            path="/admin"
            element={<Dashboard />}
          />
          <Route
            path="/"
            element={<InitialDashboard />}
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}


const NavBar = () => {
  const navigate = useNavigate()

  return <>
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-[180px] flex-col border-r bg-background sm:flex justify-between">
      <nav className="flex flex-col items-center gap-4 px-2 py-2 mt-8">
        <Button
          className="w-24"
          variant="outline"
          onClick={() => navigate("/")}
        >
          Dashboard
        </Button>
      </nav>
      <nav className="flex flex-col items-center gap-4 px-2 py-2 mb-8">
        <Button
          className="w-24"
          onClick={() => navigate("/admin")}
        >
          Admin
        </Button>
      </nav>
    </aside>
    <Outlet />
  </>
}