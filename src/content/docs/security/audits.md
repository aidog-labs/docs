---
template: doc
title: Product Risks
description: Smart contracts have been audited, with reports available on the website.
sidebar:
  order: 2
draft: false
---
### StrategyHub

StrategyHub is actively managed. The creator decides what to buy and sell. There is no preset portfolio and no principal protection.

Main risks:

* the strategy can lose money
* the creator may trade poorly, infrequently, or maliciously
* high-risk tokens can create large swings
* withdrawal value can differ from the preview because of trading slippage and fees

Controls currently designed into the product:

* a creator must deposit 10,000 USDC before creating a strategy
* Carry Fee is charged only when there is profit
* after creation, the creator can lower the creator portion of carry, but cannot raise it
* creator carry is compounded back into the strategy until the strategy is closed

AIDOG may retain limited emergency controls on a specific strategy, such as pausing deposits, withdrawals, trading, or strategy closure. If an emergency distribution function is enabled, it is intended to return remaining assets to current shareholders by share ratio. These controls are a backstop. They do not guarantee recovery, and they do not prevent market losses.

### YieldMax

YieldMax allocates USDC or ETH into whitelisted lending pools and compounds interest back into the same asset.

Main risks:

* lending-protocol smart-contract risk
* a pool’s underlying collateral or liquidity can deteriorate
* yield changes with utilization and market conditions
* if funds are later deployed across chains, bridge and destination-chain risks apply
* past APY does not guarantee future APY

Controls currently designed into the product:

* only conservative pure lending pools are used
* pools are whitelisted
* allocation is split across pools instead of crowding a single high rate
* individual pool size is capped relative to liquidity
* the system can withdraw and reallocate if a pool becomes unsafe or too illiquid
* a Base reserve is kept so withdrawals can usually be paid without a cross-chain transfer
* user funds are accessed through wallet approval and contracts, not a custodial account

YieldMax charges 5% of earned interest only. Under the current contract, that 5% goes 100% to House.

### CycleVault

CycleVault allocates between BTC and USDC based on an AI composite score. BTC does not earn lending yield. The USDC portion is sent to YieldMax.

Main risks:

* cycle indicators can be wrong or late
* BTC can fall after the vault increases BTC exposure
* reallocations can create slippage
* the USDC sleeve inherits YieldMax risk

A 10% fee is charged only on profitable withdrawals. That protocol fee becomes system revenue and then follows the 60 / 20 / 20 split.

### Stocks

Stocks is an on-chain market for tokenized equities and similar RWA tokens. Platform-issued tokens ending in “a” are designed to track an underlying asset, but they are still on-chain tokens.

Main risks:

* the token price can move with the underlying market
* smart routing reduces slippage but cannot eliminate it
* underlying RWA issuers have their own credit, custody, and operational risks
* AIDOG does not guarantee 1:1 redemption against the traditional stock at all times

AIDOG does not charge a protocol trading fee on Stocks. Users pay gas and route slippage.
