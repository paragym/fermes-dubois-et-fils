export function Logo({
  size = 120,
  className,
}: {
  size?: number;
  className?: string;
}) {
  // Brand mark aspect ~1024x785 after transparent crop
  const aspect = 1.304;
  const height = size;
  const width = Math.round(size * aspect);

  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Fermes Dubois et fils — viandes canines biologiques"
      width={width}
      height={height}
      style={{
        width,
        height,
        objectFit: "contain",
        display: "block",
        background: "transparent",
      }}
      loading="eager"
      decoding="async"
      className={className}
    />
  );
}
