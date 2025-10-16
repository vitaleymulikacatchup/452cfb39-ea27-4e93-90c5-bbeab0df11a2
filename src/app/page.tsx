"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "modern office workspace - Photo by Jakub Zerdzicki" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ]}
          brandName="Webild"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Webild"
            description="Create exceptional user experiences with our design."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[
              { text: 'Get Started', href: 'https://example.com' },
              { text: 'Learn More', href: 'about' }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We build products that empower teams to create exceptional digital experiences"
            buttons={[{ text: 'Get Started', href: 'https://example.com' }]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay updated with our latest news"
            description="Subscribe to our newsletter for weekly updates."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: 'Features', href: 'features' }, { label: 'Pricing', href: 'pricing' }] },
              { items: [{ label: 'About', href: 'about' }, { label: 'Contact', href: 'contact' }] }
            ]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
