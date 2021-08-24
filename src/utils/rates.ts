export const getWinRate = (win: number, total: number, round = 2) =>
  ((win * 100) / total).toFixed(round);

export const getWinRatePercent = (win: number, total: number, round = 2) =>
  `${getWinRate(win, total, round)}%`;

export const getPickRate = (win: number, total: number, round = 2) =>
  ((win * 100) / total).toFixed(round);

export const getPickRatePercent = (win: number, total: number, round = 2) =>
  `${getPickRate(win, total, round)}%`;
