import Logo from './Logo';
import Menu from './Menu';

export default function Sidebar() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-4 rounded-[2rem] border-[1px] border-gray-200 p-2">
      <Logo />
      <Menu />
    </div>
  );
}
