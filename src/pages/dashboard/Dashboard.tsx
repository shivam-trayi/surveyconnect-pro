import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { useAuth } from '@/context/AuthContext';

const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
  </svg>
);

const SurveyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const EarningsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
    <polyline points="16,7 22,7 22,13" />
  </svg>
);

// Mock data
const surveyData = [
  { month: 'Jan', completed: 45, active: 12 },
  { month: 'Feb', completed: 52, active: 18 },
  { month: 'Mar', completed: 48, active: 15 },
  { month: 'Apr', completed: 61, active: 22 },
  { month: 'May', completed: 55, active: 19 },
  { month: 'Jun', completed: 67, active: 25 },
];

const earningsData = [
  { name: 'Consumer Research', value: 35, color: '#1A73E8' },
  { name: 'Healthcare Studies', value: 25, color: '#34A853' },
  { name: 'Technology Surveys', value: 20, color: '#F59E0B' },
  { name: 'Financial Research', value: 20, color: '#EF4444' },
];

const revenueData = [
  { month: 'Jan', revenue: 4500 },
  { month: 'Feb', revenue: 5200 },
  { month: 'Mar', revenue: 4800 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 5500 },
  { month: 'Jun', revenue: 6700 },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VP</span>
              </div>
              <div>
                <h1 className="font-bold text-lg">VendorPortal</h1>
                <p className="text-xs text-muted-foreground">Vendor Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-muted-foreground text-xs">{user?.company}</p>
                </div>
              </div>
              <Button variant="outline" onClick={logout} size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-6 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Welcome Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-lg text-muted-foreground">
              Here's what's happening with your vendor account today.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="gradient-subtle border-border/50 hover:shadow-medium transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Surveys</CardTitle>
                <SurveyIcon />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent font-medium">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-subtle border-border/50 hover:shadow-medium transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Surveys</CardTitle>
                <DashboardIcon />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent font-medium">+8%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-subtle border-border/50 hover:shadow-medium transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <EarningsIcon />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$32,450</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent font-medium">+23%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-subtle border-border/50 hover:shadow-medium transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                <TrendingUpIcon />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent font-medium">+2.1%</span> from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs Section */}
          <motion.div variants={itemVariants}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Survey Performance Chart */}
                  <Card className="gradient-subtle border-border/50">
                    <CardHeader>
                      <CardTitle>Survey Performance</CardTitle>
                      <CardDescription>Monthly completed vs active surveys</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={surveyData}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="completed" fill="hsl(var(--primary))" radius={4} />
                          <Bar dataKey="active" fill="hsl(var(--accent))" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Earnings Breakdown */}
                  <Card className="gradient-subtle border-border/50">
                    <CardHeader>
                      <CardTitle>Earnings by Category</CardTitle>
                      <CardDescription>Revenue distribution across research types</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={earningsData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {earningsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {earningsData.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-xs text-muted-foreground">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="gradient-subtle border-border/50">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest survey completions and updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: 'Consumer Behavior Study', status: 'Completed', time: '2 hours ago', earnings: '$450' },
                        { title: 'Healthcare Technology Survey', status: 'In Progress', time: '5 hours ago', earnings: '$320' },
                        { title: 'Financial Services Research', status: 'Completed', time: '1 day ago', earnings: '$280' },
                        { title: 'E-commerce User Experience', status: 'Completed', time: '2 days ago', earnings: '$380' },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background border border-border/50">
                          <div className="space-y-1">
                            <p className="font-medium">{activity.title}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant={activity.status === 'Completed' ? 'default' : 'secondary'}>
                                {activity.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{activity.time}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-accent">{activity.earnings}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Revenue Trend */}
                  <Card className="gradient-subtle border-border/50">
                    <CardHeader>
                      <CardTitle>Revenue Trend</CardTitle>
                      <CardDescription>Monthly revenue over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                          <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="hsl(var(--primary))"
                            strokeWidth={3}
                            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Performance Metrics */}
                  <Card className="gradient-subtle border-border/50">
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                      <CardDescription>Key performance indicators</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Survey Completion Rate</span>
                          <span className="font-medium">94.2%</span>
                        </div>
                        <Progress value={94.2} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Quality Score</span>
                          <span className="font-medium">4.8/5.0</span>
                        </div>
                        <Progress value={96} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Response Time</span>
                          <span className="font-medium">2.3 min avg</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Client Satisfaction</span>
                          <span className="font-medium">4.9/5.0</span>
                        </div>
                        <Progress value={98} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Profile Information */}
                  <Card className="gradient-subtle border-border/50">
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Your vendor account details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                            {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold">{user?.name}</h3>
                          <p className="text-muted-foreground">{user?.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 pt-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Company</label>
                          <p className="text-foreground">{user?.company}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Country</label>
                          <p className="text-foreground">{user?.country}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                          <p className="text-foreground">
                            {user?.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : 'N/A'}
                          </p>
                        </div>
                      </div>

                      <Button className="w-full mt-4">Update Profile</Button>
                    </CardContent>
                  </Card>

                  {/* Account Status */}
                  <Card className="gradient-subtle border-border/50">
                    <CardHeader>
                      <CardTitle>Account Status</CardTitle>
                      <CardDescription>Your vendor account standing</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-accent/10 border border-accent/20">
                        <div>
                          <p className="font-medium text-accent">Verified Vendor</p>
                          <p className="text-sm text-muted-foreground">Account fully verified</p>
                        </div>
                        <Badge className="bg-accent text-accent-foreground">Active</Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Email Verified</span>
                          <Badge variant="default">✓</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Company Verified</span>
                          <Badge variant="default">✓</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Payment Setup</span>
                          <Badge variant="default">✓</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Quality Certified</span>
                          <Badge variant="default">✓</Badge>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full mt-4">
                        View Certification
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}