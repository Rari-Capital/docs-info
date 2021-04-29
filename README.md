# @rari-capital/docs
Rari Capital Documentation

**What is Rari Capital?** 

*Rari Capital is an easy interface to earn yield and borrow crypto assets within DeFi.*

**Introduction **

## Overview

In our opinion, it is inherently clear that the majority of people turn to DeFi with one goal in mind: to compound their wealth. Rari Capital began by delivering on this mission in a safe way that enables individuals to autonomously and easily earn yield on their stable assets in a lossless manner. From there, it transformed into a solution that leveraged yield farming strategies to increase the returns offered to users. Now, Rari Capital is an autonomous solution to earn yield within any risk appetite.

The liquidity ending up in Rari Capital empowers the protocol to work in an expansionary way: providing other projects (L1, L2, DeFi projects) with liquidity and even terraforming itself into a base DeFi layer. Rari Capital aims to attract all of DeFi’s liquidity, deploying it in the most capital efficient and globally beneficial manner. Being aware of the negative impacts of Ethereum (gas, slowness, scalability, etc.), we are fully prepared to transverse capital between chains through Rari Capital-made bridges.

## How does Rari Capital Earn Yield?

Currently, the yield aggregator product optimizes for yield across a series of stable-assets (swapping via 0x) in the stable and yield pools and Ethereum in the ETH pool. It earns yield by lending and farming across various DeFi protocols like Compound, dYdX, KeeperDAO, mStable, yEarn, and Aave. We are actively expanding our strategy set to focus on more sustainable yields off of the chain. We expect lending to compose the minority of the pool's allocation once mass protocol expansion has begun.

## Overview

The first pool is the Stable Pool ($RSPT) which interacts safely with exclusively audited contracts. The next pool is the yield pool ($RYPT) that will maximize for yield at all costs, whether it is leverage or unaudited contracts--the yield pool will always have the highest returns. Lastly, the ETH ($REPT) fund will work to deliver safe and stable returns with ETH as the base asset.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/feca2e30-31e9-48c3-9992-e82f7203481f/pools.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/feca2e30-31e9-48c3-9992-e82f7203481f/pools.png)

## Rari Capital Stable Pool

The Rari Capital Stable Pool allows users to deposit ETH or any ERC20 token to mint the native token, $RSPT. All ERC20s will be swapped to USDC (meaning there is slippage for all deposits except USDC). Once a token holder, the Rari protocol is working autonomously to deliver the highest yield on your USDC.

- **Lending USDC on Compound**
- **Lending USDC on Aave**
- **Lending USDC on dYdX**
- **Providing liquidity to mStable**

## Rari Capital Yield Pool

The Rari Capital Yield Pool provides users with the opportunity to earn a high yield by depositing ETH or any ERC20 token to mint the native token, $RYPT. Once a token holder, the Rari protocol is algorithmically finding you the highest yield through the "risky" strategies. It will automatically rebalance between stablecoins to further achieve a higher yield. Some of the strategies include:

- **Lending Dai, USDC and USDT on Compound**
- **Lending Dai, USDC, TUSD, USDT, sUSD and BUSD on Aave**
- **Lending Dai, USDC on dYdX**
- **Providing liquidity to mStable**
- Providing liquidity on dForce via Yearn and switching between vaults (WIP)

## Rari Capital ETH Pool

The Rari Capital ETH Pool allows Rari users to deposit ETH or any ERC20 tokens to immediately start earning interest through the $REPT. While maintaining exposure to the price of ETH, users are earning yield through various means like:

- **Earning yield from liquidations (facilitated by KeeperDAO)**
- **Lending ETH on Compound**
- **Lending ETH on Aave**
- **Lending ETH on dYdX**
- **Lending ETH on Alpha Finance**

If you are interested in learning more about each of the strategies and our framework for identifying which ones to implement, check it out [here](https://www.notion.so/Rari-Strategy-Assessment-Framework-2d1edffcf80f4750973f6e90e97b70a4).

## Overview

To use the Rari Protocol, users can deposit funds into one of three pools. Each pool has specific strategies to capture yield, however, the process to deposit is universal across the protocol. This is a guide to explain how to deposit funds into the protocol and withdraw from pools. Before depositing, make sure to research the individual pools you will be interacting with.

## How to Deposit

**Step 1: Connect a wallet**

The Rari Protocol currently supports MetaMask, WalletConnect, Portis, Torus, Formatic, and Authereum. If you do not have a wallet, we recommend you refer to [this guide](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1) for MetaMask.  Users can connect their wallets by selecting the "Connect Wallet" button on the Rari Capital App landing page at [v2.rari.capital](https://v2.rari.capital).

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

The Rari Protocol currently supports MetaMask, WalletConnect, Portis, Torus, Formatic, and Authereum. Users can connect their wallets by selecting the "Connect Wallet" button on the Rari Capital App landing page at [app.rari.capital](http://app.rari.capital). This allows users to view and interact with their deposited funds.

**Step 2: Choose a pool**

Once connected, users can view the multi-pool dashboard. Users may then withdraw from the pool(s) of their choosing by selecting the transaction button (the button with two arrows). This will prompt a new window.

**Step 3: Withdraw into a supported asset**

After choosing a pool and selecting the transaction button, users can then toggle the withdrawal function with the gear button in the top right. Then, select any of the supported crypto-assets and withdraw from the pool. This can be done by selecting the asset menu, choosing your desired asset, the amount, and by pressing the "Withdraw" button.

It is worth noting that it will cost less gas to withdraw in any tokens currently active within the protocol, as it will require fewer swaps. Conversely, this means that it will require more gas for withdrawals in assets not currently active.

## What is APY?

Annual percentage yield represents the rate of return for your interest accrued. Unlike annual percentage rate (APR), APY stresses the idea of compound interest that you are earning in DeFi. To calculate your daily ROI, divide APY by 365 for the daily rate.

## APY Within Rari Capital

Since the APY is dependent on the rates provided by the underlying protocol, there could be days where the APY is significantly higher than other days.

An example of APY being so high one day could be in response to strong demand for stablecoins being borrowed to gain more exposure to ETH. This is relevant to most of the Rari Capital integrations like Compound, Aave, and dYdX as these are all money markets. On the other hand, mStable provides its APY through the minting of their own native currency which is then deposited into the SAVE contract to maintain price peg and create efficiency within the liquidity market. The combination of platform fees and interest being earned through the SAVE contract allow for one of the highest APY's in DeFi. If this is currently yieding higher than other Rari Capital integrations, then the majority of the pool's allocation will be placed into mStable to allow our users to take advantage of these high rates.

## Summary

Each protocol that Rari Capital has integrated will provide users with a fluctuating APY. This rate is subject to change per block as the rebalancer is constantly searching for the highest net yield and will rebalance the pools to cater to the highest APY. The more protocols that Rari Capital integrates, the higher the expected APY.



**Support**

## General

### Liquidity mining program

Our $RGT public liquidity mining program is automatic for all deposits into Rari Capital starting at 9AM PT on October 20th. Deposits made ahead of time are instantly eligible once the program starts. Earned $RGT is dependent on the user's balance relative to total TVL.

### Accepted assets

ETH and all major ERC20 tokens are accepted into the Rari interest-bearing pools. In the safe stable fund, your deposit will be converted into the current allocations of the fund. In the ETH fund, you will maintain exposure to the price of ETH.

### What is the Rari Capital team’s responsibility?

The Rari Capital team is responsible for being one of the groups that maintains the Rari Protocol. With $RGT rewards distributed monthly over 2 years, the Rari Team's compensation is directly tied to protocol performance, aligning incentives to support users.

### Who is on the Rari Capital team?

We have an extremely strong team with backgrounds from MyCrypto, Netflix, Salesforce and various other notable startups. You can view our current team list [here](https://www.linkedin.com/company/rari-capital).

## Feedback & Support

The Rari Capital team is always available to help you on our Telegram or by email:

- [Discord]([http://discord.gg/mtb6W57Ap6](https://t.co/nGY7gkihfQ?amp=1))
- Email: help@rari.capital

If you have feedback or think you've found a bug, please post it here:

- [Github](https://github.com/Rari-Capital)
- [Forums](https://forums.rari.capital/)

### **Aave**

Aave is an open-sourced money market platform on the Ethereum blockchain. Users can deposit assets as collateral for borrowing of another asset. This is an interest bearing protocol, that Rari Capital has integrated!

### **Address (Wallet)**

Digital wallet with address (0x........) allows you to receive transitions on the blockchain. The address is a character string that is used as your "personal id/identification"

### APY

Annual percentage yield represents the rate of return for your interest accrued. Unlike annual percentage rate (APR), APY stresses the idea of compound interest that you are earning in DeFi. To calculate your daily ROI, divide APY by 365 for the daily rate.

### Arbitrage

Oftentimes in inefficient markets, you have many opportunities to profit off of imbalances. This can happen with asset prices being different depending on the exchange or switching between interest rates.

### Audit

Security and smart contract risk is the most important aspect of DeFi. All protocols should have their smart contract audited, which allows a third-party service into the codebase to check for potential bugs or vulnerabilities that may have not been noticed by the engineering team.

### Automated Market Maker (AMM)

Market makers play a huge role in DeFi, as they play the roles of ensuring liquidity on both the buyer and seller’s end. An automated market maker is a smart contract that creates liquidity pools of specific ERC20 tokens which are traded algorithmically rather than individual trading. Liquidity providers (LP) earn fees based on their liquidity provisions in creating market efficiency.

### **Cold Wallets**

This is used for long-term storage of crypto assets. Examples of this include hardware wallets and paper wallets.

### Collateralization

Borrowing a digital asset to gain exposure on other assets.

### **Compound Finance**

Similar to Aave, Compound Finance is a money market protocol that bears interest to its users. Rari Capital has this protocol integrated!

### **Cryptocurrency**

Cryptocurrencies are also known as digital currencies. These are algorithmic based currencies that live on the blockchain and available to send and receive.

### DAO

Decentralized autonomous organization. Full control of the platform lies in the hands of the governance token holders.

### **dApp**

The user interface that interacts with the web3 smart contracts. Decentralized application that enables users to easily use the underlying protocol(s).

### DeFi

Decentralized Finance is a series of Smart Contracts on the blockchain that hosts financial primitives in a non-custodial manner.

### Derivative

Investment figure based off of an underlying value.

### DEX

Decentralized exchange that puts the power of trading back into the users' hands. DEXes do not require a middleman and use Smart Contracts to process trades between parties.

### **Digital Signature**

Confirmation of a transaction on the blockchain.

### **Distributed Ledger**

Shared consensus of data across the blockchain network. There is no central administrator that controls the data and transactions.

### **dYdX**

Open trading platform for crypto assets. Allows users to lend/borrow assets as well as gain exposure through leveraged trading similar to a normal margin trading account.

### ERC-20

Token standard built on top of the Ethereum blockchain.

### **ERC721**

Non-fungible tokens. Usually in the form of a collectible on the blockchain like art or cards.

### Ethereum

Ethereum is the blockchain that Smart Contracts and DeFi run on. The native currency is ETH or ETHER.

### **Etherscan**

Website that allows you to explore and search the Ethereum blockchain for every piece of data you may want (transactions, addresses, tokens, prices, etc).

### **ETH**

The native currency behind the Ethereum blockchain. Used to pay gas (transaction fee costs).

### **EVM**

Blockchain-based software program that allows developers to interact with the Ethereum network.

### Fiat

Government issued currency.

### Gas Fees

Rewards paid to validators that confirm each transaction on the blockchain. Paid in ETH.

### Governance (and Token)

Token issued by projects used to grow the platform through voting power.

### **GWEI**

Unit that measures the value of gas fees on the Ethereum blockchain.

### **Hot Wallets**

Wallets that are used for daily purposes. Examples include: exchanges, mobile wallets, and desktop wallets.

### Impermanent Loss

When providing liquidity to markets that are still not efficient, liquidity providers may not receive their initial equivalent value upon withdraw due to volatility across token prices and arbitragers.

### **IOU Token**

Token that represents your share in the pool.

### Lending Aggregator

Algorithmic based system that maximizes your yield across lending protocols.

### **Liquidation**

When trading on leverage, you supply the collateral to support your borrowed position. If the price of the asset at hand falls below the price determined by your collateralization ratio, then your position is liquidated. This means that someone bought you out of your position and most likely took a fee depending on the platform.

### **Liquidity Providing**

Providing liquidity to protocols to create more market efficiency. Liquidity providers are rewarded for their through fees.

### **Mainnet**

The official deployed version of the live blockchain that developers can interact with.

### **mStable**

mStable brings together stablecoins with high yield earning strategies.

### Multisig Wallet

One of the most secure wallets you can create. Requires at least two keys to sign off on a transaction.

### **Node**

Computer connected to the blockchain that follows rules and shares information with other computers on the network.

### **Optimize**

Autonomously searching for the highest ROI.

### **Private Key**

Lock and key scenario for your wallet. Private key is your secure password that needs to be kept in a safe location and not shared with anyone.

### **Protocol**

Suite of smart contracts that allow users to interact with the application.

### **Public Key**

This is your public address that you can share and is used to receive assets.

### Rebalance

The process of algorithmically finding the best yield for users through constant adjustments of the allocation.

### **Relayer**

Products that provide direct access to an underlying protocol.

### **Robo-Advisor**

Algorithmic based system that actively returns the highest net value profit.

### ROI

Return on Investment.

### **Scalability**

The more power available, the faster the blockchain will run.

### Smart Contract

A smart contract is code on the Ethereum blockchain that controls the exchange of value in a trustless manner.

### **Solidity**

The coding language that is used to write Smart Contracts.

### Stablecoin

1:1 USD equivalent in digital form on the blockchain. Some maintain a $1 US peg, while some suffer from volatility like DAI.

### **Transaction Block**

Basket of data that flows through the blockchain.

### TVL

TVL stands for "total value locked" within a protocol; the amount of assets a protocol has.

### **yEarn**

Suite of DeFi tools using smart contracts to provide financial independence to users.

### **51% Attack**

Single entity or organization taking control of the blockchain voting power through their monopoly of mining power.

**Guides**

## Overview

To use the Rari Protocol, users can deposit funds into one of three pools. Each pool has specific strategies to capture yield, however, the process to deposit is universal across the protocol. This is a guide to explain how to deposit funds into the protocol and withdraw from pools. Before depositing, make sure to research the individual pools you will be interacting with.

## How to Deposit

**Step 1: Connect a wallet**

The Rari Protocol currently supports MetaMask, WalletConnect, Portis, Torus, Formatic, and Authereum. If you do not have a wallet, we recommend you refer to [this guide](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1) for MetaMask.  Users can connect their wallets by selecting the "Connect Wallet" button on the Rari Capital App landing page at [v2.rari.capital](https://v2.rari.capital).

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

The Rari Protocol currently supports MetaMask, WalletConnect, Portis, Torus, Formatic, and Authereum. Users can connect their wallets by selecting the "Connect Wallet" button on the Rari Capital App landing page at [app.rari.capital](http://app.rari.capital). This allows users to view and interact with their deposited funds.

**Step 2: Choose a pool**

Once connected, users can view the multi-pool dashboard. Users may then withdraw from the pool(s) of their choosing by selecting the transaction button (the button with two arrows). This will prompt a new window.

**Step 3: Withdraw into a supported asset**

After choosing a pool and selecting the transaction button, users can then toggle the withdrawal function with the gear button in the top right. Then, select any of the supported crypto-assets and withdraw from the pool. This can be done by selecting the asset menu, choosing your desired asset, the amount, and by pressing the "Withdraw" button.

It is worth noting that it will cost less gas to withdraw in any tokens currently active within the protocol, as it will require fewer swaps. Conversely, this means that it will require more gas for withdrawals in assets not currently active.

