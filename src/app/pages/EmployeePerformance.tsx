import { TrendingUp, Target, Award, Star, Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const skillsData = [
  { skill: "Communication", score: 85 },
  { skill: "Leadership", score: 78 },
  { skill: "Technical", score: 92 },
  { skill: "Teamwork", score: 88 },
  { skill: "Problem Solving", score: 90 },
  { skill: "Time Management", score: 82 },
];

const performanceTrend = [
  { month: "Jan", score: 82 },
  { month: "Feb", score: 85 },
  { month: "Mar", score: 87 },
  { month: "Apr", score: 86 },
  { month: "May", score: 89 },
  { month: "Jun", score: 90 },
];

const goals = [
  { id: "1", title: "Complete Advanced React Certification", progress: 75, dueDate: "2026-06-30", status: "on-track" },
  { id: "2", title: "Mentor 2 Junior Developers", progress: 50, dueDate: "2026-12-31", status: "on-track" },
  { id: "3", title: "Lead a Project from Start to Finish", progress: 60, dueDate: "2026-09-30", status: "on-track" },
  { id: "4", title: "Improve Code Review Response Time", progress: 85, dueDate: "2026-06-15", status: "ahead" },
];

const recentFeedback = [
  {
    from: "Manager",
    date: "2026-06-05",
    rating: 5,
    comment: "Excellent work on the recent project. Your technical skills and attention to detail were outstanding.",
  },
  {
    from: "Team Lead",
    date: "2026-05-28",
    rating: 4,
    comment: "Great collaboration with the team. Would like to see more proactive communication.",
  },
  {
    from: "Project Manager",
    date: "2026-05-15",
    rating: 5,
    comment: "Delivered all tasks ahead of schedule. Very reliable team member.",
  },
];

export function EmployeePerformance() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">My Performance</h1>
        <p className="text-gray-500 mt-1">View your performance metrics and feedback</p>
      </div>

      {/* Overall Score */}
      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Overall Performance Score</p>
              <p className="text-5xl font-bold">90/100</p>
              <p className="text-sm opacity-90 mt-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +5 points from last month
              </p>
            </div>
            <div className="h-32 w-32 rounded-full border-8 border-white/30 flex items-center justify-center">
              <Award className="h-16 w-16" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Tasks Completed</p>
                <p className="text-3xl font-bold mt-1">47</p>
                <p className="text-xs text-green-600 mt-1">+12% this month</p>
              </div>
              <Target className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Rating</p>
                <p className="text-3xl font-bold mt-1">4.7</p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Star className="h-10 w-10 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Goals Met</p>
                <p className="text-3xl font-bold mt-1">3/4</p>
                <p className="text-xs text-gray-500 mt-1">1 in progress</p>
              </div>
              <Award className="h-10 w-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Team Rank</p>
                <p className="text-3xl font-bold mt-1">#3</p>
                <p className="text-xs text-gray-500 mt-1">Out of 25</p>
              </div>
              <TrendingUp className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Skills Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Goals */}
      <Card>
        <CardHeader>
          <CardTitle>My Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{goal.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4" />
                      <span>Due: {goal.dueDate}</span>
                    </div>
                  </div>
                  <Badge
                    className={
                      goal.status === "ahead"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }
                  >
                    {goal.status}
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFeedback.map((feedback, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold">{feedback.from}</p>
                    <p className="text-sm text-gray-500">{feedback.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i <= feedback.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700">{feedback.comment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
