import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/src/lib/types";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="glass-panel group overflow-hidden rounded-[28px]">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold !text-black">{destination.name}</h3>
            <p className="mt-1 text-sm text-black/80">{destination.universities}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-black/80">{destination.description}</p>
        <Link href="/study-abroad-guide" className="mt-5 inline-flex items-center gap-2 font-semibold !text-black">
          View Details <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
