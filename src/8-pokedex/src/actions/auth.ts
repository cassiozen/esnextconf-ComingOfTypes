/**
 * Not real code, just for demonstration purposes
 */
const logUser = () => ({
  type: 'USER_LOGGED' as const,
  name: 'Cassio Zen',
  profilePicture: 'https://avatarfiles.alphacoders.com/859/85927.png',
  token: 'hlgKL6785UvbTbYFK8675-hjghbO87ti',
});

export type AuthActions = ReturnType<typeof logUser>;
