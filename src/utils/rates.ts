export const winRate = (win: number, total: number) =>
  ((win * 100) / total).toFixed(2);
