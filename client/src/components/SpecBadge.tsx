export const SpecBadge = ({ label, value }: {label: string; value: string}) => (
  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1">
    {label}: {value}
  </span>
);