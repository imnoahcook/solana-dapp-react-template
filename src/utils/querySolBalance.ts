import axios from 'axios';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

async function querySolBalance(solAddress: string) {
  const solscanUrl = `https://public-api.solscan.io/account/${solAddress}`;
  const { data } = await axios.get(solscanUrl);
  if (data != null) {
    return data.lamports?.toString() / LAMPORTS_PER_SOL;
  }
  return 0;
}

export default querySolBalance;
