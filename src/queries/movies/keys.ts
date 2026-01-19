export const movieKeys = {
  all: ["movies"] as const,
  lists: () => [...movieKeys.all, "list"] as const,
  nowPlaying: (page: number) =>
    [...movieKeys.lists(), "now_playing", page] as const,
  popular: (page: number) => [...movieKeys.lists(), "popular", page] as const,
  topRated: (scope: number | "infinite") =>
    [...movieKeys.lists(), "top_rated", scope] as const,
};
