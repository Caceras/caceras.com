import Link from "next/link";

interface ServicePageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ServicePage({ title, description, children }: ServicePageProps) {
  return (
    <main className="space-y-12">
      <section className="space-y-4">
        <Link href="/" className="text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
          ← Tillbaka till startsidan
        </Link>
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </section>

      <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {children}
      </div>

      <section className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
        <h2 className="font-bold text-xl mb-4">Vill du veta mer?</h2>
        <p className="mb-4 text-zinc-600 dark:text-zinc-400">
          Jag hjälper dig gärna med att förbättra din SEO och digitala närvaro.
          Hör av dig så tar vi en kaffe (digitalt eller fysiskt).
        </p>
        <a
          href="mailto:riki@caceras.com"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity"
        >
          Kontakta mig
        </a>
      </section>
    </main>
  );
}
