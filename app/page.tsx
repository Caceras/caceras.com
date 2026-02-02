import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  BookOpen,
  Code2,
  Briefcase,
  FileText,
  Building2,
  Users,
  Podcast,
  GraduationCap,
  Trophy,
  Sparkles,
  MessageSquare,
  Search,
  ShoppingBag,
  Newspaper,
  Camera,
  Video,
  Star,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robert Rikard Emanuel Caceras",
    alternateName: "Riki Caceras",
    url: "https://caceras.com",
    image: "/images/riki.png",
    email: "riki@caceras.com",
    jobTitle: "AI & Marketing Consultant",
    description: "AI- & Marknadsföringskonsult med 4+ års erfarenhet inom digital marknadsföring och SEO",
    birthDate: "1994-06-01",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Uppsala Universitet",
        sameAs: "https://www.uu.se",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Stockholms Universitet",
        sameAs: "https://www.su.se",
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Pineberry",
        sameAs: "https://jobb.pineberry.com",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "SEO",
      "Digital Marketing",
      "Web Development",
      "Marketing Automation",
      "Content Marketing",
      "Technical SEO",
      "Google Analytics",
      "Google Search Console",
    ],
    sameAs: [
      "https://github.com/Caceras",
      "https://linkedin.com/in/caceras",
      "https://x.com/RikiCaceras",
      "https://www.facebook.com/riki.caceras/",
      "https://www.instagram.com/rikiemmanuel/",
      "https://www.youtube.com/@caceras",
      "https://jobb.pineberry.com/people/1113938-riki-caceras",
      "https://scholar.google.com/citations?user=xE35YsQAAAAJ&hl=en",
      "https://www.google.com/search?kgmid=/g/11wr1ypxqm",
      "https://huggingface.co/Caceras",
      "https://bsky.app/profile/Caceras.bsky.social",
      "https://www.tiktok.com/@rikicaceras",
      "https://se.pinterest.com/RikiCaceras/",
      "https://medium.com/@rikicaceras",
      "https://about.me/caceras",
      "https://v0.app/@riki-caceras",
      "https://g.dev/caceras",
      "https://ollama.com/Caceras",
      "https://www.kaggle.com/guanaco",
      "https://www.producthunt.com/@caceras",
      "https://www.fiverr.com/rikicaceras",
      "https://www.upwork.com/freelancers/~01e36ce61dff4b37f2",
      "http://rikicaceras.blogspot.com/",
      "https://framtiden.ai/author/riki/",
      "https://hundisar.se/forfattare/riki/",
      "https://golf.nu/author/riki/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hägersten",
      addressCountry: "SE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "riki@caceras.com",
      contactType: "Professional",
    },
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Riki Caceras Consulting",
    founder: {
      "@type": "Person",
      name: "Riki Caceras",
    },
    description: "AI och marknadsföringskonsultation för företag",
    url: "https://caceras.com",
    sameAs: ["https://www.allabolag.se/foretag/rikard-caceras/h%C3%A4gersten/datacenters/XCAMG8B2VI5YDLG"],
    areaServed: "SE",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Konsulttjänster",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Konsultation",
            description: "AI hjälper företag med teknologi och lösningar som är enkla att förstå",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marknadsföring",
            description: "Skapa en plan som bygger ditt varumärke och hjälper dig nå dina affärsmål",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO",
            description: "Sökmotoroptimering för bättre synlighet online",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Riki Caceras Portfolio",
    url: "https://caceras.com",
    author: {
      "@type": "Person",
      name: "Riki Caceras",
    },
    description: "Professional portfolio of Riki Caceras - AI & Marketing Consultant",
  }

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Caceras", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/caceras", icon: Linkedin },
    { name: "Twitter/X", url: "https://x.com/RikiCaceras", icon: Twitter },
    { name: "Facebook", url: "https://www.facebook.com/riki.caceras/", icon: Facebook },
    { name: "Instagram", url: "https://www.instagram.com/rikiemmanuel/", icon: Instagram },
    { name: "YouTube", url: "https://www.youtube.com/@caceras", icon: Youtube },
  ]

  const professionalLinks = [
    { name: "Website", url: "https://caceras.com/", icon: Globe },
    { name: "Pineberry Profile", url: "https://jobb.pineberry.com/people/1113938-riki-caceras", icon: Briefcase },
    { name: "Pineberry Author", url: "https://www.pineberry.com/author/rikard-caceras/", icon: Newspaper },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=xE35YsQAAAAJ&hl=en",
      icon: GraduationCap,
    },
    { name: "Google Knowledge", url: "https://www.google.com/search?kgmid=/g/11wr1ypxqm", icon: Search },
    { name: "The Org", url: "http://theorg.com/org/pineberry/org-chart/riki-caceras", icon: Users },
    { name: "About.me", url: "https://about.me/caceras", icon: Globe },
    { name: "v0", url: "https://v0.app/@riki-caceras", icon: Sparkles },
    { name: "Google Dev", url: "https://g.dev/caceras", icon: Code2 },
    { name: "Medium", url: "https://medium.com/@caceras", icon: FileText },
  ]

  const techPlatforms = [
    { name: "HuggingFace", url: "https://huggingface.co/Caceras", icon: Code2 },
    { name: "Ollama", url: "https://ollama.com/Caceras", icon: Sparkles },
    { name: "Kaggle", url: "https://www.kaggle.com/guanaco", icon: Code2 },
    { name: "Webflow", url: "https://webflow.com/@riki-caceras-marketing", icon: Globe },
    { name: "Product Hunt", url: "https://www.producthunt.com/@caceras", icon: ShoppingBag },
    { name: "Poe", url: "https://poe.com/rikicaceras", icon: MessageSquare },
    { name: "AI Sverige", url: "https://my.ai.se/personer/23574", icon: Sparkles },
  ]

  const socialMedia = [
    { name: "TikTok", url: "https://www.tiktok.com/@rikicaceras", icon: Video },
    { name: "Pinterest", url: "https://se.pinterest.com/RikiCaceras/", icon: Camera },
    { name: "Bluesky", url: "https://bsky.app/profile/Caceras.bsky.social", icon: MessageSquare },
    { name: "Blogspot", url: "http://rikicaceras.blogspot.com/", icon: FileText },
    { name: "Blogger Profile", url: "https://www.blogger.com/profile/06192488190206532759", icon: FileText },
    {
      name: "Google Maps",
      url: "https://www.google.com/maps/contrib/106176601282477928219?authuser=0",
      icon: Globe,
    },
    { name: "Trustpilot Profile", url: "https://se.trustpilot.com/users/654e375090d94a0012273612", icon: Star },
    { name: "Trustpilot Profile 2", url: "https://se.trustpilot.com/users/69100695d1bf915fb2a3e38f", icon: Star },
    { name: "Trustpilot Review", url: "https://se.trustpilot.com/review/caceras.com", icon: Star },
    { name: "Luma", url: "https://luma.com/user/Caceras", icon: Globe },
    { name: "Giphy", url: "https://giphy.com/channel/Caceras", icon: Video },
  ]

  const freelancePlatforms = [
    { name: "Fiverr", url: "https://www.fiverr.com/rikicaceras?public_mode=true", icon: Briefcase },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01e36ce61dff4b37f2?mp_source=share",
      icon: Briefcase,
    },
    {
      name: "Brainville",
      url: "https://www.brainville.com/Network/PublicProfile/Index/57347?sh=559E860124BF56C17B9CA37C5C7A9AA5",
      icon: Users,
    },
  ]

  const publishingPlatforms = [
    { name: "Framtiden AI", url: "https://framtiden.ai/author/riki/", icon: Newspaper },
    { name: "Hundisar", url: "https://hundisar.se/forfattare/riki/", icon: Newspaper },
    { name: "Golf.nu", url: "https://golf.nu/author/riki/", icon: Newspaper },
    { name: "MCAW", url: "https://mcaw.se/om-oss", icon: Building2 },
  ]

  const businessProfiles = [
    {
      name: "Allabolag - Företag",
      url: "https://www.allabolag.se/foretag/rikard-caceras/h%C3%A4gersten/datacenters/XCAMG8B2VI5YDLG",
      icon: Building2,
    },
    {
      name: "Allabolag - Organisation",
      url: "https://www.allabolag.se/organisation/rikard-caceras/h%C3%A4gersten/datacenters/XCAMG8B2VI5YDLG",
      icon: Building2,
    },
    {
      name: "Allabolag - Befattning",
      url: "https://www.allabolag.se/befattning/robert-rikard-emanuel-caceras/-/14485679",
      icon: Building2,
    },
    { name: "Reco", url: "https://www.reco.se/caceras-rikard", icon: Building2 },
    { name: "Bizzdo", url: "https://bizzdo.se/foretag/940601JVUS/Rikard-Caceras", icon: Building2 },
    { name: "Eniro - Utopist", url: "https://www.eniro.se/utopist+h%c3%a4gersten/301898440/firma", icon: Building2 },
  ]

  const publicRecords = [
    {
      name: "Ratsit",
      url: "https://www.ratsit.se/19940601-Robert_Rikard_Emanuel_Caceras_Hagersten/fyOOygI4_gTwSsOi1DkTnVBMi_ieYbJ24fRJn50Egto",
      icon: FileText,
    },
    { name: "Hitta.se", url: "https://www.hitta.se/person/dWP54OUUUG", icon: Search },
    { name: "Eniro", url: "https://www.eniro.se/rikard+caceras+h%C3%A4gersten/96675626/person", icon: Search },
    {
      name: "MrKoll",
      url: "https://mrkoll.se/person/Robert-Rikard-Emanuel-Caceras-Sparbanksvagen-73-Hagersten/sqqkuerAcYfruerAuerApuhQkyqRaQcYfrkyqRaQkyqRaQulaTuerA",
      icon: FileText,
    },
    { name: "Birthday.se", url: "https://www.birthday.se/Rikard-Caceras/H%C3%A4gersten/1994/8724e558aa", icon: Globe },
  ]

  const mediaAppearances = [
    {
      name: "Sökpodden - Pålskling",
      url: "https://poddtoppen.se/podcast/977966336/sokpodden/115-palskling",
      icon: Podcast,
    },
    { name: "Sökpodden - Spam", url: "https://poddtoppen.se/podcast/977966336/sokpodden/109-spam", icon: Podcast },
  ]

  const academicSports = [
    {
      name: "DiVA Portal - Thesis",
      url: "https://www.diva-portal.org/smash/get/diva2:1393850/FULLTEXT01.pdf",
      icon: BookOpen,
    },
    { name: "Lagstatistik Golf", url: "https://www.lagstatistik.se/player?playerId=244648", icon: Trophy },
  ]

  const competencies = [
    "AI",
    "Automatisering",
    "SEO",
    "On Page",
    "Off Page",
    "Webbutveckling",
    "Text",
    "Länkar",
    "Teknisk",
    "Rapportering",
  ]

  const tools = ["Google Search Console", "Google Analytics 4", "Ahrefs", "WordPress", "Screaming Frog", "Make.com"]

  const stats = [
    { label: "År av erfarenhet", value: "4+" },
    { label: "Nöjda kunder", value: "150+" },
    { label: "Analyser", value: "1 000+" },
    { label: "Länkar", value: "1 000+" },
    { label: "Hemsidor", value: "50+" },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <div className="min-h-screen p-4 md:p-8 relative bg-secondary">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
            {/* Hero - Main Card */}
            <Card className="md:col-span-3 lg:col-span-2 md:row-span-2 p-6 md:p-8 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col h-full relative z-10">
                <div className="mb-4 md:mb-6">
                  <h1 className="text-2xl md:text-4xl font-bold text-card-foreground font-sans mb-2">Riki Caceras</h1>
                  <h2 className="text-lg md:text-xl text-muted-foreground font-sans mb-3 md:mb-4">
                    AI- & Marknadsföringskonsult
                  </h2>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-card-foreground">
                    <p>4+ år som konsult inom digital marknadsföring</p>
                    <p>Utbildad i Systemvetenskap på Uppsala Universitet</p>
                    <p className="font-semibold">150+ nöjda kunder</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 flex-1">
                  <div>
                    <h3 className="font-bold text-card-foreground mb-1.5 md:mb-2 font-sans text-sm md:text-base">
                      Artificiell intelligens
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      AI hjälper företag med teknologi och lösningar som är enkla att förstå samt gör jobbet billigare
                      och bättre.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-card-foreground mb-1.5 md:mb-2 font-sans text-sm md:text-base">
                      Marknadsföring
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      Din digitala närvaro måste jobba för dig. Skapa en plan som bygger ditt varumärke och hjälper dig
                      nå dina affärsmål.
                    </p>
                  </div>

                  <div className="mt-3 md:mt-4">
                    <div className="gcse-search" />
                  </div>
                </div>

                <div className="mt-4 md:mt-6 flex flex-col gap-2">
                  <a
                    href="mailto:riki@caceras.com"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    riki@caceras.com
                  </a>
                  <a
                    href="mailto:Rikicaceras@gmail.com"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Rikicaceras@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Profile Image Card */}
            <Card className="md:col-span-2 lg:col-span-2 md:row-span-2 p-0 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-full h-full min-h-[400px] md:min-h-[300px]">
                <Image
                  src="/images/design-mode/riki.png"
                  alt="Riki Caceras - AI & Marketing Consultant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="md:col-span-1 lg:col-span-1 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Statistik
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground font-sans">{stat.label}</span>
                      <span className="font-bold text-card-foreground font-sans text-base md:text-lg">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Connect Card - Primary Social */}
            <Card className="md:col-span-1 lg:col-span-1 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-semibold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Social Media
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 md:gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            {/* Competencies Card */}
            <Card className="md:col-span-2 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Kompetenser
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {competencies.map((comp) => (
                    <Badge
                      key={comp}
                      variant="secondary"
                      className="font-sans text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {comp}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Tools Card */}
            <Card className="md:col-span-2 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">Verktyg</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2 text-xs md:text-sm text-card-foreground">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-sans">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-2 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Professional Profiles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {professionalLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-2 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Tech & Development
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {techPlatforms.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-2 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Social Platforms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {socialMedia.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-1 lg:col-span-1 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Freelance
                </h3>
                <div className="space-y-2">
                  {freelancePlatforms.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-1 lg:col-span-1 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Publishing
                </h3>
                <div className="space-y-2">
                  {publishingPlatforms.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            {/* Career Card */}
            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">Karriär</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary font-sans">P</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground font-sans text-sm">Pineberry</h4>
                      <p className="text-xs text-muted-foreground font-sans">AI & Marketing Consultant</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary font-sans">S</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground font-sans text-sm">Stockholm SEO</h4>
                      <p className="text-xs text-muted-foreground font-sans">SEO Specialist</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary font-sans">D</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground font-sans text-sm">DigAttract</h4>
                      <p className="text-xs text-muted-foreground font-sans">Digital Marketing Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* About Card */}
            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">Om mig</h3>
                <p className="text-xs md:text-sm text-card-foreground leading-relaxed font-sans">
                  Jag är en 30-årig SEO-konsult som älskar mitt jobb och människor överlag. Att få hjälpa andra med
                  något som jag själv brinner för är en lyx jag inte tar för givet. Jag är alltid nyfiken på att träffa
                  nya och trevliga människor som vill prata digital marknadsföring. Kontakta mig gärne om så endast för
                  att förutsättningslöst prata SEO för en stund.
                </p>
              </div>
            </Card>

            {/* Project Card */}
            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">Projekt</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">Hundisar.se</h4>
                    <p className="text-xs md:text-sm text-muted-foreground font-sans">Allt för din hund</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="font-sans bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-200 rounded-full"
                    asChild
                  >
                    <a href="https://hundisar.se" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Business Profiles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {businessProfiles.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Public Records
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {publicRecords.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Media & Podcast Appearances
                </h3>
                <div className="space-y-2">
                  {mediaAppearances.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs md:text-sm hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Academic & Sports
                </h3>
                <div className="space-y-2">
                  {academicSports.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-card-foreground hover:text-primary text-xs md:text-sm hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="font-sans">{link.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            {/* Calendar Card */}
            <Card className="md:col-span-3 lg:col-span-4 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Kalender
                </h3>
                <div className="w-full overflow-hidden rounded-[3px]">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FStockholm&showPrint=0&showTz=0&showTabs=0&mode=MONTH&title=Riki%20Caceras&src=cmlraWNhY2VyYXNAZ21haWwuY29t&src=c3Yuc3dlZGlzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cmlrYXJkLmNhY2VyYXNAcGluZWJlcnJ5LmNvbQ&color=%23ef6c00&color=%237cb342&color=%233f51b5"
                    className="w-full h-[400px] md:h-[500px] border-0"
                    title="Riki Caceras Calendar"
                  />
                </div>
              </div>
            </Card>

            {/* Education Card */}
            <Card className="md:col-span-3 lg:col-span-2 p-4 md:p-6 bg-card border border-border relative overflow-hidden rounded-[3px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="font-bold text-card-foreground mb-3 md:mb-4 font-sans text-sm md:text-base">
                  Utbildning
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">Uppsala Universitet</h4>
                    <p className="text-xs text-muted-foreground font-sans">Systemvetenskap</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">Stockholms Universitet</h4>
                    <p className="text-xs text-muted-foreground font-sans">Statsvetenskap</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">Franska Skolan</h4>
                    <p className="text-xs text-muted-foreground font-sans">Gymnasium</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <footer className="mt-8 md:mt-12 text-center pb-4">
            <p className="text-muted-foreground text-xs md:text-sm font-sans">© 2025 Riki Caceras</p>
          </footer>
        </div>
      </div>
    </>
  )
}
