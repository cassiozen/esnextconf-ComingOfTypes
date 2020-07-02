/**
 * Adds a message and aria-live attribute to the DOM
 */

const addLiveMessage = (message: string) => {
  return {
    type: 'ANNOUNCE_MESSAGE' as const,
    message,
  };
};

/**
 * Clear's out the message and aria-live attribute.
 */
const clearLiveMessage = () => ({ type: 'CLEAR_MESSAGE' as const });

export type AnnouncerActions = ReturnType<
  typeof addLiveMessage | typeof clearLiveMessage
>;
