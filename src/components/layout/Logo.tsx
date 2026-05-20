import { Link } from "@tanstack/react-router";
import websiteLogo from "@/assets/Website logo.png";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="Champ Lanka home">
      <img
        src={websiteLogo}
        alt="Champ Lanka logo"
        className="h-42 w-auto max-w-[400px] object-contain"
      />
    </Link>
  );
}
