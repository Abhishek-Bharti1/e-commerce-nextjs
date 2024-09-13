"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent} from "react";

const SearchBar = () => {
  const router = useRouter();
  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get("name") as string;
  if(name){
  router.push(`/list?name=${name}`);
  }
  };
  return (
    <form
      onSubmit={handleSubmitSearch}
      className="flex justify-between gap-4 bg-gray-100 p-2 items-center rounded-md flex-1"
    >
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 bg-transparent outline-none"
        name="name"
      />
      <button type="submit" className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
