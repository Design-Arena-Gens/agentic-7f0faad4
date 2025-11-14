import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hindi Sleep Stories Channel Blueprint",
  description:
    "Comprehensive strategy to build and dominate the Hindi moral sleep stories niche on YouTube."
};

export default function HomePage() {
  return <HomeContent />;
}
