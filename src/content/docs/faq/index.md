---
template: doc
title: FAQ
description: FAQ
sidebar:
  order: 1
draft: false
---
### General

What is AIDOG?
AIDOG is an on-chain private banking system. It combines automated yield, actively managed strategies, tokenized stocks, Bitcoin-cycle allocation, and protocol revenue sharing.

Do I need financial knowledge to use it?
No. The products are designed so that users can deposit and withdraw without running the strategy themselves. You should still read the product page and this FAQ before depositing.

Is AIDOG fully decentralized?
No. Funds are handled through smart contracts, but the official team still maintains the frontend, some parameters, operations, buybacks, and possible emergency controls on StrategyHub.

Does AIDOG guarantee profit?
No. Any product can lose money. Past performance does not guarantee future results.

### Wallet & Chains

How do I log in?
Use a Web3 wallet. There is no email or password account.Which chain is AIDOG on?
The main app is on Base. Stocks currently settles on BNB Chain.

What do I need in my wallet?
You need ETH on Base for gas. For most products you also need USDC on Base. For Stocks, you may need funds on BSC.

Can I use AIDOG if my funds are on another chain?
You need to bridge them first. 

### $AIDOG Token

What is $AIDOG?
$AIDOG is the utility and ownership token of the AIDOG system on Base. Total supply and circulating supply are both 1,000,000,000. There is no inflation.

If I just hold $AIDOG in my wallet, do I earn system revenue?
No. Only $AIDOG staked in House Pool shares House income.How do I get $AIDOG?
Swap on the Token page, swap on Uniswap on Base, or receive it from another wallet.

Does protocol revenue mint new $AIDOG?
No. Protocol fees do not create new tokens. 20% of system revenue is used to buy existing $AIDOG and burn it.

### House Pool

What does House Pool do?
House Pool is the ownership layer. Users stake $AIDOG and receive a share of House income.

Does House Pool receive 100% of AIDOG income?
No. House Pool currently receives income from two paths:

1. YieldMax’s 5% interest fee, which goes 100% to House Pool under the current contract
2. 60% of system revenue from other protocol fees, such as StrategyHub’s 5% protocol carry and CycleVault’s 10% profit fee

Why is YieldMax treated differently?
The current YieldMax contract already sends its 5% fee entirely to House Pool. YieldMax is not being redeployed in this update, so that route cannot be changed unless a new contract is issued later.

Is there a withdrawal fee?
Yes. Withdrawing $AIDOG from House Pool costs 1%. That 1% goes to remaining stakers, not to the team and not into the 60 / 20 / 20 split.

Is House Pool principal-protected?
No. $AIDOG price can fall.

### StrategyHub

How does StrategyHub work?
A creator deposits USDC and manually buys and sells assets. Other users deposit USDC and receive shares. There is no preset token basket.

Why must a creator deposit 10,000 USDC first?
The creator must put their own capital at risk before managing other people’s money. This reduces low-effort, high-risk strategies opened with almost no personal funds.

What is Carry Fee?
It is the total performance fee shown on the strategy page: 5% to the AIDOG protocol plus the creator’s share. Example: 15% means 5% protocol + 10% creator.

When is Carry Fee charged?
Only when an investor withdraws with a profit. This includes the creator. If there is no profit, no carry is charged.

Does the creator get paid even if the strategy loses money?
No performance fee is charged on an unprofitable withdrawal. There is no management fee just for running the strategy.

Where does the creator’s carry go?
It is compounded back into the same strategy under the creator’s name. The creator can take it only after closing the strategy.

Can I lose money in StrategyHub?
Yes. Strategies are not principal-protected.

### YieldMax

What is YieldMax?
YieldMax is an intelligent yield aggregator. You deposit USDC or ETH on Base, and the system allocates funds across whitelisted lending pools.

Do I earn the same asset I deposit?
Yes. Deposit USDC, earn USDC. Deposit ETH, earn ETH.Is there a lock-up?
No. You can withdraw at any time.

What is the fee?
5% of earned interest. Users keep 95%.

Does that 5% follow the 60 / 20 / 20 system split?
No. Under the current YieldMax contract, the 5% goes 100% to House Pool.

Can the rate fall after I deposit?
Yes. The system tries to keep the blended yield high, but lending rates move, and adding too much capital to one pool can push its rate down.

### CycleVault

What is CycleVault?
CycleVault allocates deposited USDC between cbBTC and USDC based on an AI Bitcoin-cycle score.

Does cbBTC in CycleVault earn lending yield?
No. Only the USDC portion is sent to YieldMax.

How do I read the score?
The page shows one score from 0 to 100.  

* 0–10: Extreme Undervalued
* 10–40: Undervalued
* 40–60: Neutral
* 60–90: Overvalued
* 90–100: Extreme Overvalued

Lower scores favor more cbBTC. Higher scores favor more USDC.

What fee does CycleVault charge?
10% of profit, only on profitable withdrawals. That fee becomes system revenue and then follows the 60 / 20 / 20 split.

### Stocks

What are tokens ending with “a”?
They are AIDOG-issued RWA tokens. For example, CRCLa is designed to track CRCL on a 1:1 basis. The underlying mix is routed automatically.

Does AIDOG charge a Stocks trading fee?
No protocol trading fee. Users pay gas and slippage.

Why might I need BSC funds?
Stocks currently settles on BNB Chain. If your funds are only on Base, you need to bridge first.

Does smart routing guarantee the best fill?
It aims to improve execution, but the final amount can still change between quote and settlement.

### Fees & Revenue

How is system revenue split?
60% to House Pool, 20% to operations, 20% to buy back $AIDOG and burn it.

Which fees enter that split?
Currently: StrategyHub’s 5% protocol carry and CycleVault’s 10% profit fee. Future protocol fees may also enter this split unless a specific contract says otherwise.

Which fees do not enter that split?  

* YieldMax’s 5% interest fee, which goes 100% to House Pool
* StrategyHub creator carry
* House Pool’s 1% withdrawal fee
* gas and slippage

Do buybacks guarantee a higher $AIDOG price?
No. Buyback size depends on actual system revenue.

### Security

Are the contracts audited?
Key contracts are intended to be audited. Check the official website or documentation for the latest reports.

Can AIDOG freeze a strategy?
AIDOG may retain limited emergency controls on a specific StrategyHub strategy, such as pausing deposits, withdrawals, trading, or closure. If emergency distribution is enabled, it is intended to return remaining assets to current shareholders by share. This is a backstop, not a guarantee.

Who is responsible for losses?
Users bear market risk, smart-contract risk, strategy risk, and cross-chain risk. Only use funds you can afford to lose.

How do I contact the team?
Use the official contact channels listed on the website.
