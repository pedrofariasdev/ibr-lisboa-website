import { Suspense } from "react";
import IbrEuropaContent from "./IbrEuropaContent";

export default function IbrEuropaPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-40">
            <p className="text-white/50">
              A carregar IBR Europa...
            </p>
          </div>
        </main>
      }
    >
      <IbrEuropaContent />
    </Suspense>
  );
}