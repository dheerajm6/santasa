import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FacilityTour from '../components/FacilityTour';
import Doctors from '../components/Doctors';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to section when navigating from other pages with hash
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure page is fully loaded
      }
    }
  }, [location.hash]);

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Santasa IVF & Endosurgery Institute",
    "alternateName": "Santasa IVF",
    "description": "Leading fertility treatment center providing expert IVF treatment and reproductive medicine in Mysuru and Hassan, Karnataka",
    "url": "https://santasaivf.com",
    "logo": "https://santasaivf.com/santasa-ivf-logo.png",
    "image": "https://santasaivf.com/og-image.jpg",
    "telephone": ["+91-9620099936", "+91-9620099969"],
    "email": ["mysuru@santasaivf.com", "hassan@santasaivf.com"],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "963/1A, New Kanthraju Urs Road Vedanta Hemmige Circle, opp. Rasik Honda Showroom, Lakshmipuram",
        "addressLocality": "Mysuru",
        "addressRegion": "Karnataka",
        "postalCode": "570004",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, Sri Venkatadri Arcade, Next to Reliance Smart, 3rd Cross, Shankar Mutt Road, KR Puram",
        "addressLocality": "Hassan",
        "addressRegion": "Karnataka", 
        "postalCode": "573201",
        "addressCountry": "IN"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "12.2958",
        "longitude": "76.6394"
      },
      {
        "@type": "GeoCoordinates", 
        "latitude": "13.0060",
        "longitude": "76.1010"
      }
    ],
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "₹₹₹",
    "medicalSpecialty": ["Reproductive Medicine", "IVF Treatment", "Clinical Embryology", "Fertility Surgery", "Gynecology"],
    "foundingDate": "2008",
    "hasCredential": "RGUHS Accredited Fellowship Programs"
  };

  return (
    <>
      <SEO 
        title="Santasa IVF - Leading Fertility Treatment Center in Mysuru & Hassan, Karnataka"
        description="Expert IVF treatment and fertility care in Mysuru & Hassan. RGUHS accredited fellowship programs, advanced reproductive medicine, and compassionate patient care since 2008."
        keywords="IVF treatment, fertility clinic, reproductive medicine, IVF Mysuru, IVF Hassan, fertility specialist, embryology, ICSI, fertility counseling, Karnataka"
        url="https://santasaivf.com/"
        structuredData={organizationStructuredData}
      />
      <Hero />
      <Services />
      <FacilityTour />
      <Doctors />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;