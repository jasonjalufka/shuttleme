export const selectUserPreferences = state => {
  const { preferences } = state.auth.user || {
    preferences: {
      university: "loading"
    }
  };

  return preferences;
};
