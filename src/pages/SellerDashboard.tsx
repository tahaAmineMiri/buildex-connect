
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Bell, MessageSquare, Settings, Home, Package, ShoppingCart, 
  CreditCard, BarChart2, Users, HelpCircle, LogOut, Plus, Truck, DollarSign 
} from 'lucide-react';
import { Button } from '@/components/common/ui/button';
import { Input } from '@/components/common/ui/input';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const sidebarItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'products', label: 'My Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'customers', label: 'Customers', icon: Users },
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
                    ? 'bg-construction-orange text-white'
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
                placeholder="Search products, orders, customers..."
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
              <div className="w-10 h-10 rounded-full bg-construction-orange/10 flex items-center justify-center text-construction-orange font-medium">
                BS
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
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-construction-black">Seller Dashboard</h1>
              <Button className="bg-construction-orange hover:bg-construction-orange/90">
                <Plus className="mr-2 h-4 w-4" />
                Add New Product
              </Button>
            </div>
            
            {/* Dashboard cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Total Sales */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Total Sales</p>
                    <h3 className="text-3xl font-bold text-construction-black">$48,750</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-construction-orange/10 flex items-center justify-center text-construction-orange">
                    <DollarSign className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-green-500 font-medium">↑ 12%</span> from last month
                </div>
              </motion.div>
              
              {/* Orders Received */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Orders Received</p>
                    <h3 className="text-3xl font-bold text-construction-black">32</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-construction-blue/10 flex items-center justify-center text-construction-blue">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-green-500 font-medium">↑ 8%</span> from last week
                </div>
              </motion.div>
              
              {/* Active Products */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Active Products</p>
                    <h3 className="text-3xl font-bold text-construction-black">56</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <Package className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-green-500 font-medium">+4</span> new this month
                </div>
              </motion.div>
              
              {/* Pending Shipments */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-construction-slate text-sm font-medium mb-1">Pending Shipments</p>
                    <h3 className="text-3xl font-bold text-construction-black">8</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                    <Truck className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-construction-slate">
                  <span className="text-amber-500 font-medium">Due today: 3</span>
                </div>
              </motion.div>
            </div>
            
            {/* Recent Orders Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-construction-black">Recent Orders</h2>
                <Button variant="outline" size="sm" className="text-sm">View All</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-construction-gray/30">
                      <th className="text-left py-3 px-4 text-sm font-medium text-construction-slate">Order ID</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-construction-slate">Customer</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-construction-slate">Product</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-construction-slate">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-construction-slate">Status</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-construction-slate">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-construction-gray/30 hover:bg-construction-gray/5">
                      <td className="py-3 px-4 text-sm">#ORD-7839</td>
                      <td className="py-3 px-4 text-sm">DreamBuilder Construction</td>
                      <td className="py-3 px-4 text-sm">Premium Cement Mix (20 units)</td>
                      <td className="py-3 px-4 text-sm font-medium">$259.80</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Completed
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm" className="text-xs text-construction-blue hover:text-construction-blue/80">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b border-construction-gray/30 hover:bg-construction-gray/5">
                      <td className="py-3 px-4 text-sm">#ORD-7840</td>
                      <td className="py-3 px-4 text-sm">Elevation Contractors</td>
                      <td className="py-3 px-4 text-sm">PVC Pipes 10ft (15 units)</td>
                      <td className="py-3 px-4 text-sm font-medium">$281.25</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                          Processing
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm" className="text-xs text-construction-blue hover:text-construction-blue/80">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b border-construction-gray/30 hover:bg-construction-gray/5">
                      <td className="py-3 px-4 text-sm">#ORD-7841</td>
                      <td className="py-3 px-4 text-sm">Atlas Engineering</td>
                      <td className="py-3 px-4 text-sm">Steel I-Beam 6"x4" (4 units)</td>
                      <td className="py-3 px-4 text-sm font-medium">$999.96</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                          Shipping
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm" className="text-xs text-construction-blue hover:text-construction-blue/80">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-construction-gray/5">
                      <td className="py-3 px-4 text-sm">#ORD-7842</td>
                      <td className="py-3 px-4 text-sm">Cornerstone Builders</td>
                      <td className="py-3 px-4 text-sm">Insulation Roll 50ft (10 units)</td>
                      <td className="py-3 px-4 text-sm font-medium">$895.00</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Pending
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm" className="text-xs text-construction-blue hover:text-construction-blue/80">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Top Products Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-construction-gray/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-construction-black">Top Selling Products</h2>
                <Button variant="outline" size="sm" className="text-sm">View All Products</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Product */}
                <div className="border border-construction-gray/30 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-construction-gray/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f" 
                      alt="Premium Cement Mix" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                      Best Seller
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-construction-black mb-1">Premium Cement Mix</h3>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-construction-blue">$12.99</p>
                      <div className="flex items-center text-yellow-500 text-xs">
                        ★★★★★ <span className="text-construction-slate ml-1">(48)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-construction-slate">Stock: 230 units</span>
                      <span className="text-green-600 font-medium">↑ 24% sales</span>
                    </div>
                  </div>
                </div>
                
                {/* Product */}
                <div className="border border-construction-gray/30 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-construction-gray/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1618090584176-7132b9911657" 
                      alt="Steel I-Beam" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-construction-black mb-1">Steel I-Beam 6"x4"</h3>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-construction-blue">$249.99</p>
                      <div className="flex items-center text-yellow-500 text-xs">
                        ★★★★☆ <span className="text-construction-slate ml-1">(32)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-construction-slate">Stock: 48 units</span>
                      <span className="text-green-600 font-medium">↑ 18% sales</span>
                    </div>
                  </div>
                </div>
                
                {/* Product */}
                <div className="border border-construction-gray/30 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-construction-gray/20 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1617796110702-9a4f9c7b5ae8" 
                      alt="PVC Pipes" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-construction-black mb-1">PVC Pipes 10ft</h3>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-construction-blue">$18.75</p>
                      <div className="flex items-center text-yellow-500 text-xs">
                        ★★★★☆ <span className="text-construction-slate ml-1">(65)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-construction-slate">Stock: 154 units</span>
                      <span className="text-green-600 font-medium">↑ 12% sales</span>
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

export default SellerDashboard;
