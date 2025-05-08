import React from "react";
import { ArrowRight, CheckCircle, Shield, Repeat, Clock, Wallet, BarChart3 } from "lucide-react"

function Home() {
    return (
      <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Digital Warranties <span className="text-purple-700">Powered by NFTs</span>
                </h1>
                <p className="text-xl text-gray-500 md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Say goodbye to paper receipts and lost proofs. GuarantiX transforms product warranties into secure,
                  transferable NFTs on Solana.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <button className="inline-flex items-center justify-center gap-2 rounded-md bg-purple-700 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-white md:aspect-square lg:order-last lg:aspect-auto">
                <img
                  src="https://placehold.co/800x800"
                  alt="Digital NFT Warranty"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-700 px-3 py-1 text-sm text-white">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">Why Choose GuarantiX?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our digital warranty system offers unique benefits for both consumers and brands.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm bg-white">
                <div className="rounded-full bg-purple-100 p-3">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Secure & Immutable</h3>
                <p className="text-center text-gray-500">
                  Blockchain-backed warranties that can't be lost, damaged, or forged.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm bg-white">
                <div className="rounded-full bg-purple-100 p-3">
                  <Repeat className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Easily Transferable</h3>
                <p className="text-center text-gray-500">
                  When you sell your product, transfer the warranty to the new owner with one click.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm bg-white">
                <div className="rounded-full bg-purple-100 p-3">
                  <Clock className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-700">Lifetime Access</h3>
                <p className="text-center text-gray-500">
                  Access your warranty details anytime, even after the coverage period ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-700 px-3 py-1 text-sm text-white">Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">How GuarantiX Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple process that revolutionizes product warranties.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-lg font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold text-purple-700">Purchase & Mint</h3>
                <p className="text-center text-gray-500">
                  Buy a product from a participating brand and receive an NFT warranty in your wallet.
                </p>
               
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-lg font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold text-purple-700">Access & Verify</h3>
                <p className="text-center text-gray-500 ">
                  View warranty details anytime through our app or website. Brands can verify authenticity instantly.
                </p>
               
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-lg font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold text-purple-700">Transfer & Claim</h3>
                <p className="text-center text-gray-500">
                  Transfer warranty when selling the product. Make warranty claims directly through the platform.
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* For Brands Section */}
        <section id="brands" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-white md:aspect-square lg:order-last lg:aspect-auto">
                <img src="https://placehold.co/800x800" alt="Brand Dashboard" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-block w-fit rounded-lg bg-purple-700 px-3 py-1 text-sm text-white">
                  For Brands
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-700">Empower Your Brand with Blockchain</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed">
                  GuarantiX provides brands with powerful tools to issue, track, and manage digital warranties.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-700" />
                    <span className="text-gray-500">Issue NFT warranties through smart contracts on Solana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-700" />
                    <span className="text-gray-500">Track warranty claims and product lifecycle on-chain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-700" />
                    <span className="text-gray-500">Reduce fraud and streamline customer service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-700" />
                    <span className="text-gray-500">Access analytics on product performance and warranty usage</span>
                  </li>
                </ul>
                <button className="inline-flex w-fit items-center justify-center rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 border-b border-gray-200 pb-4 md:border-b-0 md:border-r md:pb-0">
                <Wallet className="h-8 w-8 text-purple-700" />
                <h3 className="text-3xl font-bold text-purple-700">10,000+</h3>
                <p className="text-center text-sm text-gray-500">NFT Warranties Issued</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border-b border-gray-200 pb-4 md:border-b-0 md:border-r md:pb-0">
                <Shield className="h-8 w-8 text-purple-700" />
                <h3 className="text-3xl font-bold text-purple-700">50+</h3>
                <p className="text-center text-sm text-gray-500">Brand Partners</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border-b border-gray-200 pb-4 md:border-b-0 md:border-r md:pb-0">
                <BarChart3 className="h-8 w-8 text-purple-700" />
                <h3 className="text-3xl font-bold text-purple-700">99.9%</h3>
                <p className="text-center text-sm text-gray-500">Verification Accuracy</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Repeat className="h-8 w-8 text-purple-700" />
                <h3 className="text-3xl font-bold text-purple-700">5,000+</h3>
                <p className="text-center text-sm text-gray-500">Successful Transfers</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-700 px-3 py-1 text-sm text-white">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about GuarantiX.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-bold text-purple-700">What is an NFT warranty?</h3>
                <p className="mt-2 text-gray-500">
                  An NFT warranty is a digital certificate stored on the blockchain that contains all the details of
                  your product warranty, including purchase date, model, warranty duration, and seller information.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-bold text-purple-700">Do I need a crypto wallet?</h3>
                <p className="mt-2 text-gray-500">
                  Yes, you'll need a Solana-compatible wallet to receive and manage your NFT warranties. We provide a
                  simple onboarding process to help you set one up.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-bold text-purple-700">How do I transfer a warranty?</h3>
                <p className="mt-2 text-gray-500">
                  When you sell your product, you can transfer the NFT warranty to the new owner's wallet with a few
                  clicks through our platform or directly through your wallet.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-bold text-purple-700">Which brands support GuarantiX?</h3>
                <p className="mt-2 text-gray-500">
                  We're constantly adding new brand partners. Check our website for the most up-to-date list of
                  participating brands and retailers.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-bold text-purple-700">Are there any fees?</h3>
                <p className="mt-2 text-gray-500">
                  There are minimal network fees for minting and transferring NFT warranties. These fees are typically
                  covered by the brand or retailer at the time of purchase.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-bold text-purple-700">What if I lose access to my wallet?</h3>
                <p className="mt-2 text-gray-500">
                  It's important to keep your wallet recovery phrase safe. If you lose access to your wallet, you'll
                  need to use your recovery phrase to restore access to your NFT warranties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">
                  Ready to Transform Your Warranties?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the digital warranty revolution today and experience the future of product ownership.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-purple-700 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 py-6 md:py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-700" />
            <span className="text-lg font-semibold">GuarantiX</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} GuarantiX. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
    );
  }
  
  export default Home;
  