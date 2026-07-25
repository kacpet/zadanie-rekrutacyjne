import type { ScreenType } from "../types/screenType";

export function getScreenType(): ScreenType {
  if (window.matchMedia("(max-width: 767px)").matches) {
    return "mobile";
  }

  if (window.matchMedia("(max-width: 1023px)").matches) {
    return "tablet";
  }

  return "desktop";
}
