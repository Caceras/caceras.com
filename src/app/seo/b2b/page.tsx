import ServicePage from "@/components/ServicePage";

export default function B2BPage() {
  return (
    <ServicePage
      title="B2B SEO"
      description="Strategier för att nå andra företag och beslutsfattare genom organisk sökning."
    >
      <p>
        B2B (Business-to-Business) SEO skiljer sig från konsumentinriktad SEO.
        Köpcyklerna är ofta längre, sökvolymerna lägre men värdet per lead betydligt högre.
        Det handlar om att finnas där när beslutsfattare söker efter lösningar på sina problem.
      </p>
      <h3 className="font-bold text-lg">Vad jag hjälper till med:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Identifiera nyckelord som dina potentiella företagskunder använder.</li>
        <li>Skapa innehåll som bygger auktoritet och förtroende (Thought Leadership).</li>
        <li>Optimera landningssidor för konvertering av kvalificerade leads.</li>
      </ul>
    </ServicePage>
  );
}
