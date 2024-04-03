export default function View({ cssDetails }: { cssDetails: string }) {
  return (
    <div className={`d-grid h-100 w-50 ${cssDetails}`}>
      <div className="row">
        <div className="col-md-4 box-1 p-0"></div>
        <div className="col-md-4 box-2 p-0"></div>
        <div className="col-md-4 box-3 p-0"></div>
      </div>
      <div className="row">
        <div className="col-md-4 box-4 p-0"></div>
        <div className="col-md-4 box-5 p-0"></div>
        <div className="col-md-4 box-6 p-0"></div>
      </div>
      <div className="row">
        <div className="col-md-4 box-7 p-0"></div>
        <div className="col-md-4 box-8 p-0"></div>
        <div className="col-md-4 box-9 p-0"></div>
      </div>
    </div>
  );
}
