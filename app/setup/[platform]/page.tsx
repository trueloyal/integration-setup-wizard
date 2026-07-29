import { PLATFORMS } from "@/lib/platforms"
import PlatformClient from "./platform-client"

export function generateStaticParams() {
  return PLATFORMS.map((p) => ({ platform: p.id }))
}

export default function PlatformPage() {
  return <PlatformClient />
}
