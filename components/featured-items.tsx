"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Star } from "lucide-react"

const FEATURED_ITEMS = [
  {
    id: 1,
    title: "Vintage Camera",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80",
    rating: 4.5,
    owner: {
      name: "John Doe",
      rating: 4.8
    }
  },
  {
    id: 2,
    title: "Handcrafted Leather Bag",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    rating: 4.8,
    owner: {
      name: "Emma Wilson",
      rating: 4.9
    }
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    rating: 4.6,
    owner: {
      name: "Mike Chen",
      rating: 4.7
    }
  },
  {
    id: 4,
    title: "Antique Book Collection",
    category: "Books",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    rating: 4.9,
    owner: {
      name: "Sarah Brown",
      rating: 4.9
    }
  }
]

export default function FeaturedItems() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {FEATURED_ITEMS.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="featured-item-card overflow-hidden border-2">
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute right-2 top-2 bg-primary hover:bg-primary/90">
                  {item.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    by {item.owner.name}
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-2" />
      <CarouselNext className="border-2" />
    </Carousel>
  )
}