---
template: doc
title: YieldMax
description: An intelligent yield aggregator that auto-allocates USDC or ETH
  across lending pools.
sidebar:
  order: 3
draft: false
---
### What it is

YieldMax is an intelligent yield aggregator. You deposit USDC or ETH on Base. The system continuously monitors whitelisted lending pools and moves funds to the combination that currently offers the best risk-adjusted yield. Interest is converted back into the same asset and compounded.

AIDOG does not take custody of your funds as a centralized account. Deposits work through smart contracts and wallet approval.

### How to use it

1. Open YieldMax.
2. Choose USDC or ETH.
3. Deposit the amount you want.
4. Withdraw all or part of your position at any time. There is no lock-up.

What you deposit is what you earn in. Deposit USDC, earn USDC. Deposit ETH, earn ETH.

### Money flow

1. You deposit USDC or ETH on Base.
2. The contract routes funds into one or more approved lending pools.
3. Those pools are on Base and Ethereum.
4. Yield is harvested and converted back into the original asset.
5. The new principal continues earning.
6. A 5% performance fee is taken from yield only and sent to House Pool.
7. You keep 95% of the yield.
8. When you withdraw, the system prefers to pay you from Base liquidity first, so most withdrawals do not require a cross-chain transfer.

AIDOG keeps a minimum reserve on Base for withdrawals. Even if another chain offers a higher rate, some funds stay on Base so users can exit without bridging every time.

### Allocation logic

YieldMax does not simply send all funds to the single pool with the highest advertised APY.

It monitors:

* current APY
* the interest-rate curve of each pool
* how much additional capital would push utilization up and pull the rate down
* liquidity and solvency conditions

It then splits funds across several pools so the blended yield of the whole position is maximized, instead of overcrowding one pool.

Rebalancing is not on a fixed timer. It happens when the system finds a better risk-adjusted combination.

### Supported assets and pool standards

Currently supported for deposit and withdrawal on Base:

* USDC
* ETH

Possible later additions include SOL.

YieldMax only uses pure lending pools with conservative underlying assets, such as USDC, USDT, WETH, WBTC, and cbBTC. It avoids liquidity pools that can suffer impermanent loss, and generally avoids LST, RWA, and non-core stablecoins.

Pools must also pass whitelist checks, including a history of safe operation and acceptable underlying collateral.

### Fees

User yield=Gross interest×95%

House Pool fee=Gross interest×5%

No deposit fee. No withdrawal fee. No lock-up.

### Risk controls

* Only whitelisted lending pools are used.
* The system monitors pool rates, liquidity, and underlying collateral in near real time.
* If liquidity becomes insufficient, funds can be withdrawn with elevated gas and reallocated.
* If a pool adds disallowed collateral or otherwise becomes unsafe, funds can be pulled faster than ordinary withdrawals and moved to safer pools.
* Individual pool allocation is capped so the position does not become too large relative to pool liquidity.
* Contracts are intended to be open-source and audited. Users should still review the latest audit reports on the website.

DeFi still has smart-contract risk, protocol risk, and market risk. Users bear these risks. Past yield does not guarantee future yield.
