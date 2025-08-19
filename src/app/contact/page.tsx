import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import about from "@/assets/contact.jpg";

export default function ContactPage() {
  return (
    <>
      {/* HEADER WITH BACKGROUND IMAGE */}
      <header className="relative text-primary-foreground text-center h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={about}
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white">
            We'd love to hear from you. Send us a message or find us at our office.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <Card className="bg-white shadow-lg mt-12">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* CONTACT INFORMATION AND MAP */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Contact Information</h2>
            <p className="text-muted-foreground">
              For any inquiries, please use the form or the contact details below. Our team will get back to you as soon as possible.
            </p>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span>123 Yonge Street, Toronto, ON, M5E 1W7, Canada</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@canadajobs.com" className="hover:text-primary">
                  contact@canadajobs.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <span>(416) 555-0123</span>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Location</h2>
              <div className="w-full h-70 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Canada Jobs Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.648539167321!2d-79.38318668450088!3d43.65292057912156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b6edaaeb5f%3A0x8e4e9fdb3c16591!2s123%20Yonge%20St%2C%20Toronto%2C%20ON%20M5E%201W7%2C%20Canada!5e0!3m2!1sen!2sin!4v1692500000000!5m2!1sen!2sin"
                  width="100%"
                  height="80%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
