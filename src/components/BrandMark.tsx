/* eslint-disable @next/next/no-img-element -- tiny static SVG, no optimisation needed */

type Props = {
  size?: number;
  tone?: "clay" | "cream" | "ink";
  className?: string;
  style?: React.CSSProperties;
};

export function BrandMark({ size = 26, tone = "clay", className, style }: Props) {
  return (
    <img
      src={`/brand/britesite-mark-${tone}.svg`}
      alt=""
      width={size}
      height={size}
      className={`block flex-none ${className ?? ""}`}
      style={style}
    />
  );
}
