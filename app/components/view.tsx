export default function View({ cssDetails }: { cssDetails: number }) {
  return (
    <div className={`h-100 w-50 mode-${cssDetails}`}>
      <div
        className={`${cssDetails <= 5 ? "col" : "box"}  p-0 bg-primary`}
      ></div>
      <div className={`${cssDetails <= 5 ? "col" : "box"}  p-0 bg-info`}></div>
      <div
        className={`${cssDetails <= 5 ? "col" : "box"}  p-0 bg-secondary`}
      ></div>
    </div>
  );
}
