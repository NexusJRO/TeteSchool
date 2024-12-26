"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users, Clock, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Event {
  title: string;
  date: Date;
  description: string;
  attendees: string;
}

const EventCalendar = () => {
  const router = useRouter();
  const events: Event[] = [
    {
      title: "Science Fair",
      date: new Date("2024-10-15"),
      description:
        "Student science project exhibition featuring innovative experiments and research.",
      attendees: "250+ expected",
    },
    {
      title: "Parents Day",
      date: new Date("2024-11-05"),
      description:
        "A special day dedicated to bringing parents and students together for engaging activities.",
      attendees: "500+ expected",
    },
  ];

  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [selectedEvents, setSelectedEvents] = React.useState<Event[]>([]);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const hasEvents = (date: Date | null): boolean => {
    if (!date) return false;
    return events.some(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  React.useEffect(() => {
    if (!selectedDate) return;
    const dateEvents = events.filter(
      (event) => event.date.toDateString() === selectedDate.toDateString()
    );
    setSelectedEvents(dateEvents);
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Hero Section */}
      <div className="relative h-64">
        <div className="absolute inset-0 "></div>
        <img
          src="/banner/25.png"
          alt="Calendar Banner"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events Calendar
          </h1>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-blue-600" />
                Calendar View
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => setSelectedDate(date || new Date())}
                modifiers={{
                  event: (date) => hasEvents(date),
                }}
                modifiersStyles={{
                  event: {
                    fontWeight: "bold",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    color: "#2563eb",
                  },
                }}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Events for {formatDate(selectedDate)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {event.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {event.date.toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No events scheduled for this date
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
