import { 
  Users, UserCheck, UserX, TrendingUp, Clock, 
  CheckCircle, AlertCircle, Activity, ArrowUpRight, ArrowDownRight, Calendar
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, 
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from "recharts";

const stats = [
  { 
    title: "Total Employees", 
    value: "248", 
    change: "+12%", 
    trend: "up", 
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  { 
    title: "Present Today", 
    value: "231", 
    change: "93.1%", 
    trend: "up", 
    icon: UserCheck,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  { 
    title: "On Leave", 
    value: "12", 
    change: "+3", 
    trend: "up", 
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  { 
    title: "Avg Productivity", 
    value: "87%", 
    change: "+5.2%", 
    trend: "up", 
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
];

const attendanceData = [
  { date: "Mon", present: 235, absent: 13, leave: 12 },
  { date: "Tue", present: 238, absent: 10, leave: 12 },
  { date: "Wed", present: 231, absent: 14, leave: 15 },
  { date: "Thu", present: 240, absent: 8, leave: 12 },
  { date: "Fri", present: 231, absent: 12, leave: 17 },
  { date: "Sat", present: 145, absent: 95, leave: 10 },
  { date: "Sun", present: 52, absent: 188, leave: 10 },
];

const productivityData = [
  { month: "Jan", productivity: 82, tasks: 450, hours: 3200 },
  { month: "Feb", productivity: 85, tasks: 480, hours: 3350 },
  { month: "Mar", productivity: 83, tasks: 465, hours: 3280 },
  { month: "Apr", productivity: 88, tasks: 520, hours: 3500 },
  { month: "May", productivity: 87, tasks: 510, hours: 3450 },
  { month: "Jun", productivity: 89, tasks: 540, hours: 3600 },
];

const departmentData = [
  { name: "Engineering", value: 85, employees: 98 },
  { name: "Sales", value: 92, employees: 45 },
  { name: "Marketing", value: 88, employees: 32 },
  { name: "Support", value: 90, employees: 58 },
  { name: "HR", value: 86, employees: 15 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

const recentActivities = [
  { 
    user: "Sarah Johnson", 
    action: "Submitted daily report", 
    time: "2 mins ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  { 
    user: "Michael Chen", 
    action: "Completed task: API Integration", 
    time: "15 mins ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  { 
    user: "Emily Davis", 
    action: "Applied for sick leave", 
    time: "1 hour ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  { 
    user: "David Miller", 
    action: "Checked in - GPS verified", 
    time: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  { 
    user: "Lisa Anderson", 
    action: "Productivity score: 95%", 
    time: "3 hours ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
];

const lowPerformers = [
  { name: "John Doe", department: "Engineering", score: 62, trend: "down" },
  { name: "Jane Smith", department: "Support", score: 68, trend: "down" },
  { name: "Robert Brown", department: "Sales", score: 71, trend: "stable" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      )}
                      <span className={`text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500">vs last week</span>
                    </div>
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

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Attendance Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Trends</CardTitle>
            <CardDescription>Last 7 days attendance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={attendanceData}>
                <CartesianGrid key="grid" strokeDasharray="3 3" />
                <XAxis key="xaxis" dataKey="date" />
                <YAxis key="yaxis" />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Area key="present" type="monotone" dataKey="present" stackId="1" stroke="#10b981" fill="#10b981" />
                <Area key="leave" type="monotone" dataKey="leave" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
                <Area key="absent" type="monotone" dataKey="absent" stackId="1" stroke="#ef4444" fill="#ef4444" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Productivity Score */}
        <Card>
          <CardHeader>
            <CardTitle>Productivity Score</CardTitle>
            <CardDescription>Monthly productivity trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productivityData}>
                <CartesianGrid key="grid" strokeDasharray="3 3" />
                <XAxis key="xaxis" dataKey="month" />
                <YAxis key="yaxis" />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Line key="productivity" type="monotone" dataKey="productivity" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance & Activities */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Department Performance */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Average productivity by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentData.map((dept, index) => (
                <div key={dept.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-sm font-medium">{dept.name}</span>
                    </div>
                    <span className="text-sm font-bold">{dept.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${dept.value}%`,
                        backgroundColor: COLORS[index]
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{dept.employees} employees</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest employee activities and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>{activity.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts & Low Performers */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* AI Insights & Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              AI Insights & Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">12 employees haven't submitted daily reports</p>
                <p className="text-xs text-gray-600 mt-1">Automated reminders sent via WhatsApp</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Engineering team productivity increased by 8%</p>
                <p className="text-xs text-gray-600 mt-1">Best performing department this week</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">3 projects behind schedule</p>
                <p className="text-xs text-gray-600 mt-1">Requires immediate attention from project managers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Low Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Attention Required</CardTitle>
            <CardDescription>Employees with declining performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowPerformers.map((person, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">{person.name}</p>
                    <p className="text-xs text-gray-500">{person.department}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <Badge variant={person.score < 70 ? "destructive" : "secondary"}>
                        {person.score}%
                      </Badge>
                      {person.trend === "down" && (
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}