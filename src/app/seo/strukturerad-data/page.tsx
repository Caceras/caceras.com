import ServicePage from "@/components/ServicePage";

export default function StructuredDataPage() {
  return (
    <ServicePage
      title="Strukturerad Data (Schema Markup)"
      description="Hjälp sökmotorer att förstå innehållet på din webbplats bättre."
    >
      <p>
        Strukturerad data är kod (ofta i formatet JSON-LD) som hjälper sökmotorer att
        förstå kontexten av ditt innehåll. Det kan ge dig "Rich Snippets" i sökresultaten,
        som stjärnbetyg, produktpriser, evenemangsdatum och mycket mer.
      </p>
      <h3 className="font-bold text-lg">Fördelar:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Ökad CTR (Click-Through Rate):</strong> Rich snippets drar blickarna till sig.</li>
        <li><strong>Bättre förståelse:</strong> Minskar risken för missförstånd från Googles sida.</li>
        <li><strong>Förberedelse för AI:</strong> Strukturerad data är mat för AI-modeller.</li>
      </ul>
    </ServicePage>
  );
}
