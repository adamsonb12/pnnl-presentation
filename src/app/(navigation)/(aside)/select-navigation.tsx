"use client";

import { Select } from "@lab/components/@common/fields/select";
import { usePathname, useRouter } from "next/navigation";
import { PATHS } from ".";

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
        <option value={PATHS.root}>Introduction</option>
        <option value={PATHS.situationProductVision}>
          Swyf&apos;s Product Vision
        </option>
        <option value={PATHS.situationMoonlighting}>Moonlighting</option>
        <option value={PATHS.joining}>Joining Swyf</option>
        <option value={PATHS.betaOverview}>Beta - 13 Weeks or Bust</option>
        <option value={PATHS.ourProcess}>Our Process</option>
        <option value={PATHS.roadBlocks}>Road Blocks</option>
        <option value={PATHS.betaLaunch}>Beta Launch</option>
        <option value={PATHS.hardening}>Hardening</option>
        <option value={PATHS.launchingBroadly}>Launching Broadly</option>
        <option value={PATHS.thankYou}>Thank You</option>
      </optgroup>
    </Select>
  );
};
