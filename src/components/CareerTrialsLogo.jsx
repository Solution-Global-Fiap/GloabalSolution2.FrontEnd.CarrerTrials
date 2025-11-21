import { Activity } from "react";
import { useTheme } from "./ThemeProvider";

export default function CareerTrialsLogo({ hideText = false }) {
    const { theme } = useTheme();

    return (
        <div className="flex items-center gap-2">
            <img
                src={theme === "light" ? "/Logo-Light.png" : "/Logo-Dark.png"}
                className="h-10 w-10 transition-none"
            />
            <Activity mode={hideText ? "hidden" : "visible"}>
                <span className="font-semibold text-lg" style={{ color: "var(--text)" }}>
                    CareerTrials
                </span>
            </Activity>
        </div>
    );
}