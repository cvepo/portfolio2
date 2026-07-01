import { ImageIcon } from "lucide-react";

export default function PlaceholderImage({
  className = "",
  iconSize = 28,
}: {
  className?: string;
  iconSize?: number;
}) {
  return (
    <div
      className={`bg-placeholder rounded-md flex items-center justify-center ${className}`}
    >
      <ImageIcon size={iconSize} className="text-warmgray" strokeWidth={1.5} />
    </div>
  );
}
