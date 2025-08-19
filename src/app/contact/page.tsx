import { ContactForm } from "@/components/contact/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <header className="bg-primary text-primary-foreground py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message or find us at our office.
        </p>
      </header>
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
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
                <a href="mailto:contact@canadajobs.com" className="hover:text-primary">contact@canadajobs.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <span>(416) 555-0123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
