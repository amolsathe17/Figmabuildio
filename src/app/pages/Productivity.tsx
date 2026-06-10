import { Activity, Monitor, Clock, TrendingUp, AlertCircle, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";

const productivityTrends = [
  { time: "9 AM", active: 85, idle: 15, productive: 78 },
  { time: "10 AM", active: 92, idle: 8, productive: 88 },
  { time: "11 AM", active: 90, idle: 10, productive: 85 },
  { time: "12 PM", active: 75, idle: 25, productive: 65 },
  { time: "1 PM", active: 65, idle: 35, productive: 55 },
  { time: "2 PM", active: 88, idle: 12, productive: 82 },
  { time: "3 PM", active: 90, idle: 10, productive: 86 },
  { time: "4 PM", active: 87, idle: 13, productive: 83 },
  { time: "5 PM", active: 80, idle: 20, productive: 75 },
];

const applicationUsage = [
  { app: "VS Code", time: 245, category: "Productive", color: "#10b981" },
  { app: "Chrome (Work)", time: 180, category: "Productive", color: "#3b82f6" },
  { app: "Slack", time: 95, category: "Productive", color: "#8b5cf6" },
  { app: "Jira", time: 78, category: "Productive", color: "#f59e0b" },
  { app: "Chrome (Social)", time: 45, category: "Non-Productive", color: "#ef4444" },
  { app: "YouTube", time: 32, category: "Non-Productive", color: "#ef4444" },
];

const employeeActivity = [
  {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    activeTime: "7h 32m",
    idleTime: "45m",
    productivity: 92,
    focusTime: "5h 12m",
    currentApp: "VS Code",
    status: "active",
  },
  {
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    activeTime: "7h 15m",
    idleTime: "1h 02m",
    productivity: 88,
    focusTime: "4h 45m",
    currentApp: "IntelliJ IDEA",
    status: "active",
  },
  {
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    activeTime: "6h 48m",
    idleTime: "35m",
    productivity: 94,
    focusTime: "5h 30m",
    currentApp: "Figma",
    status: "active",
  },
  {
    name: "David Miller",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    activeTime: "5h 22m",
    idleTime: "2h 15m",
    productivity: 71,
    focusTime: "3h 10m",
    currentApp: "Slack",
    status: "idle",
  },
  {
    name: "Lisa Anderson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    activeTime: "7h 55m",
    idleTime: "22m",
    productivity: 96,
    focusTime: "6h 05m",
    currentApp: "Chrome",
    status: "active",
  },
];

const stats = [
  { title: "Avg Productivity", value: "87%", change: "+5.2%", icon: TrendingUp, color: "text-blue-600", bgColor: "bg-blue-100" },
  { title: "Active Time", value: "6.8h", change: "Daily avg", icon: Activity, color: "text-green-600", bgColor: "bg-green-100" },
  { title: "Focus Time", value: "4.9h", change: "+12 min", icon: Clock, color: "text-purple-600", bgColor: "bg-purple-100" },
  { title: "Monitored", value: "231", change: "Employees online", icon: Monitor, color: "text-orange-600", bgColor: "bg-orange-100" },
];

export function Productivity() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Productivity Monitoring</h1>
        <p className="text-gray-500 mt-1">Real-time employee productivity tracking and analytics</p>
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
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
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

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Productivity Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Productivity Trends</CardTitle>
            <CardDescription>Active, idle, and productive time distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={productivityTrends}>
                <CartesianGrid key="grid" strokeDasharray="3 3" />
                <XAxis key="xaxis" dataKey="time" />
                <YAxis key="yaxis" />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Area key="active" type="monotone" dataKey="active" stackId="1" stroke="#10b981" fill="#10b981" name="Active" />
                <Area key="idle" type="monotone" dataKey="idle" stackId="1" stroke="#ef4444" fill="#ef4444" name="Idle" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Application Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Application Usage</CardTitle>
            <CardDescription>Top applications by time spent (minutes)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applicationUsage.map((app) => (
                <div key={app.app}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: app.color }}
                      />
                      <span className="text-sm font-medium">{app.app}</span>
                      <Badge variant="outline" className="text-xs">
                        {app.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{app.time}m</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${(app.time / 250) * 100}%`,
                        backgroundColor: app.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Employee Activity */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Real-time Employee Activity</CardTitle>
              <CardDescription>Live monitoring of employee work sessions</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Screenshots
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Active Time</TableHead>
                <TableHead>Idle Time</TableHead>
                <TableHead>Productivity</TableHead>
                <TableHead>Focus Time</TableHead>
                <TableHead>Current App</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeActivity.map((employee) => (
                <TableRow key={employee.name}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={employee.avatar} />
                        <AvatarFallback>{employee.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{employee.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-green-600" />
                      {employee.activeTime}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      {employee.idleTime}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={employee.productivity} className="w-20" />
                      <span className="text-sm font-medium">{employee.productivity}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{employee.focusTime}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{employee.currentApp}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${employee.status === "active" ? "bg-green-600" : "bg-yellow-600"}`} />
                      <span className="text-sm capitalize">{employee.status}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            Productivity Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">3 employees with idle time over 2 hours</p>
              <p className="text-xs text-gray-600 mt-1">David Miller, John Doe, Robert Brown</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">2 employees spending excessive time on non-productive apps</p>
              <p className="text-xs text-gray-600 mt-1">Automated productivity coaching suggested</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
