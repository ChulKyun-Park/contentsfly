interface StatCounterProps { value: string; label: string; }

export default function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="text-xl font-bold text-primary sm:text-3xl md:text-4xl">{value}</div>
      <div className="mt-1 text-xs sm:mt-2 sm:text-[length:var(--font-size-body)] text-muted">{label}</div>
    </div>
  );
}
