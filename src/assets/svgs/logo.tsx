import { StyledSvg } from ".";

export const LogoSvg = ({ color, ...props }: { color?: string }) => {
  return (
    <StyledSvg
      width="316"
      height="424"
      viewBox="0 0 316 424"
      fill="none"
      {...props}
    >
      <rect width="100" height="100" rx="10" fill="white" />
      <rect y="108" width="100" height="100" rx="10" fill="white" />
      <rect x="216" y="324" width="100" height="100" rx="10" fill="white" />
      <rect x="216" y="216" width="100" height="100" rx="10" fill="white" />
      <rect x="108" y="216" width="100" height="100" rx="10" fill="white" />
      <rect x="108" y="324" width="100" height="100" rx="10" fill="white" />
      <rect y="324" width="100" height="100" rx="10" fill="white" />
      <rect y="216" width="100" height="100" rx="10" fill="white" />
    </StyledSvg>
  );
};
