export interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

export default function IconButton({
  icon,
  onClick,
  label,
  disabled,
}: IconButtonProps) {
  return (
    <button
      className="bg-transparent text-neutral-600 px-2 py-1 rounded-sm border border-neutral-600 hover:text-neutral-100 hover:border-neutral-100 disabled:hover:text-neutral-600 disabled:hover:border-neutral-600 disabled:opacity-50 transition-all duration-300 ease-in-out"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
