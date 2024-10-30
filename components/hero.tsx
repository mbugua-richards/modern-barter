"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="container relative pt-20 pb-32 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Trade Smarter, Not Harder with{" "}
            <span className="text-primary">TradeHub</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join our community of traders and discover a new way to exchange goods
            and services. No money needed – just valuable items and skills to
            share.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}