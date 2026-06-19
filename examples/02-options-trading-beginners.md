---
title: "Options Trading for Beginners: Put Options"
order: 2
tags: [options, puts, beginners]
group: "Options Trading"
---

# Options Trading for Beginners: Put Options Study Guide

## Introduction

Now that you understand call options, let's explore put options. The concepts are exactly the same, but everything is flipped on its head. Put option prices increase as the stock price falls, and decrease as the stock price rises.

---

## What is a Put Option?

A put option gives the buyer the **right to sell 100 shares** of stock at the strike price between now and the expiration date.

**Key characteristics of put options:**
- Put option prices increase as the stock price decreases
- Put option prices decrease as the stock price increases
- Put options have the same contract multiplier (100 shares) as call options

```quiz
What does a put option give the buyer the right to do?

  - [x] Sell 100 shares at the strike price
  - [ ] Buy 100 shares at the strike price
  - [ ] Buy 100 shares at the market price

  A put option gives the buyer the right to SELL shares at the strike price. A call option gives the right to buy.

---

How do put option prices change when the stock price falls?

  - [ ] They decrease
  - [x] They increase
  - [ ] They stay the same

  Put option prices move inversely to the stock price. When the stock goes down, put options become more valuable.
```

---

## Real-World Example: IWM Put Option (Profitable Trade)

**Setup:**
- IWM (Russell 2000 ETF) stock price: $130.71
- Put option strike price: $130
- Expiration: 38 days away (June)
- Option price: $6.24
- **Actual premium cost: $624** (6.24 × 100)

**Scenario: Stock falls to $122.72**
- Put option is now "in the money" (stock price below strike price)
- New option price: $11.30
- **New option value: $1,130** (11.30 × 100)
- **Profit: $506** ($1,130 - $624)
- **Return: 81%** on initial investment

**Key insight:** While IWM shares fell only 6.1%, the put option gained 81% — demonstrating the leverage of options.

```quiz
In the IWM example, what was the actual premium cost for the put option?

  - [ ] $6.24
  - [x] $624
  - [ ] $6,240

  Multiply the option price by 100 (the contract multiplier): $6.24 × 100 = $624.

---

When IWM fell from $130.71 to $122.72, what happened to the put option's value?

  - [ ] It decreased
  - [x] It increased from $624 to $1,130
  - [ ] It stayed the same

  Put options increase in value when the stock price falls, because the ability to sell shares at the fixed strike price becomes more valuable.
```

---

## Real-World Example: NVIDIA Put Option (Losing Trade)

**Setup:**
- NVIDIA stock price: $283
- Put option strike price: $280
- Expiration: 2 weeks away (May)
- Option price: $11
- **Actual premium cost: $1,100** (11 × 100)

**What happened:** After the initial sell-off, NVIDIA surged to $321 (over $40 above the strike price). With only one day left until expiration, the put option was trading for pennies — essentially worthless.

**Result:** The trader lost the entire $1,100 premium.

```quiz
What happens to a put option if the stock price is above the strike price at expiration?

  - [ ] It becomes more valuable
  - [x] It expires worthless
  - [ ] It automatically exercises

  If the stock price is above the put's strike price at expiration, the option has no value because you could sell shares at a higher price in the open market.

---

In the NVIDIA example, why did the put option lose all its value?

  - [ ] The stock price fell below $280
  - [x] The stock price rose above the strike price
  - [ ] The option expired before the trade date

  NVIDIA surged from $283 to $321, putting the stock price well above the $280 strike price. The put option became worthless.
```

---

## Buying Puts vs. Shorting Stock

Both strategies profit when a stock falls, but with very different risk profiles:

| Strategy | Risk | Potential Loss (NVIDIA Example) |
|----------|------|--------------------------------|
| **Buying a Put Option** | Limited to premium paid | $1,100 |
| **Shorting 100 Shares** | Unlimited (stock can rise infinitely) | $4,000+ |

**Why buying puts is safer:**
- Your maximum loss is capped at the premium paid
- Shorting has theoretically unlimited loss potential
- Puts provide the same directional bet with defined risk

```quiz
What is the maximum loss when buying a put option?

  - [ ] Unlimited
  - [x] The premium paid for the option
  - [ ] The strike price × 100
  - [ ] The current stock price × 100

  When you buy any option (call or put), the most you can lose is the premium you paid. You simply don't exercise the option if it's not profitable.

---

Why is buying a put option generally safer than shorting stock?

  - [ ] Puts always make money
  - [x] Puts have limited loss potential, while shorting has unlimited risk
  - [ ] Puts have higher returns

  Shorting stock means you profit if the price falls, but if the price rises, your losses are theoretically unlimited. Puts cap your loss at the premium paid.
```

---

## Key Concepts

### Option Pricing and Premium
- The option price shown is per share
- Multiply by 100 to get the actual cost (premium)
- Example: $6.24 price = $624 premium

### "In the Money" vs. "Out of the Money"
- **In the money**: Stock price is favorable relative to strike price
  - For puts: stock price is BELOW strike price
- **Out of the money**: Stock price is not favorable
  - For puts: stock price is ABOVE strike price

### You Don't Have to Exercise
Just like call options, 99% of put option trades are closed by selling the option, not by exercising it. The option's market price already reflects its exercise value.

```quiz
If a put option is priced at $8.50, what is the actual cost to buy one contract?

  - [ ] $8.50
  - [ ] $85.00
  - [x] $850.00
  - [ ] $8,500.00

  Multiply the option price by 100: $8.50 × 100 = $850.

---

What does it mean when a put option is "in the money"?

  - [ ] The option has expired
  - [x] The stock price is below the strike price
  - [ ] The stock price is above the strike price

  For put options, being "in the money" means the stock price is below the strike price, giving the option intrinsic value.
```

---

## Summary

| Concept | Key Point |
|---------|-----------|
| Put Option | Right to SELL at strike price |
| Price Movement | Put prices rise when stock falls |
| Contract Multiplier | Same as calls: multiply price × 100 |
| Maximum Loss | Premium paid (limited risk) |
| In the Money | Stock price below strike price |
| Leverage | Put options can gain more % than stock loses |
| vs. Shorting | Puts have defined risk; shorting has unlimited risk |
| Exercise | Rarely done; traders usually sell the option instead |

---

*Study guide based on options trading fundamentals. Always do your own research before trading.*
