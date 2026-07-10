import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Truck,
  SprayCan,
  Shirt,
  Sparkles,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviews = [
    {
      name: 'Meagen Solomon',
      rating: 5,
      text: 'I love the service I get from Gabriella Laundromat, so far I have been taking clothing for dry cleaning, Whenever I go there it is ready and waiting for me... Thank you to the Gabriella Staff',
      time: 'a month ago',
    },
    {
      name: 'Collin Jr Mavimbela',
      rating: 5,
      text: 'The service is all good never had any problems there',
      time: 'a month ago',
    },
    {
      name: 'Liezaan Jordaan',
      rating: 5,
      text: 'Friendly service... I like that they pick up and deliver makes it convenient for working moms',
      time: 'a month ago',
    },
  ];

  const services = [
    {
      icon: <Shirt className="w-10 h-10" />,
      title: 'Wash & Fold',
      description: 'Professional washing and folding services for all your everyday laundry needs.',
    },
    {
      icon: <SprayCan className="w-10 h-10" />,
      title: 'Dry Cleaning',
      description: 'Expert dry cleaning for delicate fabrics and special garments.',
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Pickup & Delivery',
      description: 'Convenient pickup and delivery service for busy professionals and families.',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Premium Care',
      description: 'Special treatment for your most treasured garments with extra care and attention.',
    },
  ];

  const hours = [
    { day: 'Monday', time: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', time: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', time: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '8:00 AM - 6:00 PM' },
    { day: 'Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 5:00 PM' },
    { day: 'Sunday', time: '7:30 AM - 2:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-teal-600' : 'bg-white/20'}`}>
                <Sparkles className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-teal-600'}`} />
              </div>
              <span
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Gabriella Laundromat
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'Reviews', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-teal-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:+27671284236"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {['Home', 'Services', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-teal-600"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+27671284236"
              className="block bg-teal-600 text-white text-center py-3 rounded-full font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6179250/pexels-photo-6179250.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-8">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span className="font-semibold">4.5</span>
            <span className="opacity-80">• 31 Reviews</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fresh Clothes,
            <br />
            <span className="text-amber-400">Happy Life</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Professional laundry and dry cleaning services in Florida, Johannesburg.
            We pick up, clean, and deliver - making laundry effortless for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="tel:+27671284236"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-700 transition-all w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              067 128 4236
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From everyday laundry to delicate dry cleaning, we've got all your garment care needs covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex p-4 rounded-xl bg-teal-50 text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quality Service You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Gabriella Laundromat, we treat every garment with the care it deserves. Our experienced team ensures your clothes are cleaned to perfection every time.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Same Day Service', desc: 'Quick turnaround for your urgent laundry needs' },
                  { title: 'Affordable Prices', desc: 'Quality service at competitive rates' },
                  { title: 'Eco-Friendly Products', desc: 'Safe for your clothes and the environment' },
                  { title: 'Experienced Staff', desc: 'Professional care from trained experts' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5148351/pexels-photo-5148351.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Laundry service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-teal-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 sm:py-28 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${star <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400 text-amber-400'}`}
                  />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">4.5 out of 5</span>
              <span className="text-gray-500">• 31 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Visit Us Today
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                We're conveniently located in Florida, Johannesburg. Stop by or give us a call - we're always happy to help!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Address</h4>
                    <p className="text-gray-600">Munpem Building, 12 Goldman St</p>
                    <p className="text-gray-600">Florida, Johannesburg, 1709</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Phone</h4>
                    <a href="tel:+27671284236" className="text-teal-600 font-medium text-lg hover:text-teal-700">
                      067 128 4236
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Opening Hours</h4>
                    <p className="text-gray-600">Open 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Map */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Opening Hours</h3>
                <div className="space-y-3">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 ${
                        index !== hours.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                    >
                      <span className="font-medium text-gray-700">{item.day}</span>
                      <span className="text-gray-600">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.0568906814747!2d27.9079!3d-26.1547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzE2LjkiUyAyN8KwNTQnMjguNCJF!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gabriella Laundromat Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Best Laundry Service?
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Contact us today for pickup and delivery, or visit our location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27671284236"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call 067 128 4236
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-700 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-teal-400" />
                <span className="text-xl font-bold text-white">Gabriella Laundromat</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional laundry and dry cleaning services in Florida, Johannesburg. Making laundry effortless since 2014.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Services', 'Reviews', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Munpem Building, 12 Goldman St</p>
                <p>Florida, Johannesburg, 1709</p>
                <p className="text-teal-400 font-medium">067 128 4236</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Gabriella Laundromat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
