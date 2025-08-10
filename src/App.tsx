import React from 'react';
import { Phone, Mail, ExternalLink, Smartphone, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="shadow-sm border-b border-gray-100" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/PX3SolutionsRedWhite.png" 
                alt="P3 Solutions Group Logo" 
                className="w-20 h-20 object-contain drop-shadow-sm"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">P3 Solutions Group</h1>
                <p className="text-sm" style={{color: '#a7a9ac'}}>Technology Investment Partners</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" style={{color: '#a7a9ac'}} className="hover:transition-colors duration-200" onMouseEnter={(e) => e.target.style.color = '#dd0000'} onMouseLeave={(e) => e.target.style.color = '#a7a9ac'}>About</a>
              <a href="#portfolio" style={{color: '#a7a9ac'}} className="hover:transition-colors duration-200" onMouseEnter={(e) => e.target.style.color = '#dd0000'} onMouseLeave={(e) => e.target.style.color = '#a7a9ac'}>Portfolio</a>
              <a href="#contact" style={{color: '#a7a9ac'}} className="hover:transition-colors duration-200" onMouseEnter={(e) => e.target.style.color = '#dd0000'} onMouseLeave={(e) => e.target.style.color = '#a7a9ac'}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32" style={{background: 'linear-gradient(to bottom right, #ffffff, #f5f5f5, #ffffff)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#000000'}}>
              Investing in the
              <span style={{color: '#dd0000'}}> Future </span>
              of Technology
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{color: '#a7a9ac'}}>
              P3 Solutions Group is a technology holding company dedicated to identifying, 
              investing in, and nurturing innovative small tech startups that are shaping tomorrow's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#portfolio" 
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#dd0000'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#be0000'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dd0000'}
              >
                View Our Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white font-semibold rounded-lg border-2 transition-all duration-300 shadow-md hover:shadow-lg"
                style={{color: '#dd0000', borderColor: '#dd0000'}}
                onMouseEnter={(e) => {e.target.style.backgroundColor = '#f5f5f5'; e.target.style.borderColor = '#be0000'}}
                onMouseLeave={(e) => {e.target.style.backgroundColor = '#ffffff'; e.target.style.borderColor = '#dd0000'}}
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6" style={{color: '#000000'}}>Why P3 Solutions Group?</h3>
            <p className="text-lg max-w-3xl mx-auto" style={{color: '#a7a9ac'}}>
              We believe in the power of innovative technology to transform industries and improve lives. 
              Our strategic investments focus on startups with exceptional potential and visionary leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#f5f5f5'}}>
                <TrendingUp className="w-8 h-8" style={{color: '#dd0000'}} />
              </div>
              <h4 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>Strategic Growth</h4>
              <p className="leading-relaxed" style={{color: '#a7a9ac'}}>
                We provide more than capital – we offer strategic guidance, industry connections, 
                and operational expertise to accelerate startup growth.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#f5f5f5'}}>
                <Users className="w-8 h-8" style={{color: '#be0000'}} />
              </div>
              <h4 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>Long-term Partnership</h4>
              <p className="leading-relaxed" style={{color: '#a7a9ac'}}>
                We build lasting relationships with our portfolio companies, supporting them 
                through every stage of their growth journey.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#f5f5f5'}}>
                <Shield className="w-8 h-8" style={{color: '#830000'}} />
              </div>
              <h4 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>Proven Expertise</h4>
              <p className="leading-relaxed" style={{color: '#a7a9ac'}}>
                Our team brings decades of technology and business experience to help startups 
                navigate challenges and capitalize on opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20" style={{backgroundColor: '#f5f5f5'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6" style={{color: '#000000'}}>Our Portfolio</h3>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#a7a9ac'}}>
              Meet the innovative companies we're proud to support on their journey to success.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, #dd0000, #be0000, #830000)'}}></div>
                <div className="relative p-8 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">SmartBites</h4>
                      <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>Mobile Application</p>
                    </div>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                    A revolutionary mobile app that empowers users with food allergies and dietary restrictions 
                    to discover safe, delicious recipes and restaurant options tailored to their specific needs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>Health Tech</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>Mobile App</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>Food & Dining</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>Allergy Solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3" style={{color: '#000000'}}>Key Features</h5>
                    <ul className="space-y-2" style={{color: '#a7a9ac'}}>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#dd0000'}}></div>
                        Personalized allergy-friendly recipes
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#dd0000'}}></div>
                        Restaurant safety ratings & reviews
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#dd0000'}}></div>
                        Ingredient scanning & analysis
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#dd0000'}}></div>
                        Community-driven content
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-3" style={{color: '#000000'}}>Impact</h5>
                    <p className="leading-relaxed" style={{color: '#a7a9ac'}}>
                      SmartBites is transforming how people with food allergies navigate their dining experiences, 
                      providing peace of mind and expanding their culinary horizons safely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-6" style={{color: '#a7a9ac'}}>
              Interested in becoming part of our portfolio?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200"
              style={{backgroundColor: '#dd0000'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#be0000'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#dd0000'}
            >
              Get in Touch
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6" style={{color: '#000000'}}>Let's Connect</h3>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#a7a9ac'}}>
              Ready to take your tech startup to the next level? We'd love to hear about your vision 
              and explore how we can support your growth.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 lg:p-12" style={{background: 'linear-gradient(to bottom right, #f5f5f5, #ffffff)'}}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-6" style={{color: '#000000'}}>Get in Touch</h4>
                  <p className="mb-8 leading-relaxed" style={{color: '#a7a9ac'}}>
                    Whether you're a startup seeking investment or a fellow investor looking to collaborate, 
                    we're here to discuss opportunities and build meaningful partnerships.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#dd0000'}}>
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold" style={{color: '#000000'}}>Phone</p>
                        <a href="tel:602-220-9724" className="transition-colors duration-200" style={{color: '#dd0000'}} onMouseEnter={(e) => e.target.style.color = '#830000'} onMouseLeave={(e) => e.target.style.color = '#dd0000'}>
                          602-220-9724
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#be0000'}}>
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold" style={{color: '#000000'}}>Email</p>
                        <a href="mailto:support@p3solutionsgroup.com" className="transition-colors duration-200" style={{color: '#be0000'}} onMouseEnter={(e) => e.target.style.color = '#830000'} onMouseLeave={(e) => e.target.style.color = '#be0000'}>
                          support@p3solutionsgroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>What We Look For</h5>
                  <ul className="space-y-3" style={{color: '#a7a9ac'}}>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{backgroundColor: '#dd0000'}}></div>
                      <span>Innovative technology solutions with market potential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{backgroundColor: '#dd0000'}}></div>
                      <span>Strong founding teams with clear vision</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{backgroundColor: '#dd0000'}}></div>
                      <span>Scalable business models</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{backgroundColor: '#dd0000'}}></div>
                      <span>Early-stage to growth-stage companies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{backgroundColor: '#000000'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/P3SolutionsGrayScale.png" 
                alt="P3 Solutions Group Logo" 
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-bold">P3 Solutions Group</span>
            </div>
            <p className="mb-6" style={{color: '#a7a9ac'}}>Investing in the future of technology, one startup at a time.</p>
            <div className="flex justify-center space-x-8" style={{color: '#a7a9ac'}}>
              <a href="tel:602-220-9724" className="transition-colors duration-200" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#a7a9ac'}>602-220-9724</a>
              <a href="mailto:support@p3solutionsgroup.com" className="transition-colors duration-200" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#a7a9ac'}>support@p3solutionsgroup.com</a>
            </div>
            <div className="mt-8 pt-8 border-t" style={{borderColor: '#830000'}}>
              <p className="text-sm" style={{color: '#a7a9ac'}}>&copy; 2025 P3 Solutions Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;