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
        <option value={"/product"}>Swyf&apos;s Product</option>
        <option value={"/setting"}>The Product</option>
        <option value={"/joining"}>Joining Swyf</option>
        <option value={"/beta-overview"}>Beta - 13 Weeks or Bust</option>
        <option value={"/our-process"}>Our Process</option>
        <option value={"/road-blocks"}>Road Blocks</option>
        <option value={"/beta-launch"}>Beta Launch</option>
        <option value={"/hardening"}>Hardening</option>
        <option value={"/launching-broadly"}>Launching Broadly</option>
      </optgroup>
    </Select>
  );
};
