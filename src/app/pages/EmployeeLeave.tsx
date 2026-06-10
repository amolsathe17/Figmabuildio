import { useState } from "react";
import { Plus, Calendar as CalendarIcon, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const leaveBalance = [
  { type: "Annual Leave", total: 20, used: 8, remaining: 12 },
  { type: "Sick Leave", total: 10, used: 2, remaining: 8 },
  { type: "Personal Leave", total: 5, used: 1, remaining: 4 },
  { type: "Casual Leave", total: 7, used: 3, remaining: 4 },
];

const leaveHistory = [
  {
    id: "1",
    type: "Annual Leave",
    startDate: "2026-06-15",
    endDate: "2026-06-19",
    days: 5,
    status: "approved",
    reason: "Family vacation",
    appliedOn: "2026-05-20",
  },
  {
    id: "2",
    type: "Sick Leave",
    startDate: "2026-06-05",
    endDate: "2026-06-05",
    days: 1,
    status: "approved",
    reason: "Medical appointment",
    appliedOn: "2026-06-04",
  },
  {
    id: "3",
    type: "Annual Leave",
    startDate: "2026-07-01",
    endDate: "2026-07-05",
    days: 5,
    status: "pending",
    reason: "Summer holiday",
    appliedOn: "2026-06-08",
  },
  {
    id: "4",
    type: "Personal Leave",
    startDate: "2026-05-28",
    endDate: "2026-05-28",
    days: 1,
    status: "approved",
    reason: "Personal matters",
    appliedOn: "2026-05-25",
  },
];

export function EmployeeLeave() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leave Management</h1>
          <p className="text-gray-500 mt-1">Apply for leave and check your leave balance</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Apply for Leave
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Apply for Leave</DialogTitle>
              <DialogDescription>
                Fill in the details below to submit your leave request.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="leave-type">Leave Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual Leave</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="personal">Personal Leave</SelectItem>
                    <SelectItem value="casual">Casual Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason</Label>
                <Textarea id="reason" placeholder="Enter reason for leave..." rows={4} />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Submit Request</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Leave Balance Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        {leaveBalance.map((leave) => (
          <Card key={leave.type}>
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-3">{leave.type}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold">{leave.remaining}</span>
                <span className="text-sm text-gray-500">/ {leave.total} days</span>
              </div>
              <Progress value={(leave.remaining / leave.total) * 100} className="h-2 mb-2" />
              <p className="text-xs text-gray-500">{leave.used} days used</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Available</p>
                <p className="text-3xl font-bold mt-1">28</p>
                <p className="text-xs text-gray-500">Days remaining</p>
              </div>
              <CalendarIcon className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Used This Year</p>
                <p className="text-3xl font-bold mt-1">14</p>
                <p className="text-xs text-gray-500">Days taken</p>
              </div>
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending Requests</p>
                <p className="text-3xl font-bold mt-1">1</p>
                <p className="text-xs text-gray-500">Awaiting approval</p>
              </div>
              <Clock className="h-10 w-10 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leave History */}
      <Card>
        <CardHeader>
          <CardTitle>Leave History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Applied On</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveHistory.map((leave) => (
                <TableRow key={leave.id}>
                  <TableCell className="font-medium">{leave.type}</TableCell>
                  <TableCell>{leave.startDate}</TableCell>
                  <TableCell>{leave.endDate}</TableCell>
                  <TableCell>{leave.days}</TableCell>
                  <TableCell className="max-w-xs truncate">{leave.reason}</TableCell>
                  <TableCell>{leave.appliedOn}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        leave.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : leave.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {leave.status}
                    </Badge>
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
