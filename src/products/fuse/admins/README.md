# Fuse Pool Admin Guide

This is a simple guide with recommended values for pool configuration. For deeper understanding, check other resources.

## Liquidation incentive

Set a higher liq incentive like `15%` or `20%` if the asset is illiquid, or if it is very volatile, or if it is a complex position that requires a lot of gas to unwind. Else you can set a safer percentage like `10%`.

## Close factor

Standard `50%` is fine. This is an artifact from Compound, and does not significantly impact risk.

## Collateral factor

If Chainlink-supported, consider `75%`. Else consider setting in the range of `40% to 75%`, where 40% is safest. Anything above 75% has risk of default, ensure the interest rate compensates lenders well for it.

Set low collateral factors for _the entire pool_ if any one asset in the pool is potentially very bullish, such as a governance token. Or else consider not including bullish illiquid assets in the pool.

Set low collateral factor for an asset if it is potentially bearish within a short timeframe. Set low collateral factor if it is illiquid or very volatile. Collateral factor may still be unable to protect against significant peg break for asset that have pegs.

Use backtests and risk scores to get a better understanding.

## Supply cap

Ensure there is enough liquidity in the market so that sufficient portion of collateral supplied can be liquidated if needed. Either use a supply cap or reduce collateral factor to ensure there isn't too much collateral in the Fuse pool.

## Admin fees

If pool is upgradeable, set lower admin fees to start with, and increase once demand is found. Up to `20%` may be sustainable depending on how much the overall interest rate is.

## Reserve fees

Reserve fees charge early users of the pool additional interest, which is kept in a reserve to protect later users in case of a default. Setting to `0` is acceptable. Else set anything up to `30%` depending on how much of a reserve you wish to build up for the pool.

## Interest rate at 80% utilisation

If pool is upgradeable, you may set a lower interest rate and then increase it once demand is found. Near-80% utilisation is what you should be aiming for.

Stablecoins are the most popularly borrowed, so compare with market-wide rates and set accordingly. Set higher interest rates on stablecoins if the pool supports more risky collaterals (i.e. not blue chips).

Other assets are borrowed usually for yield farming or shorting. Try estimating yield or potential profit from such operations, be it farming or shorting, and set interest rates accordingly.

## Interest rate at 100% utilisation

Set very high rate, at least greater than `100% APY` because borrowers can take a pool hostage if they're willing to pay the rate at 100% utilisation. 100% APY ensures your pool can be taken hostage for one year before all collateral is earned back in the form of interest.
