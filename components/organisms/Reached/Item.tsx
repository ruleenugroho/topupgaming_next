import cx from "classnames";

interface ItemProps {
  total: string;
  title: string;
  first?: boolean;
}

export default function Item(props: Partial<ItemProps>) {
  const { total, first, title } = props;
  const classTitle = cx({ "me-lg-35": true, "ms-lg-35": !first });
  return (
    <>
      {first ? (
        ""
      ) : (
        <>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
        </>
      )}
      <div className={classTitle}>
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {total}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {title}
        </p>
      </div>
    </>
  );
}
