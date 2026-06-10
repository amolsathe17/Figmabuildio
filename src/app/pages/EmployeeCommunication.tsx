import { MessageSquare, Send, Bell, Users, Calendar as CalendarIcon, Video, Paperclip, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ScrollArea } from "../components/ui/scroll-area";

const messages = [
  {
    id: "1",
    from: "John Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    message: "Great work on the project! The client is very happy with the results.",
    time: "10:30 AM",
    unread: false,
  },
  {
    id: "2",
    from: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    message: "Can you review my pull request when you get a chance?",
    time: "09:15 AM",
    unread: true,
  },
  {
    id: "3",
    from: "HR Team",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    message: "Reminder: Please submit your Q2 self-assessment by Friday.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "4",
    from: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    message: "The meeting has been rescheduled to 3 PM today.",
    time: "Yesterday",
    unread: false,
  },
];

const announcements = [
  {
    id: "1",
    title: "Company Town Hall - June 15",
    description: "Join us for our quarterly company update and Q&A session.",
    date: "2026-06-08",
    category: "Event",
  },
  {
    id: "2",
    title: "New Remote Work Policy",
    description: "Updated guidelines for remote work arrangements starting July 1.",
    date: "2026-06-07",
    category: "Policy",
  },
  {
    id: "3",
    title: "Summer Team Building Event",
    description: "Save the date for our annual summer outing on July 20!",
    date: "2026-06-05",
    category: "Social",
  },
];

const upcomingMeetings = [
  {
    id: "1",
    title: "Team Standup",
    time: "11:00 AM - 11:30 AM",
    date: "Today",
    attendees: 8,
    type: "video",
  },
  {
    id: "2",
    title: "Project Review with Client",
    time: "2:00 PM - 3:00 PM",
    date: "Today",
    attendees: 5,
    type: "video",
  },
  {
    id: "3",
    title: "1:1 with Manager",
    time: "4:00 PM - 4:30 PM",
    date: "Tomorrow",
    attendees: 2,
    type: "video",
  },
];

export function EmployeeCommunication() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Communication</h1>
        <p className="text-gray-500 mt-1">Messages, announcements, and meetings</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Unread Messages</p>
                <p className="text-3xl font-bold mt-1">3</p>
              </div>
              <MessageSquare className="h-10 w-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">New Announcements</p>
                <p className="text-3xl font-bold mt-1">2</p>
              </div>
              <Bell className="h-10 w-10 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Meetings Today</p>
                <p className="text-3xl font-bold mt-1">3</p>
              </div>
              <Video className="h-10 w-10 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Team Members</p>
                <p className="text-3xl font-bold mt-1">25</p>
              </div>
              <Users className="h-10 w-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Messages */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Messages</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search messages..." className="pl-9 w-64" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px]">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      msg.unread ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={msg.avatar} />
                        <AvatarFallback>{msg.from[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold">{msg.from}</p>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4 flex gap-2">
              <Textarea placeholder="Type your message..." rows={3} className="flex-1" />
              <div className="flex flex-col gap-2">
                <Button size="icon" variant="outline">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meetings */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px]">
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <Video className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{meeting.title}</h3>
                        <p className="text-sm text-gray-500">{meeting.time}</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                          <CalendarIcon className="h-3 w-3" />
                          <span>{meeting.date}</span>
                          <Users className="h-3 w-3 ml-2" />
                          <span>{meeting.attendees} attendees</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-2">
                      <Video className="h-4 w-4 mr-2" />
                      Join Meeting
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Announcements */}
      <Card>
        <CardHeader>
          <CardTitle>Company Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{announcement.title}</h3>
                      <Badge variant="outline">{announcement.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{announcement.description}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
