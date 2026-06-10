import { Award, TrendingUp, Target, Star, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
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
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";

const performanceData = [
  { metric: "Productivity", score: 92 },
  { metric: "Attendance", score: 95 },
  { metric: "Task Completion", score: 88 },
  { metric: "Quality", score: 90 },
  { metric: "Communication", score: 87 },
  { metric: "Collaboration", score: 85 },
];

const teamPerformance = [
  { department: "Engineering", performance: 89, tasks: 156, kpi: 92 },
  { department: "Sales", performance: 94, tasks: 134, kpi: 96 },
  { department: "Marketing", performance: 87, tasks: 98, kpi: 88 },
  { department: "Support", performance: 91, tasks: 187, kpi: 93 },
  { department: "HR", performance: 85, tasks: 76, kpi: 86 },
];

const topPerformers = [
  {
    rank: 1,
    name: "Lisa Anderson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    department: "Marketing",
    score: 96,
    productivity: 98,
    attendance: 99,
    tasks: 45,
    rating: "Excellent",
  },
  {
    rank: 2,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    department: "Engineering",
    score: 94,
    productivity: 95,
    attendance: 97,
    tasks: 52,
    rating: "Excellent",
  },
  {
    rank: 3,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    department: "Sales",
    score: 93,
    productivity: 94,
    attendance: 96,
    tasks: 48,
    rating: "Excellent",
  },
  {
    rank: 4,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    department: "Engineering",
    score: 91,
    productivity: 92,
    attendance: 95,
    tasks: 49,
    rating: "Excellent",
  },
  {
    rank: 5,
    name: "David Miller",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    department: "Support",
    score: 89,
    productivity: 90,
    attendance: 93,
    tasks: 56,
    rating: "Good",
  },
];

const stats = [
  { title: "Team Avg Score", value: "87%", icon: Award, color: "text-blue-600", bgColor: "bg-blue-100" },
  { title: "Top Performers", value: "23", icon: Star, color: "text-yellow-600", bgColor: "bg-yellow-100" },
  { title: "KPI Met", value: "89%", icon: Target, color: "text-green-600", bgColor: "bg-green-100" },
  { title: "Improvement Rate", value: "+12%", icon: TrendingUp, color: "text-purple-600", bgColor: "bg-purple-100" },
];

export function Performance() {
  const getRatingBadge = (rating: string) => {
    switch (rating) {
      case "Excellent":
        return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
      case "Good":
        return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
      case "Average":
        return <Badge className="bg-yellow-100 text-yellow-800">Average</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{rating}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Performance Management</h1>
        <p className="text-gray-500 mt-1">Track and evaluate employee performance metrics</p>
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
        {/* Performance Metrics Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Performance Metrics</CardTitle>
            <CardDescription>Team average across key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceData}>
                <PolarGrid key="grid" />
                <PolarAngleAxis key="angleaxis" dataKey="metric" />
                <PolarRadiusAxis key="radiusaxis" angle={90} domain={[0, 100]} />
                <Radar key="performance" name="Performance" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Tooltip key="tooltip" />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Performance scores by department</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamPerformance}>
                <CartesianGrid key="grid" strokeDasharray="3 3" />
                <XAxis key="xaxis" dataKey="department" />
                <YAxis key="yaxis" />
                <Tooltip key="tooltip" />
                <Legend key="legend" />
                <Bar key="performance" dataKey="performance" fill="#3b82f6" name="Performance Score" />
                <Bar key="kpi" dataKey="kpi" fill="#10b981" name="KPI Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-600" />
            Top Performers
          </CardTitle>
          <CardDescription>Employees with highest performance ratings this month</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Overall Score</TableHead>
                <TableHead>Productivity</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Tasks Completed</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPerformers.map((performer) => (
                <TableRow key={performer.rank}>
                  <TableCell>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
                      {performer.rank}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={performer.avatar} />
                        <AvatarFallback>{performer.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{performer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{performer.department}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={performer.score} className="w-20" />
                      <span className="text-sm font-medium">{performer.score}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={performer.productivity} className="w-16" />
                      <span className="text-sm">{performer.productivity}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={performer.attendance} className="w-16" />
                      <span className="text-sm">{performer.attendance}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{performer.tasks}</Badge>
                  </TableCell>
                  <TableCell>{getRatingBadge(performer.rating)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Excellent (90-100%)", count: 45, percentage: 18, color: "bg-green-600" },
                { category: "Good (75-89%)", count: 128, percentage: 52, color: "bg-blue-600" },
                { category: "Average (60-74%)", count: 62, percentage: 25, color: "bg-yellow-600" },
                { category: "Needs Improvement (<60%)", count: 13, percentage: 5, color: "bg-red-600" },
              ].map((item) => (
                <div key={item.category}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.count} employees ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              AI Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-medium text-green-900">Sales team exceeded targets by 23%</p>
              <p className="text-xs text-green-700 mt-1">Recommend team recognition and bonus consideration</p>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-blue-900">Engineering productivity up 12% this quarter</p>
              <p className="text-xs text-blue-700 mt-1">Process improvements showing positive impact</p>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm font-medium text-yellow-900">13 employees need performance coaching</p>
              <p className="text-xs text-yellow-700 mt-1">Schedule 1-on-1 reviews and development plans</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
