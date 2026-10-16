import Image from "next/image";

type Props = {
  /** Shown while no image or video has been supplied yet. */
  placeholder: string;
  src?: string;
  alt?: string;
  sizes?: string;
};

/**
 * Fills its (positioned) parent with an image, or shows a quiet placeholder until one is supplied.
 * Drop the file in /public and pass its path as `src`.
 */
export function ImageSlot({ placeholder, src, alt = "", sizes = "50vw" }: Props) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />;
  }
  return (
    <div className="absolute inset-0 grid place-items-center bg-[rgba(127,127,127,.08)] p-3 text-center text-[13px] font-medium text-ink/55">
      <div className="flex flex-col items-center gap-1.5">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-60">
          <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 18l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span>{placeholder}</span>
      </div>
    </div>
  );
}
