import { NavLink } from "react-router";
import { Users, Target, UserCog, Menu, X } from "lucide-react";
import { Routes } from "../routes/routes";
import ModeToggle from "./ModeToggle";
import { getUser } from "@/hooks/useAuth";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import CareerTrialsLogo from "./CareerTrialsLogo";

export default function Navbar() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Desafios", path: Routes.Challenges, icon: <Target className="h-4 w-4" /> },
    { name: "Comunidade", path: Routes.Comunity, icon: <Users className="h-4 w-4" /> },
    { name: "Perfil", path: Routes.Profile.replace(":id", getUser().id), icon: <UserCog className="h-4 w-4" /> },
  ];

  return (
    <header
      className="fixed top-0 z-50 w-full border-b"
      style={{ background: "var(--bg-section)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">

        <CareerTrialsLogo/>

        <nav className="hidden md:flex items-center gap-2 text-sm">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition 
                ${isActive ? "bg-primary text-(--text-inverted)" : "text-(--text)"}`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex">
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <ModeToggle />
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg"
            style={{ background: "var(--bg)", color: "var(--text)" }}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div
            className="absolute top-0 right-0 h-full w-64 p-6 flex flex-col gap-6 shadow-xl"
            style={{ background: "var(--bg)" }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Menu
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg"
                style={{ background: "var(--primary)", color: "white" }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 mt-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                      flex items-center gap-3 px-4 py-3 rounded-lg font-medium
                      ${isActive ? "bg-primary text-white" : "text-(--text)"}
                      transition-all
                    `
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
