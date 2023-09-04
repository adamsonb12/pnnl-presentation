"use client";
import NextLinker from "next/link";
import styled from "styled-components";

// @ts-ignore
export const NextLink = styled(NextLinker)`
  color: ${(props) => props.theme.colors.link};
  text-decoration: none;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.link};
  text-decoration: none;
`;
