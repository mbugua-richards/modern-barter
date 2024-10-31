"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, GradientTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Effects } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useLoader } from '@react-three/fiber';

const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

function TradingImage() {
  // You can replace this URL with your preferred trading illustration
  const imageUrl = '/trading-illustration.jpg'; // Place your image in the public folder
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.3}
    >
      <mesh>
        <planeGeometry args={[4, 3]} /> {/* Adjust aspect ratio to match your image */}
        <meshBasicMaterial 
          map={texture} 
          transparent={true}
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  // Form initialization
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      // Add your signup logic here
      
      toast({
        title: "Account created successfully!",
        description: "Please check your email to verify your account.",
      });
      
      router.push("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Left side - Branding and Gradient */}
      <div className="relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7D6AF7] via-[#9181F8] to-[#7D6AF7]/50" />
        
        {/* Content container with proper spacing */}
        <div className="relative z-20 flex h-full flex-col justify-between">
          {/* Top section */}
          <div className="flex items-center text-lg font-medium">
            <Link href="/" className="flex items-center space-x-2">
              TradeHub
            </Link>
          </div>

          {/* Middle section - Main content */}
          <div className="my-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                Trade Smarter, Together
              </h1>
              <p className="text-xl text-white/80 max-w-[400px]">
                Join our community of traders and start exchanging items today. 
                It's free, secure, and sustainable!
              </p>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="relative">
            <p className="text-sm text-white/70">
              © 2024 TradeHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="johndoe" 
                        {...field} 
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="name@example.com" 
                        {...field} 
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        {...field} 
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        {...field} 
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                className="w-full h-11" 
                type="submit" 
                disabled={isLoading}
              >
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign Up
              </Button>
            </form>
          </Form>

          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}