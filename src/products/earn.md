# Products

## Yield Aggregator

An autonomous alogorthim that rebalances users' funds into the highest yielding opportunities. Provides liquidity to Fuse pools for borrowers.

------

The Rari Capital yield aggregator consists of a series of three pools that are constantly searching for the highest yield autonomously across DeFi lending protocols. 

![E4vpYizVEAIf755](https://user-images.githubusercontent.com/50163445/123555669-f6e24b80-d73b-11eb-8378-4ae041a4be4e.jpg)

## How does Rari Capital earn yield?

Currently, the yield aggregator protocol optimizes for yield across a series of stable-assets (swapping via 0x) in the USDC and DAI pools, and Ethereum in the ETH pool. The pools earn users' yield by lending and farming across various DeFi protocols such as Compound Finance, dYdX, KeeperDAO, mStable, yEarn, Aave, and now Fuse Pools! We are actively expanding our strategy set to focus on more sustainable yields off of the chain. We expect lending to compose the minority of the pool's allocation once mass protocol expansion has begun. In the coming months, we will be exploring using Fuse strategies exclusively in the yield earning pools. This will allow for a more controlled environment as well as reduce smart contract risk by integrating external strategies. 

## Rari Capital USDC Pool

The Rari Capital Stable Pool allows users to deposit ETH or any ERC20 token to mint the native token, $RSPT. All ERC20s will be swapped to USDC (meaning there is slippage for all deposits except USDC). Once a token holder, the Rari protocol is working autonomously to deliver the highest yield on your USDC.

- **Lending USDC on [Compound Finance](https://compound.finance/)**
- **Lending USDC on [Aave](https://aave.com/)**
- **Lending USDC on [dYdX](https://dydx.exchange/)**
- **Providing liquidity to [mStable](https://mstable.org/)**

## Rari Capital DAI Pool

The Rari Capital DAI Pool allows users to deposit DAI or any ERC20 token to mint the native token, $RDPT. All ERC20s will be swapped to DAI (meaning there is slippage for all deposits except DAI). Once a token holder, the Rari Capital protocol will work autonomously to deliver the highest yield on your DAI.

- **Lending DAI on [Compound Finance](https://compound.finance/)**
- **Lending DAI on [Aave](https://aave.com/)**
- **Lending DAI on [dYdX](https://dydx.exchange/)**
- **Providing liquidity to [mStable](https://mstable.org/)**



## Rari Capital ETH Pool

The Rari Capital ETH Pool allows Rari users to deposit ETH or any ERC20 tokens to immediately start earning interest through the $REPT. While maintaining exposure to the price of ETH, users are earning yield through various means like:

- **Earning yield from liquidations (facilitated by [KeeperDAO](https://app.keeperdao.com/))**
- **Lending DAI on [Compound Finance](https://compound.finance/)**
- **Lending DAI on [Aave](https://aave.com/)**
- **Lending DAI on [dYdX](https://dydx.exchange/)**
- **Providing liquidity to [mStable](https://mstable.org/)**

If you are interested in learning more about each of the strategies and our framework for identifying which ones to implement, check it out [here](https://www.notion.so/Rari-Strategy-Assessment-Framework-2d1edffcf80f4750973f6e90e97b70a4).

## How to Deposit

**Step 1: Connect a wallet**

The Rari Protocol currently supports MetaMask, WalletConnect, Portis, Torus, Formatic, and Authereum. If you do not have a wallet, we recommend you refer to [this guide](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1) for MetaMask. Users can connect their wallets by selecting the "Connect Wallet" button on the Rari Capital App landing page at [v2.rari.capital](https://v2.rari.capital/).

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

The Rari Protocol currently supports MetaMask, WalletConnect, Portis, Torus, Formatic, and Authereum. Users can connect their wallets by selecting the "Connect Wallet" button on the Rari Capital App landing page at [app.rari.capital](http://app.rari.capital/). This allows users to view and interact with their deposited funds.

**Step 2: Choose a pool**

Once connected, users can view the multi-pool dashboard. Users may then withdraw from the pool(s) of their choosing by selecting the transaction button (the button with two arrows). This will prompt a new window.

**Step 3: Withdraw into a supported asset**

After choosing a pool and selecting the transaction button, users can then toggle the withdrawal function with the gear button in the top right. Then, select any of the supported crypto-assets and withdraw from the pool. This can be done by selecting the asset menu, choosing your desired asset, the amount, and by pressing the "Withdraw" button.

It is worth noting that it will cost less gas to withdraw in any tokens currently active within the protocol, as it will require fewer swaps. Conversely, this means that it will require more gas for withdrawals in assets not currently active.

## Tranches

The Rari Capital DAI pool is integrated within Saffron Finance, a protocol pioneering in risk mitigation and steady interest rates across DeFi. Users who deposit into these tranches receive guaranted rates as well as SFI (Saffron's token) emmissions as added incentives.



## Pool2

The Rari Capital DAO is incentizing decentralized exchange liquidity of RGT on Sushiswap. Once you stake both RGT and ETH on Sushiswap in the RGT-ETH pool, you can stake your SLP tokens on the Pool2 dashboard to earn RGT rewards. 

## Fuse

Fuse is an open interest rate protocol that allows DeFi users to lend and borrow ERC20 tokens. The Fuse platform enables anyone to instantly create their own lending and borrowing pool. Each Fuse pool is essentially a fork of the Compound Finance protocol. This product allows users to choose all of their custom parameters and isolate risk, rater than using a large lending and borrowing pool on other platforms. 

## 

