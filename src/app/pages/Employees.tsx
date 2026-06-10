import { useState } from "react";
import { 
  Search, Plus, Filter, Download, MoreVertical, 
  Mail, Phone, MapPin, Briefcase, Calendar as CalendarIcon,
  Edit, Trash2, Eye, User
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
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
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const employees = [
  {
    id: "EMP001",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 234-567-8901",
    department: "Engineering",
    role: "Senior Developer",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    joinDate: "2024-01-15",
    productivity: 92,
    attendance: 95,
  },
  {
    id: "EMP002",
    name: "Michael Chen",
    email: "michael.chen@company.com",
    phone: "+1 234-567-8902",
    department: "Engineering",
    role: "Tech Lead",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    joinDate: "2023-08-20",
    productivity: 88,
    attendance: 98,
  },
  {
    id: "EMP003",
    name: "Emily Davis",
    email: "emily.davis@company.com",
    phone: "+1 234-567-8903",
    department: "Sales",
    role: "Sales Manager",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    joinDate: "2023-11-10",
    productivity: 94,
    attendance: 92,
  },
  {
    id: "EMP004",
    name: "David Miller",
    email: "david.miller@company.com",
    phone: "+1 234-567-8904",
    department: "Support",
    role: "Support Lead",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    joinDate: "2024-03-05",
    productivity: 90,
    attendance: 96,
  },
  {
    id: "EMP005",
    name: "Lisa Anderson",
    email: "lisa.anderson@company.com",
    phone: "+1 234-567-8905",
    department: "Marketing",
    role: "Marketing Specialist",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    joinDate: "2024-02-18",
    productivity: 87,
    attendance: 94,
  },
  {
    id: "EMP006",
    name: "Robert Brown",
    email: "robert.brown@company.com",
    phone: "+1 234-567-8906",
    department: "Engineering",
    role: "Junior Developer",
    status: "on-leave",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    joinDate: "2024-04-22",
    productivity: 71,
    attendance: 88,
  },
  {
    id: "EMP007",
    name: "Jennifer Wilson",
    email: "jennifer.wilson@company.com",
    phone: "+1 234-567-8907",
    department: "HR",
    role: "HR Manager",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    joinDate: "2023-06-12",
    productivity: 89,
    attendance: 99,
  },
  {
    id: "EMP008",
    name: "James Taylor",
    email: "james.taylor@company.com",
    phone: "+1 234-567-8908",
    department: "Sales",
    role: "Sales Executive",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
    joinDate: "2024-01-30",
    productivity: 85,
    attendance: 91,
  },
];

const departmentStats = [
  { name: "Engineering", count: 98, active: 95, onLeave: 3 },
  { name: "Sales", count: 45, active: 42, onLeave: 3 },
  { name: "Marketing", count: 32, active: 30, onLeave: 2 },
  { name: "Support", count: 58, active: 55, onLeave: 3 },
  { name: "HR", count: 15, active: 14, onLeave: 1 },
];

export function Employees() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedEmployee, setSelectedEmployee] = useState<typeof employees[0] | null>(null);

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || emp.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "on-leave": return "bg-yellow-100 text-yellow-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Employees</h1>
          <p className="text-gray-500 mt-1">Manage your workforce and employee information</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>Fill in the employee details below</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 234-567-8900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Software Engineer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="joinDate">Join Date</Label>
                  <Input id="joinDate" type="date" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button>Add Employee</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Department Stats */}
      <div className="grid gap-4 md:grid-cols-5">
        {departmentStats.map((dept) => (
          <Card key={dept.name}>
            <CardContent className="p-4">
              <div className="text-sm text-gray-500">{dept.name}</div>
              <div className="text-2xl font-bold mt-1">{dept.count}</div>
              <div className="flex items-center gap-2 mt-2 text-xs">
                <span className="text-green-600">{dept.active} active</span>
                <span className="text-gray-400">•</span>
                <span className="text-yellow-600">{dept.onLeave} leave</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Employee Directory</CardTitle>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, or ID..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Support">Support</SelectItem>
                <SelectItem value="HR">HR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Productivity</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback>{employee.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.role}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-blue-600" 
                            style={{ width: `${employee.productivity}%` }}
                          />
                        </div>
                        <span className="text-sm">{employee.productivity}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-green-600" 
                            style={{ width: `${employee.attendance}%` }}
                          />
                        </div>
                        <span className="text-sm">{employee.attendance}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setSelectedEmployee(employee)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Employee Detail Dialog */}
      {selectedEmployee && (
        <Dialog open={!!selectedEmployee} onOpenChange={() => setSelectedEmployee(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Employee Details</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="attendance">Attendance</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedEmployee.avatar} />
                    <AvatarFallback>{selectedEmployee.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{selectedEmployee.name}</h3>
                    <p className="text-gray-500">{selectedEmployee.role}</p>
                    <Badge className={`mt-2 ${getStatusColor(selectedEmployee.status)}`}>
                      {selectedEmployee.status}
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{selectedEmployee.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{selectedEmployee.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span>{selectedEmployee.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon className="h-4 w-4 text-gray-400" />
                      <span>Joined {selectedEmployee.joinDate}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Productivity Score</div>
                      <div className="text-2xl font-bold">{selectedEmployee.productivity}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Attendance Rate</div>
                      <div className="text-2xl font-bold">{selectedEmployee.attendance}%</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="performance">
                <p className="text-gray-500">Performance metrics and KPIs will be displayed here</p>
              </TabsContent>
              <TabsContent value="attendance">
                <p className="text-gray-500">Attendance history and records will be displayed here</p>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
