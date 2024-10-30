"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Package,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const stats = [
  {
    name: "Active Trades",
    value: "12",
    icon: Package,
  },
  {
    name: "Trade Partners",
    value: "48",
    icon: Users,
  },
  {
    name: "Messages",
    value: "8",
    icon: MessageSquare,
  },
  {
    name: "Success Rate",
    value: "94%",
    icon: BarChart,
  },
];

const recentTrades = [
  {
    id: 1,
    item: "Vintage Camera",
    partner: "John Doe",
    status: "In Progress",
    date: "2024-02-20",
  },
  {
    id: 2,
    item: "Gaming Console",
    partner: "Sarah Smith",
    status: "Completed",
    date: "2024-02-19",
  },
  {
    id: 3,
    item: "Art Supplies",
    partner: "Mike Johnson",
    status: "Pending",
    date: "2024-02-18",
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <stat.icon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.name}
                  </p>
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trades">Trades</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Trades</h3>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {recentTrades.map((trade) => (
                  <motion.div
                    key={trade.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-between p-4 rounded-lg border"
                  >
                    <div>
                      <h4 className="font-medium">{trade.item}</h4>
                      <p className="text-sm text-muted-foreground">
                        with {trade.partner}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                        {trade.status}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {trade.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </TabsContent>
        <TabsContent value="trades">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Trade History</h3>
            {/* Trade history content */}
          </Card>
        </TabsContent>
        <TabsContent value="messages">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Messages</h3>
            {/* Messages content */}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}