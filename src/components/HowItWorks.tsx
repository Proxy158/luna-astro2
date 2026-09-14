import { MessageCircle, Telescope, Mail, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Dai i tuoi dati',
    description:
      'Apri il bot Telegram e rispondi a poche domande: data, ora e luogo di nascita. Nessuna registrazione, nessuna password. Due minuti e il tuo cielo è pronto.',
    detail: 'Bot Telegram · senza app',
  },
  {
    icon: Telescope,
    number: '02',
    title: 'Calcoliamo il tuo cielo reale',
    description:
      'Usiamo le effemeridi svizzere — gli stessi dati degli astronomi. Calcoliamo i transiti reali dei pianeti sulle tue case astrologiche, con date di ingresso esatte.',
    detail: 'Swiss Ephemeris · precisione astronomica',
  },
  {
    icon: Mail,
    number: '03',
    title: 'Ricevi le tue finestre',
    description:
      'Ti consegniamo i giorni forti, i giorni con attenzione e il significato di ogni transito attivo. In chat e via email. Solo quando succede qualcosa di vero.',
    detail: 'Report personalizzato · €4,99',
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="relative py-24 lg:py-32 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400/60 text-sm font-medium tracking-widest uppercase mb-3">
            Come funziona
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
            Dal cielo al tuo telefono,
            <span className="text-gold-gradient italic"> in tre passi</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Niente oroscopi di massa. Ogni analisi parte dalla tua carta di nascita e calcola i transiti reali.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} group relative`}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-gold-500/20 to-transparent" />
                )}

                <div className="glass-card rounded-2xl p-8 h-full gold-glow-hover transition-all duration-500 hover:border-gold-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/15 transition-colors">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="font-display text-5xl font-light text-gold-500/15 group-hover:text-gold-500/25 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span className="text-gold-300/70 text-xs font-mono">{step.detail}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14 reveal reveal-delay-4">
          <a
            href="#esempio"
            className="group inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 transition-colors text-sm font-medium"
          >
            Guarda un report vero
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
