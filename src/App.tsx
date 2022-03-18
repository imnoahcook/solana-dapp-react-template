import React from 'react';
import { WalletKitProvider } from '@gokiprotocol/walletkit';
import Main from './components/Main';

export default function App() {
  return (
    <WalletKitProvider
      app={{
        name: 'Solana Dapp',
        icon: <img src='favicon.ico' style={{ borderRadius: 100 }} />,
      }}
    >
      <Main />
    </WalletKitProvider>
  );
}
