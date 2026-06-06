import React from "react";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajeshkumar S",
    url: "https://rajeshkumar.is-a.dev",
    jobTitle: "Product Engineer",
    description:
      "Product Engineer specializing in architecting scalable web systems and AI-integrated applications that drive business value.",
    sameAs: [
      "https://github.com/Rajeshkumar02",
      "https://www.linkedin.com/in/rajeshkumar2002",
      "https://twitter.com/rajeshkumar2002",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "AI Engineering",
      "SaaS",
      "MongoDB",
      "PostgreSQL",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "TamilNadu",
      addressCountry: "India",
    },
  };

  const softwareSourceCodeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "Rajeshkumar Portfolio",
    author: {
      "@type": "Person",
      name: "Rajeshkumar S",
    },
    description:
      "A professional portfolio built with Next.js and Tailwind CSS.",
    codeRepository: "https://github.com/Rajeshkumar02/Personal-Portfolio",
    programmingLanguage: ["TypeScript", "React", "Next.js"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSourceCodeSchema),
        }}
      />
    </>
  );
}
