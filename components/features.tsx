"use client";

import { motion } from "framer-motion";
import { Search, Shield, Users } from "lucide-react";

const features = [
  {
    name: "Smart Matching",
    description:
      "Our intelligent algorithm matches you with the perfect trading partners based on your preferences and item categories.",
    icon: Search,
  },
  {
    name: "Secure Trading",
    description:
      "Built-in verification system and user ratings ensure safe and reliable trading experiences.",
    icon: Shield,
  },
  {
    name: "Community First",
    description:
      "Join a growing community of traders who believe in the power of bartering and sharing resources.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Trade
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            TradeHub provides all the tools and features you need for successful
            bartering in the modern world.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col"
              >
                <dt className="text-lg font-semibold leading-7">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}