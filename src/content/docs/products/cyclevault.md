---
template: doc
title: CycleVault
description: CycleVault is an automated Bitcoin-cycle vault.
sidebar:
  order: 2
draft: false
---
### What it is

CycleVault is an automated Bitcoin-cycle vault. You deposit USDC. The system uses an AI composite score from multiple Bitcoin cycle indicators, then allocates between cbBTC and USDC.

* BTC is held as cbBTC and does not earn lending yield.  
* The USDC portion is deployed into YieldMax so that idle stablecoins continue to earn yield.

The product is built for users who want systematic BTC exposure without timing the market themselves.

### Score and labels

The page shows one composite AI Cycle Score from 0 to 100. Individual indicator values are not shown.

Current indicators:

* Fear & Greed Index
* RSI (14D) 
* AHR999 Index
* Puell Multiple
* MVRV Z-Score

Score and labels:

0–10, Extreme Undervalued

10–40, Undervalued

40–60, Neutral

60–90, Overvalued

90–100, Extreme Overvalued

Lower scores mean the system treats BTC as more undervalued and tends to hold more cbBTC. Higher scores mean the system treats BTC as more overvalued and tends to hold more USDC.

### How to use it

1. Open CycleVault. 
2. Check the current score, status color, recommended allocation, your position, and total TVL.  
3. Deposit USDC.  
4. The vault allocates between BTC and USDC according to the live score. 
5. Withdraw when you want to exit.

Your dashboard shows deposited principal, current value, and unrealized profit or loss in both amount and percentage.

### Money flow

You deposit USDC.  

Part of the deposit is converted to cbBTC, part stays USDC, according to the current cycle allocation.  

USDC is sent to YieldMax.  

cbBTC remains as cbBTC exposure.  

When the score changes enough to justify a new allocation, the vault converts between cbBTC and USDC.  

On withdrawal, if there is a profit, 10% of the profit goes to the AIDOG system. If there is no profit, no performance fee is charged.

### Risks and controls

* Cycle indicators can be wrong or late. The score is a model, not a guarantee.
* BTC can fall after the vault increases BTC exposure.
* USDC in YieldMax carries DeFi lending risk.
* Reallocation itself can create trading slippage.
* A 10% profit fee applies only on successful withdrawals with profit.

This product is not principal-protected.
