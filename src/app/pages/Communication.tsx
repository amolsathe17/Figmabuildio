import { useState } from "react";
import { Send, Search, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { ScrollArea } from "../components/ui/scroll-area";

const conversations = [
  {
    id: 1,
    name: "Engineering Team",
    type: "group",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop",
    lastMessage: "Sarah: Great work on the sprint!",
    time: "2m ago",
    unread: 3,
    online: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    type: "direct",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    lastMessage: "Thanks for the code review",
    time: "15m ago",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Sales Team",
    type: "group",
    avatar: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop",
    lastMessage: "Emily: Q2 targets achieved!",
    time: "1h ago",
    unread: 5,
    online: false,
  },
  {
    id: 4,
    name: "Michael Chen",
    type: "direct",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    lastMessage: "Can we discuss the API changes?",
    time: "2h ago",
    unread: 1,
    online: true,
  },
  {
    id: 5,
    name: "HR Announcements",
    type: "channel",
    avatar: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop",
    lastMessage: "New policy updates available",
    time: "3h ago",
    unread: 0,
    online: false,
  },
  {
    id: 6,
    name: "David Miller",
    type: "direct",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    lastMessage: "Meeting at 3 PM?",
    time: "4h ago",
    unread: 0,
    online: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    message: "Hey team! Just finished the sprint planning for next week.",
    time: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "You",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    message: "Great! Did we finalize the priorities?",
    time: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    message: "Yes, authentication and dashboard improvements are top priority.",
    time: "10:33 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    message: "Exactly! We're also adding the new reporting module.",
    time: "10:34 AM",
    isMe: false,
  },
  {
    id: 5,
    sender: "You",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    message: "Perfect. Let's aim to complete the auth module by Wednesday.",
    time: "10:35 AM",
    isMe: true,
  },
  {
    id: 6,
    sender: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    message: "I'll start working on the UI components today.",
    time: "10:36 AM",
    isMe: false,
  },
];

export function Communication() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messageText, setMessageText] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Communication</h1>
        <p className="text-gray-500 mt-1">Team chat, announcements, and internal messaging</p>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-12 gap-6">
        {/* Conversations List */}
        <Card className="col-span-4">
          <CardHeader className="pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[600px]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b ${
                    selectedChat.id === conv.id ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback>{conv.name[0]}</AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium truncate">{conv.name}</h4>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 rounded-full bg-blue-600">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="col-span-8">
          {/* Chat Header */}
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={selectedChat.avatar} />
                    <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                  </Avatar>
                  {selectedChat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{selectedChat.name}</h3>
                  <p className="text-xs text-gray-500">
                    {selectedChat.type === "group" ? "12 members" : selectedChat.online ? "Active now" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="p-0">
            <ScrollArea className="h-[500px] p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.isMe ? "flex-row-reverse" : ""}`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={msg.avatar} />
                      <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div className={`flex flex-col ${msg.isMe ? "items-end" : ""}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium">{msg.sender}</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <div
                        className={`px-4 py-2 rounded-lg max-w-md ${
                          msg.isMe
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setMessageText("");
                    }
                  }}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* WhatsApp Integration Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">WhatsApp Business Integration</h3>
              <p className="text-sm text-gray-500 mt-1">Automated notifications and reminders</p>
            </div>
            <Badge className="bg-green-100 text-green-800">Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Messages Sent Today</div>
              <div className="text-2xl font-bold">342</div>
              <div className="text-xs text-gray-500 mt-1">Attendance reminders, leave approvals</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Delivery Rate</div>
              <div className="text-2xl font-bold">98.5%</div>
              <div className="text-xs text-green-600 mt-1">Excellent delivery</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Response Rate</div>
              <div className="text-2xl font-bold">87%</div>
              <div className="text-xs text-blue-600 mt-1">Quick responses</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
