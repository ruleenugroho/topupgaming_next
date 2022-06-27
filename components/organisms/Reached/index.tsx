import Item from "./Item";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <Item first total="290M+" title="Players Top Up" />
          <Item total="12.500" title="Games Available" />
          <Item total="99,9%" title="Happy Players" />
          <Item total="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
