# Oracles supported Include:

- Chainlink
  - Chainlink relies on a consortium of nodes who are cryptoeconomically incentivised to report asset prices on-chain. Prices are taken from various off-chain and on-chain exchanges and aggregated. Aggregation process helps detect and correct for sharp price movements ("scam wicks") on individual exchanges.
- Uniswap v2 and v3 TWAP (time-weighted average price)
- Balancer TWAP
  ... (add more)

A new trusted answer is written on-chain when either:
Off-chain live price moves by more than the deviation threshold - typically 0.5% or 1%, or
A certain time threshold has passed from when last trusted answer was posted - typically 1 hour or 1 day
Reporting major price moves without delay makes Chainlink oracles very safe when it comes to avoiding bad debt.
Trusted answer requires a 2/3 majority of chainlink nodes to post their answers.
Chainlink live price feeds
Chainlink documentation
Uniswap v2 TWAP
We have written our own accumulator contract that updates on-chain cumulative price if:
dbjk
sakjdb
... (I've forgotten operational details of this thing)
Current time period is set to 15 minutes (checked via block timestamps???), this can be customised.
Pool admin must pay for each price update. At 10 gwei, this amounts to approximately ??? per week.
Uniswap v2 as an oracle
Uniswap v3 TWAP
Uniswap v3 improves ease of use of oracles by natively tracking cumulative prices, instead of requiring protocols to externally record them.
Uniswap v3 automatically checkpoints cumulative price whenever a pool is traded on, as long as that is the first trade of that ethereum block. Cumulative prices are stored in an observation buffer with initial length 1, however any user may pay a one-time gas cost to permanently extend the size of the observation buffer upto 65,536. Accordingly the time period of the TWAP can also be set.
Cumulation is done with log prices, this means TWAPs report geometric mean of prices, instead of arithmetic mean as in Uniswap v2.
Uniswap v3 oracle overview
Uniswap v3 oracle technical docs
Uniswap v3 whitepaper - this contains most detailed explanations of the oracle

.... (add more)