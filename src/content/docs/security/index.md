---
template: doc
title: Overview
description: AIDOG is an on-chain private banking system. Using it means you
  accept smart-contract risk, market risk, and product-specific risk.
sidebar:
  order: 1
draft: false
---
### Overview

AIDOG is an on-chain private banking system. Using it means you accept smart-contract risk, market risk, and product-specific risk.

AIDOG aims to keep funds in smart contracts, publish key addresses, and make fee rules explicit. That does not remove risk. 

Read this page together with each product page before depositing.

### Smart Contracts & Audits

AIDOG products run through smart contracts on supported networks. The main app is on Base. Stocks currently settles on BNB Chain.

Security measures include:

* contract-level custody instead of a centralized account book
* published contract addresses
* audits for key contracts, where available
* product rules encoded on-chain where the current design allows

Important limits:

* An audit reduces risk. It does not make a contract risk-free.
* Some older contracts cannot be changed without a new deployment. For example, YieldMax’s 5% interest fee still goes 100% to House Pool because that route is already written into the current contract.
* Users should verify contract addresses from official AIDOG pages only.

If audit reports are published, they will be linked from the website or this documentation.
