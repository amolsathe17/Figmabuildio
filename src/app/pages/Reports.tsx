import { FileText, Download, Calendar, Filter, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";

const monthlyData = [
  { month: "Jan", attendance: 92, productivity: 85, tasks: 450 },
  { month: "Feb", attendance: 94, productivity: 87, tasks: 480 },
  { month: "Mar", attendance: 91, productivity: 84, tasks: 465 },
  { month: "Apr", attendance: 93, productivity: 88, tasks: 520 },
  { month: "May", attendance: 95, productivity: 89, tasks: 510 },
  { month: "Jun", attendance: 93, productivity: 87, tasks: 485 },
];

const departmentData = [
  { name: "Engineering", value: 98, color: "#3b82f6" },
  { name: "Sales", value: 45, color: "#10b981" },
  { name: "Marketing", value: 32, color: "#f59e0b" },
  { name: "Support", value: 58, color: "#8b5cf6" },
  { name: "HR", value: 15, color: "#ec4899" },
];

const leaveData = [
  { type: "Casual", count: 145, color: "#3b82f6" },
  { type: "Sick", count: 89, color: "#10b981" },
  { type: "Earned", count: 234, color: "#f59e0b" },
  { type: "Emergency", count: 23, color: "#ef4444" },
];

const reportTemplates = [
  {
    title: "Monthly Attendance Report",
    description: "Comprehensive attendance summary for the month",
    icon: Calendar,
    type: "attendance",
  },
  {
    title: "Productivity Analytics",
    description: "Detailed productivity metrics and trends",
    icon: TrendingUp,
    type: "productivity",
  },
  {
    title: "Leave Management Report",
    description: "Leave applications, approvals, and balances",
    icon: FileText,
    type: "leave",
  },
  {
    title: "Performance Review Report",
    description: "Employee performance scores and evaluations",
    icon: TrendingUp,
    type: "performance",
  },
  {
    title: "Department Wise Analysis",
    description: "Department-level metrics and comparisons",
    icon: FileText,
    type: "department",
  },
  {
    title: "Custom Report",
    description: "Build your own custom report with selected metrics",
    icon: FileText,
    type: "custom",
  },
];

export function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-500 mt-1">Generate and download comprehensive reports</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="june">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january">January 2026</SelectItem>
              <SelectItem value="february">February 2026</SelectItem>
              <SelectItem value="march">March 2026</SelectItem>
              <SelectItem value="april">April 2026</SelectItem>
              <SelectItem value="may">May 2026</SelectItem>
              <SelectItem value="june">June 2026</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Report Templates */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Report Templates</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reportTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <Card key={template.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline">{template.type}</Badge>
                  </div>
                  <CardTitle className="text-base mt-4">{template.title}</CardTitle>
                  <CardDescription className="text-sm">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Analytics Overview */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Analytics Overview</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Monthly Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Trends</CardTitle>
              <CardDescription>Attendance, productivity, and task completion</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" />
                  <XAxis key="xaxis" dataKey="month" />
                  <YAxis key="yaxis" />
                  <Tooltip key="tooltip" />
                  <Legend key="legend" />
                  <Line key="attendance" type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={2} name="Attendance %" />
                  <Line key="productivity" type="monotone" dataKey="productivity" stroke="#10b981" strokeWidth={2} name="Productivity %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Task Completion */}
          <Card>
            <CardHeader>
              <CardTitle>Task Completion Rate</CardTitle>
              <CardDescription>Monthly completed tasks trend</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" />
                  <XAxis key="xaxis" dataKey="month" />
                  <YAxis key="yaxis" />
                  <Tooltip key="tooltip" />
                  <Legend key="legend" />
                  <Bar key="tasks" dataKey="tasks" fill="#3b82f6" name="Tasks Completed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
              <CardDescription>Employee count by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    key="pie"
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip key="tooltip" />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Leave Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Leave Type Distribution</CardTitle>
              <CardDescription>Leaves taken by type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={leaveData} layout="vertical">
                  <CartesianGrid key="grid" strokeDasharray="3 3" />
                  <XAxis key="xaxis" type="number" />
                  <YAxis key="yaxis" dataKey="type" type="category" />
                  <Tooltip key="tooltip" />
                  <Bar key="count" dataKey="count" fill="#3b82f6">
                    {leaveData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Reports Generated</div>
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-xs text-green-600 mt-1">+12% this month</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Data Points Analyzed</div>
              <div className="text-2xl font-bold">45.2K</div>
              <div className="text-xs text-blue-600 mt-1">Across all modules</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Avg Report Time</div>
              <div className="text-2xl font-bold">2.3s</div>
              <div className="text-xs text-gray-600 mt-1">Lightning fast</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Export Formats</div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs text-gray-600 mt-1">PDF, Excel, CSV, JSON</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
