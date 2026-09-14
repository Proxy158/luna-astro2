import { Sparkles, Mail, Shield, FileText, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold-500/10 mt-12">
      {/* CTA bar */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="reveal text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold-500/10 blur-[60px] rounded-full" />
            <h2 className="relative font-display text-3xl md:text-5xl font-medium text-white mb-4">
              Il tuo cielo ha una data.
              <br />
              <span className="text-gold-gradient italic">Scoprila oggi.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            La prima previsione è gratuita. Senza registrazione, senza password.
            Apri il bot e in due minuti sai cosa succede nel tuo cielo.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 bg-gold-gradient text-ink-900 px-8 py-4 rounded-full font-semibold gold-glow gold-glow-hover hover:scale-[1.03] transition-all duration-300"
          >
            Apri il bot Telegram
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#top" className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gold-gradient rounded-full blur-sm opacity-50" />
                  <div className="relative w-7 h-7 bg-ink-900 rounded-full flex items-center justify-center border border-gold-500/40">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                  </div>
                </div>
                <span className="font-display text-2xl font-semibold text-gold-gradient tracking-wide">
                  Finestre
                </span>
              </a>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Servizio di informazione astrologica personalizzata.
                Transiti reali, date precise, consegnati su Telegram.
              </p>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-4">Legale</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 text-sm transition-colors flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-gold-500/40" />
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 text-sm transition-colors flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-gold-500/40" />
                    Termini
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 text-sm transition-colors flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-gold-500/40" />
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <h4 className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-4">Contatti</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:info@finestre.app" className="text-gray-400 hover:text-gold-300 text-sm transition-colors flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gold-500/40" />
                    info@finestre.app
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold-300 text-sm transition-colors">
                    Bot Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-gray-600 text-xs leading-relaxed text-center max-w-3xl mx-auto">
              Finestre è un servizio di intrattenimento astrologico. Le analisi si basano su calcoli astronomici
              reali (effemeridi svizzere) interpretati secondo la tradizione astrologica. Le informazioni fornite
              non costituiscono consulenza professionale di alcun tipo — medica, legale, finanziaria o psicologica.
              Non formuliamo previsioni su salute, gravidanza, morte o gioco d'azzardo. Usando il servizio accetti
              i Termini e l'informativa Privacy. © 2026 Finestre. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
