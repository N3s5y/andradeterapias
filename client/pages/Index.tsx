import Header from "../components/Header";
import Hero from "../components/Hero";
import { Star, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Marple Physio is a leading provider of specialist physiotherapy in Stockport.</h2>
              <p className="text-gray-600 mb-4">
                As one of the leading independent providers of specialist private physiotherapy in Stockport, 
                we offer a comprehensive range of services to help you return to your optimum health and fitness.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of highly qualified and experienced physiotherapists will assess your condition and 
                provide you with an individual treatment plan to help you achieve your goals.
              </p>
              <p className="text-gray-600">
                We treat a wide range of conditions and injuries, offering both assessment and treatment 
                for musculoskeletal problems, sports injuries, and chronic pain conditions.
              </p>
            </div>
            <div className="relative">
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <p className="text-gray-600 italic">
                "We are committed to providing the highest quality physiotherapy care in a friendly and 
                professional environment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilates Centre Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6">Our new Marple Physio Pilates Centre</h2>
              <p className="text-gray-600 mb-4">
                We are delighted to announce the opening of our new state-of-the-art Pilates studio. 
                Our fully equipped studio offers both one-to-one and small group Pilates sessions.
              </p>
              <p className="text-gray-600 mb-6">
                Clinical Pilates is an evidence-based approach to exercise that focuses on optimal 
                movement patterns, breathing techniques, and progressive strengthening.
              </p>
              <button className="bg-brand text-black px-6 py-3 font-bold hover:bg-brand-dark transition-colors">
                FIND OUT MORE
              </button>
            </div>
            <div>
              <img 
                src="/pilates-studio.jpg" 
                alt="Pilates studio with exercise mats" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Physiotherapy Assessment",
              "Sports Injury Treatment", 
              "Clinical Pilates",
              "Spinal Problems",
              "Joint Mobilisation",
              "Soft Tissue Treatment",
              "Exercise Rehabilitation",
              "Postural Assessment"
            ].map((service, index) => (
              <button 
                key={index}
                className="bg-brand text-black p-4 font-bold text-sm hover:bg-brand-dark transition-colors text-center"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/team-member.jpg" 
                alt="Physiotherapist team member" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6">Offering exceptional levels of care and personal attention</h2>
              <p className="text-gray-600 mb-4">
                Our chartered physiotherapists have extensive experience in treating a wide range of 
                musculoskeletal conditions and sports injuries.
              </p>
              <p className="text-gray-600 mb-4">
                We provide a professional, friendly service with appointments available at times to 
                suit you, including early mornings, evenings and weekends.
              </p>
              <p className="text-gray-600">
                Each treatment session is tailored to your individual needs, ensuring you receive 
                the most appropriate care for your condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-NHS Treatment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6">Non-NHS physiotherapy treatment</h2>
              <p className="text-gray-600 mb-4">
                We offer comprehensive private physiotherapy services as an alternative to NHS treatment. 
                Our private service means shorter waiting times and more treatment options.
              </p>
              <p className="text-gray-600 mb-4">
                We accept most private medical insurance policies and can also provide treatment 
                on a self-funding basis with competitive rates.
              </p>
              <p className="text-gray-600 mb-6">
                All treatments are provided by qualified chartered physiotherapists with extensive 
                clinical experience.
              </p>
              <button className="bg-brand text-black px-6 py-3 font-bold hover:bg-brand-dark transition-colors">
                VIEW OUR SERVICES
              </button>
            </div>
            <div className="bg-brand/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Treatment includes:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive assessment and diagnosis</li>
                <li>• Individual treatment plans</li>
                <li>• Manual therapy techniques</li>
                <li>• Exercise prescription</li>
                <li>• Advice and education</li>
                <li>• Ongoing support and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Facility Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/clinic-room.jpg" 
                alt="Modern clinic treatment room" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6">When will advice and help be given?</h2>
              <p className="text-gray-600 mb-4">
                Our clinic provides a comfortable and professional environment for your treatment. 
                We have modern facilities equipped with the latest physiotherapy equipment.
              </p>
              <p className="text-gray-600 mb-4">
                We offer flexible appointment times to fit around your schedule, including early 
                morning and evening appointments.
              </p>
              <p className="text-gray-600 mb-6">
                Free parking is available directly outside our clinic, making your visit as 
                convenient as possible.
              </p>
              <button className="bg-brand text-black px-6 py-3 font-bold hover:bg-brand-dark transition-colors">
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">To book your consultation please complete our online booking form*</h2>
              <p className="text-gray-600 mb-6">
                Please fill in the form and we will contact you to arrange your appointment. 
                Alternatively, you can call us directly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand" />
                  <span className="font-medium">0161 427 7777</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand" />
                  <span>info@marplephysio.com</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center space-x-2 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Google Reviews</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Online Booking</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input type="tel" className="w-full border border-gray-300 px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Date</label>
                  <input type="date" className="w-full border border-gray-300 px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows={4} className="w-full border border-gray-300 px-3 py-2 rounded"></textarea>
                </div>
                <button className="w-full bg-brand text-black py-3 font-bold hover:bg-brand-dark transition-colors">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Here's what our clients say:</h2>
          <div className="bg-white text-black p-8 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-brand text-brand" />
              ))}
            </div>
            <p className="text-lg mb-4">
              "Excellent service and professional treatment. The physiotherapist was very knowledgeable 
              and helped me recover from my back injury much faster than expected."
            </p>
            <p className="font-medium">- Sarah M.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-brand mx-auto mb-2" />
              <p className="text-lg font-medium">Marple Physio</p>
              <p className="text-gray-600">Stockport, Manchester</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-black">mp</span>
                </div>
                <div>
                  <div className="font-bold">MARPLE</div>
                  <div className="font-bold">PHYSIO</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Leading providers of specialist physiotherapy in Stockport.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About Us</div>
                <div>Services</div>
                <div>Our Team</div>
                <div>Appointments</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0161 427 7777</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@marplephysio.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Stockport, Manchester</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Marple Physio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
