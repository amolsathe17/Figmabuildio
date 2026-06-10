import { Calendar, Clock, MapPin, Smartphone, CheckCircle, XCircle, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const attendanceData = [
  { day: "Mon", present: 235, absent: 13 },
  { day: "Tue", present: 238, absent: 10 },
  { day: "Wed", present: 231, absent: 17 },
  { day: "Thu", present: 240, absent: 8 },
  { day: "Fri", present: 231, absent: 17 },
];

const recentCheckIns = [
  {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    checkIn: "09:02 AM",
    method: "GPS",
    location: "Home Office",
    device: "iOS",
    status: "on-time",
  },
  {
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    checkIn: "08:58 AM",
    method: "Face Verification",
    location: "Remote",
    device: "Android",
    status: "on-time",
  },
  {
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    checkIn: "09:15 AM",
    method: "Manual",
    location: "Co-working Space",
    device: "iOS",
    status: "late",
  },
  {
    name: "David Miller",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    checkIn: "09:00 AM",
    method: "QR Code",
    location: "Office",
    device: "Android",
    status: "on-time",
  },
  {
    name: "Lisa Anderson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    checkIn: "08:55 AM",
    method: "WiFi Verification",
    location: "Home Office",
    device: "iOS",
    status: "on-time",
  },
];

const stats = [
  { title: "Present Today", value: "231", subtitle: "93.1% attendance", icon: CheckCircle, color: "text-green-600", bgColor: "bg-green-100" },
  { title: "Absent", value: "12", subtitle: "4.8% absent rate", icon: XCircle, color: "text-red-600", bgColor: "bg-red-100" },
  { title: "On Leave", value: "5", subtitle: "Approved leaves", icon: Calendar, color: "text-blue-600", bgColor: "bg-blue-100" },
  { title: "Avg Check-in", value: "9:05 AM", subtitle: "5 min late avg", icon: Clock, color: "text-orange-600", bgColor: "bg-orange-100" },
];

export function Attendance() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Attendance Management</h1>
        <p className="text-gray-500 mt-1">Monitor employee attendance and check-ins</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Table */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Attendance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid key="grid" strokeDasharray="3 3" />
                <XAxis key="xaxis" dataKey="day" />
                <YAxis key="yaxis" />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Bar key="present" dataKey="present" fill="#10b981" name="Present" />
                <Bar key="absent" dataKey="absent" fill="#ef4444" name="Absent" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Check-in Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Check-in Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { method: "GPS Check-in", count: 98, percentage: 42 },
                { method: "Face Verification", count: 65, percentage: 28 },
                { method: "Manual Check-in", count: 45, percentage: 20 },
                { method: "QR Code", count: 23, percentage: 10 },
              ].map((item) => (
                <div key={item.method}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{item.method}</span>
                    <span className="text-sm text-gray-500">{item.count} ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-blue-600" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Check-ins */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Check-ins</CardTitle>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Check-in Time</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCheckIns.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={record.avatar} />
                        <AvatarFallback>{record.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{record.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      {record.checkIn}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{record.method}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {record.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-gray-400" />
                      {record.device}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={record.status === "on-time" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
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
