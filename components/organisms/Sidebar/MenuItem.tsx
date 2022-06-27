import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  active: string;
  icon: string;
  href: string;
}
export default function MenuItem(props: MenuItemProps) {
  const { title, active, icon, href } = props;
  let status = "";
  if (active === title) {
    status = "active";
  }
  return (
    <div className={`item ${status} mb-30`}>
      <div className="icon me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width="25"
          height="25"
          alt="overview"
        />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
