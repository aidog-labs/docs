---
title: Core Products
description: StrategyHub, YieldMax, Borrow, Stocks, CycleVault, and House Pool.
---

## StrategyHub

StrategyHub allows anyone to create or follow discretionary crypto investment strategies.

### Key Features

- Creators deposit their own capital and manually manage the portfolio.
- Followers deposit USDC and receive shares of the strategy.
- Creators earn a performance fee (Carry) only when followers withdraw with a profit.

### Creating a Strategy

- Minimum creator deposit: 10,000 USDC
- Requires holding at least 1 AIDOG NFT (additional strategies require additional NFTs)
- Creator sets the Carry Fee (AIDOG system takes a fixed 5%, creator sets the remaining portion)

### Deposit & Withdraw

- Users deposit USDC and receive strategy shares.
- On withdrawal, if there is a profit, Carry Fee is deducted.
- If there is no profit, no Carry Fee is charged.

### Carry Fee

The displayed Carry Fee is the total performance fee (AIDOG system 5% + Creator’s share).
It is charged only on profitable withdrawals by any investor in the strategy, including the creator. No fee is charged if there is no profit.

## YieldMax

YieldMax is an intelligent yield aggregator (machine-gun pool). It automatically allocates your USDC or ETH into the safest and highest-yielding lending pools across supported chains, with real-time optimization and auto-compounding.

- No lock-up period
- You retain full control of your assets
- Performance fee: 5% of earned yield (goes to House Pool)

## Borrow

Borrow allows you to use your YieldMax positions or StrategyHub holdings as collateral to borrow USDC.

- Collateral options: YieldMax ETH / StrategyHub positions
- Interest rate is dynamically adjusted to stay competitive
- Health Factor must be monitored to avoid liquidation

## Stocks

Stocks enables on-chain trading of tokenized real-world assets (primarily US equities).

- Platform-issued tokens end with “A” (e.g. CRCLA)
- Smart routing across multiple liquidity sources for best execution
- Currently supported on BNB Chain

## CycleVault

CycleVault is an AI-powered vault that allocates between BTC and USDC based on real-time Bitcoin cycle signals.

- Higher score → more BTC allocation
- Lower score → more USDC allocation (USDC is deployed into YieldMax)
- Designed for users who want automated cycle-based exposure to Bitcoin

## House Pool

House Pool is the core revenue-sharing and ownership layer of AIDOG.

- Stake $AIDOG to receive a share of protocol revenue
- Revenue sources include StrategyHub Carry, YieldMax fees, and other protocol income
- Withdrawal fee: 1% (distributed to remaining stakers)
