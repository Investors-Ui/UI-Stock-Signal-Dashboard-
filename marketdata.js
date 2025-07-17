
export default function handler(req, res) {
  return res.status(200).json([
    { symbol: 'NIFTY_50', ltp: 25111.45, change: -0.4, time: '1:35:57 PM' },
    { symbol: 'BANKNIFTY', ltp: 56828.80, change: -0.59, time: '2:33:03 PM' },
    { symbol: 'RELIANCE', ltp: 1478.70, change: -0.46, time: '12:52:50 PM' }
  ]);
}
