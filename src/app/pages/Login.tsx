import { useState } from "react";
import { useNavigate } from "react-router";
import { Building2, Lock, Mail, UserCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Login() {
  const navigate = useNavigate();
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleEmployeeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication - in production, validate against backend
    if (employeeEmail && employeePassword) {
      localStorage.setItem("userRole", "employee");
      localStorage.setItem("userEmail", employeeEmail);
      navigate("/employee/dashboard");
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication - in production, validate against backend
    if (adminEmail && adminPassword) {
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("userEmail", adminEmail);
      navigate("/admin");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(240, 249, 255, 0.6) 25%, rgba(255, 255, 255, 0.7) 50%, rgba(243, 232, 255, 0.6) 75%, rgba(220, 198, 224, 0.4) 100%),
          radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
          radial-gradient(ellipse at 10% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 35%),
          radial-gradient(ellipse at 70% 70%, rgba(34, 197, 94, 0.08) 0%, transparent 45%)
        `
      }}
    >
      {/* Decorative elements for visual depth */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">WorkForce AI</h1>
          <p className="text-gray-600 mt-2">AI-Powered Employee Management System</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="employee" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="employee" className="flex items-center gap-2">
                  <UserCircle className="w-4 h-4" />
                  Employee
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Admin
                </TabsTrigger>
              </TabsList>

              {/* Employee Login */}
              <TabsContent value="employee">
                <form onSubmit={handleEmployeeLogin} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="employee-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="employee-email"
                        type="email"
                        placeholder="employee@company.com"
                        value={employeeEmail}
                        onChange={(e) => setEmployeeEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employee-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="employee-password"
                        type="password"
                        placeholder="••••••••"
                        value={employeePassword}
                        onChange={(e) => setEmployeePassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In as Employee
                  </Button>
                  <div className="text-center text-sm text-gray-600 mt-4">
                    Demo: Use any email and password
                  </div>
                </form>
              </TabsContent>

              {/* Admin Login */}
              <TabsContent value="admin">
                <form onSubmit={handleAdminLogin} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@company.com"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="••••••••"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In as Admin
                  </Button>
                  <div className="text-center text-sm text-gray-600 mt-4">
                    Demo: Use any email and password
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Protected by enterprise-grade security</p>
          <p className="mt-2">© 2026 WorkForce AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
