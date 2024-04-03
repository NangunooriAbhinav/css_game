import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="main d-flex justify-content-center align-items-center">
        <div className="game-container d-grid no-gutters">
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
      </section>
    </>
  );
}
