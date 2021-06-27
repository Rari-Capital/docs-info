# Risk and Safety Scores 


Overall grade, G_pool = max(G_asset) over all assets in the pool
G_asset = max(h,c,v,l)

G = 0 means top quality
G = 1 means good quality
G = 2 means average quality
G = 3 or 4 means use at your own risk

Max has been used to ensure that if even one criteria is failed, the pool risk score is lowered.

#### Historical score (h)

Use the simulation described in previous [model](https://medium.com/rari-capital/fuse-rari-safety-scores-d8778b46c4aa) and backtest.

if safe for last 3 months, h = 0
else if safe for last 1 month, h = 1
else, h = 3

#### Crash score (c=0,1,2,3)

To detect scam/hack/peg break

Initalise c = 0

if no audit from *insert list of firms here*, c++
if MC < 3% * FDV, c++
if no discord/telegram or twitter, c++

DAO and team can override crash score if they feel a token is safe or unsafe for subjective reasons.

#### Volatility score (v=0,1,2,3)

We can assume that assets with low MC and high volatility have a higher propensity for that volatility to rise even further.

if MC < $100m, v1 = 2
else if MC < $600m, v1 = 1
else v1 = 0

If volatility is high, let's see what happens if volatility doubles

s = max price move in say 15 min
if s > 10% and 2s < (1 - cf - li) and 2s < (li - slippage), v2 = 1 ?
else v2 = 0

v = v1 + v2

volatility also depends on liquidity, but we will include that in a different score

#### Liquidity score (l=0,1,2,3,4)

We can assume lower the liquidity today, more likely it'll be even worse in the future

if liquidable amount at allowed slippage < $200k, l1 = 2
else if liquidable amount at allowed slippage < $1m, l1 = 1
else l1 = 0

We can assume that liquidity incentives being pulled can be a risk.

if significant liquidity incentives being pulled within a month, l2 = 1
else l2 = 0

We can assume that less number of humans providing liquidity increases chances of it being removed suddenly.

if number of addresses holding LP tokens < ...,  l3 = 1
else l3 = 0

l = l1 + l2 + l3

