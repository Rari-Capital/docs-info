# Introduction

*Rari Capital is a decentralized protocol that consists of products to earn yield and borrow crypto assets within DeFi.* 

## Overview

In our opinion, it is inherently clear that the majority of people turn to DeFi with one goal in mind: to compound their wealth. Rari Capital began by delivering on this mission in a safe way that enables individuals to autonomously and easily earn yield on their stable assets in a lossless manner. From there, it transformed into a solution that leveraged yield farming strategies to increase the returns offered to users. Now, Rari Capital is an autonomous solution to earn yield within any risk appetite.

The liquidity ending up in Rari Capital empowers the protocol to work in an expansionary way: providing other projects (L1, L2, DeFi projects) with liquidity and even terraforming itself into a base DeFi layer. Rari Capital aims to attract all of DeFi’s liquidity, deploying it in the most capital efficient and globally beneficial manner. Being aware of the negative impacts of Ethereum (gas, slowness, scalability, etc.), we are fully prepared to transverse capital between chains through Rari Capital-made bridges.

## How does Rari Capital earn yield?

Currently, the yield aggregator product optimizes for yield across a series of stable-assets (swapping via 0x) in the stable and yield pools and Ethereum in the ETH pool. It earns yield by lending and farming across various DeFi protocols like Compound, dYdX, KeeperDAO, mStable, yEarn, and Aave. We are actively expanding our strategy set to focus on more sustainable yields off of the chain. We expect lending to compose the minority of the pool's allocation once mass protocol expansion has begun.

### Overview

The first pool is the Stable Pool ($RSPT) which interacts safely with exclusively audited contracts. The next pool is the yield pool ($RYPT) that will maximize for yield at all costs, whether it is leverage or unaudited contracts--the yield pool will always have the highest returns. Lastly, the ETH ($REPT) fund will work to deliver safe and stable returns with ETH as the base asset.

https://camo.githubusercontent.com/20dfa311f02a37b19cf95f56fa400fd50272cb05aebdeee7e277a06ad5b79d10/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f7365637572652e6e6f74696f6e2d7374617469632e636f6d2f66656361326533302d333165392d343863332d393939322d6538326637323033343831662f706f6f6c732e706e67

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



## Rari Capital ETH Pool

The Rari Capital ETH Pool allows Rari users to deposit ETH or any ERC20 tokens to immediately start earning interest through the $REPT. While maintaining exposure to the price of ETH, users are earning yield through various means like:

- **Earning yield from liquidations (facilitated by KeeperDAO)**
- **Lending ETH on Compound**
- **Lending ETH on Aave**
- **Lending ETH on dYdX**
- **Lending ETH on Alpha Finance**

If you are interested in learning more about each of the strategies and our framework for identifying which ones to implement, check it out [here](https://www.notion.so/Rari-Strategy-Assessment-Framework-2d1edffcf80f4750973f6e90e97b70a4).

### Overview

To use the Rari Protocol, users can deposit funds into one of three pools. Each pool has specific strategies to capture yield, however, the process to deposit is universal across the protocol. This is a guide to explain how to deposit funds into the protocol and withdraw from pools. Before depositing, make sure to research the individual pools you will be interacting with.

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

### Total Supply & Interest

- **Get total USD supplied (by all users):** `uint256 RariFundManager.getFundBalance()` returns the total balance supplied by users to the Rari Stable Pool (all RSPT holders' funds but not unclaimed fees) in USD (scaled by 1e18).
- **Get total interest accrued (by all users):** `int256 RariFundManager.getInterestAccrued()` returns the total amount of interest accrued (excluding the fees paid on interest) by past and current Rari Stable Pool users (i.e., RSPT holders) in USD (scaled by 1e18).

### Fees

See [this Notion article](https://www.notion.so/Fees-e4689d7b800f485098548dd9e9d0a69f) for the latest fee-related information.

**Performance Fees**

- This fee is liable to change in the future, but the following method returns its current value at any time.
- Get interest fee rate: `uint256 RariFundManager.getInterestFeeRate()` returns the fee rate on interest (proportion of raw interest accrued scaled by 1e18).

**Withdrawal Fees**

- This fee is liable to change in the future, but the following method returns its current value at any time.
- Get withdrawal fee rate: `uint256 RariFundManager.getWithdrawalFeeRate()` returns the withdrawal fee rate (proportion of every withdrawal taken as a service fee scaled by 1e18).

### Raw Allocations

- **Get raw currency/subpool allocations (including unclaimed fees on interest) and prices:** `(string[], uint256[], RariFundController.LiquidityPool[][], uint256[][], uint256[]) RariFundProxy.getRawFundBalancesAndPrices()` returns an array of currency codes, an array of corresponding fund controller contract balances for each currency code, an array of arrays of pool indexes for each currency code, an array of arrays of corresponding balances at each pool index for each currency code, and an array of prices in USD (scaled by 1e18) for each currency code.

### Internal Stablecoin Pricing

- Get stablecoin prices (used internally by contracts): `uint256[] RariFundPriceConsumer.getCurrencyPricesInUsd()` returns an array of prices in USD (scaled by 1e18) for all supported stablecoins to which funds can be allocated (DAI, USDC, USDT, TUSD, BUSD, sUSD, and mUSD, in that order).
  - Use these prices to calculate the value added to a user's USD balance due to a direct deposit and the value subtracted from a user's USD balance due to a direct withdrawal.

## API

### User Balance and Interest

```solidity
uint256 RariFundManager.balanceOf(address account)
```

Returns the total balance in USD (scaled by 1e18) supplied to the Rari Stable Pool by `account`.

- Parameters:
  - `account` (address) - The account whose balance we are calculating.
- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `getRawFundBalance`) potentially modifies the state._

### Deposits

```solidity
bool RariFundManager.isCurrencyAccepted(string currencyCode)
```

Returns a boolean indicating if deposits in `currencyCode` are currently accepted.

- Parameters:
  - `currencyCode` (string): The currency code to check.

```solidity
string[] RariFundManager.getAcceptedCurrencies()
```

Returns an array of currency codes currently accepted for deposits.

---

```solidity
RariFundProxy.deposit(string currencyCode, uint256 amount)
```

**_For the time being, we are no longer subsidizing gas fees._**

Deposits funds to the Rari Stable Pool in exchange for RSPT (with GSN support).

- You may only deposit currencies accepted by the fund (see `RariFundManager.isCurrencyAccepted(string currencyCode)`).
- Please note that you must approve RariFundProxy to transfer at least `amount`.
- Parameters:
  - `currencyCode` (string): The currency code of the token to be deposited.
  - `amount` (uint256): The amount of tokens to be deposited.

```solidity
RariFundManager.deposit(string currencyCode, uint256 amount)
```

Deposits funds to the Rari Stable Pool in exchange for RSPT.

- You may only deposit currencies accepted by the fund (see `RariFundManager.isCurrencyAccepted(string currencyCode)`). However, `RariFundProxy.exchangeAndDeposit` exchanges your funds via 0x and deposits them in one transaction.
- Please note that you must approve RariFundManager to transfer at least `amount`.
- Parameters:
  - `currencyCode` (string): The currency code of the token to be deposited.
  - `amount` (uint256): The amount of tokens to be deposited.

```solidity
RariFundProxy.exchangeAndDeposit(address inputErc20Contract, uint256 inputAmount, string outputCurrencyCode, LibOrder.Order[] orders, bytes[] signatures, uint256 takerAssetFillAmount)
```

Exchanges and deposits funds to the Rari Stable Pool in exchange for RSPT (via 0x).

- You can retrieve order data from the [0x swap API](https://0x.org/docs/api#get-swapv0quote). See the Contract Usage section above, the SDK, or the web client for implementation.
- Please note that you must approve RariFundProxy to transfer at least `inputAmount` unless you are inputting ETH.
- You also must input at least enough ETH to cover the protocol fee (and enough to cover `orders` if you are inputting ETH).
- Parameters:
  - `inputErc20Contract` (address): The ERC20 contract address of the token to be exchanged. Set to address(0) to input ETH.
  - `inputAmount` (uint256): The amount of tokens to be exchanged (including taker fees).
  - `outputCurrencyCode` (string): The currency code of the token to be deposited after exchange.
  - `orders` (LibOrder.Order[]): The limit orders to be filled in ascending order of the price you pay.
  - `signatures` (bytes[]): The signatures for the orders.
  - `takerAssetFillAmount` (uint256): The amount of the taker asset to sell (excluding taker fees).
- Development notes:
  - _We should be able to make this function external and use calldata for all parameters, but [Solidity does not support calldata structs](https://github.com/ethereum/solidity/issues/5479)._

```solidity
RariFundProxy.exchangeAndDeposit(string inputCurrencyCode, uint256 inputAmount, string outputCurrencyCode)
```

Exchanges and deposits funds to the Rari Stable Pool in exchange for RSPT (no slippage and low fees via mStable, but only supports DAI, USDC, USDT, TUSD, and mUSD).

- Please note that you must approve RariFundProxy to transfer at least `inputAmount`.
- Parameters:
  - `inputCurrencyCode` (string): The currency code of the token to be exchanged.
  - `inputAmount` (uint256): The amount of tokens to be exchanged (including taker fees).
  - `outputCurrencyCode` (string): The currency code of the token to be deposited after exchange.

### Withdrawals

```solidity
RariFundManager.withdraw(string currencyCode, uint256 amount)
```

Withdraws funds from the Rari Stable Pool in exchange for RSPT.

- You may only withdraw currencies held by the fund (see `RariFundManager.getRawFundBalance(string currencyCode)`). However, `RariFundProxy.withdrawAndExchange` withdraws your funds and exchanges them via 0x in one transaction.
- Please note that you must approve RariFundManager to burn of the necessary amount of RSPT.
- Parameters:
  - `currencyCode` (string): The currency code of the token to be withdrawn.
  - `amount` (uint256): The amount of tokens to be withdrawn.

```solidity
RariFundProxy.withdrawAndExchange(string[] inputCurrencyCodes, uint256[] inputAmounts, address outputErc20Contract, LibOrder.Order[][] orders, bytes[][] signatures, uint256[] makerAssetFillAmounts, uint256[] protocolFees)
```

Withdraws funds from the Rari Stable Pool in exchange for RSPT and exchanges to them to the desired currency (if no 0x orders are supplied, exchanges DAI, USDC, USDT, TUSD, and mUSD via mStable).

- You can retrieve order data from the [0x swap API](https://0x.org/docs/api#get-swapv0quote). See the Contract Usage section above, the SDK, or the web client for implementation.
- Please note that you must approve RariFundManager to burn of the necessary amount of RSPT. You also must input at least enough ETH to cover the protocol fees.
- Parameters:
  - `inputCurrencyCodes` (string[]): The currency codes of the tokens to be withdrawn and exchanged.
    - To directly withdraw the output currency without exchange in the same transaction, simply include the output currency code in `inputCurrencyCodes`.
  - `inputAmounts` (uint256[]): The amounts of tokens to be withdrawn and exchanged (including taker fees).
    - To directly withdraw as much of the output currency without exchange in the same transaction, set the corresponding `inputAmounts` item to the directly withdrawable raw fund balance of that currency.
  - `outputErc20Contract` (address): The ERC20 contract address of the token to be outputted by the exchange. Set to address(0) to output ETH.
  - `orders` (LibOrder.Order[][]): The 0x limit orders to be filled in ascending order of the price you pay.
    - To exchange one of `inputCurrencyCodes` via mStable or to directly withdraw the output currency in the same transaction, set the corresponding `orders` item to an empty array.
  - `signatures` (bytes[][]): The signatures for the 0x orders.
    - To exchange one of `inputCurrencyCodes` via mStable or to directly withdraw the output currency in the same transaction, set the corresponding `signatures` item to an empty array.
  - `makerAssetFillAmounts` (uint256[]): The amounts of the maker assets to buy.
    - To exchange one of `inputCurrencyCodes` via mStable or to directly withdraw the output currency in the same transaction, set the corresponding `makerAssetFillAmounts` item to 0.
  - `protocolFees` (uint256[]): The protocol fees to pay to 0x in ETH for each order.
    - To exchange one of `inputCurrencyCodes` via mStable instead of 0x or to directly withdraw the output currency in the same transaction, set the corresponding `protocolFees` item to 0.
- Development notes:
  - _We should be able to make this function external and use calldata for all parameters, but [Solidity does not support calldata structs](https://github.com/ethereum/solidity/issues/5479)._

### RSPT

See [EIP-20: ERC-20 Token Standard](https://eips.ethereum.org/EIPS/eip-20) for reference on all common functions of ERC20 tokens like RSPT. Here are a few of the most common ones:

```solidity
uint256 RariFundToken.balanceOf(address account)
```

Returns the amount of RSPT owned by `account`.

- A user's RSPT balance is an internal representation of their USD balance.
  - While a user's USD balance is constantly increasing as the Rari Stable Pool accrues interest, a user's RSPT balance does not change except on deposit, withdrawal, and transfer.
  - The price of RSPT is equivalent to the current value of the first \$1 USD deposited to the Rari Stable Pool.
- Parameters:
  - `account` (address) - The account whose balance we are retrieving.

```solidity
bool RariFundToken.transfer(address recipient, uint256 amount)
```

Transfers the specified `amount` of RSPT to `recipient`.

- Parameters:
  - `recipient` (address): The recipient of the RSPT.
  - `inputAmounts` (uint256[]): The amounts of tokens to be withdrawn and exchanged (including taker fees).
- `RETURN` value: Boolean indicating success.

```solidity
bool RariFundToken.approve(address spender, uint256 amount)
```

Approve `sender` to spend the specified `amount` of RSPT on behalf of `msg.sender`.

- As with the `approve` functions of other ERC20 contracts, beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
- Parameters:
  - `spender` (address) - The account to which we are setting an allowance.
  - `amount` (uint256) - The amount of the allowance to be set.
- `RETURN` value: Boolean indicating success.

```solidity
uint256 RariFundToken.totalSupply()
```

Returns the total supply of RSPT (scaled by 1e18).

- Divide `RariFundManager.getFundBalance()` by `RariFundToken.totalSupply()` to get the exchange rate of RSPT in USD (scaled by 1e18).

### Total Supply and Interest

```solidity
uint256 RariFundManager.getFundBalance()
```

Returns the total balance supplied by users to the Rari Stable Pool (all RSPT holders' funds but not unclaimed fees) in USD (scaled by 1e18).

- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `getRawFundBalance`) potentially modifies the state._

```solidity
int256 RariFundManager.getInterestAccrued()
```

Returns the total amount of interest accrued (excluding the fees paid on interest) by past and current Rari Stable Pool users (i.e., RSPT holders) in USD (scaled by 1e18).

- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `getRawFundBalance`) potentially modifies the state._

### Fees

```solidity
uint256 RariFundManager.getInterestFeeRate()
```

Returns the fee rate on interest (proportion of raw interest accrued scaled by 1e18).

```solidity
int256 RariFundManager.getInterestFeesGenerated()
```

Returns the amount of interest fees accrued by beneficiaries in USD (scaled by 1e18).

- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `getRawFundBalance`) potentially modifies the state._

```solidity
uint256 RariFundManager.getWithdrawalFeeRate()
```

Returns the withdrawal fee rate (proportion of every withdrawal taken as a service fee scaled by 1e18).

### Raw Total Supply, Allocations, and Interest

```solidity
uint256 RariFundManager.getRawFundBalance()
```

Returns the raw total balance of the Rari Stable Pool (all RSPT holders' funds + all unclaimed fees) of all currencies in USD (scaled by 1e18).

- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `getRawFundBalance`) potentially modifies the state._

```solidity
uint256 RariFundManager.getRawFundBalance(string currencyCode)
```

Returns the raw total balance of the Rari Stable Pool (all RSPT holders' funds + all unclaimed fees) of the specified currency.

- Parameters:
  - `currencyCode` (string): The currency code of the balance to be calculated.
- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `RariFundController.getPoolBalance`) potentially modifies the state._

```solidity
(string[], uint256[], RariFundController.LiquidityPool[][], uint256[][], uint256[]) RariFundProxy.getRawFundBalancesAndPrices()
```

Returns the fund controller's contract balance of each currency, balance of each pool of each currency (checking `_poolsWithFunds` first to save gas), and price of each currency.

- `RETURN` values: An array of currency codes, an array of corresponding fund controller contract balances for each currency code, an array of arrays of pool indexes for each currency code, an array of arrays of corresponding balances at each pool index for each currency code, and an array of prices in USD (scaled by 1e18) for each currency code.
- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `getPoolBalance`) potentially modifies the state._

```solidity
int256 RariFundManager.getRawInterestAccrued()
```

Returns the raw total amount of interest accrued by the Rari Stable Pool (including the fees paid on interest) in USD (scaled by 1e18).

- Development notes:
  - _Ideally, we can add the `view` modifier, but Compound's `getUnderlyingBalance` function (called by `getRawFundBalance`) potentially modifies the state._

### Internal Stablecoin Pricing

```solidity
uint256[] RariFundPriceConsumer.getCurrencyPricesInUsd()
```

Returns the prices of all supported stablecoins to which funds can be allocated.

- Use these prices to calculate the value added to a user's USD balance due to a direct deposit and the value subtracted from a user's USD balance due to a direct withdrawal.
- `RETURN` value: An array of prices in USD (scaled by 1e18) corresponding to the following list of currencies in the following order: DAI, USDC, USDT, TUSD, BUSD, sUSD, and mUSD.