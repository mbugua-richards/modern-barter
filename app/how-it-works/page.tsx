"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Repeat, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: Users,
    title: "Create Your Profile",
    description:
      "Sign up and create your trading profile. Add your preferences and the items you're interested in trading.",
  },
  {
    icon: Shield,
    title: "List Your Items",
    description:
      "Add detailed descriptions and high-quality photos of items you want to trade. The more detail, the better!",
  },
  {
    icon: MessageSquare,
    title: "Connect with Traders",
    description:
      "Browse items, connect with other traders, and discuss potential trades through our secure messaging system.",
  },
  {
    icon: Repeat,
    title: "Make the Trade",
    description:
      "Once you've agreed on terms, arrange the exchange and complete your trade safely and securely.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          How TradeHub Works
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Trading on TradeHub is simple, secure, and sustainable. Follow these
          steps to start your trading journey.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-8 hidden h-8 w-8 text-muted-foreground/30 lg:block" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mx-auto mt-16 max-w-xl text-center"
      >
        <h2 className="text-2xl font-semibold">Ready to Start Trading?</h2>
        <p className="mt-4 text-muted-foreground">
          Join our community of traders and start exchanging items today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/browse">Browse Items</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}