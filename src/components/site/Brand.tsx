import { Link } from "@tanstack/react-router";
import mascot from "@/assets/lunara-mascot.webp.asset.json";

export const mascotUrl = mascot.url;

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Lunara Linux home">
      <img src={mascot.url} alt="" width={30} height={26} className="h-6 w-auto" />
      <span className="text-[15px] font-semibold tracking-[0.18em] text-foreground">
        LUNARA
      </span>
    </Link>
  );
}
