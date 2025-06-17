
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Users, FileText, Globe, Star, ArrowRight, Phone, Mail, MessageSquare, Award, Zap, DollarSign } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: "Traducción de Certificado de Matrimonio",
      description: "Traducción oficial de certificados de matrimonio para solicitudes de inmigración familiar",
      icon: Users,
      url: "/marriage-certificate-translation"
    },
    {
      title: "Traducción de Apostilla", 
      description: "Servicios de traducción certificada para documentos apostillados de todos los países",
      icon: Award,
      url: "/apostille-translation"
    },
    {
      title: "Traducción de Diploma",
      description: "Traducciones de credenciales académicas para visas de estudiante y licencias profesionales",
      icon: FileText,
      url: "/diploma-translation"
    },
    {
      title: "Traducción de Certificado de Nacimiento",
      description: "Traducciones certificadas de certificados de nacimiento para solicitudes de ciudadanía y visa",
      icon: FileText,
      url: "/birth-certificate-translation"
    },
    {
      title: "Traducción de Contratos",
      description: "Traducciones de contratos legales y acuerdos para inmigración de negocios",
      icon: Shield,
      url: "/contract-translation"
    },
    {
      title: "Traducción de Licencia de Conducir",
      description: "Traducciones oficiales de licencias de conducir para transferencias y solicitudes de licencias",
      icon: FileText,
      url: "/drivers-license-translation"
    },
    {
      title: "Traducción de Documentos de Inmigración",
      description: "Servicios completos de traducción de documentos de inmigración para todos los formularios de USCIS",
      icon: Globe,
      url: "/immigration-document-translation"
    },
    {
      title: "Traducción de Estados de Cuenta Bancarios",
      description: "Traducciones de documentos financieros para patrocinio de visa e inmigración",
      icon: FileText,
      url: "/bank-statement-translation"
    },
    {
      title: "Traducción de Pasaporte",
      description: "Traducciones de pasaportes y documentos de viaje para solicitudes de visa",
      icon: Globe,
      url: "/passport-translation"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Aceptado por USCIS",
      description: "Todas las traducciones cumplen con los requisitos de USCIS y son aceptadas por las autoridades de inmigración"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "La mayoría de documentos traducidos en 24-48 horas con opciones de servicio urgente disponibles"
    },
    {
      icon: CheckCircle,
      title: "Traducción Certificada",
      description: "Cada traducción incluye un certificado de precisión con credenciales del traductor"
    },
    {
      icon: Globe,
      title: "100+ Idiomas",
      description: "Traductores profesionales para todos los idiomas principales y dialectos raros"
    },
    {
      icon: DollarSign,
      title: "Precios Transparentes",
      description: "Desde $0.10 por palabra o desde $25 por página sin tarifas ocultas"
    }
  ];

  const testimonials = [
    {
      name: "María Rodríguez",
      text: "Translate.com me ayudó a preparar mis documentos para mi solicitud de tarjeta verde. ¡Servicio rápido, preciso y profesional!",
      rating: 5
    },
    {
      name: "Ahmed Hassan", 
      text: "Necesitaba mi diploma traducido para mi visa H1-B. Entregaron exactamente lo que USCIS requería en 24 horas.",
      rating: 5
    },
    {
      name: "Chen Wei",
      text: "Excelente servicio para los documentos de inmigración de mi familia. La certificación fue aceptada sin problemas.",
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
            <span className="text-2xl font-bold text-gray-900">Documentos Certificados</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Proceso</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reseñas</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Obtener Cotización
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Traducciones Certificadas de Inmigración Aceptadas por USCIS
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Servicios de Traducción
            <span className="text-blue-600 block">de Documentos Certificados</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Obtén tus documentos traducidos por profesionales certificados para USCIS, solicitudes de inmigración 
            y procedimientos legales. Rápido, preciso y con garantía de aceptación.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Subir Documentos Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="bg-gray-100 text-gray-700 px-8 py-3 text-lg rounded-md cursor-default flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Llama (555) 123-4567
            </div>
          </div>

          {/* Pricing Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Precios Transparentes</h3>
            </div>
            <p className="text-blue-700 font-medium">
              Desde $0.10 por palabra o desde $25 por página
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Servicios de notario profesional disponibles por tarifa adicional
            </p>
            <p className="text-lg text-green-700 mt-3 font-semibold">
              Servicios de notario en línea disponibles en todos los estados
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Compatible con USCIS
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-blue-500 mr-2" />
              Entrega en 24-48 Horas
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-purple-500 mr-2" />
              Garantía 100%
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              Calificación 4.9/5 (2,847 reseñas)
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Strip */}
      <section className="bg-blue-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              <span className="text-lg font-semibold">¿Necesitas tus documentos de inmigración traducidos hoy? </span>
              <span className="text-blue-100">Comienza en menos de 2 minutos.</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Subir Ahora
              </Button>
              <div className="bg-white text-blue-600 px-4 py-2 rounded-md cursor-default flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                Servicio Urgente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios de Traducción Certificada de Documentos de Inmigración
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proporcionamos servicios de traducción profesional para todos los tipos de documentos requeridos para inmigración, legal y propósitos oficiales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <service.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-end items-center">
                    <span className="text-xs text-gray-500">24-48 hrs</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">¿No ves tu tipo de documento? Traducimos todos los tipos de documentos para propósitos de inmigración.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Ver Todos los Servicios
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Nuestros Servicios de Traducción?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos especializamos en traducción certificada de documentos con experiencia y confiabilidad incomparables
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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

          {/* Notary Services Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12 text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicios de Notario Profesional</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Además de nuestros servicios de traducción certificada, proporcionamos servicios de notario profesional 
              para nuestros clientes. Nuestros notarios licenciados pueden autenticar sus documentos traducidos para cumplir 
              con todos los requisitos legales para inmigración y propósitos oficiales.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso Simple de 3 Pasos
            </h2>
            <p className="text-lg text-gray-600">
              Traducir tus documentos es fácil y seguro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Subir Documentos</h3>
              <p className="text-gray-600">
                Sube de forma segura tus documentos a través de nuestra plataforma encriptada o envíanoslos por correo electrónico
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Traducción Profesional</h3>
              <p className="text-gray-600">
                Nuestros traductores certificados trabajan en tus documentos con precisión garantizada y cumplimiento con USCIS
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Recibir Traducción Certificada</h3>
              <p className="text-gray-600">
                Obtén tus documentos traducidos con certificado de precisión dentro de 24-48 horas
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
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-600">
              Miles de casos exitosos con nuestras traducciones certificadas
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
            ¿Listo para Traducir Tus Documentos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de casos exitosos. Sube tus documentos ahora para obtener una cotización gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Subir Documentos Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Soporte de Chat en Vivo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600">
              ¿Tienes preguntas? Estamos aquí para ayudarte con tus necesidades de traducción
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
                <p className="text-gray-600 mb-4">Habla con nuestros expertos en traducción</p>
                <p className="text-blue-600 font-semibold text-lg">(555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Envíanos un Email</h3>
                <p className="text-gray-600 mb-4">Envíanos tus documentos directamente</p>
                <p className="text-blue-600 font-semibold text-lg">info@translate.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Chat en Vivo</h3>
                <p className="text-gray-600 mb-4">Obtén ayuda instantánea en línea</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Iniciar Chat</Button>
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
                <span className="text-2xl font-bold">Documentos Certificados</span>
              </div>
              <p className="text-gray-400">
                Servicios profesionales de traducción de documentos confiables para miles de personas en todo el mundo para propósitos de inmigración.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Traducción de Documentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Traducción Certificada</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Traducción USCIS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Servicio Urgente</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contáctanos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chat en Vivo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Reembolso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantía de Calidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Documentos Certificados. Todos los derechos reservados. | Servicios Profesionales de Traducción de Documentos de Inmigración</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
