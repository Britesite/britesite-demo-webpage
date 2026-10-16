/** Fixed page backdrop: two slow-drifting warm auras plus a fine paper grain. */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-[-18vw] top-[8vh] h-[62vw] w-[62vw] animate-drift-a rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(240,154,108,.20), rgba(246,214,190,.10) 55%, rgba(0,0,0,0))",
        }}
      />
      <div
        className="absolute bottom-[-14vh] right-[-20vw] h-[66vw] w-[66vw] animate-drift-b rounded-full blur-[24px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(194,88,47,.12), rgba(246,214,190,.10) 55%, rgba(0,0,0,0))",
        }}
      />
      <div className="paper-grain absolute inset-0 opacity-50 mix-blend-multiply" />
    </div>
  );
}
