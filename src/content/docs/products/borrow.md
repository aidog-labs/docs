---
template: doc
title: StrategyHub
description: "StrategyHub is a marketplace for actively managed crypto strategies. "
sidebar:
  order: 4
draft: false
---
### What it is

StrategyHub is a marketplace for actively managed crypto strategies. A creator deposits their own USDC and then buys and sells assets manually. Other users deposit USDC into the same strategy and receive shares. There is no preset token basket and no automatic allocation by ratio. The creator has full discretion over what to buy and sell.

### Who it is for

* Users who want the crypto experts to manage a crypto portfolio
* Creators who want to run a strategy and earn a performance fee only when others withdraw with a profit

### How to follow a strategy

1. Open StrategyHub and choose a strategy. 
2. Read the description, current holdings, historical return, and Carry Fee.
3. Click Deposit and enter a USDC amount.
4. Confirm in your wallet.
5. After the deposit is recorded, you receive strategy shares based on the strategy’s current net asset value (NAV).

Your funds are recorded first, and shares are finalized when the deposit is allocated. The interface may show a pending status such as “Funds received, shares being allocated.”

### How to create a strategy

To create a strategy you must:

* Deposit at least 10,000 USDC of your own capital.  
* Enter a strategy name, description, and Carry Fee.

If your wallet has less than 10,000 USDC, creation will fail and you will be asked to add USDC first.

The 10,000 USDC requirement exists so that a creator must put their own money at risk before managing other people’s money. This reduces the chance that someone opens many high-risk strategies with almost no personal capital, ignores losses, and only keeps strategies that happen to spike.

### Money flow

1. User deposits USDC into the strategy contract.  
2. The user receives shares of that strategy.  
3. The creator uses the strategy’s USDC to buy tokens, or sells tokens back into USDC.  
4. All holdings stay inside the strategy.  
5. When a user withdraws, the system calculates that user’s share of the current net assets.  
6. If the withdrawal includes profit, Carry Fee is taken from the profit only.  
7. The creator’s carry is automatically compounded back into the same strategy under the creator’s name. The creator cannot take that carry out until the strategy is closed.  
8.  5% portion of carry goes to the AIDOG system.

### Shares and NAV

Your ownership is measured in shares, not in a fixed token basket.

Approximate relationship:

* Your share % = Your share units / Total share units
* Your position value = Your share % * Strategy NAV

NAV is the current total value of all assets in the strategy, including USDC and tokens. Because the creator trades manually, NAV changes when prices move and when the creator buys or sells.

### Carry Fee

The number shown on the page is the total performance fee.

It is made of:

* 5% fixed to the AIDOG system
* Creator’s share, set by the creator when the strategy is created

Example: if the page shows 15%, that means 5% to AIDOG + 10% to the creator.

Rules:

* Carry is charged only when an investor withdraws with a profit.  
* This includes the creator’s own capital.
* If a withdrawal has no profit, no carry is charged.  
* After creation, the creator may lower the creator portion, but cannot raise it.

If a user withdraws a profitable position:

* Profit = Withdrawal value - Cost basis of the withdrawn portion
* Total carry = Profit * Displayed carry rate
* AIDOG system portion = Profit * 5%
* Creator portion = Profit * ( Displayed carry rate - 5%)
* User receives ≈ Withdrawal value - Total carry - trading slippage/fees

The final USDC received may differ slightly from the preview because of trading slippage and fees.

### Creator actions

Only the creator can:

* Buy tokens with the strategy’s USDC
* Sell a specific token back into USDC
* Edit the strategy name, description, and lower the carry
* Close the strategy

The exact number of tokens received or USDC received cannot be guaranteed in advance because of market depth and slippage.

When the creator closes a strategy, remaining assets are converted and returned to shareholders according to their shares. Creator rewards that were compounded into the strategy are also settled at that time.

### Risks and controls

* Strategies can lose money. There is no principal protection.  
* The creator has discretion over trades. A bad or malicious creator can damage performance.  
* High-risk token choices can create large swings. 
* Withdrawal value can differ from the on-screen estimate.  
* AIDOG may retain limited emergency controls, such as pausing a strategy and, if implemented, distributing remaining assets pro rata to current shareholders. Any such control should be treated as a safety backstop, not a guarantee against loss.

Users should review the creator, holdings, history, and fee before depositing. Only use capital you can afford to lose.
