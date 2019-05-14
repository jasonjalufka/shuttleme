export const selectUserPreferences = state => {
  const { preferences } = state.auth;

  return preferences;
};
