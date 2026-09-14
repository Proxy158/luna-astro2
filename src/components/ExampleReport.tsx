import { Calendar, TrendingUp, AlertTriangle, Sparkles, FileText, ArrowRight } from 'lucide-react';

const STRONG_DAYS = [
  { date: '28 set', reason: 'Sole trigono Ascendente — chiarezza e presenza' },
  { date: '2 ott', reason: 'Giove a 1° dalla MC — visibilità massima' },
];

const ATTENTION_DAYS = [
  { date: '5 ott', reason: 'Marte quadrato Mercuriore — tensione nelle comunicazioni' },
];

const TRANSITS = [
  {
    symbol: 'J',
    planet: 'Giove',
    event: 'Ingresso in 10ª casa',
    dates: '26 set — ago 2027',
    meaning: 'Undici mesi di espansione nella carriera. Opportunità di visibilità, riconoscimento, nuove responsabilità.',
    rare: false,
  },
  {
    symbol: 'S',
    planet: 'Saturno',
    event: 'Sestile al Sole natale',
    dates: '1 ott — 18 ott',
    meaning: 'Disciplina e struttura a favore. Ottimo per preparazione metodica e decisioni a lungo termine.',
    rare: false,
  },
  {
    symbol: 'M',
    planet: 'Marte',
    event: 'Quadrato al Mercuriore natale',
    dates: '4 ott — 7 ott',
    meaning: 'Energia mentale alta ma irritabile. Gestisci le discussioni con pazienza, evita reazioni impulsive.',
    rare: false,
  },
];

export default function ExampleReport() {
  return (
    <section id="esempio" className="relative py-24 lg:py-32 z-10">
      {/* Section glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-14 reveal">
          <p className="text-gold-400/60 text-sm font-medium tracking-widest uppercase mb-3">
            Un esempio vero
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
            Ecco cosa ricevi
            <span className="text-gold-gradient italic"> in una Finestra</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Report reale generato per una data-evento il 2 ottobre. Ogni data e transito viene dal motore astronomico — l\u2019AI scrive solo il testo.
          </p>
        </div>

        {/* Report card */}
        <div className="reveal reveal-delay-1">
          <div className="glass-card-dark rounded-3xl overflow-hidden shadow-2xl">
            {/* Report header */}
            <div className="bg-gradient-to-r from-ink-700 to-ink-800 px-6 md:px-10 py-6 border-b border-gold-500/10">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span className="text-gold-300 text-xs font-mono tracking-wide uppercase">La Finestra</span>
                  </div>
                  <h3 className="font-display text-2xl text-white font-medium">
                    Giulia · 22 set — 8 ott 2026
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Evento dichiarato: colloquio di lavoro</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">
                  <FileText className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-gold-300 text-xs font-medium">Report consegnato</span>
                </div>
              </div>
            </div>

            {/* Report body */}
            <div className="px-6 md:px-10 py-8 space-y-8">
              {/* Quadro */}
              <div>
                <h4 className="text-gold-400/80 text-xs font-mono tracking-widest uppercase mb-2">Il quadro</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  La tua finestra è dominata dall'ingresso di Giove nella 10ª casa — un transito che apre undici mesi
                  di espansione professionale. Saturno supporta dal sestile: struttura e pazienza a disposizione.
                  Un breve quadrato di Marte al Mercuriore segnala un giorno di tensione comunicativa, facilmente gestibile.
                </p>
              </div>

              {/* Giorni forti */}
              <div>
                <h4 className="flex items-center gap-2 text-gold-400/80 text-xs font-mono tracking-widest uppercase mb-4">
                  <TrendingUp className="w-3.5 h-3.5" />
                  I giorni forti
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {STRONG_DAYS.map((day) => (
                    <div
                      key={day.date}
                      className="flex items-start gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/15"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex flex-col items-center justify-center">
                        <Calendar className="w-3 h-3 text-green-400/60 mb-0.5" />
                        <span className="text-green-300 text-[10px] font-mono font-medium leading-none">{day.date}</span>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed pt-1">{day.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Giorni con attenzione */}
              <div>
                <h4 className="flex items-center gap-2 text-gold-400/80 text-xs font-mono tracking-widest uppercase mb-4">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Giorni con attenzione
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ATTENTION_DAYS.map((day) => (
                    <div
                      key={day.date}
                      className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/15"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex flex-col items-center justify-center">
                        <Calendar className="w-3 h-3 text-orange-400/60 mb-0.5" />
                        <span className="text-orange-300 text-[10px] font-mono font-medium leading-none">{day.date}</span>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed pt-1">{day.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dettaglio transiti */}
              <div>
                <h4 className="text-gold-400/80 text-xs font-mono tracking-widest uppercase mb-4">
                  Il dettaglio
                </h4>
                <div className="space-y-3">
                  {TRANSITS.map((t) => (
                    <div
                      key={t.planet + t.event}
                      className="flex items-start gap-4 p-4 rounded-xl bg-ink-700/40 border border-white/5 hover:border-gold-500/15 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/25 flex items-center justify-center font-display text-lg text-gold-300">
                        {t.symbol}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-white text-sm font-medium">{t.planet}</span>
                          <span className="text-gray-500 text-xs">·</span>
                          <span className="text-gold-300 text-xs">{t.event}</span>
                          <span className="text-gray-600 text-xs font-mono ml-auto">{t.dates}</span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">{t.meaning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-gray-600 text-[11px] leading-relaxed text-center">
                  Servizio di intrattenimento. Le informazioni astrologiche non sostituiscono consulenze professionali
                  (mediche, legali, finanziarie). Non formuliamo previsioni su salute, gravidanza o gioco d'azzardo.
                </p>
                <div className="text-center mt-4">
                  <p className="text-gold-300/60 text-xs">
                    Il tuo prossimo transito importante? Lo scopri gratis tra 30 giorni nel bot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal reveal-delay-2">
          <p className="text-gray-400 mb-5 text-sm">
            Ogni Finestra è calcolata sulla tua carta di nascita. Costa quanto un caffè.
          </p>
          <a
            href="#come-funziona"
            className="group inline-flex items-center gap-2 bg-gold-gradient text-ink-900 px-8 py-4 rounded-full font-semibold gold-glow gold-glow-hover hover:scale-[1.03] transition-all duration-300"
          >
            Voglio la mia Finestra
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
