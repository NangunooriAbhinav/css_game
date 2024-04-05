export default function View({ cssDetails }: { cssDetails: number }) {
  return (
    <div className={`h-100 w-50 mode-${cssDetails} p-2 view `}>
      <div className={`${cssDetails <= 5 ? "col" : "box"}  p-0 bg-box-1`}></div>
      <div className={`${cssDetails <= 5 ? "col" : "box"}  p-0 bg-box-2`}></div>
      <div className={`${cssDetails <= 5 ? "col" : "box"}  p-0 bg-box-3`}></div>
    </div>
  );
}
