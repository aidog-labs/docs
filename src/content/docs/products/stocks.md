---
template: doc
title: Stocks
description: Stocks is AIDOG’s on-chain market for tokenized real-world assets.
sidebar:
  order: 4
draft: false
---
### What it is

Stocks is AIDOG’s on-chain market for tokenized real-world assets, currently focused on equities. Users swap between supported stock tokens and USDC, BNB, ETH, or $AIDOG.

Platform-issued tokens end with a. For example, CRCLa is the AIDOG-issued token intended to track CRCL on a 1:1 basis. One CRCLa may be backed by a mix of underlying RWA forms from providers such as Ondo, xStocks, and Binance-mapped assets. Users do not choose that mix. The system routes automatically.

### How to use it

1. Open Stocks.
2. Choose the token you pay with and the token you want to receive.
3. Enter an amount.
4. The swap module moves left and a route comparison panel appears on the right.
5. The top card is the AIDOG best route. Cards below show alternative routes and how much less they would return.
6. Confirm the swap.

If you do not have enough balance on BNB Chain, you must bridge assets to BSC first. Stocks assets currently settle on BSC, while the main AIDOG system is on Base.

### Money flow

1. You send the input token from your wallet.
2. The router looks at liquidity from sources such as CowSwap, PancakeSwap, LI.FI, LiquidMesh, and RWA inventories from Ondo, xStocks, and Binance-mapped markets.
3. It selects a route intended to maximize the amount you receive and minimize slippage.
4. You receive the output token in your wallet.

There is no extra routing service fee charged by AIDOG. You still pay ordinary network gas and any slippage embedded in the route.

### Risks and controls

* Tokenized stocks can move with the underlying market.
* Smart routing reduces slippage but cannot eliminate it.
* Underlying RWA issuers and bridges have their own risks.
* AIDOG does not guarantee 1:1 redemption against the traditional stock at all times. The “a” token is designed to track the underlying, but on-chain liquidity and issuer constraints still apply.
