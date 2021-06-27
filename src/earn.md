# Yield Aggregator

The Rari Capital yield aggregator consists of a series of three distincy pools that are autonomously searching for the highest yield across DeFi lending opportunities, including Fuse, our own internal interest rate protocol within the Rari Capital ecosystem.

![E4vpYizVEAIf755](https://user-images.githubusercontent.com/50163445/123555712-36a93300-d73c-11eb-870f-72ac74a2b87d.jpg)

## How does Rari Capital earn yield?

Currently, the yield aggregator protocol optimizes for yield across a series of protocols across the Ethereum DeFi ecosystem. The USDC and DAI pools are broadcasted into stable-asset strategies, while the ETH pool maintains exposure to price volatility of the currency. These pools earn users' yield by lending and farming across various DeFi protocols such as Compound Finance, dYdX, KeeperDAO, mStable, yEarn, Aave, and Fuse Pools! We are actively expanding our strategy set to focus on more sustainable yields on and off of the blockchain. The pools are now playing an active role within Fuse by provodiung liquidity to borrowers, as well as letting pool depositors reap the benefits of high yield opportunities.

The follow numbers represent backtested numbers if you had deposited into each pool. (This information is not audited and is purely meant for information purposes):

- USDC: __% 
- DAI: ___% 
- ETH: ___% 

## Rari Capital USDC Pool

The Rari Capital Stable Pool allows users to deposit ETH or any ERC20 token to mint the native token, $RSPT. All ERC20s will be swapped to USDC (meaning there is slippage for all deposits except USDC). Once a token holder, the Rari protocol is working autonomously to deliver the highest yield on your USDC.

- **Lending USDC on [Compound Finance](https://compound.finance/)**
- **Lending USDC on [Aave](https://aave.com/)**
- **Lending USDC on [dYdX](https://dydx.exchange/)**
- **Providing liquidity to [mStable](https://mstable.org/)**
- **Lending USDC to [Fuse Pools](app.rari.capital/fuse)**

## Rari Capital DAI Pool

The Rari Capital DAI Pool allows users to deposit DAI or any ERC20 token to mint the native token, $RDPT. All ERC20s will be swapped to DAI (meaning there is slippage for all deposits except DAI). Once a token holder, the Rari Capital protocol will work autonomously to deliver the highest yield on your DAI.

- **Lending DAI on [Compound Finance](https://compound.finance/)**
- **Lending DAI on [Aave](https://aave.com/)**
- **Lending DAI on [dYdX](https://dydx.exchange/)**
- **Providing liquidity to [mStable](https://mstable.org/)**
- **Lending DAI to [Fuse Pools](app.rari.capital/fuse)**



## Rari Capital ETH Pool

The Rari Capital ETH Pool allows Rari users to deposit ETH or any ERC20 tokens to immediately start earning interest through the $REPT. While maintaining exposure to the price of ETH, users are earning yield through various means like:

- **Earning yield from liquidations (facilitated by [KeeperDAO](https://app.keeperdao.com/))**
- **Lending DAI on [Compound Finance](https://compound.finance/)**
- **Lending DAI on [Aave](https://aave.com/)**
- **Lending DAI on [dYdX](https://dydx.exchange/)**
- **Providing liquidity to [mStable](https://mstable.org/)**
- **Lending ETH to [Fuse Pools](app.rari.capital/fuse)**

If you are interested in learning more about each of the strategies and our framework for identifying which ones to implement, check it out [here](https://www.notion.so/Rari-Strategy-Assessment-Framework-2d1edffcf80f4750973f6e90e97b70a4).

## How to Deposit

**Step 1: Connect a wallet**

The Rari Capital ecosystem currently supports [MetaMask](metamask.io), [WalletConnect](walletconnect.org), [Portis](portis.io), [Torus](https://tor.us/), [Formatic](https://fortmatic.com/), and [Authereum](https://authereum.com/). If you do not have a wallet, we recommend you refer to [this guide ](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1)for [MetaMask](Metamask.io). Users can connect their wallets by selecting the "Connect Wallet" button on the [Rari Capital Earn Portal](https://app.rari.capital/Earn).

**Step 2: Choose a pool**

Once connected, users can view the multi-pool dashboard, equipped with a comparative graph of the returns between each pool. Users may then deposit into the pool(s) of their choosing by selecting the transaction button (the button with two arrows). This will prompt the deposit window, where users can select a supported asset of their choice to deposit.

**Step 3: Deposit a supported asset**

After choosing a pool and selecting the deposit button, users can then select any of the supported crypto-assets and deposit them within the pool. This can be done by selecting the asset menu, choosing your desired asset, inputting your desired amount, or hitting the "max" button to select the maximum amount in your wallet, and hitting the deposit button. For MetaMask users, you will then receive a transaction approval window, where first-time users must approve contract interactions, and all users must approve of individual transactions.

It is worth noting that depositing in a currently active token will require less gas for the transaction than depositing an inactive asset. This means that it will use more gas to deposit an inactive asset, as it will also need more swaps to reach an active asset.

Additionally, you are able to deposit hundreds of different assets that will instantly be swapped on deposit through our integration with 0x.

**Step 4: Track your interest accrued**

After depositing, your returns can be viewed either within the individual pool dashboards or on the multi-pool dashboard, where you can rotate through returns across the entire protocol for various time periods.

## How to Withdraw

**Step 1: Connect a wallet**

The Rari Capital ecosystem currently supports [MetaMask](metamask.io), [WalletConnect](walletconnect.org), [Portis](portis.io), [Torus](https://tor.us/), [Formatic](https://fortmatic.com/), and [Authereum](https://authereum.com/). If you do not have a wallet, we recommend you refer to [this guide ](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1)for [MetaMask](Metamask.io). Users can connect their wallets by selecting the "Connect Wallet" button on the [Rari Capital Earn Portal](https://app.rari.capital/Earn).

**Step 2: Choose a pool**

Once connected, users can view the multi-pool dashboard. Users may then withdraw from the pool(s) of their choosing by selecting the transaction button (the button with two arrows). This will prompt a new window.

**Step 3: Withdraw into a supported asset**

After choosing a pool and selecting the transaction button, users can then toggle the withdrawal function with the gear button in the top right. Then, select any of the supported crypto-assets and withdraw from the pool. This can be done by selecting the asset menu, choosing your desired asset, the amount, and by pressing the "Withdraw" button.

It is worth noting that it will cost less gas to withdraw in any tokens currently active within the protocol, as it will require fewer swaps. Conversely, this means that it will require more gas for withdrawals in assets not currently active.

------

If you noticed anything throughout your experience that was not described in this tutorial, we encourage you to reach out in our [Discord](Discord.xjfjfjdf) for assistance and a community member will always be wiling to help!
