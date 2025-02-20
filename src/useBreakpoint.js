import { useMediaQuery } from "react-responsive";

export const useBreakpoint = () => {
  return {
    isLargeDesktop: useMediaQuery({ minWidth: 1199.98 }),
    isDesktop: useMediaQuery({ minWidth: 992 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 991.98 }),
    isMobile: useMediaQuery({ minWidth: 480, maxWidth: 767.98 }),
    isSmallMobile: useMediaQuery({ maxWidth: 479.98 }),
  };
};
