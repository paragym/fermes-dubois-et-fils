export function Logo({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  // Brand mark aspect after transparent crop (~1024x785)
  const aspect = 1.304;
  const height = size;
  const width = Math.round(size * aspect);

  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png?v=3`}
      alt="Fermes Dubois et fils — viandes canines biologiques"
      width={width}
      height={height}
      draggable={false}
      style={{
        width,
        height,
        maxWidth: "100%",
        objectFit: "contain",
        objectPosition: "center",
        display: "block",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
      }}
      loading="eager"
      decoding="async"
      className={`select-none ${className}`.trim()}
    />
  );
}
