"use client";
import { Paragraph } from "@lab/components/@common/typography/paragraph";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { PATHS } from ".";

// @ts-ignore
const NextLink = styled(Link)`
  text-decoration: none;
  margin-left: 0.5em;
`;

const StyledText = styled(Paragraph)<{ isActive?: boolean }>`
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.textSecondary};
`;

const CategoryTitle = styled(Paragraph)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

export const AsideNavigationLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <CategoryTitle>Pages</CategoryTitle>
      <NextLink href={PATHS.root}>
        <StyledText isActive={pathname === PATHS.root}>Introduction</StyledText>
      </NextLink>
      <NextLink href={PATHS.situationProductVision}>
        <StyledText isActive={pathname === PATHS.situationProductVision}>
          Swyf&apos;s Product Vision
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.situationMoonlighting}>
        <StyledText isActive={pathname === PATHS.situationMoonlighting}>
          Moonlighting
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.joining}>
        <StyledText isActive={pathname === PATHS.joining}>
          Joining Swyf
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.betaOverview}>
        <StyledText isActive={pathname === PATHS.betaOverview}>
          Beta - 13 Weeks or Bust
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.ourProcess}>
        <StyledText isActive={pathname === PATHS.ourProcess}>
          Our Process
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.roadBlocks}>
        <StyledText isActive={pathname === PATHS.roadBlocks}>
          Road Blocks
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.betaLaunch}>
        <StyledText isActive={pathname === PATHS.betaLaunch}>
          Beta Launch
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.hardening}>
        <StyledText isActive={pathname === PATHS.hardening}>
          Hardening
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.launchingBroadly}>
        <StyledText isActive={pathname === PATHS.launchingBroadly}>
          Launching Broadly
        </StyledText>
      </NextLink>
      <NextLink href={PATHS.thankYou}>
        <StyledText isActive={pathname === PATHS.thankYou}>
          Thank You
        </StyledText>
      </NextLink>
    </>
  );
};
