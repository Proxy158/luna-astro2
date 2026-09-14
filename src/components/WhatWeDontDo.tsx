import { X, Check } from 'lucide-react';

const NOT_DOING = [
  {
    title: 'Oroscopi generici',
    description: 'Niente frasi scritte per milioni di persone dello stesso segno. Il tuo cielo è unico.',
  },
  {
    title: 'Frasi vaghe',
    description: "\"Periodo di cambiamento\" non è un'informazione. Noi ti diamo date, settori e pianeti.",
  },
  {
    title: 'Spam quotidiano',
    description: 'Non ti scriviamo ogni giorno. Ti avvisiamo solo quando succede qualcosa di vero nel tuo cielo.',
  },
  {
    title: 'Promesse',
    description: "Mai \"vincerai alla lotteria\" o \"troverai l'amore\". Indichiamo energie e finestre, non certezze.",
  },
];

const DOING = [
  'Transiti calcolati con effemeridi astronomiche',
  'Date di ingresso esatte al giorno',
  'Settore della vita identificato per ogni transito',
  'Giorni forti e giorni con attenzione',
  'Linguaggio diretto, mai ambiguo',
];

export default function WhatWeDontDo() {
  return (
    <section id="non-facciamo" className="relative py-24 lg:py-32 z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400/60 text-sm font-medium tracking-widest uppercase mb-3">
            Cosa non facciamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white">
            Ti scriviamo solo
            <span className="text-gold-gradient italic"> quando succede qualcosa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* What we don't do */}
          <div className="reveal reveal-delay-1">
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-gray-500 text-xs font-mono tracking-widest uppercase mb-6">
                Cosa non troverai
              </h3>
              <div className="space-y-5">
                {NOT_DOING.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-400/70" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What we do */}
          <div className="reveal reveal-delay-2">
            <div className="glass-card rounded-2xl p-8 h-full border-gold-500/20 bg-gold-500/[0.03]">
              <h3 className="text-gold-400/80 text-xs font-mono tracking-widest uppercase mb-6">
                Cosa troverai
              </h3>
              <div className="space-y-5">
                {DOING.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
