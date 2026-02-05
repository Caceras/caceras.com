import ServicePage from "@/components/ServicePage";
import Link from "next/link";

export default function SeoPage() {
  return (
    <ServicePage
      title="SEO - Sökmotoroptimering"
      description="Jag hjälper företag att synas bättre på Google och andra sökmotorer."
    >
      <p>
        Sökmotoroptimering (SEO) handlar om att förbättra din webbplats så att den
        rankar högre i sökresultaten för relevanta sökord. Detta leder till mer
        trafik, fler leads och ökad försäljning.
      </p>
      <p>
        Jag arbetar med alla delar av SEO:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Teknisk SEO:</strong> Säkerställa att webbplatsen är snabb, mobilvänlig och möjlig att indexera.</li>
        <li><strong>On-Page SEO:</strong> Optimera innehåll, rubriker och struktur på själva sidan.</li>
        <li><strong>Off-Page SEO:</strong> Bygga auktoritet genom länkar och omnämnanden.</li>
      </ul>
      <h3 className="font-bold text-lg mt-6">Utforska mina expertområden:</h3>
      <ul className="space-y-2 mt-4">
        <li>
            <Link href="/seo/b2b/" className="text-blue-600 hover:underline">B2B SEO</Link>
        </li>
        <li>
            <Link href="/seo/entiteter/" className="text-blue-600 hover:underline">Entiteter & Knowledge Graph</Link>
        </li>
        <li>
            <Link href="/seo/e-handel/" className="text-blue-600 hover:underline">E-handel SEO</Link>
        </li>
        <li>
            <Link href="/seo/strukturerad-data/" className="text-blue-600 hover:underline">Strukturerad Data</Link>
        </li>
      </ul>
    </ServicePage>
  );
}
