import ServicePage from "@/components/ServicePage";

export default function EntitiesPage() {
  return (
    <ServicePage
      title="Entiteter & Knowledge Graph"
      description="Förståelse för hur sökmotorer kopplar ihop information och varumärken."
    >
      <p>
        Sökmotorer som Google rör sig bort från enkla nyckelord mot att förstå "entiteter"
        – personer, platser, saker och koncept. Genom att optimera för entiteter kan du hjälpa
        Google att förstå vem du är och vad du gör, vilket kan leda till bättre synlighet,
        exempelvis i Knowledge Panels.
      </p>
      <h3 className="font-bold text-lg">Varför är detta viktigt?</h3>
      <p>
        I en värld av AI-drivna sökresultat (SGE, Search Generative Experience) är det
        avgörande att vara en tydlig entitet i Googles Knowledge Graph för att bli omnämnd
        och rekommenderad.
      </p>
    </ServicePage>
  );
}
