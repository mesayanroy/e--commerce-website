import React from 'react';
import { ShieldCheck, Award, Gauge, ShoppingBasket as Basketball, Facebook, Twitter, Instagram, Mail, Star, Target, Dumbbell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 border-b border-gray-800 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Basketball className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-white">EliteHoop</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-orange-500">Home</a>
            <a href="#" className="text-gray-300 hover:text-orange-500">Products</a>
            <a href="#" className="text-gray-300 hover:text-orange-500">About Us</a>
            <a href="#" className="text-gray-300 hover:text-orange-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Crafted for <span className="text-orange-500">Champions</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Experience professional-grade basketballs engineered for superior grip, durability, and performance.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800"
              alt="Premium Basketball"
              className="rounded-lg shadow-2xl ring-1 ring-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <ShieldCheck className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Premium Materials</h3>
              <p className="text-gray-300">Genuine leather construction for optimal grip and control.</p>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Pro Certified</h3>
              <p className="text-gray-300">Meets professional league standards and specifications.</p>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm">
              <Gauge className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Perfect Balance</h3>
              <p className="text-gray-300">Precision-engineered for consistent bounce and feel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Premium Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pro Elite",
                price: "$89.99",
                image: "https://images.unsplash.com/photo-1614632537197-38810b6b31ba?auto=format&fit=crop&q=80&w=800",
                description: "Official game ball with premium leather construction."
              },
              {
                name: "Street Master",
                price: "$59.99",
                image: "https://images.unsplash.com/photo-1612118676143-a814eba8c126?auto=format&fit=crop&q=80&w=800",
                description: "Durable outdoor basketball for street games."
              },
              {
                name: "Training Pro",
                price: "$49.99",
                image: "https://images.unsplash.com/photo-1626012113003-0c5fd0a16387?auto=format&fit=crop&q=80&w=800",
                description: "Perfect for practice and training sessions."
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Collections</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Discover our specialized basketball collections, each crafted for specific playing styles and environments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800"
                alt="Professional Collection"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  <h3 className="text-xl font-bold text-white">Professional Series</h3>
                </div>
                <p className="text-gray-200 mb-4">Competition-grade basketballs used by professional leagues worldwide.</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">From $89.99</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1627627256672-027a4613d028?auto=format&fit=crop&q=80&w=800"
                alt="Training Collection"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end">
                <div className="flex items-center mb-2">
                  <Target className="h-5 w-5 text-orange-500 mr-2" />
                  <h3 className="text-xl font-bold text-white">Training Elite</h3>
                </div>
                <p className="text-gray-200 mb-4">Specialized balls designed for skill development and practice sessions.</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">From $49.99</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1627627256629-da962ea20bc7?auto=format&fit=crop&q=80&w=800"
                alt="Street Collection"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end">
                <div className="flex items-center mb-2">
                  <Dumbbell className="h-5 w-5 text-orange-500 mr-2" />
                  <h3 className="text-xl font-bold text-white">Street Master</h3>
                </div>
                <p className="text-gray-200 mb-4">Durable outdoor basketballs built to withstand rough playground surfaces.</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">From $59.99</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center">
              View All Collections
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Basketball className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold">EliteHoop</span>
              </div>
              <p className="text-gray-400">
                Crafting premium basketballs for champions since 1990.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                1234 Sport Street<br />
                Los Angeles, CA 90001<br />
                contact@elitehoop.com<br />
                (555) 123-4567
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500" title="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500" title="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500" title="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-r hover:bg-orange-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EliteHoop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;