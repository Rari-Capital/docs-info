# Yield Aggregator Risk

### Overview

When interacting with any type of DeFi protocol, there are risks, and while using Rari Capital there are a few sources of risk with varying levels of severity: underlying risk, the “lego” risk of our integrated protocols, customer-side risk, and risk within the Rari product.

![RariCapitalRiskFinal](https://user-images.githubusercontent.com/50163445/123555778-b6cf9880-d73c-11eb-9256-696054ee1f16.jpg)

### Underlying Risk

The Ethereum Virtual Machine (or EVM) is what powers everything on the Ethereum blockchain. As Rari is currently on said blockchain, it has an innate risk tied to the EVM. If the EVM fails or breaks, Rari will break. However, this is extremely unlikely as such a bug could devastate the entire Ethereum ecosystem.

### Integrated Protocols

Since Rari has several protocols (currently including 0x, dYdX, and Compound) integrated to maximize profits, we carry the “lego” risk of these protocols. For example, an integrated protocol could lose our funds from a bug or hack; however, along with the failure of the EVM, this is one of the more severe and unlikely risks. There are varying levels of severity with this as well, as an integrated lending protocol may fail to generate interest despite appearing as the ideal protocol, but wouldn’t result in the loss of consumer funds.

### Customer Side

In terms of consumer side risk, there is always the possibility of a bug or hack of a user’s browser or OS which could cause a loss of funds, or, more mildly, it may temporarily break withdrawals.

### Rari Capital Yield Aggregator Pools

There are 3 sources of risk within the product itself: the frontend, the rebalancer, and the smart contracts.

### Frontend

In the frontend, breaches and bugs can occur either in code, domain, or hosting, with the most extreme cases involving a loss of customer funds, but lesser incidents resulting in withdrawals temporarily breaking, without a loss of funds.

### Rebalancer

The rebalancer has a risk of a bug or hack of code/hosting or general theft of a rebalancer’s private key that could cause stablecoins to be traded via 0x at poor prices. However, the more moderate situations would be if a bug caused funds to be allocated incorrectly.

### Contracts

The risk for our contracts lies in the possibility of a standard bug or hack of our Solidity code as well as the possibility of a hacker compromising 2 of the 3 keys in the Rari multisig federation and “upgrading” a contract to code that steals customer funds. A smaller source of risk is the use of the “experimental” feature of Solidity ABIEncoderv2 where we are using Solidity version 0.5.7. The known bugs are fixed and the feature is used widely, but it is still technically “experimental.”

### Summary

To summarize, using Rari Capital has a wide spectrum of degrees of risk, with the more traumatic cases being the least likely, spanning from the EVM breaking down or an incorporated protocol falling apart all the way to a browser bug temporarily pausing a transaction. We hope this has given you a greater understanding of the risk breakdown for interacting with the Rari Capital products.
