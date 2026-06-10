import { useState } from "react";
import { Plus, CheckCircle, Clock, AlertCircle, Calendar as CalendarIcon, Tag, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Checkbox } from "../components/ui/checkbox";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
  progress: number;
  tags: string[];
}

const myTasks: Task[] = [
  {
    id: "1",
    title: "Complete Q2 Performance Review",
    description: "Submit self-assessment and goals for next quarter",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-06-12",
    progress: 60,
    tags: ["HR", "Review"],
  },
  {
    id: "2",
    title: "Update Project Documentation",
    description: "Document recent API changes and update README",
    status: "in-progress",
    priority: "medium",
    dueDate: "2026-06-15",
    progress: 40,
    tags: ["Documentation"],
  },
  {
    id: "3",
    title: "Code Review - Feature Branch",
    description: "Review pull request #234 for new authentication flow",
    status: "todo",
    priority: "high",
    dueDate: "2026-06-10",
    progress: 0,
    tags: ["Code Review", "Security"],
  },
  {
    id: "4",
    title: "Attend Team Sync Meeting",
    description: "Weekly team standup and sprint planning",
    status: "todo",
    priority: "medium",
    dueDate: "2026-06-09",
    progress: 0,
    tags: ["Meeting"],
  },
  {
    id: "5",
    title: "Fix Production Bug #456",
    description: "Resolve timeout issue in payment gateway",
    status: "completed",
    priority: "high",
    dueDate: "2026-06-08",
    progress: 100,
    tags: ["Bug", "Critical"],
  },
];

const priorityColors = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

export function EmployeeTasks() {
  const [tasks, setTasks] = useState(myTasks);
  const [filter, setFilter] = useState<"all" | "todo" | "in-progress" | "completed">("all");

  const filteredTasks = filter === "all" ? tasks : tasks.filter(t => t.status === filter);
  const todoCount = tasks.filter(t => t.status === "todo").length;
  const inProgressCount = tasks.filter(t => t.status === "in-progress").length;
  const completedCount = tasks.filter(t => t.status === "completed").length;

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const newStatus = task.status === "completed" ? "in-progress" : "completed";
        return { ...task, status: newStatus, progress: newStatus === "completed" ? 100 : task.progress };
      }
      return task;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Tasks</h1>
          <p className="text-gray-500 mt-1">Manage and track your assigned tasks</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">To Do</p>
                <p className="text-3xl font-bold mt-1">{todoCount}</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Progress</p>
                <p className="text-3xl font-bold mt-1">{inProgressCount}</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-3xl font-bold mt-1">{completedCount}</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle>Task List</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
            <TabsList>
              <TabsTrigger value="all">All Tasks</TabsTrigger>
              <TabsTrigger value="todo">To Do</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="space-y-4 mt-4">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={task.status === "completed"}
                      onCheckedChange={() => toggleTaskCompletion(task.id)}
                      className="mt-1"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`font-semibold ${task.status === "completed" ? "line-through text-gray-500" : ""}`}>
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                        </div>
                        <Badge className={priorityColors[task.priority]}>
                          {task.priority}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>Due {task.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {task.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {task.status !== "completed" && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>{task.progress}%</span>
                          </div>
                          <Progress value={task.progress} className="h-2" />
                        </div>
                      )}
                    </div>

                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
