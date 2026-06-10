import { 
  Settings as SettingsIcon, Building2, Users, Shield, Bell, 
  Palette, Globe, Database, Zap, CreditCard, Lock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Separator } from "../components/ui/separator";

export function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your organization settings and preferences</p>
      </div>

      <Tabs defaultValue="organization" className="space-y-6">
        <TabsList>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Organization Settings */}
        <TabsContent value="organization">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Organization Details
                </CardTitle>
                <CardDescription>Update your organization information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Acme Corporation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select defaultValue="it">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="bpo">BPO</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Company Email</Label>
                    <Input id="email" type="email" defaultValue="contact@acme.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 234-567-8900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Business Street, San Francisco, CA 94102" />
                </div>
                <Separator />
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Work Hours & Holidays</CardTitle>
                <CardDescription>Configure working hours and holiday calendar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="workStart">Work Start Time</Label>
                    <Input id="workStart" type="time" defaultValue="09:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workEnd">Work End Time</Label>
                    <Input id="workEnd" type="time" defaultValue="18:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Working Days</Label>
                  <div className="flex gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <Button
                        key={day}
                        variant={day !== "Sat" && day !== "Sun" ? "default" : "outline"}
                        size="sm"
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Attendance Settings */}
        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Configuration</CardTitle>
              <CardDescription>Configure attendance tracking methods and rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Check-in Methods</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="gps">GPS Check-in</Label>
                      <p className="text-sm text-gray-500">Allow employees to check in using GPS</p>
                    </div>
                    <Switch id="gps" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="face">Face Verification</Label>
                      <p className="text-sm text-gray-500">Require face recognition for check-in</p>
                    </div>
                    <Switch id="face" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="qr">QR Code Check-in</Label>
                      <p className="text-sm text-gray-500">Generate QR codes for office check-in</p>
                    </div>
                    <Switch id="qr" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="manual">Manual Check-in</Label>
                      <p className="text-sm text-gray-500">Allow manual attendance marking</p>
                    </div>
                    <Switch id="manual" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-4">Attendance Rules</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="lateThreshold">Late Threshold (minutes)</Label>
                    <Input id="lateThreshold" type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="halfDayHours">Half Day Hours</Label>
                    <Input id="halfDayHours" type="number" defaultValue="4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoCheckout">Auto Check-out</Label>
                      <p className="text-sm text-gray-500">Automatically check out employees at end of day</p>
                    </div>
                    <Switch id="autoCheckout" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Productivity Settings */}
        <TabsContent value="productivity">
          <Card>
            <CardHeader>
              <CardTitle>Productivity Monitoring</CardTitle>
              <CardDescription>Configure productivity tracking settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Screenshot Settings</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="screenshotFreq">Screenshot Frequency</Label>
                    <Select defaultValue="15">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="disabled">Disabled</SelectItem>
                        <SelectItem value="10">Every 10 minutes</SelectItem>
                        <SelectItem value="15">Every 15 minutes</SelectItem>
                        <SelectItem value="30">Every 30 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="blurScreenshots">Blur Sensitive Data</Label>
                      <p className="text-sm text-gray-500">Automatically blur sensitive information</p>
                    </div>
                    <Switch id="blurScreenshots" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="privacyMode">Privacy Mode</Label>
                      <p className="text-sm text-gray-500">Employees can pause monitoring temporarily</p>
                    </div>
                    <Switch id="privacyMode" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-4">Application Tracking</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="trackApps">Track Applications</Label>
                      <p className="text-sm text-gray-500">Monitor application usage time</p>
                    </div>
                    <Switch id="trackApps" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="trackUrls">Track URLs</Label>
                      <p className="text-sm text-gray-500">Monitor visited websites</p>
                    </div>
                    <Switch id="trackUrls" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="idleDetection">Idle Time Detection</Label>
                      <p className="text-sm text-gray-500">Detect when employees are idle</p>
                    </div>
                    <Switch id="idleDetection" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Manage notification channels and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Email Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailCheckIn">Check-in Notifications</Label>
                    <Switch id="emailCheckIn" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailLeave">Leave Requests</Label>
                    <Switch id="emailLeave" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailReports">Daily Reports</Label>
                    <Switch id="emailReports" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-4">WhatsApp Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="whatsappReminders">Attendance Reminders</Label>
                    <Switch id="whatsappReminders" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="whatsappLeave">Leave Approvals</Label>
                    <Switch id="whatsappLeave" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="whatsappTasks">Task Assignments</Label>
                    <Switch id="whatsappTasks" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Settings */}
        <TabsContent value="integrations">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Integrations
                </CardTitle>
                <CardDescription>Connect with third-party services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { name: "WhatsApp Business", status: "connected", icon: "💬" },
                    { name: "Slack", status: "connected", icon: "💬" },
                    { name: "Microsoft Teams", status: "not-connected", icon: "👥" },
                    { name: "Google Workspace", status: "connected", icon: "📧" },
                    { name: "Zoom", status: "connected", icon: "📹" },
                    { name: "Jira", status: "not-connected", icon: "📋" },
                  ].map((integration) => (
                    <div
                      key={integration.name}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{integration.icon}</div>
                        <div>
                          <h4 className="font-medium">{integration.name}</h4>
                          <p className="text-sm text-gray-500 capitalize">{integration.status.replace("-", " ")}</p>
                        </div>
                      </div>
                      <Button
                        variant={integration.status === "connected" ? "outline" : "default"}
                        size="sm"
                      >
                        {integration.status === "connected" ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>Manage security and access control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Authentication</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="2fa">Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-500">Require 2FA for all users</p>
                      </div>
                      <Switch id="2fa" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sso">Single Sign-On (SSO)</Label>
                        <p className="text-sm text-gray-500">Enable SSO authentication</p>
                      </div>
                      <Switch id="sso" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-4">Password Policy</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="minLength">Minimum Password Length</Label>
                      <Input id="minLength" type="number" defaultValue="8" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="requireSpecial">Require Special Characters</Label>
                      <Switch id="requireSpecial" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                      <Input type="number" defaultValue="90" className="w-24" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="dataEncryption">Data Encryption</Label>
                    <p className="text-sm text-gray-500">Encrypt all sensitive data</p>
                  </div>
                  <Switch id="dataEncryption" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="gdpr">GDPR Compliance</Label>
                    <p className="text-sm text-gray-500">Enable GDPR compliance features</p>
                  </div>
                  <Switch id="gdpr" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auditLog">Audit Logs</Label>
                    <p className="text-sm text-gray-500">Track all system activities</p>
                  </div>
                  <Switch id="auditLog" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
