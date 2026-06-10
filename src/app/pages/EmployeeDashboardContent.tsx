import {
  Clock, Calendar, CheckCircle, AlertCircle, TrendingUp,
  Target, Award, FileText, MessageSquare, ArrowUpRight, ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const weeklyActivity = [
  { day: "Mon", hours: 8.2, productive: 7.5 },
  { day: "Tue", hours: 8.5, productive: 7.8 },
  { day: "Wed", hours: 7.8, productive: 7.2 },
  { day: "Thu", hours: 8.3, productive: 7.9 },
  { day: "Fri", hours: 8.0, productive: 7.6 },
];

const taskCompletion = [
  { week: "Week 1", completed: 12, pending: 3 },
  { week: "Week 2", completed: 15, pending: 2 },
  { week: "Week 3", completed: 14, pending: 4 },
  { week: "Week 4", completed: 18, pending: 1 },
];

const myTasks = [
  {
    id: 1,
    title: "Complete Q2 Report",
    priority: "high",
    dueDate: "Today",
    progress: 75,
    status: "in-progress"
  },
  {
    id: 2,
    title: "Review Pull Request #234",
    priority: "medium",
    dueDate: "Tomorrow",
    progress: 30,
    status: "in-progress"
  },
  {
    id: 3,
    title: "Team Meeting Preparation",
    priority: "low",
    dueDate: "Jun 12",
    progress: 100,
    status: "completed"
  },
  {
    id: 4,
    title: "Update Documentation",
    priority: "medium",
    dueDate: "Jun 15",
    progress: 0,
    status: "pending"
  },
];

const recentActivity = [
  { action: "Submitted daily report", time: "10 mins ago", icon: FileText },
  { action: "Completed task: API Integration", time: "2 hours ago", icon: CheckCircle },
  { action: "Checked in via GPS", time: "Today, 9:02 AM", icon: Clock },
  { action: "Applied for leave (Jun 20-22)", time: "Yesterday", icon: Calendar },
];

const leaveBalance = [
  { type: "Casual Leave", available: 8, total: 12 },
  { type: "Sick Leave", available: 10, total: 10 },
  { type: "Earned Leave", available: 15, total: 20 },
];

const stats = [
  {
    title: "Today's Hours",
    value: "7.5h",
    subtitle: "93% productive",
    change: "+0.5h",
    trend: "up",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Tasks Pending",
    value: "5",
    subtitle: "2 due today",
    change: "-2",
    trend: "down",
    icon: Target,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    title: "Attendance",
    value: "98%",
    subtitle: "This month",
    change: "+2%",
    trend: "up",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Performance",
    value: "92%",
    subtitle: "+5% vs last month",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
];

export function EmployeeDashboardContent() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">My Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's your overview for today.</p>
      </div>

      {/* Quick Stats */}
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
                      <span className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {stat.change}
                      </span>
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
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Your working hours and productivity</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyActivity}>
                <CartesianGrid key="grid" strokeDasharray="3 3" />
                <XAxis key="xaxis" dataKey="day" />
                <YAxis key="yaxis" />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Bar key="hours" dataKey="hours" fill="#3b82f6" name="Total Hours" />
                <Bar key="productive" dataKey="productive" fill="#10b981" name="Productive Hours" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Task Completion */}
        <Card>
          <CardHeader>
            <CardTitle>Task Completion Trend</CardTitle>
            <CardDescription>Your task completion over the past month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={taskCompletion}>
                <CartesianGrid key="grid" strokeDasharray="3 3" />
                <XAxis key="xaxis" dataKey="week" />
                <YAxis key="yaxis" />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Line key="completed" type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} name="Completed" />
                <Line key="pending" type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={2} name="Pending" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tasks and Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Tasks */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>My Tasks</CardTitle>
              <Button size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myTasks.map((task) => (
                <div key={task.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{task.title}</h4>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
                    </div>
                    {task.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={task.progress} className="flex-1" />
                    <span className="text-sm text-gray-600">{task.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leave Balance and Performance */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Leave Balance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Leave Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaveBalance.map((leave) => (
                <div key={leave.type}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{leave.type}</span>
                    <span className="text-sm text-gray-600">
                      {leave.available} / {leave.total} days
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${(leave.available / leave.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              Apply for Leave
            </Button>
          </CardContent>
        </Card>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Performance Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <p className="text-sm font-medium text-green-900">Overall Rating</p>
                  <p className="text-xs text-green-700 mt-1">Excellent performance this month</p>
                </div>
                <div className="text-2xl font-bold text-green-600">92%</div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Task Completion</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Productivity</span>
                    <span className="text-sm font-medium">91%</span>
                  </div>
                  <Progress value={91} />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Attendance</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <Progress value={98} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-4">
            <Button variant="outline" className="justify-start">
              <Clock className="h-4 w-4 mr-2" />
              Check In/Out
            </Button>
            <Button variant="outline" className="justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Submit Report
            </Button>
            <Button variant="outline" className="justify-start">
              <MessageSquare className="h-4 w-4 mr-2" />
              Team Chat
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              View Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
