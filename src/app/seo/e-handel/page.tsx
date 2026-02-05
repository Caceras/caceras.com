import ServicePage from "@/components/ServicePage";

export default function EcommercePage() {
  return (
    <ServicePage
      title="E-handel SEO"
      description="Optimering av webbutiker för ökad synlighet och försäljning."
    >
      <p>
        För e-handel är organisk trafik ofta den mest kostnadseffektiva marknadsföringskanalen.
        Men konkurrensen är hård. Att optimera produktkategorier, produktsidor och teknisk struktur
        är avgörande för framgång.
      </p>
      <h3 className="font-bold text-lg">Fokusområden:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Struktur & Navigering:</strong> Skapa en logisk struktur som är lätt för både användare och sökmotorer att förstå.</li>
        <li><strong>Produktbeskrivningar:</strong> Unikt och säljande innehåll som undviker duplicate content.</li>
        <li><strong>Teknisk optimering:</strong> Snabb laddningstid, hantering av utgångna produkter och fasetterad navigering.</li>
      </ul>
    </ServicePage>
  );
}
