# Fuse Risk

Since Fuse pools can be created by arbitrary parties with arbitrary parameters, it's important to evaluate each pool before entering. To assist with this, we've created the Rari Safety Score:

### Permissionless Pool Creation Risk

**<u>Since Fuse is a completely permissionless protocol, operators have full ownership over their pool and can adjust the following parameters without oversight or approval: tokens, oracles, interest rate models, fees, liquidation incentive, close factor, and collateral factors.</u>**

Fuse allows any user to create their own custom lending/borrowing pool with any ERC20 token that has an oracle supported by Rari Capital (Chainlink, Uniswap/Sushiswap, and Uniswap V3). It is important to note that any token can be listed on Uniswap/Sushiswap which can then be used in a Fuse pool. 

The Fuse protocol provides the tools necesary to allow users to deploy their own custom pools, but it is the user's responsibility to properly research and assess all risks assosciated with that pool before depositing funds. 

Poor, risky or malicious selection of pool parameters can result in liquidity being drained from the pool, this is a known risk and is line with the intended operation Fuse.

The Rari Capital Fuse Portal displays "Verified" and "Unverified" pools. "Verified" pools have been proposed to governance and approved by the community, but does not confirm that the pool is completely safe based on the RGT voter's decision to verifiy the pool. 

## Rari Safety Score

This framework is similar to our [standard lending market framework](https://medium.com/rari-capital/rari-safety-scores-17893c4d998) that analyzes markets such as [Compound ](https://compound.finance/)or [Aave](https://aave.com/), but it contains a few key changes that make this assessment crucial for the future Rari Capital ecosystem. Changes include adding an “editable” category to account for upgradeable pools, taking averages for asset scores, collateral factors, etc., but to summarize, we’ve made a few changes to account for Fuse’s unique multi-asset markets that focus on catching dangerously configured pools. With the liquidity and relative liquidity sections, it also captures risk assessment of poorly-funded pools that can result in paused or broken exits for users.

One of the most important categories is the “minimum asset score” in critical variables. If an asset in a Fuse pool is rated below a 60, the pool automatically fails the critical variable section and loses 20% of the score. This protects against pools created with hidden rug pull assets designed to manipulate funds. You can also read about asset scores in our [previous RSS article](https://medium.com/rari-capital/rari-safety-scores-17893c4d998).

These scores will be displayed on our Fuse UI with the following grading system to help users compare and contrast markets (exact scores can be viewed by hovering over the grade):

- A++: score ≥ 95
- A+: score ≥ 90
- A: score ≥ 80
- A-: score ≥ 70
- B: score ≥ 60
- C: score ≥ 50
- D: score ≥ 40
- F: score ≥ 30

![1_1yLbaKcrPXVlMXMj0n1IFg](https://user-images.githubusercontent.com/50163445/126051944-63c25c83-0423-4fcd-9391-d9f0311d8f73.jpeg)