"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Home() {
  const router = useRouter()

  function handleChoice(type: "new" | "migrating") {
    sessionStorage.setItem("tl_setup_type", type)
    router.push(type === "migrating" ? "/migrate" : "/setup")
  }

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

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg text-center">

          <div className="inline-block bg-[#001e45] rounded-2xl px-8 py-5 mb-8">
            <Image
              src="/trueloyal-logo.png"
              alt="TrueLoyal"
              width={220}
              height={66}
              priority
              className="h-16 w-auto"
            />
          </div>

          <h1 className="text-2xl font-semibold text-[#001e45]">
            Integration Setup Guide
          </h1>
          <p className="mt-3 text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
            A step-by-step guide to connecting your e-commerce platform to TrueLoyal — with screenshots, tips, and everything your team needs to go live.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => handleChoice("new")}
              className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#f8b4c3] hover:shadow-sm transition-all text-left"
            >
              <div className="text-2xl mb-3">🚀</div>
              <div className="font-semibold text-[#001e45]">Starting fresh</div>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                This is your first loyalty program. We&apos;ll walk you through connecting your store and getting your program live.
              </p>
            </button>

            <button
              onClick={() => handleChoice("migrating")}
              className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#f8b4c3] hover:shadow-sm transition-all text-left"
            >
              <div className="text-2xl mb-3">🔄</div>
              <div className="font-semibold text-[#001e45]">Migrating from another program</div>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                You&apos;re switching from an existing loyalty platform. We&apos;ll help you connect and carry over your member data.
              </p>
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
