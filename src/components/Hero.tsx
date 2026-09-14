import { useEffect, useState, useRef } from 'react';
import { Send, Check, Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  delay: number;
  typing?: boolean;
}

const MESSAGES: ChatMessage[] = [
  { id: 0, sender: 'bot', text: 'Sto leggendo il tuo cielo...', delay: 500 },
  { id: 1, sender: 'bot', text: ' Giove entra nella tua 10ª casa — carriera — tra 12 giorni.\nFinestra: 11 mesi.', delay: 1800 },
  { id: 2, sender: 'bot', text: 'Vuoi sapere COME usarla?', delay: 3200 },
  { id: 3, sender: 'user', text: 'Ho un colloquio il 2 ottobre', delay: 4500 },
  { id: 4, sender: 'bot', text: 'Il 2 ottobre è in una finestra forte.\nGiove amplifica visibilità e opportunità.', delay: 5800 },
  { id: 5, sender: 'bot', text: 'Ti preparo LA FINESTRA per quella data? €4,99', delay: 7200 },
  { id: 6, sender: 'user', text: 'Sì, voglio il report', delay: 8600 },
  { id: 7, sender: 'bot', text: 'Report consegnato. Giorni forti: 28 set, 2 ott.\nGiorno con attenzione: 5 ott.', delay: 9800 },
];

function BotPreview() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let cycleTimeout: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      setVisibleMessages([]);
      setIsTyping(false);

      MESSAGES.forEach((msg) => {
        const showTimeout = setTimeout(() => {
          if (msg.sender === 'bot') {
            setIsTyping(true);
            const revealTimeout = setTimeout(() => {
              setIsTyping(false);
              setVisibleMessages((prev) => [...prev, msg]);
            }, 800);
            timeouts.push(revealTimeout);
          } else {
            setVisibleMessages((prev) => [...prev, msg]);
          }
        }, msg.delay);
        timeouts.push(showTimeout);
      });

      cycleTimeout = setTimeout(runCycle, 13000);
    };

    runCycle();

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(cycleTimeout);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-gold-500/10 blur-[80px] rounded-full" />

      {/* Phone frame */}
      <div className="relative w-[340px] max-w-full mx-auto">
        <div className="relative bg-ink-800 rounded-[2.5rem] border border-gold-500/20 shadow-2xl overflow-hidden gold-glow">
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink-900 rounded-b-2xl z-20" />

          {/* Telegram header */}
          <div className="bg-ink-700 px-5 pt-8 pb-3 border-b border-white/5 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-ink-900" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-ink-700" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-semibold truncate">Finestre Bot</div>
              <div className="text-gold-400/60 text-[11px]">in linea</div>
            </div>
            <div className="text-gold-400/40 text-xs font-mono">···</div>
          </div>

          {/* Chat area */}
          <div
            ref={scrollRef}
            className="bg-ink-900/60 px-4 py-4 h-[360px] overflow-y-auto bot-scrollbar space-y-3"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(232,197,68,0.03) 0%, transparent 70%)',
            }}
          >
            {visibleMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line animate-scale-in ${
                    msg.sender === 'user'
                      ? 'bg-gold-gradient text-ink-900 rounded-br-md font-medium'
                      : 'bg-ink-600 text-gray-200 rounded-bl-md border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-ink-600 px-4 py-3 rounded-2xl rounded-bl-md border border-white/5 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-gold-400/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gold-400/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gold-400/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {visibleMessages.length === 0 && !isTyping && (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-14 h-14 mx-auto mb-3">
                    <div className="absolute inset-0 border-2 border-gold-500/20 rounded-full" />
                    <div className="absolute inset-0 border-2 border-transparent border-t-gold-400 rounded-full animate-spin" />
                  </div>
                  <p className="text-gray-500 text-xs">Connessione al cielo...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="bg-ink-700 px-4 py-3 border-t border-white/5 flex items-center gap-2">
            <div className="flex-1 bg-ink-600 rounded-full px-4 py-2 text-gray-500 text-xs">
              Messaggio...
            </div>
            <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
              <Send className="w-4 h-4 text-ink-900" />
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute -left-12 top-32 hidden lg:block animate-float" style={{ animationDelay: '0s' }}>
          <div className="glass-card rounded-xl px-3 py-2.5 flex items-center gap-2 gold-glow">
            <Calendar className="w-4 h-4 text-gold-400" />
            <div>
              <div className="text-gold-300 text-[11px] font-mono">28 SET</div>
              <div className="text-gray-400 text-[10px]">giorno forte</div>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 top-56 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
          <div className="glass-card rounded-xl px-3 py-2.5 flex items-center gap-2 gold-glow">
            <Check className="w-4 h-4 text-green-400" />
            <div>
              <div className="text-white text-[11px] font-medium">Report consegnato</div>
              <div className="text-gray-500 text-[10px]">€4,99 · 2 min</div>
            </div>
          </div>
        </div>
        <div className="absolute -right-8 -top-2 hidden lg:block animate-float" style={{ animationDelay: '4s' }}>
          <div className="glass-card rounded-xl px-3 py-2 gold-glow">
            <div className="text-gold-300 text-[10px] font-mono"> GIOVE → 10ª CASA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left: text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-gold-300 text-xs font-medium tracking-wide uppercase">Astrologia con date reali</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6 animate-fade-in-up">
            <span className="text-white">Le stelle avvisano.</span>
            <br />
            <span className="text-gold-gradient italic">Tu sai quando.</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Il tuo calendario cosmico personale, con le date precise.
            Niente oroscopi generici: solo transiti reali, calcolati sulla tua carta di nascita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#come-funziona"
              className="group bg-gold-gradient text-ink-900 px-8 py-4 rounded-full font-semibold text-base gold-glow gold-glow-hover hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Scopri la tua prima finestra
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#esempio"
              className="border border-gold-500/30 text-gold-300 px-8 py-4 rounded-full font-medium text-base hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 flex items-center justify-center"
            >
              Vedi un esempio
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['#e8c544', '#2a6b6b', '#1e3a5f', '#b88a1d'].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-ink-900"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm">Bot Telegram · gratuito</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-gray-500 text-sm">
              <Check className="w-4 h-4 text-gold-400" />
              <span>Senza registrazione</span>
            </div>
          </div>
        </div>

        {/* Right: bot preview */}
        <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <BotPreview />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-gold-500/40">
          <span className="text-[10px] uppercase tracking-widest">Scorri</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
