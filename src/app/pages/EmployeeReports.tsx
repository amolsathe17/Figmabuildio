import { FileText, Download, Eye, Calendar as CalendarIcon, Filter, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
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

const myReports = [
  {
    id: "1",
    title: "Weekly Status Report - Week 23",
    type: "Weekly",
    submittedOn: "2026-06-08",
    status: "approved",
    approvedBy: "John Manager",
  },
  {
    id: "2",
    title: "Project Progress - Q2 Review",
    type: "Project",
    submittedOn: "2026-06-05",
    status: "approved",
    approvedBy: "Jane Lead",
  },
  {
    id: "3",
    title: "Monthly Summary - May 2026",
    type: "Monthly",
    submittedOn: "2026-05-31",
    status: "approved",
    approvedBy: "John Manager",
  },
  {
    id: "4",
    title: "Bug Fix Report - Payment Gateway",
    type: "Incident",
    submittedOn: "2026-05-28",
    status: "approved",
    approvedBy: "Tech Lead",
  },
  {
    id: "5",
    title: "Training Completion - React Advanced",
    type: "Training",
    submittedOn: "2026-05-20",
    status: "approved",
    approvedBy: "HR Manager",
  },
];

const reportTemplates = [
  { id: "1", name: "Weekly Status Report", description: "Weekly progress and activities" },
  { id: "2", name: "Project Report", description: "Project milestone and deliverables" },
  { id: "3", name: "Incident Report", description: "Bug fixes and issues resolved" },
  { id: "4", name: "Training Report", description: "Completed training and certifications" },
];

export function EmployeeReports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Reports</h1>
          <p className="text-gray-500 mt-1">Submit and manage your reports</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Report</DialogTitle>
              <DialogDescription>
                Fill in the details to submit your report
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="report-template">Report Template</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent>
                    {reportTemplates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-title">Report Title</Label>
                <Input id="report-title" placeholder="Enter report title..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-period">Reporting Period</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="date" />
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-content">Report Content</Label>
                <Textarea
                  id="report-content"
                  placeholder="Enter your report details..."
                  rows={8}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit Report</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Reports</p>
                <p className="text-3xl font-bold mt-1">24</p>
                <p className="text-xs text-gray-500 mt-1">All time</p>
              </div>
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-3xl font-bold mt-1">5</p>
                <p className="text-xs text-gray-500 mt-1">Reports submitted</p>
              </div>
              <CalendarIcon className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Approved</p>
                <p className="text-3xl font-bold mt-1">22</p>
                <p className="text-xs text-green-600 mt-1">91.7% approval rate</p>
              </div>
              <Badge className="h-10 w-10 bg-green-100 text-green-600 flex items-center justify-center text-lg">
                ✓
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Response</p>
                <p className="text-3xl font-bold mt-1">2.3d</p>
                <p className="text-xs text-gray-500 mt-1">Days to approval</p>
              </div>
              <CalendarIcon className="h-10 w-10 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Available Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {reportTemplates.map((template) => (
              <div key={template.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{template.name}</h3>
                    <p className="text-sm text-gray-500">{template.description}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>My Reports</CardTitle>
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
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>Approved By</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{report.type}</Badge>
                  </TableCell>
                  <TableCell>{report.submittedOn}</TableCell>
                  <TableCell>{report.approvedBy}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
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
