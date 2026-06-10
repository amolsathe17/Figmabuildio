import { Activity, Clock, Target, TrendingUp, Zap, Calendar as CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const weeklyActivity = [
  { day: "Mon", hours: 8.5, tasks: 12, focusTime: 6.2 },
  { day: "Tue", hours: 8.2, tasks: 10, focusTime: 5.8 },
  { day: "Wed", hours: 9.0, tasks: 15, focusTime: 7.0 },
  { day: "Thu", hours: 8.3, tasks: 11, focusTime: 6.0 },
  { day: "Fri", hours: 7.5, tasks: 9, focusTime: 5.5 },
];

const productivityTrend = [
  { week: "Week 1", score: 82 },
  { week: "Week 2", score: 85 },
  { week: "Week 3", score: 88 },
  { week: "Week 4", score: 90 },
];

const topActivities = [
  { activity: "Coding", hours: 25.5, percentage: 45 },
  { activity: "Meetings", hours: 12.0, percentage: 21 },
  { activity: "Code Review", hours: 8.5, percentage: 15 },
  { activity: "Documentation", hours: 6.0, percentage: 11 },
  { activity: "Planning", hours: 4.5, percentage: 8 },
];

export function EmployeeProductivity() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">My Productivity</h1>
        <p className="text-gray-500 mt-1">Track your work patterns and efficiency</p>
      </div>

      {/* Productivity Score Card */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Productivity Score</p>
              <p className="text-5xl font-bold">90%</p>
              <p className="text-sm opacity-90 mt-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +8% from last week
              </p>
            </div>
            <div className="h-32 w-32 rounded-full border-8 border-white/30 flex items-center justify-center">
              <Zap className="h-16 w-16" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Week</p>
                <p className="text-3xl font-bold mt-1">41.5h</p>
                <p className="text-xs text-green-600 mt-1">+3.5h vs last week</p>
              </div>
              <Clock className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Tasks Done</p>
                <p className="text-3xl font-bold mt-1">57</p>
                <p className="text-xs text-green-600 mt-1">+12 this week</p>
              </div>
              <Target className="h-10 w-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Focus Time</p>
                <p className="text-3xl font-bold mt-1">30.5h</p>
                <p className="text-xs text-gray-500 mt-1">73% of work time</p>
              </div>
              <Zap className="h-10 w-10 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Per Day</p>
                <p className="text-3xl font-bold mt-1">8.3h</p>
                <p className="text-xs text-gray-500 mt-1">Consistent</p>
              </div>
              <Activity className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Productivity Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Productivity Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={productivityTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Focus Time Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Focus Time Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="focusTime" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Time by Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topActivities.map((item) => (
              <div key={item.activity}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.activity}</span>
                    <Badge variant="outline" className="text-xs">
                      {item.percentage}%
                    </Badge>
                  </div>
                  <span className="text-sm text-gray-500">{item.hours}h</span>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Summary */}
      <Card>
        <CardHeader>
          <CardTitle>This Week's Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600 font-medium mb-1">Most Productive Day</p>
              <p className="text-2xl font-bold text-blue-900">Wednesday</p>
              <p className="text-sm text-blue-600 mt-1">9.0 hours logged</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 font-medium mb-1">Peak Focus Hours</p>
              <p className="text-2xl font-bold text-green-900">10 AM - 2 PM</p>
              <p className="text-sm text-green-600 mt-1">Highest concentration</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600 font-medium mb-1">Tasks Completed</p>
              <p className="text-2xl font-bold text-purple-900">57 tasks</p>
              <p className="text-sm text-purple-600 mt-1">+19% vs last week</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
