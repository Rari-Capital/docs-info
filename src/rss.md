# Fuse - Risk and Safety Scores

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

Disclaimer: immediately following the launch of Fuse, markets may display low scores due to a lack of initial liquidity.

![1_1yLbaKcrPXVlMXMj0n1IFg](https://user-images.githubusercontent.com/50163445/126051944-63c25c83-0423-4fcd-9391-d9f0311d8f73.jpeg)

# Fuse with the Yield Aggregator and Tanks

Ultimately, as these scores will educate users on market risks, this allows us to automate lending on Fuse. Essentially, as we move forward with Tanks and continue upgrading our base yield aggregator, with RSS we can create yield aggregator pools for dozens of Fuse supported assets to capture new yield for assets such as UNI, DIGG, YFI, etc. Furthermore, Tanks will also be able to automatically lend across the best and safest Fuse markets to borrow stables and fund the stable pool to earn additional yield. Interestingly, those stable pool funds could hypothetically be further lent out on Fuse using RSS.

This conveniently addresses concerns about fragmented liquidity in Fuse pools, as our existing and new yield aggregator pools, combined with Tanks, will supply liquidity to the best Fuse markets available. Hopefully, this will achieve a healthy balance between consolidated liquidity, sustainable high yield opportunities, and market options for users.

Rari Safety Scores, and Fuse RSS in particular, will be continuously monitored and updated to maintain safety. While we created the framework, we eventually want RSS to be controlled by the DAO to make it decentralized and community-driven. In the meantime, we’re accepting feedback from community members on how to improve it.
