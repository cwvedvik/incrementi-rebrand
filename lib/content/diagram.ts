/**
 * Re-export platform / diagram content from the Kontrollag chapter module.
 * Prefer importing from `@/lib/content/platform` in new code.
 */
export {
  platform,
  DIAGRAM_ZONES,
  DIAGRAM_HERO,
  diagramChrome,
  getDiagramZone,
  type DiagramZone,
  type DiagramZoneId,
} from "./platform";
