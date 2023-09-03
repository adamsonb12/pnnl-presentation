"use client";

import styled from "styled-components";
import { Heading3 } from "../heading";
import { spacing4 } from "../../spacing";

export const WritingTitle = styled(Heading3)`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: ${spacing4};
`;
