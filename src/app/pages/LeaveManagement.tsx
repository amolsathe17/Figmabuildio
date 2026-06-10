import { Calendar as CalendarIcon, Plus, Filter, Check, X, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
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

const leaveStats = [
  { type: "Casual Leave", total: 15, used: 8, available: 7 },
  { type: "Sick Leave", total: 12, used: 3, available: 9 },
  { type: "Earned Leave", total: 20, used: 12, available: 8 },
  { type: "Maternity Leave", total: 90, used: 0, available: 90 },
];

const leaveRequests = [
  {
    id: "LV001",
    employee: {
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    type: "Sick Leave",
    from: "2026-06-08",
    to: "2026-06-09",
    days: 2,
    reason: "Medical appointment and recovery",
    status: "pending",
    appliedOn: "2026-06-05",
  },
  {
    id: "LV002",
    employee: {
      name: "Robert Brown",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
    type: "Casual Leave",
    from: "2026-06-10",
    to: "2026-06-12",
    days: 3,
    reason: "Family function",
    status: "pending",
    appliedOn: "2026-06-04",
  },
  {
    id: "LV003",
    employee: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    type: "Earned Leave",
    from: "2026-06-15",
    to: "2026-06-20",
    days: 6,
    reason: "Vacation with family",
    status: "approved",
    appliedOn: "2026-06-01",
  },
  {
    id: "LV004",
    employee: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    type: "Casual Leave",
    from: "2026-06-07",
    to: "2026-06-07",
    days: 1,
    reason: "Personal work",
    status: "rejected",
    appliedOn: "2026-06-06",
  },
];

const upcomingLeaves = [
  {
    employee: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    type: "Earned Leave",
    from: "2026-06-15",
    to: "2026-06-20",
    days: 6,
  },
  {
    employee: "Lisa Anderson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    type: "Casual Leave",
    from: "2026-06-22",
    to: "2026-06-23",
    days: 2,
  },
  {
    employee: "James Taylor",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
    type: "Sick Leave",
    from: "2026-06-25",
    to: "2026-06-26",
    days: 2,
  },
];

export function LeaveManagement() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leave Management</h1>
          <p className="text-gray-500 mt-1">Manage employee leave requests and balances</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Apply Leave
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Apply for Leave</DialogTitle>
              <DialogDescription>Submit a new leave request</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="leaveType">Leave Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual Leave</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="earned">Earned Leave</SelectItem>
                    <SelectItem value="emergency">Emergency Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fromDate">From Date</Label>
                  <Input id="fromDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toDate">To Date</Label>
                  <Input id="toDate" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason</Label>
                <Textarea id="reason" placeholder="Enter reason for leave" rows={4} />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button>Submit Request</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Leave Balance */}
      <Card>
        <CardHeader>
          <CardTitle>Leave Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {leaveStats.map((stat) => (
              <div key={stat.type} className="p-4 border rounded-lg">
                <div className="text-sm text-gray-500 mb-2">{stat.type}</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold">{stat.available}</span>
                  <span className="text-sm text-gray-500">/ {stat.total} available</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-blue-600" 
                    style={{ width: `${(stat.used / stat.total) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-2">{stat.used} used</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Requests & Upcoming Leaves */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pending Requests Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-500">Pending requests</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-sm text-gray-500">Approved this month</p>
                </div>
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-500">Rejected this month</p>
                </div>
                <X className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Leaves */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Leaves</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingLeaves.map((leave, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={leave.avatar} />
                      <AvatarFallback>{leave.employee[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{leave.employee}</p>
                      <p className="text-sm text-gray-500">{leave.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon className="h-4 w-4 text-gray-400" />
                      <span>{leave.from} to {leave.to}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{leave.days} days</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leave Requests Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Leave Requests</CardTitle>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Leave Type</TableHead>
                <TableHead>From - To</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Applied On</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={request.employee.avatar} />
                        <AvatarFallback>{request.employee.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{request.employee.name}</div>
                        <div className="text-sm text-gray-500">{request.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{request.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{request.from}</div>
                      <div className="text-gray-500">{request.to}</div>
                    </div>
                  </TableCell>
                  <TableCell>{request.days}</TableCell>
                  <TableCell className="max-w-xs truncate">{request.reason}</TableCell>
                  <TableCell>{request.appliedOn}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell>
                    {request.status === "pending" && (
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="text-green-600">
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
