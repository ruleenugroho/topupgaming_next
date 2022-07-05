import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  active: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}
export default function MenuItem(props: MenuItemProps) {
  const { title, active, icon, href = "", onClick } = props;
  let status = "";
  if (active === title) {
    status = "active";
  }
  return (
    <div className={`item ${status} mb-30`} onClick={onClick}>
      <div className="icon me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width="25"
          height="25"
          alt="overview"
        />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
