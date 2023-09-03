"use client";

import { Select } from "@lab/components/@common/fields/select";
import { usePathname, useRouter } from "next/navigation";

export const SelectNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      value={pathname}
      onChange={(e) => {
        router.push(e.currentTarget.value);
      }}
    >
      <optgroup label="Pages">
        <option value={"/"}>Introduction</option>
        <option value={"/product"}>The Product</option>
      </optgroup>
    </Select>
  );
};
