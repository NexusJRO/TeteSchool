import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";

export default function CalendarComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>School Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}
