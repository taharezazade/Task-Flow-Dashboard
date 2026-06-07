import { SearchNormal } from "iconsax-reactjs";

function SearchBox() {
  return (
    <div className="flex items-center gap-2 w-full max-w-xl rounded-xl border border-base-300 px-3 py-1 focus-within:border-primary transition-all">
      <SearchNormal
        size={22}
        color="currentColor"
        variant="Bold"
        className="text-primary"
      />

      <input
        type="text"
        placeholder="جستجو در تسک‌ها..."
        className="
          w-full
          bg-transparent
          outline-none
          text-sm
        "
      />
    </div>
  );
}

export default SearchBox;
