import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import { Mountain, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-24 h-24">
                <Image src={logo} alt="Canada Jobs Logo" fill className="object-contain h-62 w-62" />
              </div>
              <span className="text-xl font-bold">Canada Jobs</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your gateway to finding a career in the Great White North.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/jobs" className="text-sm text-muted-foreground hover:text-primary">Jobs</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Job Seekers</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/jobs" className="text-sm text-muted-foreground hover:text-primary">Browse Jobs</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Career Advice</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Canada Jobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
