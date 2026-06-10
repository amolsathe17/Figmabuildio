import { useState } from "react";
import { Clock, MapPin, Calendar as CalendarIcon, CheckCircle, XCircle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const attendanceHistory = [
  { date: "2026-06-09", checkIn: "09:02 AM", checkOut: "05:30 PM", hours: "8h 28m", status: "present", location: "Home Office" },
  { date: "2026-06-08", checkIn: "08:58 AM", checkOut: "05:15 PM", hours: "8h 17m", status: "present", location: "Home Office" },
  { date: "2026-06-07", checkIn: "09:15 AM", checkOut: "05:45 PM", hours: "8h 30m", status: "late", location: "Co-working" },
  { date: "2026-06-06", checkIn: "09:00 AM", checkOut: "05:20 PM", hours: "8h 20m", status: "present", location: "Home Office" },
  { date: "2026-06-05", checkIn: "-", checkOut: "-", hours: "-", status: "leave", location: "-" },
  { date: "2026-06-04", checkIn: "08:55 AM", checkOut: "05:10 PM", hours: "8h 15m", status: "present", location: "Home Office" },
  { date: "2026-06-03", checkIn: "09:05 AM", checkOut: "05:25 PM", hours: "8h 20m", status: "present", location: "Home Office" },
];

const weeklyData = [
  { day: "Mon", hours: 8.5 },
  { day: "Tue", hours: 8.3 },
  { day: "Wed", hours: 8.5 },
  { day: "Thu", hours: 8.3 },
  { day: "Fri", hours: 8.0 },
];

export function EmployeeAttendance() {
  const [checkedIn, setCheckedIn] = useState(true);
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const presentDays = attendanceHistory.filter(d => d.status === "present" || d.status === "late").length;
  const attendanceRate = ((presentDays / attendanceHistory.length) * 100).toFixed(1);
  const avgHours = "8h 22m";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">My Attendance</h1>
        <p className="text-gray-500 mt-1">View your attendance history and check-in/out</p>
      </div>

      {/* Quick Check-in Card */}
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Current Status</p>
              <p className="text-2xl font-bold">
                {checkedIn ? `Checked In at 09:02 AM` : "Not Checked In"}
              </p>
              <p className="text-sm opacity-90 mt-1">Current Time: {currentTime}</p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setCheckedIn(!checkedIn)}
            >
              <Clock className="h-5 w-5 mr-2" />
              {checkedIn ? "Check Out" : "Check In"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-3xl font-bold mt-1">{presentDays}</p>
                <p className="text-xs text-gray-500">Days Present</p>
              </div>
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Attendance Rate</p>
                <p className="text-3xl font-bold mt-1">{attendanceRate}%</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Above average
                </p>
              </div>
              <TrendingUp className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Hours/Day</p>
                <p className="text-3xl font-bold mt-1">{avgHours}</p>
                <p className="text-xs text-gray-500">Last 7 days</p>
              </div>
              <Clock className="h-10 w-10 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Late Days</p>
                <p className="text-3xl font-bold mt-1">1</p>
                <p className="text-xs text-gray-500">This month</p>
              </div>
              <XCircle className="h-10 w-10 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Attendance History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceHistory.map((record, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{record.date}</TableCell>
                  <TableCell>{record.checkIn}</TableCell>
                  <TableCell>{record.checkOut}</TableCell>
                  <TableCell>{record.hours}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {record.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        record.status === "present"
                          ? "bg-green-100 text-green-800"
                          : record.status === "late"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {record.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
