const sections = [
    { title: "Popular Domestic Flight Routes", links: ['Delhi Goa flights', 'Mumbai Delhi flights', 'Delhi Kolkata flights', 'Pune Delhi flights', 'Bangalore Delhi flights', 'Mumbai Bangalore flights', 'Chennai Delhi flights', 'Kolkata Delhi flights', 'Delhi Mumbai flights'] },
    { title: "Popular International Flight Routes", links: ['Delhi Singapore flights', 'Delhi Bangkok flights', 'Mumbai Dubai flights', 'Delhi Dubai flights', 'Delhi to London flights', 'Delhi to Toronto flights', 'Delhi to New York flights', 'Bangalore to Singapore flights'] },
    { title: "Popular hotels", links: ['Goa hotels', 'Mumbai hotels', 'Bangalore hotels', 'Chennai hotels', 'Nainital hotels', 'Jaipur hotels', 'Manali hotels', 'Shimla hotels', 'Pune hotels', 'Hyderabad hotels', 'Mahabaleshwar hotels', 'Ooty hotels'] },
    { title: "Popular hotel chains", links: ['Taj group', 'Sarovar group of hotels', 'V resorts', 'Fortune hotels', 'Carlson hotels', 'Concept', 'Royal orchid hotels', 'Lemon tree hotels', 'Ginger', 'Club mahindra', 'Clarks inn group of hotels', 'Welcomheritage'] },
    { title: "Other Links", links: ['Cheap air tickets', 'Flight tickets', 'India Hotels', 'Cheap Domestic Air Tickets', 'Domestic Flights', 'Domestic Airlines in India', 'International Air Tickets', 'International Flights', 'International Airlines', 'Holiday Packages'] },
    { title: "Useful Links", links: ['Myntra'] }
  ];
  
  const Footer = () => {
    return (
      <footer className="bg-gray-100 py-6 px-6 text-gray-700 text-sm">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div>
              {/* <img src="/logo.png" alt="Cleartrip Logo" className="h-6" /> */}
              <h2 className="text-xl font-bold">cleartrip</h2>
              <span className="text-gray-500 text-xs">A Flipkart Company</span>
            </div>
            <nav className="flex space-x-6 text-sm font-semibold">
              <a href="#" className="hover:text-blue-500">About Us</a>
              <a href="#" className="hover:text-blue-500">Careers</a>
              <a href="#" className="hover:text-blue-500">FAQs</a>
              <a href="#" className="hover:text-blue-500">Support</a>
              <a href="#" className="hover:text-blue-500">Collections</a>
              <a href="#" className="hover:text-blue-500">Cleartrip for Business</a>
              <a href="#" className="hover:text-blue-500">Gift Cards</a>
            </nav>
          </div>
  
          {/* Footer Links Section */}
          <div className="space-y-6 border-t pt-4">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <ul className="flex flex-wrap gap-4">
                  {section.links.map((link, i) => (
                    <li key={i} className="hover:text-blue-500 cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Footer Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-center border-t pt-4">
            <p>&copy; 2025 Cleartrip Pvt. Ltd. - <a href="#" className="hover:text-blue-500">Privacy</a> - <a href="#" className="hover:text-blue-500">Terms of Use</a> - <a href="#" className="hover:text-blue-500">Security</a> - <a href="#" className="hover:text-blue-500">Grievance Redressal</a></p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-500">Connect</span>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;