import { NavLink } from "react-router";
import { Users, Target, UserCog } from "lucide-react";
import { Routes } from "../routes/routes";
import ModeToggle from "./ModeToggle";
import { getUser } from "@/hooks/useAuth";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme } = useTheme();

  const menuItems = [
    { name: "Desafios", path: Routes.Challenges, icon: <Target className="h-4 w-4" /> },
    { name: "Comunidade", path: Routes.Comunity, icon: <Users className="h-4 w-4" /> },
    { name: "Perfil", path: Routes.Profile.replace(":id", getUser().id) , icon: <UserCog className="h-4 w-4" /> },
  ];

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b backdrop-blur-sm" 
      style={{ 
        background: "var(--bg-section)",
        borderColor: "var(--border)"
      }}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          {theme === "light" ? (
            <img src="/Logo-Light.png" className="h-10 w-10" />
          ) : (
            <img src="/Logo-Dark.png" className="h-10 w-10" />
          )}
          <span className="font-semibold text-lg" style={{ color: "var(--text)" }}>
            CareerTrials
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-2 text-sm">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => {
                const baseClasses = `
                  flex items-center gap-2 px-4 py-2 rounded-lg transition
                  text-(--text)
                `;

                if (!isActive) return baseClasses;

                return baseClasses + " bg-primary text-(--text-inverted)";
              }}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <ModeToggle />
      </div>
    </header>
  );
}
