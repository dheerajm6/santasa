import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Santasa IVF - Leading Fertility Treatment Center in Mysuru & Hassan, Karnataka",
  description = "Expert IVF treatment and fertility care in Mysuru & Hassan. RGUHS accredited fellowship programs, advanced reproductive medicine, and compassionate patient care since 2008.",
  keywords = "IVF treatment, fertility clinic, reproductive medicine, IVF Mysuru, IVF Hassan, fertility specialist, embryology, ICSI, fertility counseling, Karnataka",
  ogImage = "/og-image.jpg",
  url = "https://santasaivf.com/",
  type = "website",
  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;