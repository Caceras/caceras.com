import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Riki Caceras</h1>
        <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
          AI- & Marknadsföringskonsult
        </p>
        <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
          <p>4+ år som konsult inom digital marknadsföring</p>
          <p>Utbildad i Systemvetenskap på Uppsala Universitet</p>
          <p>150+ nöjda kunder</p>
        </div>
        <div>
            <a href="mailto:riki@caceras.com" className="text-blue-600 hover:underline">riki@caceras.com</a>
        </div>
      </section>

      {/* Intro */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Artificiell intelligens</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            AI hjälper företag med teknologi och lösningar som är enkla att förstå
            samt gör jobbet billigare och bättre.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Marknadsföring</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Din digitala närvaro måste jobba för dig. Skapa en plan som bygger ditt
            varumärke och hjälper dig nå dina affärsmål.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section>
        <h2 className="font-bold text-xl mb-4">Statistik</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
                <div className="text-2xl font-bold">4+</div>
                <div className="text-sm text-zinc-500">År av erfarenhet</div>
            </div>
            <div>
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-zinc-500">Nöjda kunder</div>
            </div>
            <div>
                <div className="text-2xl font-bold">1 000+</div>
                <div className="text-sm text-zinc-500">Analyser</div>
            </div>
            <div>
                <div className="text-2xl font-bold">1 000+</div>
                <div className="text-sm text-zinc-500">Länkar</div>
            </div>
             <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-zinc-500">Hemsidor</div>
            </div>
        </div>
      </section>

      {/* Social Media */}
      <section>
        <h2 className="font-bold text-xl mb-4">Social Media</h2>
        <div className="flex flex-wrap gap-4">
            <Link href="https://github.com/Caceras" className="hover:underline">GitHub</Link>
            <Link href="https://linkedin.com/in/caceras" className="hover:underline">LinkedIn</Link>
            <Link href="https://x.com/RikiCaceras" className="hover:underline">Twitter/X</Link>
            <Link href="https://www.facebook.com/riki.caceras/" className="hover:underline">Facebook</Link>
            <Link href="https://www.instagram.com/rikiemmanuel/" className="hover:underline">Instagram</Link>
            <Link href="https://www.youtube.com/@caceras" className="hover:underline">YouTube</Link>
        </div>
      </section>

      {/* Kompetenser */}
      <section>
        <h2 className="font-bold text-xl mb-4">Kompetenser</h2>
        <div className="flex flex-wrap gap-2">
          {["AI", "Automatisering", "SEO", "On Page", "Off Page", "Webbutveckling", "Text", "Länkar", "Teknisk", "Rapportering"].map((skill) => (
             <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                {skill}
             </span>
          ))}
        </div>
      </section>

      {/* Verktyg */}
      <section>
        <h2 className="font-bold text-xl mb-4">Verktyg</h2>
        <div className="flex flex-wrap gap-2">
             {["Google Search Console", "Google Analytics 4", "Ahrefs", "WordPress", "Screaming Frog", "Make.com"].map((tool) => (
             <span key={tool} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                {tool}
             </span>
          ))}
        </div>
      </section>

      {/* Career */}
      <section>
        <h2 className="font-bold text-xl mb-6">Karriär</h2>
        <div className="space-y-6">
            <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">Pineberry</h3>
                    <span className="text-sm text-zinc-500">AI & Marketing Consultant</span>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">Stockholm SEO</h3>
                    <span className="text-sm text-zinc-500">SEO Specialist</span>
                </div>
            </div>
             <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">DigAttract</h3>
                    <span className="text-sm text-zinc-500">Digital Marketing Consultant</span>
                </div>
            </div>
        </div>
      </section>

      {/* Om mig */}
      <section>
        <h2 className="font-bold text-xl mb-4">Om mig</h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Jag är en 30-årig SEO-konsult som älskar mitt jobb och människor
            överlag. Att få hjälpa andra med något som jag själv brinner för är en
            lyx jag inte tar för givet. Jag är alltid nyfiken på att träffa nya och
            trevliga människor som vill prata digital marknadsföring. Kontakta mig
            gärne om så endast för att förutsättningslöst prata SEO för en stund.
        </p>
      </section>

      {/* Projekt */}
      <section>
         <h2 className="font-bold text-xl mb-4">Projekt</h2>
         <div>
            <Link href="https://hundisar.se/" className="font-semibold hover:underline">Hundisar.se</Link>
            <p className="text-sm text-zinc-500">Allt för din hund</p>
         </div>
      </section>

      {/* Utbildning */}
      <section>
        <h2 className="font-bold text-xl mb-6">Utbildning</h2>
        <div className="space-y-6">
             <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">Uppsala Universitet</h3>
                    <span className="text-sm text-zinc-500">Systemvetenskap</span>
                </div>
            </div>
             <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">Stockholms Universitet</h3>
                    <span className="text-sm text-zinc-500">Statsvetenskap</span>
                </div>
            </div>
             <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">Franska Skolan</h3>
                    <span className="text-sm text-zinc-500">Gymnasium</span>
                </div>
            </div>
        </div>
      </section>

      {/* Other Link Sections (Grouped to save space) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div>
            <h3 className="font-semibold mb-2">Professional Profiles</h3>
            <ul className="space-y-1">
                <li><Link href="#" className="hover:underline">Pineberry Profile</Link></li>
                <li><Link href="#" className="hover:underline">Google Scholar</Link></li>
                <li><Link href="#" className="hover:underline">Google Knowledge</Link></li>
                <li><Link href="#" className="hover:underline">The Org</Link></li>
                <li><Link href="#" className="hover:underline">About.me</Link></li>
            </ul>
        </div>
         <div>
            <h3 className="font-semibold mb-2">Tech & Development</h3>
            <ul className="space-y-1">
                 <li><Link href="#" className="hover:underline">HuggingFace</Link></li>
                 <li><Link href="#" className="hover:underline">Ollama</Link></li>
                 <li><Link href="#" className="hover:underline">Kaggle</Link></li>
                 <li><Link href="#" className="hover:underline">Webflow</Link></li>
                 <li><Link href="#" className="hover:underline">Product Hunt</Link></li>
            </ul>
        </div>
         <div>
            <h3 className="font-semibold mb-2">Freelance</h3>
            <ul className="space-y-1">
                 <li><Link href="#" className="hover:underline">Fiverr</Link></li>
                 <li><Link href="#" className="hover:underline">Upwork</Link></li>
                 <li><Link href="#" className="hover:underline">Brainville</Link></li>
            </ul>
        </div>
         <div>
            <h3 className="font-semibold mb-2">Publishing</h3>
            <ul className="space-y-1">
                 <li><Link href="#" className="hover:underline">Framtiden AI</Link></li>
                 <li><Link href="#" className="hover:underline">Hundisar</Link></li>
                 <li><Link href="#" className="hover:underline">Golf.nu</Link></li>
                 <li><Link href="#" className="hover:underline">MCAW</Link></li>
            </ul>
        </div>
      </section>

    </main>
  );
}
