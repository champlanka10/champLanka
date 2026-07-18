import type { CSSProperties } from "react";

/** Shared inline styles for maroon contact panels (Tailwind spacing unreliable in these blocks). */
export const contactPanelStyles = {
  panelPadding: {
    padding: "2.5rem",
  } satisfies CSSProperties,
  panelPaddingLarge: {
    padding: "3.5rem",
  } satisfies CSSProperties,
  sectionTitle: {
    marginBottom: "0.75rem",
    marginTop: "1rem"
  } satisfies CSSProperties,
  introText: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    lineHeight: "1.625",
  } satisfies CSSProperties,
  itemsList: {
    display: "flex",
    flexDirection: "column",
    gap: "1.75rem",
  } satisfies CSSProperties,
  itemRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.5rem",
    paddingLeft: "1rem",
  } satisfies CSSProperties,
  iconCircle: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  } satisfies CSSProperties,
  iconCircleWhatsApp: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    backgroundColor: "rgba(37, 211, 102, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  } satisfies CSSProperties,
  itemLabel: {
    marginBottom: "0.25rem",
    fontWeight: "bold",
  } satisfies CSSProperties,
  itemDetail: {
    lineHeight: "1.625",
    fontSize: "0.875rem",
  } satisfies CSSProperties,
  secondaryLine: {
    marginTop: "0.15rem",
  } satisfies CSSProperties,
  mapEyebrow: {
    marginBottom: "0.5rem",
  } satisfies CSSProperties,
  mapMainTitle: {
    marginBottom: "0.75rem",
  } satisfies CSSProperties,
  mapIntroText: {
    marginTop: "0.5rem",
    marginBottom: "1.75rem",
    lineHeight: "1.625",
    fontSize: "1.125rem",
  } satisfies CSSProperties,
  mapItemLabel: {
    marginBottom: "0.25rem",
    fontWeight: "bold",
    fontSize: "1.125rem",
  } satisfies CSSProperties,
} as const;
