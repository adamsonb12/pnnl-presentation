"use client";
import { Paragraph } from "@lab/components/@common/typography/paragraph";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

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
      <NextLink href="/">
        <StyledText isActive={pathname === "/"}>Introduction</StyledText>
      </NextLink>
      <NextLink href="/product">
        <StyledText isActive={pathname === "/product"}>
          Swyf's Product
        </StyledText>
      </NextLink>
      <NextLink href="/setting">
        <StyledText isActive={pathname === "/setting"}>The Setting</StyledText>
      </NextLink>
      <NextLink href="/joining">
        <StyledText isActive={pathname === "/joining"}>Joining Swyf</StyledText>
      </NextLink>
      <NextLink href="/beta-overview">
        <StyledText isActive={pathname === "/beta-overview"}>
          Beta - 13 Weeks or Bust
        </StyledText>
      </NextLink>
      <NextLink href="/our-process">
        <StyledText isActive={pathname === "/our-process"}>
          Our Process
        </StyledText>
      </NextLink>
      <NextLink href="/road-blocks">
        <StyledText isActive={pathname === "/road-blocks"}>
          Road Blocks
        </StyledText>
      </NextLink>
      <NextLink href="/beta-launch">
        <StyledText isActive={pathname === "/beta-launch"}>
          Beta Launch
        </StyledText>
      </NextLink>
      <NextLink href="/hardening">
        <StyledText isActive={pathname === "/hardening"}>Hardening</StyledText>
      </NextLink>
      <NextLink href="/launching-broadly">
        <StyledText isActive={pathname === "/launching-broadly"}>
          Launching Broadly
        </StyledText>
      </NextLink>
    </>
  );
};
