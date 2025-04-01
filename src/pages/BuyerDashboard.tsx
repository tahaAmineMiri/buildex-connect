
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Bell, MessageSquare, Settings, Home, Package, ShoppingCart, 
  CreditCard, BarChart2, Users, HelpCircle, LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const sidebarItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'products', label: 'Browse Products', icon: Package },
    { id: 'orders', label: 'My Orders', icon: ShoppingCart },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'suppliers', label: 'Suppliers', icon: Users },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen flex bg-construction-gray/20">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-construction-gray/30 shadow-sm flex-shrink-0 hidden md:block">
        <div className="p-6">
          <div className="flex items-center mb-10">
            <span className="text-construction-orange mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21V10L12 5L21 10V21H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V14H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-xl font-display font-bold text-construction-black">Incom</span>
          </div>
          
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-construction-blue text-white'
                    : 'text-construction-slate hover:bg-construction-gray/30'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-construction-gray/30">
            <button className="flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-construction-slate hover:bg-construction-gray/30 transition-colors">
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </button>
            <button className="flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-construction-slate hover:bg-construction-gray/30 transition-colors">
              <LogOut className="h-5 w-5 mr-3" />
              Log Out
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white p-4 border-b border-construction-gray/30 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-construction-slate h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products, orders, suppliers..."
                className="pl-10 py-2 pr-4 rounded-lg border-construction-gray/50"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-construction-gray/50 relative">
                <Bell className="h-5 w-5 text-construction-slate" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-construction-orange rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-construction-gray/50 relative">
                <MessageSquare className="h-5 w-5 text-construction-slate" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-construction-blue rounded-full"></span>
              </Button>
              <div className="w-10 h-10 rounded-full bg-construction-blue/10 flex items-center justify-center text-construction-blue font-medium">
                JD
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard content */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold mb-6 text-construction-black">Buyer Dashboard</h1>
            
            {/* Dashboard cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Active Orders */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Active Orders</p>
                    <h3 className="text-3xl font-bold text-construction-black">12</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-construction-blue/10 flex items-center justify-center text-construction-blue">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-green-500 font-medium">↑ 8%</span> from last month
                </div>
              </motion.div>
              
              {/* Total Spent */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Total Spent</p>
                    <h3 className="text-3xl font-bold text-construction-black">$24,521</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-construction-orange/10 flex items-center justify-center text-construction-orange">
                    <CreditCard className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-green-500 font-medium">↑ 12%</span> from last quarter
                </div>
              </motion.div>
              
              {/* Saved Items */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Saved Items</p>
                    <h3 className="text-3xl font-bold text-construction-black">37</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-construction-blue/10 flex items-center justify-center text-construction-blue">
                    <Package className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-green-500 font-medium">+5</span> new this week
                </div>
              </motion.div>
              
              {/* Connected Suppliers */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Connected Suppliers</p>
                    <h3 className="text-3xl font-bold text-construction-black">8</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-green-500 font-medium">+2</span> new connections
                </div>
              </motion.div>
            </div>
            
            {/* Recent Activity Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-construction-black">Recent Activity</h2>
                <Button variant="outline" size="sm" className="text-sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {/* Activity items */}
                <div className="flex items-start p-3 rounded-lg hover:bg-construction-gray/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-construction-blue/10 flex items-center justify-center text-construction-blue mr-4 flex-shrink-0">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-black">Order #12345 placed</p>
                    <p className="text-sm text-construction-slate">Premium Cement Mix (20 units)</p>
                    <p className="text-xs text-construction-slate mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg hover:bg-construction-gray/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-black">New message from BuildRight Supplies</p>
                    <p className="text-sm text-construction-slate">RE: Your recent inquiry about steel beams</p>
                    <p className="text-xs text-construction-slate mt-1">Yesterday at 4:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg hover:bg-construction-gray/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-construction-orange/10 flex items-center justify-center text-construction-orange mr-4 flex-shrink-0">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-black">Order #12288 delivered</p>
                    <p className="text-sm text-construction-slate">Safety Helmets (5 units)</p>
                    <p className="text-xs text-construction-slate mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recommended Products Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-construction-black">Recommended for You</h2>
                <Button variant="outline" size="sm" className="text-sm">View All</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Product recommendations */}
                <div className="border border-construction-gray/30 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-construction-gray/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f" 
                      alt="Premium Cement Mix" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                      In Stock
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-construction-black mb-1">Premium Cement Mix</h3>
                    <p className="text-sm text-construction-slate mb-2">High-quality cement for all projects</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-construction-blue">$12.99</p>
                      <Button size="sm" variant="outline" className="text-xs">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-construction-gray/30 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-construction-gray/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89f47e" 
                      alt="Insulation Roll" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-amber-500 text-white text-xs rounded-full">
                      Low Stock
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-construction-black mb-1">Insulation Roll 50ft</h3>
                    <p className="text-sm text-construction-slate mb-2">Thermal and sound insulation</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-construction-blue">$89.50</p>
                      <Button size="sm" variant="outline" className="text-xs">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-construction-gray/30 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-construction-gray/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1617796110702-9a4f9c7b5ae8" 
                      alt="PVC Pipes" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                      In Stock
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-construction-black mb-1">PVC Pipes 10ft</h3>
                    <p className="text-sm text-construction-slate mb-2">High-pressure plumbing pipes</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-construction-blue">$18.75</p>
                      <Button size="sm" variant="outline" className="text-xs">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
