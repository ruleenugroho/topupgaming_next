import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  active: string;
}
export default function Sidebar(props: SidebarProps) {
  const { active } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            icon="overview"
            title="Overview"
            href="/member"
            active={active}
          />
          <MenuItem
            icon="transactions"
            title="Transactions"
            href="/member/transactions"
            active={active}
          />
          <MenuItem
            icon="messages"
            title="Messages"
            href="/member"
            active={active}
          />
          <MenuItem icon="card" title="Card" href="/member" active={active} />
          <MenuItem
            icon="rewards"
            title="Rewards"
            href="/member"
            active={active}
          />
          <MenuItem
            icon="settings"
            title="Settings"
            href="/member/edit-profile"
            active={active}
          />
          <MenuItem icon="logout" title="Log Out" href="/" active={active} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
