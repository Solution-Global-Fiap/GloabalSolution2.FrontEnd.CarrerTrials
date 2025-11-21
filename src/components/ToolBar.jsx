import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import ModeToggle from "./ModeToggle";

export default function Toolbar({ title }) {
  const navigate = useNavigate();

  return (
    <header
      className="w-full h-16 flex items-center gap-3 p-3 border-b"
      style={{
        background: "var(--bg-section)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="p-3 rounded-lg flex items-center justify-center"
        style={{
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      {title && (
        <h3
          className="text-base font-medium tracking-wide"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h3>
      )}

      {/* empurra tudo antes dele para a esquerda */}
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </header>
  );
}
