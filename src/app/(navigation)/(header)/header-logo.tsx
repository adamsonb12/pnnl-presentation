"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { LogoSvg } from "@lab/assets/svgs/logo";
import { spacing16 } from "@lab/components/@common/spacing";

const StyledLogo = styled(LogoSvg)`
  width: ${spacing16};
`;

export const AnimatedHeaderLogo = () => {
  return (
    <motion.div animate={{ rotate: 360 }}>
      <StyledLogo />
    </motion.div>
  );
};
