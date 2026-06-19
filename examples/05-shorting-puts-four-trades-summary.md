---
title: "Shorting Puts & Four Basic Trades"
order: 5
tags: [options, shorting, puts, summary]
group: "Options Trading"
---

# Shorting Puts & The Four Basic Trades Summary

> A self-study companion built from the Options Trading Beginners course (Part 5). Learn how shorting put options works and review all four basic option trades.

---

## 1. What is Shorting a Put Option?

Shorting a put option means selling a put as an opening trade and buying it back later at a lower price (or letting it expire worthless) to profit.

**Key characteristics:**
- Put option prices **increase** as the stock price **falls**
- Put option prices **decrease** as the stock price **increases**
- When you short a put, you are **bullish** — you profit if the stock stays above the strike price or increases

| | **Buying a Put** | **Shorting a Put** |
|---|---|---|
| **Action** | Pay premium to buy | Collect premium by selling |
| **Profit when** | Stock price **falls** | Stock price **rises** or stays above strike |
| **Risk** | Limited to premium paid | Substantial (stock can fall to $0) |
| **Needs margin?** | No | Yes |

---

### 🧠 Quiz 1 — Shorting Puts Basics

````quiz
What market outlook do you have when you short a put option?

  - [ ] Bearish — you want the stock to fall
    That would be buying a put, not shorting one.

  - [x] Bullish — you want the stock to stay above the strike price
    When you short a put, you profit if the stock stays above the strike or increases. The put's value decreases.

  - [ ] Neutral — you don't care about direction
    You do care — you need the stock to stay above your strike.

  - [ ] You want maximum volatility
    You actually want the stock to stay stable above your strike.
````

````quiz
When you short a put option, what happens to your position as the stock price rises?

  - [ ] You lose money
    Put prices fall when the stock rises, which benefits your short position.

  - [x] You profit — the put option's value decreases
    Put option prices move inversely to the stock. A rising stock means the put loses value, which is what you want as a short seller.

  - [ ] Nothing happens
    The option price changes immediately with the stock price.

  - [ ] You must close the position immediately
    You can hold the position as long as you want.
````

---

## 2. The Activision Short Put Example

Let's walk through a real example from the course:

### The Setup
- **Date:** April 27
- **Stock:** Activision (ATVI) at **$67**
- **Option:** May $65 put (2 weeks to expiration)
- **Put price:** $1.75 (premium = **$175**)
- **Action:** You short the put, collecting **$175**

### Your Breakeven Price
```
Breakeven = Strike Price − Premium Received
Breakeven = $65 − $1.75 = $63.25
```

If Activision is above **$63.25** at expiration, you profit. Below that, you lose.

### What Happened
| Date | Stock Price | Put Value | Your Position |
|------|-------------|-----------|---------------|
| Apr 27 | $67 | $1.75 | +$175 (collected) |
| May 1 | Fell | $3.82 | −$207 (unrealized loss) |
| May expiry | $72.59 | ~$0.02 | +$173 (realized profit) |

The stock initially fell, but then surged. The put option collapsed, and you could buy it back for pennies.

---

### 🧠 Quiz 2 — Activision Example Calculations

````quiz
You short the Activision May $65 put for $1.75. What is your breakeven stock price at expiration?

  - [ ] $65.00
    That's the strike price, but you collected premium that gives you a buffer on the downside.

  - [x] $63.25
    Breakeven = Strike − Premium = $65 − $1.75 = $63.25. At this price, the option's intrinsic value equals what you collected.

  - [ ] $66.75
    That's above the strike — you'd make the full premium profit.

  - [ ] $63.75
    That would be $65 − $1.25, which is not the correct formula.
````

````quiz
On May 1, the put option increased to $3.82. What is your unrealized loss per contract at that moment?

  - [ ] $382
    That's the current value of the put, not your loss.

  - [x] $207
    You collected $1.75 ($175) and the put is now worth $3.82 ($382). Loss = $382 − $175 = $207.

  - [ ] $175
    That's what you collected, not your current loss.

  - [ ] $557
    That's the sum of both values, not the difference.
````

````quiz
Why did the put option's value collapse from $3.82 to pennies by expiration?

  - [ ] The stock price fell to $65
    If the stock fell to $65, the put would still have value.

  - [x] The stock surged to $72.59, well above the strike, with almost no time left
    With the stock $7+ above the strike and only days until expiration, there was virtually zero chance of the put becoming intrinsically valuable. Time decay finished the job.

  - [ ] The put option was automatically exercised
    The holder wouldn't exercise a put worth only pennies.

  - [ ] You bought back the option early
    The price collapse happened naturally from stock movement and time decay.
````

---

## 3. Why You Should Close Before Expiration

The course emphasizes **never holding short options through expiration**. Here's why:

Even if the put is worth only $0.02 (2 cents), what if Activision suddenly drops from $72.59 to $60 in one day? The $65 put would now have:
- Intrinsic value: $5.00
- Premium: $500
- Your loss: $325 ($500 − $175)

A **near-certain winner** can become a **significant loser** overnight. Always close your short positions before expiration.

---

### 🧠 Quiz 3 — Closing Positions

````quiz
Why should you close a short put option before expiration instead of letting it expire worthless?

  - [ ] To avoid paying the exercise fee
    The fee is not the concern — unexpected stock movement is.

  - [x] Because a sudden stock price drop could turn a near-certain profit into a large loss
    Even if the option is worth pennies, a large downward move could make it worth hundreds. Never leave that risk on the table.

  - [ ] Because brokers don't allow holding through expiration
    Brokers do allow it — it's just risky.

  - [ ] Because you always make more money by closing early
    You might make slightly less by closing early (give up a few cents), but you eliminate the catastrophic risk.
````

---

## 4. The Four Basic Option Trades — Summary

These four trades are the **building blocks** of every option strategy:

| # | Trade | Action | Profit When | Risk Level |
|---|-------|--------|-------------|------------|
| 1 | **Buy Call** | Pay premium | Stock price rises | Limited (premium paid) |
| 2 | **Buy Put** | Pay premium | Stock price falls | Limited (premium paid) |
| 3 | **Short Call** | Collect premium | Stock stays below strike | **Unlimited** |
| 4 | **Short Put** | Collect premium | Stock stays above strike | Substantial (to $0) |

### Key Relationships
- **Buying** options = limited risk, benefits from large moves
- **Shorting** options = benefits from time decay, but has significant risk
- **Calls** = bullish (profit when stock rises)
- **Puts** = bearish (profit when stock falls)
- **Shorting calls** = bearish (profit when stock stays below strike)
- **Shorting puts** = bullish (profit when stock stays above strike)

---

### 🧠 Quiz 4 — Four Basic Trades Review

````quiz
Which of the four basic option trades has theoretically unlimited risk?

  - [ ] Buying a call
    Buying a call caps your loss at the premium paid.

  - [ ] Buying a put
    Buying a put caps your loss at the premium paid.

  - [x] Shorting a call
    Shorting a call means you lose if the stock rises. Since the stock can rise indefinitely, your loss is theoretically unlimited.

  - [ ] Shorting a put
    Shorting a put has substantial risk (stock can fall to $0), but not unlimited risk.
````

````quiz
If you believe a stock will stay flat (not move much), which strategy benefits from time decay?

  - [ ] Buying a call
    Buying calls loses value from time decay — that works against you.

  - [ ] Buying a put
    Buying puts also loses value from time decay.

  - [x] Shorting a call or shorting a put
    When you short options, you collect premium and benefit as time decay erodes the option's extrinsic value. This works in your favor.

  - [ ] None — time decay always hurts
    Time decay hurts buyers but helps sellers (shorters).
````

````quiz
Match the trade to its market outlook:
1. Buy Call → ?
2. Buy Put → ?
3. Short Call → ?
4. Short Put → ?

  - [x] 1 = Bullish, 2 = Bearish, 3 = Bearish, 4 = Bullish
    Buy Call = Bullish (profit when stock rises). Buy Put = Bearish (profit when stock falls). Short Call = Bearish (profit when stock stays below strike). Short Put = Bullish (profit when stock stays above strike).

  - [ ] 1 = Bearish, 2 = Bullish, 3 = Bullish, 4 = Bearish
    This reverses the correct outlooks.

  - [ ] 1 = Bullish, 2 = Bullish, 3 = Bearish, 4 = Bearish
    Buy Put is bearish, not bullish.

  - [ ] 1 = Bearish, 2 = Bearish, 3 = Bullish, 4 = Bullish
    Buy Call is bullish, not bearish.
````

---

## 5. Putting It All Together

### Quick Reference

| Concept | Key Point |
|---------|-----------|
| **Buy Call** | Right to BUY at strike; bullish; limited risk |
| **Buy Put** | Right to SELL at strike; bearish; limited risk |
| **Short Call** | Obligation to sell at strike; bearish; unlimited risk |
| **Short Put** | Obligation to buy at strike; bullish; substantial risk |
| **Short Call Breakeven** | Strike Price + Premium Received |
| **Short Put Breakeven** | Strike Price − Premium Received |
| **Time Decay** | Hurts buyers, helps shorters |
| **Always Close** | Never hold short options through expiration |

---

> **Final thought from the course:** The four basic trades — buying calls, buying puts, shorting calls, and shorting puts — are the building blocks of every option strategy. Master these, and you'll understand how any complex options strategy works. Start simple, understand the risk, and always know where your breakeven is.
