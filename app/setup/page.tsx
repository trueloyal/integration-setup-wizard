"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { PLATFORMS } from "@/lib/platforms"

const FAQS = [
  {
    q: "Points aren't being awarded after purchases — what should I check first?",
    a: "The most common cause is the integration triggering on order creation instead of order fulfilment. TrueLoyal should only receive the purchase event after the order is paid and fulfilled — not when it's first placed. Check your plugin or API call to confirm it fires on the correct order status (e.g. 'Billed', 'Paid', or 'Complete' depending on your platform). Also confirm that a 'Made a Purchase' activity is active in TrueLoyal Admin → Activities.",
  },
  {
    q: "The loyalty dashboard is showing a guest view even though the customer is logged in.",
    a: "This almost always means the embed script isn't receiving the logged-in member's identity. For native plugin integrations, confirm the plugin is enabled and the customer is enrolled as a loyalty member. For custom/API integrations, the JWT passed to the embed init must be generated server-side with the member's email in the payload — a missing or malformed JWT will silently fall back to guest view. Check your browser's network tab for a failed request to app.zinrelo.com to confirm.",
  },
  {
    q: "The integration was working and then suddenly stopped. What happened?",
    a: "The most likely causes are: (1) an API key was rotated in TrueLoyal Admin but not updated in the plugin or integration config, (2) the webhook endpoint on your side went down or returned non-200 responses, causing TrueLoyal to pause delivery, or (3) a platform update changed a setting. Start by checking TrueLoyal Admin → Activity for whether any recent transactions appear — if they do, the connection is live and the issue is downstream. If nothing recent appears, re-check your credentials and webhook logs.",
  },
  {
    q: "How long does it take for points to appear after a purchase?",
    a: "For native plugin integrations (Shopify, BigCommerce, WooCommerce, etc.), points typically appear within a few minutes of the order reaching the trigger status. Allow up to 5 minutes for the first sync. For API integrations, points appear as soon as the purchase API call is made. If points haven't appeared after 15 minutes, check TrueLoyal Admin → Activity to confirm the transaction was received at all.",
  },
  {
    q: "A customer says they aren't receiving loyalty emails (points earned, rewards, etc.).",
    a: "TrueLoyal sends emails using its built-in email system by default. Check TrueLoyal Admin → Notifications to confirm the relevant email templates are enabled. If your account uses a third-party ESP integration (Klaviyo, Listrak, etc.), the emails are triggered via that platform instead — confirm the integration is active and the relevant flows or campaigns are live on the ESP side. Also confirm the member's email address is verified and not suppressed.",
  },
  {
    q: "What happens to a member's points if they return or cancel an order?",
    a: "TrueLoyal supports a Returns API that deducts points when a return is processed. This needs to be configured — it doesn't happen automatically. For native plugin integrations, check whether the returns/refund hook is enabled in the plugin settings. For API integrations, your developer needs to call the returns endpoint when a refund is issued. If returns aren't configured, points earned on refunded orders will remain in the member's balance.",
  },
  {
    q: "Can members earn points on purchases they made before the integration went live?",
    a: "Yes — TrueLoyal supports batch import of historical transactions. You can upload a CSV of past orders to award retroactive points. The file must include at minimum: member email, order total, transaction ID, and order date. Ask your TrueLoyal onboarding manager for the import template and to confirm the cutoff date before importing — awarding points on all historical orders can have a large impact on member balances.",
  },
  {
    q: "The EUD isn't loading on our site — the widget area is blank.",
    a: "Work through these checks in order: (1) confirm the page URL is registered in TrueLoyal Admin → Design → User Dashboard → Advanced → Embed Dashboard — unregistered URLs are blocked; (2) check the browser console for JavaScript errors related to the embed script; (3) confirm the script tag loading order — the _zrl config object must be defined before the CDN script loads; (4) for SPA frameworks (React, Vue, Next.js), make sure the init code runs after the component mounts, not at module load time.",
  },
  {
    q: "How do I know if a webhook is being delivered correctly?",
    a: "Go to TrueLoyal Admin → Notifications → Webhooks and open the webhook's log. You'll see a record of every delivery attempt with the response code your endpoint returned. A 200 response means successful delivery. If you see failures, check whether your endpoint is publicly accessible (localhost URLs won't work in production), returning a 200 within the timeout window, and correctly verifying the webhook signature. Failed webhooks can be manually retried from the logs.",
  },
  {
    q: "A member's points balance in TrueLoyal doesn't match what they see in our store.",
    a: "This is usually a display sync issue rather than a data issue. The EUD reads live from TrueLoyal, so if the balance looks wrong there, the problem is in TrueLoyal's records — check Admin → Members → [member] to see their full transaction history and spot any missing or duplicate events. If the EUD shows the right balance but your store's theme displays a different number, the theme is pulling from a cached value — confirm it's reading from the TrueLoyal API, not a local session variable.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-4 flex items-start justify-between gap-4 group"
      >
        <span className="text-sm font-medium text-[#001e45] leading-relaxed">{q}</span>
        <span className={`flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center transition-colors mt-0.5 ${open ? "border-[#f8b4c3] bg-[#f8b4c3]" : "group-hover:border-[#f8b4c3]"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-3 h-3 transition-transform ${open ? "rotate-180 text-[#001e45]" : "text-gray-400"}`}
          >
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-4 text-sm text-gray-600 leading-relaxed -mt-1">
          {a}
        </p>
      )}
    </div>
  )
}

export default function SetupPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => router.push("/")}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Back
            </button>
            <h1 className="mt-4 text-2xl font-semibold text-[#001e45]">
              Which platform are you connecting?
            </h1>
            <p className="mt-1 text-gray-500 text-sm">
              Pick your e-commerce platform. You&apos;ll get a step-by-step setup guide tailored to it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLATFORMS.map((platform) => (
              <button
                key={platform.id}
                onClick={() => router.push(`/setup/${platform.id}`)}
                className="text-left p-5 rounded-xl border-2 border-gray-100 bg-white hover:border-[#f8b4c3] hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${platform.logoBg} flex items-center justify-center p-2.5`}>
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-[#001e45]">{platform.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{platform.description}</div>
                    {platform.pluginType === "api" && (
                      <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full bg-[#f8b4c3]/20 text-[#001e45]">
                        API / dev-required
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-10 flex justify-center">
            <a
              href="#faq"
              className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-[#001e45] transition-colors group"
            >
              <span>Common questions below</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 animate-bounce"
              >
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-8">
            <h2 className="text-lg font-semibold text-[#001e45] mb-1">Common questions</h2>
            <p className="text-sm text-gray-500 mb-6">
              Answers to the issues that come up most during integration and go-live.
            </p>
            <div className="bg-white rounded-2xl border-2 border-gray-100 px-5 divide-y divide-gray-100">
              {FAQS.map((item, idx) => (
                <FAQItem key={idx} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
