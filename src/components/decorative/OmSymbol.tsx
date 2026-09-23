interface OmSymbolProps {
  className?: string;
}

export function OmSymbol({ className = '' }: OmSymbolProps) {
  return (
    <span className={`devanagari ${className}`} aria-hidden="true">
      ॐ
    </span>
  );
}

export function SwastikaSymbol({ className = '' }: OmSymbolProps) {
  return (
    <span className={`devanagari ${className}`} aria-hidden="true">
      卐
    </span>
  );
}

export function KalashSymbol({ className = '' }: OmSymbolProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M24 2c-3 0-5 2-5 5 0 1 0 2 1 3-6 2-11 8-11 16 0 9 7 16 15 16s15-7 15-16c0-8-5-14-11-16 1-1 1-2 1-3 0-3-2-5-5-5z" fill="currentColor" opacity="0.9"/>
      <ellipse cx="24" cy="10" rx="7" ry="2.5" fill="currentColor" opacity="0.6"/>
      <path d="M14 44h20v4H14zM16 50h16v4H16zM18 56h12v4H18z" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}

export function LotusDivider({ className = '' }: OmSymbolProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold-400" />
      <svg viewBox="0 0 32 32" className="w-6 h-6 text-saffron-500" fill="currentColor" aria-hidden="true">
        <path d="M16 4c-2 4-2 8 0 12 2-4 2-8 0-12zM16 28c-2-4-2-8 0-12 2 4 2 8 0 12zM4 16c4-2 8-2 12 0-4 2-8 2-12 0zM28 16c-4-2-8-2-12 0 4 2 8 2 12 0z" opacity="0.7"/>
        <circle cx="16" cy="16" r="3" />
      </svg>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold-400" />
    </div>
  );
}
