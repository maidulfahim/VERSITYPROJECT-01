import React, { useState } from 'react';
import { 
  Bell, Search, Home, Users, Calendar, BookOpen, MessageSquare, 
  Menu, X, ThumbsUp, MessageCircle, Share2, MoreHorizontal, Plus
} from 'lucide-react';

const UniConnect = () => {
  const [activeTab, setActiveTab] = useState('Feed');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  // Mock Data
  const posts = [
    {
      id: 1,
      user: "Dr. Sarah Jenkins",
      role: "Professor",
      roleColor: "bg-blue-100 text-blue-600",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      content: "Excited to announce the new AI Research Lab opening this Friday. All seniors are welcome to join the orientation!",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      time: "2h ago"
    },
    {
      id: 2,
      user: "Robotics Club",
      role: "Club",
      roleColor: "bg-purple-100 text-purple-600",
      avatar: "https://i.pravatar.cc/150?u=robot",
      content: "The regional qualifiers are next week! Grab your gear and let's win this. 🤖🔥",
      image: null,
      time: "5h ago"
    }
  ];

  const toggleLike = (id) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 shadow-sm border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-xl">
              <BookOpen className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">UniSphere</h1>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search campus, clubs, people..." 
              className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <img src="https://i.pravatar.cc/150?u=me" alt="Profile" className="w-9 h-9 rounded-full border-2 border-indigo-100 cursor-pointer" />
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex gap-6 p-4">
        
        {/* --- SIDEBAR (Left) --- */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:bg-transparent
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col gap-2 p-4 lg:p-0">
            {[
              { name: 'Feed', icon: Home },
              { name: 'Clubs', icon: Users },
              { name: 'Events', icon: Calendar },
              { name: 'Directory', icon: BookOpen },
              { name: 'Messages', icon: MessageSquare }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => { setActiveTab(item.name); setSidebarOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === item.name 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                  : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </button>
            ))}
          </div>
        </aside>

        {/* --- MAIN FEED (Center) --- */}
        <main className="flex-1 max-w-2xl">
          {/* Create Post Widget */}
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 border border-slate-100">
            <div className="flex gap-4">
              <img src="https://i.pravatar.cc/150?u=me" className="w-10 h-10 rounded-full" alt="User" />
              <input 
                placeholder="What's happening on campus?" 
                className="flex-1 bg-slate-50 rounded-xl px-4 border-none focus:ring-0 text-slate-700"
              />
            </div>
            <hr className="my-4 border-slate-100" />
            <div className="flex justify-between items-center">
              <button className="text-indigo-600 flex items-center gap-2 font-medium text-sm hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                <Plus size={18} /> Add Photo
              </button>
              <button className="bg-indigo-600 text-white px-5 py-1.5 rounded-lg font-medium shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all">
                Post
              </button>
            </div>
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <img src={post.avatar} className="w-11 h-11 rounded-full object-cover" alt={post.user} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-800">{post.user}</h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${post.roleColor}`}>
                            {post.role}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">{post.time}</p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20} /></button>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">{post.content}</p>
                  {post.image && (
                    <img src={post.image} className="rounded-xl w-full h-64 object-cover mb-4" alt="Post content" />
                  )}
                  <div className="flex items-center gap-6 pt-2 border-t border-slate-50">
                    <button 
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${likedPosts[post.id] ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}
                    >
                      <ThumbsUp size={18} fill={likedPosts[post.id] ? "currentColor" : "none"} /> {likedPosts[post.id] ? 'Liked' : 'Like'}
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 text-sm font-medium hover:text-indigo-600 transition-colors">
                      <MessageCircle size={18} /> Comment
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 text-sm font-medium hover:text-indigo-600 transition-colors">
                      <Share2 size={18} /> Share
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* --- WIDGETS (Right) --- */}
        <aside className="hidden lg:block w-80 space-y-6">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Calendar size={18} className="text-indigo-600" /> Upcoming Events
            </h2>
            <div className="space-y-4">
              {[
                { title: "Hackathon 2026", date: "Feb 15", type: "Tech" },
                { title: "Spring Career Fair", date: "Feb 20", type: "Academic" }
              ].map((event, i) => (
                <div key={i} className="flex gap-4 items-center p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                  <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold">{event.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{event.title}</h4>
                    <p className="text-xs text-slate-500">{event.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-5 text-white shadow-lg shadow-indigo-100">
            <h2 className="font-bold mb-3 flex items-center gap-2">
              <Bell size={18} /> Important Notices
            </h2>
            <ul className="text-sm space-y-3 opacity-90">
              <li className="bg-white/10 p-2 rounded-lg border border-white/10">Library extended hours for finals week.</li>
              <li className="bg-white/10 p-2 rounded-lg border border-white/10">Submit scholarship forms by Monday.</li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default UniConnect;