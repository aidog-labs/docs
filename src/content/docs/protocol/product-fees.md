---
template: doc
title: Product Fees
description: Product Fees
sidebar:
  order: 2
  label: ""
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
