# Risks

**Capital Allocation Risks**

When investing in anything, there are risks, and for investing in Rari Capital, there are a few sources of risk with varying levels of severity: underlying risk, the “lego” risk of our integrated protocols, customer side risk, and risk within the Rari product.

https://www.notion.so/rari/Capital-Allocation-Risks-f4bccf324a594f46b849e6358e0a2464#296741f6d91a463fa51430248666d563

### **Underlying Risk**

The Ethereum Virtual Machine, or EVM, is what powers everything on the Ethereum blockchain. As Rari is currently on the said blockchain, it has an innate risk tied to the EVM. If the EVM fails or breaks, Rari will break. However, this is extremely unlikely as such a bug could devastate the entire Ethereum ecosystem.

### **Integrated Protocols**

Since Rari has several protocols (currently including 0x, dYdX, and Compound) integrated to maximize profits, we carry the “lego” risk of these protocols. For example, an integrated protocol could lose our funds from a bug or hack; however, along with the failure of the EVM, this is one of the more severe and unlikely risks. There are varying levels of severity with this as well, as an integrated lending protocol may fail to generate interest despite appearing as the ideal protocol, but wouldn’t result in the loss of consumer funds.

### **Customer Side**

In terms of consumer side risk, there is always the possibility of a bug or hack of a user’s browser or OS which could cause a loss of funds, or, more mildly, it may temporarily break withdrawals.

### **Rari Capital Yield Aggregator**

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

### **Rari Capital Yield Aggregator Strategy Assessment Framework **

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