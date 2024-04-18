"use client";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

import { useState } from "react";
import Header from "@/components/header";
import { toast } from "sonner";
import { TrashIcon } from "lucide-react";

const tickets = [
  {
    status: "open",
    id: "#12344",
    createdAt: "Created 1 days ago",
    title: "Button not working",
    description:
      "I'm having trouble clicking on the button. Can you please help me?",
    requester: {
      name: "Jared Palmer",
      email: "jared@example.com",
    },
  },
  {
    status: "open",
    id: "#12345",
    createdAt: "Created 2 days ago",
    title: "Issue with website login",
    description:
      "I'm unable to log in to the website. Can you please help me with this?",
    requester: {
      name: "Jared Palmer",
      email: "jared@example.com",
    },
  },
  {
    status: "resolved",
    id: "#12346",
    createdAt: "Created 1 week ago",
    title: "Error with payment processing",
    description:
      "I'm unable to complete my purchase due to an error with the payment processing.",
    requester: {
      name: "Jared Palmer",
      email: "jared@example.com",
    },
  },
];

export default function Home() {
  const [ticket, setTicket] = useState(tickets);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const randomId = Math.floor(100000 + Math.random() * 900000);

  const handleFormData = (e: any) => {
    e.preventDefault();
    setTimeout(
      () =>
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        }),
      100
    );
    toast("Support ticket created successfully!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    setTicket([
      ...ticket,
      {
        status: "open",
        id: `#${randomId}`,
        createdAt: "Created 1 days ago",
        title: formData.subject,
        description: formData.message,
        requester: {
          name: formData.name,
          email: formData.email,
        },
      },
    ]);
  };
  return (
    <div
      key="1"
      className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950"
    >
      <Header />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-3xl font-bold">Create a new ticket</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form below to create a new support ticket.
            </p>
            <form className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Enter the subject"
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[150px]"
                  id="message"
                  placeholder="Enter your message"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <Button type="submit" onClick={handleFormData}>
                Create Ticket
              </Button>
            </form>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Your Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ticket.map((ticket) => (
                <Card key={ticket.id} className="w-full">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <div
                        className={`rounded-full bg-${
                          ticket.status === "open" ? "blue-500" : "green-500"
                        } px-3 py-1 text-xs font-medium text-white`}
                      >
                        {ticket.status.charAt(0).toUpperCase() +
                          ticket.status.slice(1)}
                      </div>
                      <div className="text-sm font-medium">{ticket.id}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {ticket.createdAt}
                      </div>
                      <div
                        className="flex justify-end flex-grow"
                        onClick={() => {
                          setTicket((prevState) =>
                            prevState.filter((item) => item.id !== ticket.id)
                          );
                          toast("Ticket deleted successfully!", {
                            icon: "👏",
                            style: {
                              borderRadius: "10px",
                              background: "#333",
                              color: "#fff",
                            },
                          });
                        }}
                      >
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="font-medium">{ticket.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {ticket.description}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          alt="@shadcn"
                          src="/placeholder-user.jpg"
                        />
                        <AvatarFallback>
                          {ticket.requester.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5 text-sm">
                        <div className="font-medium">
                          {ticket.requester.name}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          {ticket.requester.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        {ticket.status === "open" ? "Reply" : "View"}
                      </Button>
                      {ticket.status === "open" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setTicket((prevState) =>
                              prevState.map((item) =>
                                item.id === ticket.id
                                  ? { ...item, status: "resolved" }
                                  : item
                              )
                            );
                            toast("Ticket closed successfully!", {
                              icon: "👏",
                              style: {
                                borderRadius: "10px",
                                background: "#333",
                                color: "#fff",
                              },
                            });
                          }}
                        >
                          Close
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
