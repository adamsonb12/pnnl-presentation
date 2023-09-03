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
        <StyledText isActive={pathname === "/product"}>The Product</StyledText>
      </NextLink>
    </>
  );
};
