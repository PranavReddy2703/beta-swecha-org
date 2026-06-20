// src/utils/timelineColors.ts
// Shared utility for computing dynamic timeline node colors.
// Used by both Timeline.astro (mobile nodes) and TimelineSlider.astro (desktop nodes).

export interface NodeColors {
  color: string;
  glow: string;
  shadow: string;
}

/**
 * Generates gradient-mapped HSL node colors for the timeline.
 * @param idx   - Zero-based index of the node
 * @param total - Total number of nodes
 * @param isLight - Whether to return light-mode colors (deep blues/emeralds) or dark-mode colors (electric cyans/mints)
 */
export function getNodeColors(idx: number, total: number, isLight: boolean = false): NodeColors {
  const t = total > 1 ? idx / (total - 1) : 0;

  if (isLight) {
    // Very dark blues to dark emeralds for high contrast in light mode
    const hue = Math.round(210 - t * 50);
    const lightness = Math.round(20 + t * 5); // 20% to 25% lightness for deep visibility
    return {
      color: `hsl(${hue}, 100%, ${lightness}%)`,
      glow: `hsla(${hue}, 100%, ${lightness}%, 0.4)`,
      shadow: `hsla(${hue}, 100%, ${lightness}%, 0.3)`,
    };
  } else {
    // Electric Cyan to Emerald Mint for dark mode
    const hue = Math.round(190 - t * 35);
    const lightness = Math.round(50 + t * 15);
    return {
      color: `hsl(${hue}, 100%, ${lightness}%)`,
      glow: `hsla(${hue}, 100%, ${lightness}%, 0.25)`,
      shadow: `hsla(${hue}, 100%, ${lightness}%, 0.15)`,
    };
  }
}
