# Grants and Full-time Opportunities

Grants are provided for any short-term (2 to 6 week) contribution to the DAO. You may propose work outside of this list. You may also apply without having a specific piece of work in mind. Grants can be used as a low-commitment means to transition to a full-time role. Full-time roles can be directly offered as well. Pay is negotiable.

Each taskforce may have their own grants and onboarding process.

**Apply here:** [Contributors onboarding form](https://docs.google.com/forms/d/e/1FAIpQLSexJhf3HFr4bPRXIwn6MYKdGJrMFmvP-h1Co-k1DgJ0uP0yTg/viewform).

We regularly go through the responses and will contact you shortly. We also have dedicated channels for grants and community contributors in our [discord](http://discord.gg/mtb6W57Ap6).

_Looking forward to having you as a contributor to the Rari Capital DAO!_

## Infrastructure: Frontend

<summary> Opportunities available </summary>

<details>

#### Design and Implement a robust search service for the Rari Protocol (1000 USDC or RGT equiv.)

<u>Criteria:</u> Design and Build a service that enables efficient and robust search across all Rari Protocol products.

<u>Why?:</u> Currently knowledge on opportunities in the Rari ecosystem is fragmented. There is no current service that efficiently aggregates live data about the best opportunities across all Rari products.

<u>Spec:</u> For any token or a set of tokens, what opportunities across products (Vaults, Fuse, Plugins, Nova (L2), Tranches) exist for this asset? Of these, what are the **best** opportunities and what is their risk level?

<u>Comments:</u> This project would be massively aided by a subgraph. If a developer wants they could tackle both grants at the same time, or work with another dev who is building the subgraph.

#### PWA + Push notifications ( 400 USDC or RGT equiv.)

<u>Criteria:</u> Let’s build a service that keeps track of a user’s activity in Fuse and alerts them via push notifications under different circumstances. IE if they reach a dangerous borrow ratio and are at potential risk of liquidation. Or we could send regular push notifs informing a user about their total position net worth. Up to the user’s discretion.

<u>Why?:</u> This would be badassSpec:The rari-dapp is already a PWA. We can make some tweaks to the PWA logic to implement push notifications. If this ends up not working, we can use http://hal.xyz/

<u>Comments:</u> 0xNosedrop wants to do this and has already started development.

#### Governance Dashboard (400 USDC or RGT equiv).

<u>Criteria:</u> Rari Capital will be moving Governance fully on-chain using GovernerBravo. Build a governance dashboard to support this.

<u>Why?:</u> The dashboard will allow us to keep our governance in-house rather than dependent on Snapshot.

<u>Spec:</u> Figma has designs,

#### UX + Design Audit (600 USDC or RGT equiv)

<u>Criteria:</u> Audit the design and UX of the main Rari Capital site, and offer clear solutions on how to improve it.

<u>Spec:</u> Present a Figma board which shows actionable advice on the design.

Deliver a written audit report which details UX flaws.

**Bonus: Enter the codebase and revamp the CSS of the codebase in a PR. (300 USDC)**

#### Self-made mobile frontend

Up to 2 different mobile frontends may be built by 2 persons / groups.

Pay: 4k USDC or RGT equiv. for eachOffer open until: September 2021. Skills needed: UI/UX, web3 for mobile, previous experience in a mobile web3 app preferred

Define a theme of your choice - preferably after discussion with team. Create a working frontend that displays well on mobile. It should integrate with existing Fuse and yield aggregator contracts that match your chosen theme.

#### Chat trollbox for Fuse pools

Pay: 1000 USDC or RGT equiv. Offer open until: July 2021, urgently needed. Skills needed:

Create a chat trollbox for each Fuse pool so that pool owners can publicly chat with anyone browsing that Fuse pool.

Must integrate well with existing UI and theme. Allow users to chat using just ethereum addresses. Resolve ENS in chat. Store chat via IPFS/Arweave, link it to pool owner’s ENS, provide easy UI to abstract this away from end user. Other tools such as 3box may also be used.

</details>

## Infrastructure: Smart Contract Development

<summary> Opportunities available </summary>

<details>

#### _Full-time_ Smart Contract developer

Engage with existing smart contract developers to engage in a variety of projects and responsibilites. Needs to be good at communication, willing to take responsbility, passionate about what we are building. Must have sufficient expertise.

#### Clone Rari Capital for another chain

Pay: 50% of all revenue generated from clone.

Maintain a Rari Capital clone on an alternate chain. Includes deploying contracts, frontend and hiring anyone else needed for the job.

Profit-sharing arrangement to be finalised. Possible arrangement could include streaming revenues to a treasury controlled by a new token. 50% of supply of this token would be controlled by RGT governance. Remaining 50% allocation to be decided by you (developer allocation, liquidity mining, etc).

Some possible chains: BSC, Solana
  
#### Curve liquidity gauges

Pay: 5k USD or RGT equiv.

Create a Curve liquidity gauge (we are planning to launch veRGT in the near future) that controls the reward distribution speeds on our RewardsDistributor contract (which is just Compound's COMP rewards logic split off from the Comptroller): https://github.com/Rari-Capital/compound-protocol/blob/fuse-flywheel/contracts/RewardsDistributor.sol

#### CEX liquidator bot

Pay: 5k USD or RGT equiv. Skills needed: Previous experience with CEX API integrations, and maintaining 24/7 uptime

Write highly reliable and customisable code that accesses APIs of all centralised exchanges as well as on-chain data to perform Fuse liquidations with minimal market impact and latency.

Exchanges to be supported are Binance, FTX, Okex, [gate.io](http://gate.io/), in addition to checking on Uniswap and Sushiswap. Additional exchanges may also be added.

#### Tornado clone for deposits

Pay: 15k USDC or RGT equiv.

Clone Tornado Cash contracts to accept a general ERC20 token as deposit. Admin contract connected to Rari’s GovernorBravo controls which tokens to list.

Design and build a frontend for the Tornado clone contracts. Host frontend on your own domain. Host frontend on IPFS. Arweave optional. Link this via github. Provide documentation for the contracts. Provide documentation for anyone to redeploy the frontend on their own domain or IPFS or locally.

</details>

## Infrastructure: Business development

<summary> Opportunities available </summary>

<details>

#### _Full-time_ community moderator and outreach manager

Manage Rari discord. Willing to stay up-to-date and technical enough to answer users' doubt. Actively engage with the community, maintain good vibes and be passionate about the project. Host events for outreach.

#### Artwork

Pay: Variable, depending on skill, Up to 3k USDC or RGT equiv. per set.

Create professional digital artwork that matches the existing Rari Capital theme.

Consult with team on whether the design can be used for merchandise.

#### Icon design

Pay: 400 USDC or RGT equiv.

Create icons for n Fuse pools that match the underlying themes or creators of those pools.

#### Community mod and content translation for language-based demographic

Pay: 1500 USDC or RGT equiv. per month, can be negotiated depending on community size. Offer open until: September 2021. Skills needed: Fluency in English and translated language, existing access to userbase

Translate content. Manage language-specific channel or discord. Work on building userbase in that community, ideate with team on innovative ways to do this. Act as two-way communication bridge between team and community regarding all announcements, feedback and so on.

Solicited languages: French, Chinese, German, Hindi. Other languages may also be proposed.

</details>

## Market XYZ

Please contact [Market XYZ](/governance/Market/) to know of opportunities available with them.
