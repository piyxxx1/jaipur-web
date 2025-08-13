import React from 'react';

const ContactLocationSection = () => {
  return (
    <section>
      {/* Decorative houses silhouette as a separator */}
      <div
        className="h-24 bg-repeat-x bg-center"
        style={{
          backgroundImage: "url('https://vedankur.com/wp-content/themes/classiadspro/images/footer-bg.png')",
        }}
      />

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column: Title and Description */}
            <div>
              <h2 className="font-primary text-4xl font-bold text-green-accent mb-4">
                MoniDay Healthcare
              </h2>
              <p className="font-secondary text-dark-gray text-base leading-relaxed">
                Find your way to wellness. Our office in Jaipur is ready to welcome you. Please use the map and details below to connect with us. We look forward to assisting you on your health journey.
              </p>
            </div>

            {/* Right Column: Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-primary text-2xl font-bold text-green-accent mb-3">
                  Address
                </h3>
                <p className="font-secondary text-dark-gray text-base leading-relaxed">
                  Aashirwad Apartment, A-415, Sector 03, Sanganer, Pratap Nagar, Jaipur(Rajasthan) – 302033
                </p>
              </div>
              <div>
                <h3 className="font-primary text-2xl font-bold text-green-accent mb-3">
                  Contact
                </h3>
                <div className="font-secondary text-base space-y-2">
                  <p className="text-dark-gray">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+918862930725" className="text-dark-gray hover:text-secondary-blue transition-colors duration-300">
                      +91-8862930725
                    </a>,{' '}
                    <a href="tel:+919939750372" className="text-dark-gray hover:text-secondary-blue transition-colors duration-300">
                      +91-9939750372
                    </a>
                  </p>
                  <p className="text-dark-gray">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@monidayhealthcare.com" className="text-dark-gray hover:text-secondary-blue transition-colors duration-300 break-all">
                      info@monidayhealthcare.com
                    </a>,{' '}
                    <a href="mailto:monidayhealthcare@gmail.com" className="text-dark-gray hover:text-secondary-blue transition-colors duration-300 break-all">
                      monidayhealthcare@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14239.914283893694!2d75.8080064972558!3d26.84033664796245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7a21134a697%3A0x6247331405ebd573!2sSector%203%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302033%2C%20India!5e0!3m2!1sen!2sus!4v1684343132649!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, verticalAlign: 'bottom' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MoniDay Healthcare Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactLocationSection;