/**
 * Curated palette for category color swatches. Hex values picked to read
 * cleanly against both light and dark themes when used as a 3px sidebar
 * stripe. Add to the bottom of the array — order is the order they appear
 * in the "Set Color" submenu.
 */
export interface CategoryColor {
  /** Stable identifier persisted in the database. */
  readonly id: string
  /** User-facing label shown in the menu. */
  readonly label: string
  /** Hex value rendered on the stripe. */
  readonly hex: string
}

export const CategoryColors: ReadonlyArray<CategoryColor> = [
  { id: 'red', label: 'Red', hex: '#cf222e' },
  { id: 'orange', label: 'Orange', hex: '#bc4c00' },
  { id: 'yellow', label: 'Yellow', hex: '#9a6700' },
  { id: 'green', label: 'Green', hex: '#1a7f37' },
  { id: 'teal', label: 'Teal', hex: '#0a7274' },
  { id: 'blue', label: 'Blue', hex: '#0969da' },
  { id: 'purple', label: 'Purple', hex: '#8250df' },
  { id: 'pink', label: 'Pink', hex: '#bf3989' },
  { id: 'gray', label: 'Gray', hex: '#6e7781' },
]

/** Look up a swatch by its persisted id. Returns undefined for unknown ids. */
export function findCategoryColor(id: string): CategoryColor | undefined {
  return CategoryColors.find(c => c.id === id)
}
