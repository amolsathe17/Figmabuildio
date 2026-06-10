import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Plus, MoreVertical, Calendar as CalendarIcon, User, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "review" | "done";
  priority: "low" | "medium" | "high";
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate: string;
  tags: string[];
}

const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Implement user authentication",
    description: "Add JWT-based authentication with refresh tokens",
    status: "in-progress",
    priority: "high",
    assignee: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    dueDate: "2026-06-10",
    tags: ["Backend", "Security"],
  },
  {
    id: "task-2",
    title: "Design dashboard mockups",
    description: "Create high-fidelity mockups for the admin dashboard",
    status: "review",
    priority: "medium",
    assignee: {
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    dueDate: "2026-06-08",
    tags: ["Design", "UI/UX"],
  },
  {
    id: "task-3",
    title: "Fix bug in payment gateway",
    description: "Resolve timeout issues with payment processing",
    status: "todo",
    priority: "high",
    assignee: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    dueDate: "2026-06-07",
    tags: ["Bug", "Critical"],
  },
  {
    id: "task-4",
    title: "Update API documentation",
    description: "Document new endpoints and update examples",
    status: "todo",
    priority: "low",
    assignee: {
      name: "David Miller",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    dueDate: "2026-06-15",
    tags: ["Documentation"],
  },
  {
    id: "task-5",
    title: "Optimize database queries",
    description: "Improve performance of user analytics queries",
    status: "in-progress",
    priority: "medium",
    assignee: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    dueDate: "2026-06-12",
    tags: ["Backend", "Performance"],
  },
  {
    id: "task-6",
    title: "Implement dark mode",
    description: "Add theme switching functionality",
    status: "done",
    priority: "low",
    assignee: {
      name: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    dueDate: "2026-06-05",
    tags: ["Frontend", "Feature"],
  },
];

const columns = [
  { id: "todo", title: "To Do", color: "bg-gray-100" },
  { id: "in-progress", title: "In Progress", color: "bg-blue-100" },
  { id: "review", title: "Review", color: "bg-yellow-100" },
  { id: "done", title: "Done", color: "bg-green-100" },
];

function TaskCard({ task, onDrop }: { task: Task; onDrop: (taskId: string, newStatus: string) => void }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      ref={drag}
      className={`bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-move ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-sm">{task.title}</h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <p className="text-sm text-gray-500 mb-3">{task.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {task.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
        <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </Badge>
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={task.assignee.avatar} />
            <AvatarFallback>{task.assignee.name[0]}</AvatarFallback>
          </Avatar>
          <span>{task.assignee.name.split(" ")[0]}</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-3 w-3" />
          <span>{task.dueDate}</span>
        </div>
      </div>
    </div>
  );
}

function Column({ 
  column, 
  tasks, 
  onDrop 
}: { 
  column: typeof columns[0]; 
  tasks: Task[]; 
  onDrop: (taskId: string, newStatus: string) => void;
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { id: string }) => onDrop(item.id, column.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="flex-1 min-w-[280px]">
      <div className={`${column.color} rounded-lg p-3 mb-3`}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{column.title}</h3>
          <Badge variant="secondary">{tasks.length}</Badge>
        </div>
      </div>
      <div
        ref={drop}
        className={`space-y-3 min-h-[500px] ${isOver ? "bg-blue-50 rounded-lg p-2" : ""}`}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDrop={onDrop} />
        ))}
      </div>
    </div>
  );
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDrop = (taskId: string, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus as Task["status"] } : task
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Task Management</h1>
            <p className="text-gray-500 mt-1">Organize and track your team's work</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Task
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>Add a new task to your project</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Task Title</Label>
                  <Input id="title" placeholder="Enter task title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter task description" rows={3} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assignee">Assignee</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select assignee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                        <SelectItem value="michael">Michael Chen</SelectItem>
                        <SelectItem value="emily">Emily Davis</SelectItem>
                        <SelectItem value="david">David Miller</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input id="dueDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="review">Review</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Create Task</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          {columns.map((col) => {
            const count = tasks.filter((t) => t.status === col.id).length;
            return (
              <Card key={col.id}>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500">{col.title}</div>
                  <div className="text-2xl font-bold mt-1">{count}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Kanban Board */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
