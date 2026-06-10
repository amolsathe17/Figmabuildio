import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { EmployeeDashboardContent } from "./pages/EmployeeDashboardContent";
import { Login } from "./pages/Login";
import { Employees } from "./pages/Employees";
import { Attendance } from "./pages/Attendance";
import { Productivity } from "./pages/Productivity";
import { Tasks } from "./pages/Tasks";
import { LeaveManagement } from "./pages/LeaveManagement";
import { Performance } from "./pages/Performance";
import { Reports } from "./pages/Reports";
import { Communication } from "./pages/Communication";
import { Settings } from "./pages/Settings";
import { Layout } from "./components/Layout";
import { EmployeeLayout } from "./components/EmployeeLayout";
import { EmployeeTasks } from "./pages/EmployeeTasks";
import { EmployeeAttendance } from "./pages/EmployeeAttendance";
import { EmployeeLeave } from "./pages/EmployeeLeave";
import { EmployeePerformance } from "./pages/EmployeePerformance";
import { EmployeeReports } from "./pages/EmployeeReports";
import { EmployeeProductivity } from "./pages/EmployeeProductivity";
import { EmployeeCommunication } from "./pages/EmployeeCommunication";
import { EmployeeSettings } from "./pages/EmployeeSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/employee",
    Component: EmployeeLayout,
    children: [
      { path: "dashboard", Component: EmployeeDashboardContent },
      { path: "tasks", Component: EmployeeTasks },
      { path: "attendance", Component: EmployeeAttendance },
      { path: "leave", Component: EmployeeLeave },
      { path: "performance", Component: EmployeePerformance },
      { path: "reports", Component: EmployeeReports },
      { path: "productivity", Component: EmployeeProductivity },
      { path: "communication", Component: EmployeeCommunication },
      { path: "settings", Component: EmployeeSettings },
    ],
  },
  {
    path: "/admin",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "employees", Component: Employees },
      { path: "attendance", Component: Attendance },
      { path: "productivity", Component: Productivity },
      { path: "tasks", Component: Tasks },
      { path: "leave", Component: LeaveManagement },
      { path: "performance", Component: Performance },
      { path: "reports", Component: Reports },
      { path: "communication", Component: Communication },
      { path: "settings", Component: Settings },
    ],
  },
]);
