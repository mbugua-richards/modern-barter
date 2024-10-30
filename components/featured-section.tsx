"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURED_ITEMS = [
  {
    id: 1,
    title: "Vintage Film Camera",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80",
    rating: 4.8,
    owner: "Alex M.",
    trades: 127,
  },
  {
    id: 2,
    title: "Handcrafted Leather Bag",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    rating: 4.9,
    owner: "Sarah K.",
    trades: 89,
  },
  {
    id: 3,
    title: "Limited Edition Watch",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    rating: 4.7,
    owner: "David R.",
    trades: 156,
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Items</h2>
            <p className="mt-2 text-muted-foreground">
              Discover unique items from our most trusted traders
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/browse" className="group">
              View All Items
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute right-2 top-2 bg-background/80 backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.trades} successful trades
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Listed by </span>
                      <span className="font-medium">{item.owner}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/items/${item.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}