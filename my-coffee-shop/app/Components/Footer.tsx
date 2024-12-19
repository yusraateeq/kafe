export default function Footer() {
    return (
      <footer className="bg-gradient-to-br from-orange-950 via-zinc-800 to-orange-950 text-gray-300 py-12">
        <div className="flex justify-center space-x-6 mb-10">
          {[
            { icon: "facebook", href: "#" },
            { icon: "twitter", href: "#" },
            { icon: "instagram", href: "#" },
            { icon: "linkedin", href: "#" },
            { icon: "youtube", href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-3xl text-gray-400 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
            >
              <i className={`fab fa-${social.icon}`}></i>
            </a>
          ))}
        </div>
  
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 text-center md:text-left">
          <div>
            <h3 className="text-orange-500 text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {["Company", "Our Story", "Careers", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-orange-500 text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Support", "FAQs", "Feedback", "Report Issue"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-orange-500 text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-orange-500 text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Join our newsletter to stay updated with our latest news and offers.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-l-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md font-semibold transition duration-300">
                Join
              </button>
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-10"></div>
  
        <div className="text-center text-gray-400 text-sm mt-6">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  }
