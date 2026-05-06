/**
 * Converts a screen ID from snake_case to Title Case
 * @param screenId - The screen ID in snake_case format (e.g., "intro_screen")
 * @returns The formatted screen ID in Title Case (e.g., "Intro Screen")
 */
export function formatScreenId(screenId: string): string {
  return screenId
    .replace(/_/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Converts a screen ID from Title Case to UPPERCASE_SNAKE_CASE
 * @param screenId - The screen ID in any format (e.g., "Intro Screen", "intro_screen", "introScreen")
 * @returns The formatted screen ID in UPPERCASE_SNAKE_CASE (e.g., "INTRO_SCREEN")
 */
export function toSnakeCase(screenId: string): string {
  return screenId
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Insert underscore between camelCase words
    .toUpperCase() // Convert to uppercase
}
