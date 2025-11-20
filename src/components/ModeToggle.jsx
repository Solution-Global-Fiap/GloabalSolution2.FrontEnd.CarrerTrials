import { useTheme } from "./ThemeProvider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  function toggle() {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      size="icon"
      onClick={toggle}
      className="rounded-full focus-visible:ring-0 focus:ring-0 focus:outline-none"
      style={{ background: "var(--primary)", color: "white" }}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-white"/>
      ) : (
        <Sun className="h-5 w-5 text-white" />
      )}
    </Button>
  )
}
