import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { contactPanelStyles } from "@/components/contactPanelStyles";

export default function ContactMap() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full px-6">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.1)] overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div
              className="w-full lg:w-1/3 bg-maroon text-white flex flex-col justify-between relative overflow-hidden"
              style={contactPanelStyles.panelPaddingLarge}
            >
              {/* Decorative shapes */}
              <div className="absolute top-[-50px] right-[-50px] w-[250px] h-[250px] bg-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h4
                  className="text-gold font-bold tracking-widest text-sm uppercase"
                  style={contactPanelStyles.mapEyebrow}
                >
                  Get in touch
                </h4>
                <h2
                  className="text-3xl lg:text-4xl font-black"
                  style={contactPanelStyles.mapMainTitle}
                >
                  Visit Our Store
                </h2>
                <p
                  className="text-gray-300"
                  style={contactPanelStyles.mapIntroText}
                >
                  We&apos;d love to hear from you and serve you our best
                  authentic sweets in Jaffna & Vavuniya.
                </p>

                <div style={contactPanelStyles.itemsList}>
                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.mapItemLabel}
                      >
                        Location
                      </h4>
                      <p
                        className="text-gray-400"
                        style={contactPanelStyles.itemDetail}
                      >
                        <a
                          href="https://maps.google.com/?q=208c,+Station+Rd,+Vavuniya+43000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold transition-colors"
                        >
                          208c, Station Rd,
                          <br />
                          Vavuniya 43000.
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.mapItemLabel}
                      >
                        Phone Numbers
                      </h4>
                      <p
                        className="text-gray-400"
                        style={contactPanelStyles.itemDetail}
                      >
                        Jaffna -{" "} 
                        <a
                          href="tel:0779028110"
                          className="ml-2 hover:text-gold transition-colors font-semibold"
                        >
                          077 90 28 110
                        </a>
                      </p>
                      <p
                        className="text-gray-400 mt-1"
                        style={contactPanelStyles.itemDetail}
                      >
                        Vavuniya -{" "}
                        <a
                          href="tel:0778147381"
                          className="ml-2 hover:text-gold transition-colors font-semibold"
                        >
                          077 81 47 381
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircleWhatsApp}>
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.mapItemLabel}
                      >
                        WhatsApp
                      </h4>
                      <p
                        className="text-gray-400"
                        style={contactPanelStyles.itemDetail}
                      >
                        <a
                          href="https://wa.me/94766341818"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold transition-colors font-semibold"
                        >
                          +94 766 341 818
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.mapItemLabel}
                      >
                        Email
                      </h4>
                      <p
                        className="text-gray-400"
                        style={contactPanelStyles.itemDetail}
                      >
                        <a
                          href="mailto:bommisweets@gmail.com"
                          className="hover:text-gold transition-colors"
                        >
                          bommisweets@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative z-10 flex gap-4"
                style={{
                  marginTop: "2rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <a
                  href="https://www.facebook.com/61556776796313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bommisweets?igsh=MW03ZmJ0N2VxNjEzbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[600px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.120306173007!2d80.49019958715818!3d8.756284600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc153723a1a6f7%3A0xc3f5fb47dbddf1!2sVavuniya!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
