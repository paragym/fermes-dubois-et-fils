export function Logo({
  size = 120,
  className,
}: {
  size?: number;
  className?: string;
}) {
  // Landscape brand mark (dog + arch + wordmark)
  const width = Math.round(size * 1.35);
  const height = size;

  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Fermes Dubois et fils — viandes canines biologiques"
      width={width}
      height={height}
      style={{ width, height, objectFit: "contain", display: "block" }}
      loading="eager"
      decoding="async"
      className={className}
    />
  );
}
