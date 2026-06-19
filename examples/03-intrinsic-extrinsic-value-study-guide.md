---
title: "Intrinsic & Extrinsic Value"
order: 3
tags: [options, intrinsic, extrinsic, value]
group: "Options Trading"
---

# Intrinsic & Extrinsic Value — Study Guide

> A self-study companion built from the Options Trading Beginners course. Read each section, then
> test yourself with the embedded quiz.

---

## 1. The Anatomy of an Option Price

Every option premium (the price you pay to buy an option) is made up of **two components**:

1. **Intrinsic Value** — the real, immediate benefit the option provides if exercised _right now_.
2. **Extrinsic Value** (also called **Time Value**) — the extra amount you pay for the _potential_
   that the option will gain more intrinsic value before expiration.

```
Option Premium = Intrinsic Value + Extrinsic Value
```

Think of it like a house example from the course:

- The house is worth **$350,000**.
- You hold a **call option** with a **$200,000 strike price**.
- Your option gives you the right to buy the house for $200,000 when it's worth $350,000.
- The **intrinsic value** is **$150,000** — that's the guaranteed benefit you could realize today.
- Anything you pay _above_ $150,000 for that option is **extrinsic value**.

---

### 🧠 Quiz 1 — Intrinsic Value Basics

```quiz
A call option on Tesla has a strike price of $800. Tesla's current stock price is $836.41. What is the intrinsic value of this call option?

  - [x] $36.41
    Intrinsic value for a call = Stock Price − Strike Price = $836.41 − $800 = $36.41.

  - [ ] $800
    That's the strike price, not the intrinsic value.

  - [ ] $836.41
    That's the current stock price, not the intrinsic value.

  - [ ] $872.82
    That would be the sum of stock price and strike price, which is not meaningful here.
```

```quiz
A put option has a strike price of $130. The underlying stock is currently trading at $120. What is the intrinsic value of this put option?

  - [ ] $250
    You don't add the strike and stock price for put intrinsic value.

  - [x] $10
    Intrinsic value for a put = Strike Price − Stock Price = $130 − $120 = $10.

  - [ ] $130
    That's the strike price, not the intrinsic value.

  - [ ] $120
    That's the stock price, not the intrinsic value.
```

---

## 2. Intrinsic Value — Rules of Thumb

### Call Options

| Term                       | Condition                  | Intrinsic Value            |
| -------------------------- | -------------------------- | -------------------------- |
| **In the Money (ITM)**     | Stock Price > Strike Price | Stock Price − Strike Price |
| **At the Money (ATM)**     | Stock Price = Strike Price | $0                         |
| **Out of the Money (OTM)** | Stock Price < Strike Price | $0                         |

### Put Options

| Term                       | Condition                  | Intrinsic Value            |
| -------------------------- | -------------------------- | -------------------------- |
| **In the Money (ITM)**     | Stock Price < Strike Price | Strike Price − Stock Price |
| **At the Money (ATM)**     | Stock Price = Strike Price | $0                         |
| **Out of the Money (OTM)** | Stock Price > Strike Price | $0                         |

> **Key Rule:** An option's price must always be **at least** equal to its intrinsic value. You
> would never sell an option for less than what you could get by exercising it yourself.

---

### 🧠 Quiz 2 — Moneyness & Intrinsic Value

```quiz
Which of the following options has intrinsic value?

  - [x] A call option with a $90 strike when the stock is at $95
    Stock price ($95) > strike ($90), so this call is ITM with $5 of intrinsic value.

  - [ ] A call option with a $90 strike when the stock is at $85
    Stock price ($85) < strike ($90), so this call is OTM with $0 intrinsic value.

  - [ ] A put option with a $90 strike when the stock is at $95
    Stock price ($95) > strike ($90), so this put is OTM with $0 intrinsic value.

  - [ ] A put option with a $90 strike when the stock is at $90
    Stock price equals strike, so this put is ATM with $0 intrinsic value.
```

```quiz
An option is described as "in the money." What does this tell you?

  - [x] The option has intrinsic value
    "In the money" means the option has real, immediate benefit — i.e., intrinsic value > $0.

  - [ ] The option is about to expire
    Moneyness tells you nothing about time to expiration.

  - [ ] The option has zero extrinsic value
    An ITM option can still have significant extrinsic value.

  - [ ] The option is a put option
    Both calls and puts can be in the money.
```

---

## 3. Extrinsic Value (Time Value)

Extrinsic value represents the **potential** for an option to become more valuable before it
expires. It's the portion of the premium _above_ intrinsic value.

```
Extrinsic Value = Option Premium − Intrinsic Value
```

### The Tesla Example (from the course)

- **Stock price:** $836.41
- **Strike price (call):** $800
- **Intrinsic value:** $36.41
- **Option premium:** $94.10
- **Extrinsic value:** $94.10 − $36.41 = **$57.69**

Why is there $57.69 of extrinsic value? Because there are **over 30 days** until expiration, and
Tesla is a volatile stock. There's significant potential for Tesla to move higher, which would
increase the option's intrinsic value.

---

### 🧠 Quiz 3 — Calculating Extrinsic Value

```quiz
A call option is trading for $12.50. The stock price is $52 and the strike price is $50. What is the extrinsic value?

  - [ ] $12.50
    That's the total premium, not just the extrinsic portion.

  - [ ] $52
    That's the stock price.

  - [x] $10.50
    Intrinsic value = Stock Price − Strike Price = $52 − $50 = $2.00. Extrinsic value = $12.50 − $2.00 = **$10.50**.

  - [ ] $50
    That's the strike price.
```

```quiz
An option has a premium of $8.00 and zero intrinsic value. What is the extrinsic value?

  - [ ] $0
    If intrinsic is $0, the entire premium is extrinsic.

  - [x] $8.00
    Extrinsic Value = $8.00 − $0 = $8.00. When an option is 100% OTM, its entire premium is extrinsic (time) value.

  - [ ] $4.00
    There's no basis for splitting this evenly.

  - [ ] $16.00
    Extrinsic value cannot exceed the total premium.
```

---

## 4. Time Decay (Extrinsic Value Decay)

This is one of the **most important concepts** in options trading.

> **Extrinsic value decays as time passes.** As an option approaches expiration, there is less time
> for the stock to move, so the extrinsic value shrinks.

### The Apple Example (from the course)

Apple stock was trading at **$304.92**. Consider two **$305 strike call options**:

| Expiration     | Days to Expiry | Premium                      |
| -------------- | -------------- | ---------------------------- |
| January 2021   | 246 days       | $34.00 ($3,400 per contract) |
| May (next day) | 1 day          | $3.07 ($307 per contract)    |

Both options have **zero intrinsic value** (stock price is below the $305 strike). So the entire
premium is extrinsic value.

- The **246-day option** costs **10× more** because there's vastly more time for Apple to move above
  $305.
- The **1-day option** is cheap because it's very unlikely Apple will make a big move in just one
  day.

**If you bought the 246-day option for $3,400 and held it until one day before expiration with Apple
still at $304.92**, you'd lose approximately **$3,100** — all from the passage of time. That loss is
**time decay**.

---

### 🧠 Quiz 4 — Time Decay

```quiz
You buy a call option with 90 days to expiration for a premium of $5.00. One week later, the stock price hasn't changed at all. What happens to your option's value?

  - [ ] It stays at $5.00
    Time has passed, so extrinsic value has decreased. The option is worth less.

  - [x] It is worth less than $5.00
    One week of time decay has reduced the extrinsic value. Even with no stock movement, the option has lost value.

  - [ ] It is worth more than $5.00
    Without a stock price increase, time decay works against you.

  - [ ] It becomes worthless immediately
    Only 7 days have passed out of 90. Some extrinsic value remains.
```

```quiz
Two identical call options on the same stock have the same strike price. Option A expires in 30 days. Option B expires in 180 days. Which has more extrinsic value?

  - [ ] Option A (30 days)
    Less time means less potential for the stock to move, so less extrinsic value.

  - [x] Option B (180 days)
    More time until expiration means more opportunity for the stock to move favorably, so more extrinsic value.

  - [ ] They have the same extrinsic value
    Extrinsic value depends on time to expiration, so they differ.

  - [ ] It depends on the stock price only
    Time to expiration is a major factor in extrinsic value.
```

```quiz
An option has 10 minutes left until expiration and zero intrinsic value. What can you say about its extrinsic value?

  - [ ] It is very high
    With only 10 minutes left, there's almost no time for a meaningful stock move.

  - [x] It is very low
    With only 10 minutes remaining and zero intrinsic value, the option is likely to expire worthless. Its extrinsic value is minimal.

  - [ ] It is equal to intrinsic value
    The option has zero intrinsic value, so this is impossible.

  - [ ] It is the same as a 30-day option
    A 30-day option has far more time value than a 10-minute option.
```

---

## 5. Why Buying Options Can Lose Money Without Stock Movement

If you buy a call or put option and the stock price **doesn't move**, you **will lose money**. Why?

- Every option you buy contains **extrinsic value**.
- As time passes, that extrinsic value **decays**.
- If the stock doesn't move enough to offset that decay, the option's total value drops.
- You bought something that's losing value every day — that's time decay working against you.

The course mentions that **selling** options (strategies covered later) actually _benefit_ from time
decay, because you collect the premium and watch the extrinsic value evaporate in your favor.

---

### 🧠 Quiz 5 — Putting It All Together

```quiz
You buy a put option for $4.50. The option has $1.00 of intrinsic value and $3.50 of extrinsic value. One month passes, the stock price is unchanged, and the option now has 10 days left to expiration. The intrinsic value is still $1.00. What is the most likely new extrinsic value?

  - [ ] $3.50
    Time has passed, so extrinsic value should have decreased, not stayed the same.

  - [x] Less than $3.50
    With only 10 days left (down from more), there's less time for the stock to move favorably. Extrinsic value has decayed.

  - [ ] $0
    Even with 10 days left, some extrinsic value likely remains unless the option is deep OTM and unlikely to move.

  - [ ] More than $3.50
    Extrinsic value decreases with time, it doesn't increase.
```

```quiz
Which statement best describes the relationship between intrinsic value and the option's minimum price?

  - [ ] The option can trade below its intrinsic value
    No — you would never sell an option for less than its exercise value.

  - [x] The option must trade at or above its intrinsic value
    The option premium must always be ≥ intrinsic value. You could always exercise it for at least that much.

  - [ ] Intrinsic value has no impact on the option's price
    Intrinsic value sets the floor for the option's price.

  - [ ] Extrinsic value is always greater than intrinsic value
    Deep ITM options can have more intrinsic than extrinsic value.
```

```quiz
A stock is trading at $100. You own a call option with a $95 strike that is trading for $7.00. Which of the following is TRUE?

  - [x] The intrinsic value is $5.00 and the extrinsic value is $2.00
    Intrinsic = $100 − $95 = $5.00. Extrinsic = $7.00 − $5.00 = $2.00.

  - [ ] The intrinsic value is $7.00 and the extrinsic value is $0
    The intrinsic value is $5, not $7. The $7 is the total premium.

  - [ ] The option is out of the money
    The strike ($95) is below the stock price ($100), so this call is in the money.

  - [ ] The extrinsic value is $5.00
    The extrinsic value is $2.00, not $5.00.
```

---

## 6. Quick Reference Cheat Sheet

| Concept                    | Definition                                                                    |
| -------------------------- | ----------------------------------------------------------------------------- |
| **Intrinsic Value**        | The real, immediate value if the option were exercised now                    |
| **Extrinsic Value**        | The portion of the premium above intrinsic value — reflects time & volatility |
| **Time Value**             | Another name for extrinsic value                                              |
| **In the Money (ITM)**     | Option has intrinsic value > $0                                               |
| **Out of the Money (OTM)** | Option has $0 intrinsic value (100% extrinsic)                                |
| **At the Money (ATM)**     | Strike price ≈ stock price                                                    |
| **Time Decay**             | The gradual loss of extrinsic value as expiration approaches                  |
| **Option Floor**           | An option's price can never fall below its intrinsic value                    |

### Call Intrinsic Value

```
Intrinsic Value = max(0, Stock Price − Strike Price)
```

### Put Intrinsic Value

```
Intrinsic Value = max(0, Strike Price − Stock Price)
```

### Premium Breakdown

```
Option Premium = Intrinsic Value + Extrinsic Value
Extrinsic Value = Option Premium − Intrinsic Value
```

---

> **Final thought from the course:** Understanding intrinsic and extrinsic value is foundational.
> Every options strategy — whether you're buying or selling — revolves around these two components.
> Master them, and the rest of options trading starts to make sense.
