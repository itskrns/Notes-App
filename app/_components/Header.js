import SearchBox from './SearchBox';
import SortBtn from './SortBtn';

export default function Header() {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-3 px-4 pt-4">
      <SearchBox />
      <SortBtn />
    </div>
  );
}
