import Toolbar from "@/components/ToolBar";
import { Outlet } from "react-router";

export default function ToolBarLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Toolbar title="Voltar para comunidade" />
      <div className="flex-1 max-w-6xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}
