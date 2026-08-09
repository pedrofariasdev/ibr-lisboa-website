import { Suspense } from "react";
import IbrEuropaContent from "./IbrEuropaContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "IBR Europa",
  description:
    "Conheça a visão e o trabalho da IBR Europa em Portugal e noutros países europeus.",
  path: "/ibr-europa",
});

export default function IbrEuropaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-40">
            <h1 className="sr-only">IBR Europa</h1>
            <p className="text-white/50">
              A carregar IBR Europa...
            </p>
          </div>
        </div>
      }
    >
      <IbrEuropaContent />
    </Suspense>
  );
}
