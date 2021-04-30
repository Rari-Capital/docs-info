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

**How to Earn $RGT**

## Overview

$RGT is the native governance token behind the Rari Capital Protocol. It can be mined through the Rari portal during the distribution schedule or purchased from several exchanges listed below.

## Public Liquidity Mining Program - Concluded

Any user can participate in the $RGT liquidity mining program and earn $RGT distributions. To do so, one must be an active depositor in any of our three pools; the Rari Stable Pool, the Rari Yield Pool, or the Rari ETH Pool. Rewards will be distributed proportionally to the amount of deposits that a user has within the protocol across all pools compared to the total deposits within the protocol across all pools.

For example, if a user has $400,000 in the protocol and the protocol has $4,000,000 and 300,000 $RGT are being distributed on that day and the user held their money in for the entire day, they would earn 10% of the distribution: 30,000 $RGT tokens.

### Tutorial

**Step 1: Connect a wallet**

The Rari Protocol currently supports MetaMask, WalletConnect, Portis, Torus, Formatic, and Authereum. If you do not have a wallet, we recommend you refer to [this guide](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1) for MetaMask.  Users can connect their wallets by selecting the "Connect Wallet" button on the Rari Capital App landing page at [app.rari.capital](http://app.rari.capital).

**Step 2: Deposit into a pool**

Once connected, users can view the multi-pool dashboard, equipped with a comparative graph of the returns between each fund. Users may then deposit into the pool(s) of their choosing by selecting the transaction button (the button with two arrows). This will prompt the deposit window, where users can select a support token of their choice to deposit.

**Step 3: Track your distributions**

After depositing, any funds within the Rari Protocol during the liquidity mining program will qualify for $RGT distributions. You can track and claim your RGT by selecting the "Claim RGT" button in the top right of the dashboard.

**How to make a governance proposal**

## Template

When making a proposal, begin by gauging interest for your idea from the Rari Capital community on our public forums, Discord, or Twitter.

*Please follow the template below for all forum posts:*

**Summary:** A simple description of the proposal's end result and desired change; should be no more than a few succinct sentences.

- *Background:**Provide context to the problem your proposal wishes to address or to the area of the protocol you intend to improve.
- *Abstract:**Clearly describe how the proposal wishes to change/improve the protocol.
- *Motivation:**Explain **why** this proposal is necessary or useful for the protocol.

**For:** Illustrate in one or two sentences what this position supports

**Against:** Illustrate in one or two sentences what this position supports

## Rari Capital DAO Improvement Proposals

To post and formulate a governance proposal for the Rari Capital DAO, users must follow a specific template and follow all directions on the according links:

1. Start the conversation on Discord: https://discord.gg/mtb6W57Ap6
2. Post final proposal to "Rari Capital DAO Improvement Proposals": https://forums.rari.capital/t/rari-capital-dao-improvement-proposals and discuss there for 2 days
3. Post to Rari Capital DAO Snapshot page to cast the final vote: https://vote.rari.capital/#/ and leave voting open for 2 days

## Rari Capital DAO Fuse Pool Proposals

To post and formulate a governance proposal for the Rari Capital DAO Fuse Pools, users must follow a specific template and follow all directions on the according links:

1. Start the conversation on Discord: https://discord.gg/mtb6W57Ap6
2. Post final proposal to "Rari Capital DAO Improvement Proposals": https://forums.rari.capital/t/rari-capital-dao-fuse-pool-proposals and discuss there for 2 days
3. Post to Rari Capital DAO Snapshot page to cast the final vote: https://vote.rari.capital/#/ and leave voting open for 2 days

**What is $RGT?**

## Overview

The $RGT is the Rari Governance Token. It can be used to **propose** and **vote** proposals made by any token-holding community members. Users can soon also **delegate** their voting power to another address to pool voting power. There has been no sale of $RGT from the DAO, all of it was liquidity mined or given to the founding team as part of our fair launch.

## Features

### Governance (live)

The $RGT token will then be used to formalize a DAO that is responsible for maintaining the Rari Protocol through the following processes:

- Creating proposals that will better the Rari Protocol or products in the Rari family
- Voting on proposals that will maintain and improve the Rari Protocol or products in the Rari family

Every aspect of Rari Capital will be controlled by the governance mechanism. The governance also controls the Rari Treasury. Token holders are expected to vote with the protocols future in mind. The team is actively pursuing a transition to on-chain governance and removing the need to be reliant on a multi-sig to initiate changes.

It is only through governance that new tokens can be minted, created or liquidated. The only proposal that comes close to this is [RIP-1](https://vote.rari.capital/#/rari/proposal/QmU3334PXSAGd3kiSZo4FZkKPpNL5qvHiNwRZVTKkcCvv9) which is yet to be implemented.



## Overview

10,000,000 $RGT will be created natively on the Ethereum blockchain. 87.5% of these tokens (8,750,000 $RGT), will be distributed through our public liquidity mining program while the remaining 12.5% is dedicated to compensation for the Rari Team. The liquidity mining program will be conducted over 60 days following a dynamic schedule as shown below.

## Breakdown

- **Total Supply: 10,000,000**
- **Public Liquidity Mining Rewards: 87.5% over 60 days**
- **Rari Team Rewards: 12.5% over 2 years**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c84617a-5680-44b2-8bc2-e549c4e8e905/Screenshot_(131).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c84617a-5680-44b2-8bc2-e549c4e8e905/Screenshot_(131).png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20f56988-fa02-4db5-965a-8ad383af6783/Screen_Shot_2020-10-19_at_10.46.27_AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20f56988-fa02-4db5-965a-8ad383af6783/Screen_Shot_2020-10-19_at_10.46.27_AM.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52901abf-2101-4202-95b7-6859677a6cac/Screen_Shot_2020-10-19_at_10.46.43_AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52901abf-2101-4202-95b7-6859677a6cac/Screen_Shot_2020-10-19_at_10.46.43_AM.png)

### Public Liquidity Mining Rewards

The liquidity mining program is built to enable decentralization and ensure alignment between the protocol development and the users. Through this 60-day program, 87.5% of the total supply of $RGT will be proportionally distributed to Rari protocol users. This distribution occurs proportionally across all deposits for all pools that a user has within the protocol. The pools that are earning include: Rari ETH Pool, Rari Stable Pool and Rari Yield Pool.

For example, if a user has $400,000 in the protocol and the protocol has $4,000,000 and 300,000 $RGT are being distributed on that day and the user held their money for the entire day, they would earn 10% of the distribution: 30,000 $RGT tokens. To view our spreadsheet for the day-by-day breakdown of our RGT, click [here](https://docs.google.com/spreadsheets/d/1qXDQB7OgGbWgvcUZv9AbNFsKdViPjlyQiQ8FqcQTUlU/edit?usp=sharing). Distributions began on Oct 20, 2020 and will end on Dec 19, 2020.

Users who withdrew the $RGT during the distribution period were faced a proportional burn based on when they sold the asset. The burn could be found [here](https://docs.google.com/spreadsheets/d/1CVD4VmYWtAg3sXdlQYpZAu7nhSAe2ATmOLQRFjMwBHs/edit#gid=0).

### Team Rewards

12.5% of the token supply will be used to reward the Rari Team for their work on the protocol through the $RGT token. This 12.5% will be using the Rari Vesting Schedule over a 2 year plan. The $RGT tokens are a tool to ensure long-term alignment between the team and the project. Read more about the vesting plan [here](https://medium.com/rari-capital/an-updated-take-on-vesting-8b3aa8c3a902).

### Fundraising

The Rari Capital team and protocol have never pursued fundraising. There has been no sale of $RGT. $RGT is a valueless asset that functions for the sole purpose of governance.

### RIP-1

The community voted to initiate RIP-1 which continues token emissions with an additional 10M $RGT over a 2.5 year period. The schedule can be found here: https://docs.google.com/spreadsheets/d/1tDHhf2oCUCJKUNrPJgFerEGePIJgVlfvjmtmOlhDf7I/edit#gid=0. RIP-1 has not yet been implemented but is under audit review to be activated shortly.

**Risks**

## Overview

When investing in anything, there are risks, and for investing in Rari Capital, there are a few sources of risk with varying levels of severity: underlying risk, the “lego” risk of our integrated protocols, customer side risk, and risk within the Rari product.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8b751b7d-630c-4bf5-af52-b7a028689644/RariCapitalRiskFinal.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8b751b7d-630c-4bf5-af52-b7a028689644/RariCapitalRiskFinal.jpg)

### **Underlying Risk**

The Ethereum Virtual Machine, or EVM, is what powers everything on the Ethereum blockchain. As Rari is currently on the said blockchain, it has an innate risk tied to the EVM. If the EVM fails or breaks, Rari will break. However, this is extremely unlikely as such a bug could devastate the entire Ethereum ecosystem.

### **Integrated Protocols**

Since Rari has several protocols (currently including 0x, dYdX, and Compound) integrated to maximize profits, we carry the “lego” risk of these protocols. For example, an integrated protocol could lose our funds from a bug or hack; however, along with the failure of the EVM, this is one of the more severe and unlikely risks. There are varying levels of severity with this as well, as an integrated lending protocol may fail to generate interest despite appearing as the ideal protocol, but wouldn’t result in the loss of consumer funds.

### **Customer Side**

In terms of consumer side risk, there is always the possibility of a bug or hack of a user’s browser or OS which could cause a loss of funds, or, more mildly, it may temporarily break withdrawals.

### **Rari Fund**

There are 3 sources of risk within the product itself: the frontend, the rebalancer, and the smart contracts.

### **Frontend**

In the frontend, breaches and bugs can occur either in code, domain, or hosting, with the most extreme cases involving a loss of customer funds, but lesser incidents resulting in withdrawals temporarily breaking, without a loss of funds.

### **Rebalancer**

The rebalancer has a risk of a bug or hack of code/hosting or general theft of a balancer’s private key that could cause stablecoins to be traded via 0x at poor prices. However, the more moderate situations would be if a bug caused funds to be allocated incorrectly.

### **Contracts**

The risk for our contracts lies in the possibility of a standard bug or hack of our Solidity code as well as the possibility of a hacker compromising 2 of the 3 keys in the Rari multisig federation and “upgrading” a contract to code that steals customer funds. A smaller source of risk is the use of the “experimental” feature of Solidity ABIEncoderv2 where we are using Solidity version 0.5.7. The known bugs are fixed and the feature is used widely, but it is still technically “experimental.”

### Divergence

In our **yield pool**, there is divergence risk, which occurs when the pool's stablecoins move from their peg (this occurs more often and at higher severity with synthetic assets, such as DAI and sUSD but still happens with centralized coins like USDC and USDT). These assets can either rise or fall in price relative to USD, leading to very small increases and decreases in the total pool dollar amount locked. During these events, user balances experience slight fluctuations, both positive and negative, and have the opportunity to see small losses during the negative fluctuations, as the total price of the assets in the pool has dropped.

To counter this, it is advised to not deposit and withdraw in quick succession, as you are more at risk to see divergence, whereas long-term deposits will notice negligible differences, as returns will outweigh any possible price fluctuations.

**Learn more here:** https://medium.com/rari-capital/raris-divergence-risk-12ec11609af7

### **Summary**

To summarize, investing in Rari Capital has a wide spectrum of degrees of risk, with the more traumatic cases being the least likely, spanning from the EVM breaking down or an incorporated protocol falling apart all the way to a browser bug temporarily pausing a transaction. We hope this has given you a greater understanding of the risk breakdown for investing in Rari Capital.

**Rari Capital Strategy Assessment Framework****

## Overview

To admit new strategies and protocols into the Rari Capital pools, such as the stable pool and yield pool, each strategy must be evaluated for risk. This evaluation occurs to help determine which pool a specific strategy belongs in and if the strategy is suitable for the protocol.  To conduct this analysis, we have created a strategy assessment framework to compare strategy risks at a glance, while offering a structure to facilitate thorough appraisal.

First, there are brackets for strategies to be sorted into. Currently, a strategy can fall into the lending, yield farming, or automated market maker categories. It is worth noting that as DeFi evolves, this framework will adapt and establish new categories for newly innovated strategies. Furthermore, within each category, there is a specific risk framework catered to each strategy style, which is combined to synthesize an overall strategy score.

Strategy risk scores can then be presented to the community in governance proposals to add new strategies to the Rari Protocol.

We will be publishing a public form for community members to conduct their own checks on strategies in the future. Shown below is a brief outline of the covered areas, inspired by [DeFi Score's](https://defiscore.io/) metrics.

## Lending

This is the risk assessment framework for lending strategies. Each section has a designated score allocation and the overall score is calculated from their distributions.

### Smart Contract Risk

- Audit
- Bug Bounty
- Contract History

### Financial Risk

- Collateral Ratio
- Liquidity
- Asset Risk

### Centralization Risk

- Protocol Administration
- Oracles
- Team Background

## Yield Aggregating

This is the risk assessment framework for yield aggregating strategies. Each section has a designated score allocation and the overall score is calculated from their distributions.

### Smart Contract Risk

- Audit
- Bug Bounty
- Contract History

### Financial Risk

- Liquidity
- Asset Risk

### Centralization Risk

- Protocol Administration
- Team Background

### Lego Risk

- Unique Alpha vs. Integrations

## Automated Market Making

This is the risk assessment framework for AMM strategies. Each section has a designated score allocation and the overall score is calculated from their distributions.

### Smart Contract Risk

- Audit
- Bug Bounty
- Contract History

### Financial Risk

- Liquidity
- Impermanent Loss
- Asset Risk

### Centralization Risk

- Protocol Administration
- Team Background

**Safeguarded Launch**

Rari Capital begun its stealth model in April 2020. By June 2020, the Rari protocol had undergone a security review by Quantstamp and reviews by other 3rd parties, but we knew that wasn't enough. In July, we launched Rari V1, which optimized lending across two major protocols: Compound Finance and dYdX, as well as rebalancing between stablecoins using 0x. This version had a deposit limit of $350 to ensure user security. Some of the other ways that we take security seriously include:

- Assessing each underlying protocol prior to integration (link to assessment framework [here](https://www.notion.so/Rari-Strategy-Assessment-Framework-2d1edffcf80f4750973f6e90e97b70a4))
- Deposit limit scaling up over time
- Transparent posts
- Open sourced
- Community focused
- Veteran team in crypto and DeFi
- Audits

Over the past two months, we have gradually increased our deposit limit in response to our successful audits and the total supply in the protocol.

We are now extremely happy to announce that we have finally removed our deposit limit and our audit reports will be published soon. Please remember that not all risks are avoidable in DeFi and there are always inherent risks. Please take caution when depositing into protocols. Only deposit what you are willing to lose.



**Ecosystem**

**Fees**

## Overview

The Rari Capital robo-advisor has a few set of fees for the protocol, including a performance fee and a withdrawal fee. There is also a time-based transfer fee for early $RGT transfers.

### Performance Fee & Withdrawal Fee

These fees power Rari's revenue and are generated from the Rari protocol on the following occasions:

**Stable Pool: 17.5% profits**

**Yield Pool: 12.5% profits + 0.5% withdrawal**

(The withdrawal fee is required to prevent arbitrage within this pool since it is composed of various stablecoins which may have minor price fluctuations)

**ETH Pool: 17.5% of profits**

RIP-3 updated our fee structure to be as seen above.

### Where Do the Fees Go?

These fees are then entered as Protocol Revenues which you can read more about [here](https://www.notion.so/Protocol-Revenues-7154f4fa138045fc9b04f08ee906ce17).

**Rari Capital Governance**

## Overview

The Rari Governance empowers anybody to be able to dictate the future of the Rari Protocol. The $RGT, or Rari Governance Token, is able to control every aspect of the protocol, treasury and charity. Governance has been designed to be as seamless as possible and ensure that it is easy for everyone to participate.

## How to Participate

The only requirement to participate is that you have to own $RGT. This will be distributed to all users across the 60-day distribution schedule and will be available for purchase on exchanges. Then, using your $RGT, you will be able to vote on community drafted proposals or draft your own proposals to govern the Rari Protocol and ecosystem. Link: [how to create a proposal](https://www.notion.so/How-to-Make-a-Governance-Proposal-f11a43bb31de491bbc29a69373a0e687).

## Governance Forums

The Rari Governance Forums can be found here: https://forums.rari.capital/



