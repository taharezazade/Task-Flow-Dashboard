import { SearchNormal } from "iconsax-reactjs";

function SearchBox() {
  return (
    <span className="flex flex-row items-center gap-2 p-1 outline-1 focus-within:outline-primary rounded-lg">
      {/* input */}
      <input
        type="text"
        placeholder="جستجو در تسک ها..."
        className="input outline-none border-0 input-primary w-96 max-w-lg text-sm"
      />
      {/* Search Button */}
      <SearchNormal
        size={30}
        color="currentColor"
        variant="Bold"
        className="text-primary cursor-pointer ml-2"
      />
    </span>
  );
}

export default SearchBox;
