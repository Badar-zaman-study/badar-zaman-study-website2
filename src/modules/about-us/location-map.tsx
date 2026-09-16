import { MapPin } from "lucide-react";

export function LocationMap() {
  return <section className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-3 shadow-sm sm:p-4">
    <div className="pb-4 text-center"><h2 className="text-xl font-bold tracking-tight">Find Us On The Map</h2><p className="mt-1 text-sm text-slate-500">Visit our office for a face-to-face consultation.</p></div>
    <div className="contact-map relative h-64 overflow-hidden rounded-xl">
      <div className="map-card absolute left-3 top-3 z-10 w-60 rounded-lg bg-white p-3 text-xs shadow-lg"><strong className="block text-sm text-slate-900">Badder Zaman Study Abroad Consultancy</strong><p className="mt-2 leading-5 text-slate-600">123, Main Boulevard, Johar Town,<br />Lahore, Pakistan</p><span className="mt-2 inline-block text-blue-600">View larger map</span></div>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-red-600"><MapPin fill="currentColor" size={42} /><span className="absolute left-9 top-2 w-44 text-sm font-medium">Badder Zaman<br />Study Abroad Consultancy</span></div>
      <span className="absolute bottom-2 right-3 text-xs text-slate-500">Map data © 2026</span>
    </div>
  </section>;
}
