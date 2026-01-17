type TrailerModalProps = {
  videoKey: string;
  onClose: () => void;
};

export function TrailerModal({ videoKey, onClose }: TrailerModalProps) {
  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-3xl rounded-lg bg-black">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-white text-xl"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Video */}
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          className="aspect-video w-full rounded-lg"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Movie trailer"
        />
      </div>
    </div>
  );
}
