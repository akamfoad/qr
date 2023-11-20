export const ErrorCorrectLevel = {
  /**
   * Allows recovery of up to 7% data loss
   */
  L: 1 as const,
  /**
   * Allows recovery of up to 15% data loss
   */
  M: 0 as const,
  /**
   * Allows recovery of up to 25% data loss
   */
  Q: 3 as const,
  /**
   * Allows recovery of up to 30% data loss
   */
  H: 2 as const,
};
