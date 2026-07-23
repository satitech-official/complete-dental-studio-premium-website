import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-pearl px-6 text-center">
      <div className="panel grid max-w-sm gap-5 p-8">
        <LoaderCircle className="mx-auto h-10 w-10 animate-spin text-teal" aria-hidden="true" />
        <div>
          <p className="font-display text-xl font-extrabold text-ink">Preparing your visit</p>
          <p className="mt-2 text-sm leading-6 text-slate">
            Loading the Complete Dental Studio experience.
          </p>
        </div>
      </div>
    </main>
  );
}
