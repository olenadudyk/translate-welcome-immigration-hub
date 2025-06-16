
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Users, FileText, Globe, Star, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: "Birth Certificates",
      description: "Certified translations of birth certificates for visa applications and citizenship processes",
      icon: FileText
    },
    {
      title: "Marriage Certificates", 
      description: "Official translations of marriage documents for family-based immigration",
      icon: Users
    },
    {
      title: "Educational Documents",
      description: "Diplomas, transcripts, and academic records for student visas and credential evaluation",
      icon: FileText
    },
    {
      title: "Legal Documents",
      description: "Court records, affidavits, and legal papers for immigration proceedings",
      icon: Shield
    },
    {
      title: "Medical Records",
      description: "Medical certificates and health documents for immigration medical exams",
      icon: FileText
    },
    {
      title: "Employment Records",
      description: "Work certificates and employment letters for work-based visas",
      icon: Users
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "USCIS Accepted",
      description: "All translations meet USCIS requirements and are accepted by immigration authorities"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most documents translated within 24-48 hours with rush options available"
    },
    {
      icon: CheckCircle,
      title: "Certified Translation",
      description: "Every translation includes a certificate of accuracy with translator credentials"
    },
    {
      icon: Globe,
      title: "100+ Languages",
      description: "Professional translators for all major languages and rare dialects"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      text: "Translate.com helped me get my documents ready for my green card application. Fast, accurate, and professional service!",
      rating: 5
    },
    {
      name: "Ahmed Hassan", 
      text: "Needed my diploma translated for my H1-B visa. They delivered exactly what USCIS required within 24 hours.",
      rating: 5
    },
    {
      name: "Chen Wei",
      text: "Excellent service for my family's immigration documents. The certification was accepted without any issues.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Translate.com</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            USCIS Accepted Translations
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Immigration
            <span className="text-blue-600 block">Translation Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get your documents translated by certified professionals for USCIS, visa applications, 
            and immigration proceedings. Fast, accurate, and guaranteed acceptance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Upload Documents Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              USCIS Compliant
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-blue-500 mr-2" />
              24-48 Hour Delivery
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-purple-500 mr-2" />
              100% Guarantee
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              4.9/5 Rating (2,847 reviews)
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Translate.com?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in immigration document translation with unmatched expertise and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Immigration Document Translation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We translate all types of documents required for immigration applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-600">
              Getting your immigration documents translated is easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>
              <p className="text-gray-600">
                Securely upload your documents through our encrypted platform or email them to us
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Translation</h3>
              <p className="text-gray-600">
                Our certified translators work on your documents with guaranteed accuracy and USCIS compliance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Receive Certified Translation</h3>
              <p className="text-gray-600">
                Get your translated documents with certificate of accuracy within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Thousands of successful immigration cases with our translations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Documents Translated?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful immigration cases. Upload your documents now for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Upload Documents Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Have questions? We're here to help with your immigration translation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with our translation experts</p>
                <p className="text-blue-600 font-semibold text-lg">(555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your documents directly</p>
                <p className="text-blue-600 font-semibold text-lg">info@translate.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help online</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Start Chat</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Translate.com</span>
              </div>
              <p className="text-gray-400">
                Professional immigration translation services trusted by thousands worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Document Translation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certified Translation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">USCIS Translation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rush Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Guarantee</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Translate.com. All rights reserved. | Professional Immigration Translation Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
