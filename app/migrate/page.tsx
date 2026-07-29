"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

const MIGRATION_ITEMS = [
  {
    icon: "👥",
    title: "Existing members",
    body: "Your current member list will need to be exported from your old platform and imported into TrueLoyal. Member records require at minimum: first name, last name, and email address. Additional fields like phone number, birthdate, and custom attributes can also be included.",
    action: {
      label: "View member import guide",
      href: "https://help.trueloyal.com/docs/2271443-import-customers-into-the-loyalty-program",
    },
  },
  {
    icon: "⭐",
    title: "Points balances",
    body: "If your members have existing point balances, these can be carried over during the member import. Your export file should include each member's current balance so TrueLoyal can seed their accounts correctly from day one.",
  },
  {
    icon: "🏆",
    title: "Tier status",
    body: "If your current program uses tiers, each member's tier assignment will need to migrate alongside their record. Review your tier thresholds and confirm they map cleanly to TrueLoyal's tier structure before importing — mismatched thresholds can result in members landing in the wrong tier.",
  },
  {
    icon: "📐",
    title: "Program design",
    body: "Not every loyalty program structure is supported out of the box. Before building in TrueLoyal, review your existing earn rules, reward types, tier criteria, and any custom mechanics with your onboarding manager to confirm they can be replicated — or to agree on an equivalent setup.",
  },
  {
    icon: "🎟️",
    title: "Issued but unredeemed rewards",
    body: "Any coupons or rewards your members have already earned but not yet used need to be accounted for. Depending on your old platform, these may need to be honoured manually or re-issued in TrueLoyal. Flag this with your onboarding manager early — it often requires a plan before cutover.",
  },
  {
    icon: "📧",
    title: "Member communication",
    body: "Members should be notified about the transition before it happens — especially if their login method, dashboard experience, or reward structure is changing. Draft a communication plan that covers the cutover date, what changes, and what stays the same.",
  },
  {
    icon: "📅",
    title: "Cutover timing",
    body: "Coordinate a go-live date that minimises disruption. Avoid peak sales periods where possible. Your old program should remain active until TrueLoyal is fully tested and ready — running both simultaneously for a brief overlap period is common.",
  },
]

export default function MigratePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#001e45] px-6 py-4">
        <Image
          src="/trueloyal-logo.png"
          alt="TrueLoyal"
          width={160}
          height={48}
          priority
          className="h-10 w-auto"
        />
      </header>

      <div className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">

          <div className="mb-8">
            <button
              onClick={() => router.push("/")}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Back
            </button>

            <div className="mt-4 p-5 rounded-2xl bg-[#f8b4c3]/20 border border-[#f8b4c3]/60">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">⚠️</span>
                <div>
                  <h2 className="font-semibold text-[#001e45]">Before you start — migration checklist</h2>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    Migrating from an existing loyalty program requires more than just connecting your store. Review the items below with your team before proceeding. Your TrueLoyal onboarding manager can help you plan each one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {MIGRATION_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-100 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#f8b4c3]/20 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#001e45]">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.body}</p>
                    {item.action && (
                      <a
                        href={item.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-[#001e45] font-medium hover:underline"
                      >
                        {item.action.label} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-[#001e45] text-white">
            <p className="text-sm leading-relaxed">
              Once you&apos;ve reviewed the checklist above and aligned with your onboarding manager, you&apos;re ready to connect your platform. The integration steps are the same regardless of whether you&apos;re migrating or starting fresh.
            </p>
            <button
              onClick={() => router.push("/setup")}
              className="mt-4 px-5 py-2.5 bg-[#f8b4c3] text-[#001e45] rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Continue to platform setup →
            </button>
          </div>

        </div>
      </div>

      <footer className="text-center py-6 text-xs text-gray-400">
        Need help? Contact your TrueLoyal onboarding manager.
      </footer>
    </div>
  )
}
