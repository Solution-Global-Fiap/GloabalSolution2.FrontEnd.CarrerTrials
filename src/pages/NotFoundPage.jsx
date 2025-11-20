import { Link } from "react-router";
import { Routes } from "../routes/routes";
import GlobalThemeToggle from "@/components/GlobalThemeToggle";

export default function NotFoundPage() {
  return (
    <div>
      <GlobalThemeToggle />
      <div className="flex items-center justify-center min-h-screen bg-(--bg) text-(--text)">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
          <p className="text-(--text-secondary) mb-4">
            Desculpe, a página que você está procurando não existe.
          </p>
          <Link
            to={Routes.Root}
            className="text-white bg-primary px-4 py-2 rounded hover:bg-(--primary-hover) transition"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
