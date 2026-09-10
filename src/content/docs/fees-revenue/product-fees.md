---
template: doc
title: Product Fees
description: Product Fees.
sidebar:
  order: 2
draft: true
---
### StrategyHub

StrategyHub charges a Carry Fee only when an investor withdraws with a profit. This includes the creator’s own capital. If a withdrawal has no profit, no Carry Fee is charged.

The number shown on the strategy page is the total carry rate:

* 5% fixed protocol fee
* Creator’s share, set by the creator

Example: a displayed 15% means 5% protocol + 10% creator.

The protocol’s 5% becomes system revenue.
The creator’s share is not system revenue. It is compounded back into the same strategy under the creator’s name until the strategy is closed.

* Profit=Withdrawal value−Cost basis of the withdrawn portion
* Protocol fee=Profit * 5%
* Creator carry=Profit * (Displayed carry rate−5%)
* User receives≈Withdrawal value−Protocol fee−Creator carry−trading slippage

After creation, the creator may lower the creator portion, but cannot raise it.

### YieldMax

YieldMax charges 5% of earned interest only. There is no deposit fee, no withdrawal fee, and no lock-up.

* User yield=Gross interest * 95%
* Protocol fee=Gross interest * 5%

This 5% is sent entirely to House Pool. It does not enter the 60 / 20 / 20 system-revenue split.

This is because the current YieldMax contract already routes the fee 100% to House Pool. YieldMax is not being redeployed in this update, so that routing cannot be changed unless a new contract is deployed in the future.

### CycleVault

CycleVault charges 10% of profit only when a user withdraws with a profit. If there is no profit, no performance fee is charged.

* Profit=max⁡(Withdrawal value−Cost basis,0)
* Protocol fee=Profit * 10%
* User receives=Withdrawal value−Protocol fee

This 10% becomes system revenue.

### Stocks

AIDOG does not charge a protocol trading fee on Stocks swaps.

Users pay:

* network gas
* any slippage in the chosen route

### House Pool

House Pool does not charge a performance fee on staking.

When a user withdraws $AIDOG from House Pool, a 1% withdrawal fee is charged:

* Withdrawal fee=Withdraw amount * 1%
* User receives=Withdraw amount−Withdrawal fee

This 1% is distributed to remaining House stakers. It is not system revenue, and it is not part of the 60 / 20 / 20 split.

### System Revenue Split

The following protocol fees become system revenue and then follow the 60 / 20 / 20 split:

* StrategyHub’s fixed 5% protocol portion of Carry Fee, charged only on profitable withdrawals
* CycleVault’s 10% of profit, charged only on profitable withdrawals
* Other future protocol fees, unless a specific contract says otherwise

YieldMax’s 5% interest fee is not included here.

System revenue is split:

* House Pool=System revenue×60%
* Operations=System revenue×20%
* Buyback and burn=System revenue×20%

### Examples

Example 1: YieldMax
A user earns 100 USDC in interest.  

* User keeps 95 USDC
* 5 USDC goes 100% to House Pool
* None of this 5 USDC is split into operations or buyback-and-burn

Example 2: StrategyHub
A user withdraws with 1,000 USDC profit. The strategy’s displayed carry is 15%.  

* Protocol fee = 50 USDC, which becomes system revenue
* Creator carry = 100 USDC, which stays with the creator’s strategy
* Of the 50 USDC system revenue: 30 USDC to House Pool, 10 USDC to operations, 10 USDC to buyback-and-burn

Example 3: CycleVault
A user withdraws with 200 USDC profit.  

* Protocol fee = 20 USDC
* House Pool receives 12 USDC
* Operations receive 4 USDC
* 4 USDC is used to buy and burn $AIDOG

### Notes

* No product guarantees profit.
* A fee is charged only when the product rules say so. Losing withdrawals in StrategyHub and CycleVault do not pay performance fees.
* Final received amounts may differ slightly from previews because of trading slippage.
* Holding $AIDOG in a wallet does not automatically receive system revenue. Only $AIDOG staked in House Pool shares the 60% House allocation.
