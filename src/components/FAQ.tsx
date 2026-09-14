import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "Serve l'ora esatta di nascita?",
    answer:
      "Per il teaser gratuito basta la data. Ma per le Finestre che riguardano le case astrologiche — soprattutto quelle angolari — l'ora di nascita permette di calcolare l'Ascendente e la divisione in case. Senza ora, usiamo un sistema di case equidistante: il report è comunque utile, ma meno preciso sui settori di vita.",
  },
  {
    question: "Cosa succede se non conosco l'ora di nascita?",
    answer:
      "Puoi scrivere 12:00. Il sistema calcolerà i transiti dei pianeti sui segni (che non dipendono dall'ora) e gli aspetti al tuo Sole, Luna e pianeti personali. Le case saranno approssimative. Se in seguito ritrovi l'ora, basta aggiornarla nel bot e i prossimi report saranno più precisi.",
  },
  {
    question: 'È scienza?',
    answer:
      "L'astronomia sì — usiamo le effemeridi svizzere, gli stessi dati degli osservatori. L'astrologia è un sistema interpretativo: associa i movimenti dei pianeti a significati simbolici. Non è una scienza dimostrata. Per questo parliamo di 'energie' e 'finestre', non di certezze, e includiamo un disclaimer di intrattenimento in ogni report.",
  },
  {
    question: 'Il pagamento è sicuro?',
    answer:
      'Sì, usiamo Stripe — lo stesso sistema di Spotify, Airbnb e Amazon. I tuoi dati di pagamento passano solo da Stripe, non li vediamo e non li conserviamo. Ogni Finestra costa €4,99 una tantum, senza abbonamento automatico.',
  },
  {
    question: 'Posso cancellarmi o cancellare i miei dati?',
    answer:
      "In qualsiasi momento. Scrivi /cancella nel bot o invia un'email: i tuoi dati vengono eliminati entro 30 giorni. Il CALENDARIO (abbonamento fase 2) si disattiva con un click, senza penali. I tuoi consensi — privacy e marketing — sono separati e revocabili in ogni momento.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-gold-500/25' : 'hover:border-gold-500/15'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
      >
        <span className={`font-display text-lg font-medium transition-colors ${isOpen ? 'text-gold-200' : 'text-white group-hover:text-gold-300'}`}>
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-gold-gradient border-gold-400 rotate-180'
              : 'border-gold-500/25 group-hover:border-gold-500/50'
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-ink-900" />
          ) : (
            <Plus className="w-4 h-4 text-gold-400" />
          )}
        </div>
      </button>
      <div
        className={`grid transition-all duration-400 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 z-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-gold-400/60 text-sm font-medium tracking-widest uppercase mb-3">
            Domande frequenti
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white">
            Tutto quello che
            <span className="text-gold-gradient italic"> devi sapere</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <FaqItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal reveal-delay-3">
          <p className="text-gray-500 text-sm mb-2">Hai altre domande?</p>
          <a
            href="mailto:info@finestre.app"
            className="text-gold-300 hover:text-gold-200 text-sm font-medium transition-colors"
          >
            Scrivici · info@finestre.app
          </a>
        </div>
      </div>
    </section>
  );
}
