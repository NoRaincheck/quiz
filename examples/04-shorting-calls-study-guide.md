---
title: "Shorting Calls"
order: 4
tags: [options, shorting, calls, selling]
group: "Options Trading"
---

# Shorting Options — Intrinsic & Extrinsic Value Study Guide

> A self-study companion built from the Options Trading Beginners course (Part 4). Learn how intrinsic and extrinsic value work when you **sell** options instead of buying them.

---

## 1. Buying vs. Shorting Options

Until now, you've only learned about **buying** options — a "buy low, sell high" approach. But just like you can short stocks (sell first, buy back later), you can also **short options**.

| | **Buying an Option** | **Shorting an Option** |
|---|---|---|
| **Action** | Pay premium to buy | Collect premium by selling |
| **Profit when** | Option price **increases** | Option price **decreases** |
| **Risk** | Limited to premium paid | **Unlimited** (for calls) |
| **Needs margin?** | No | **Yes** (collateral required) |

When you short an option, you're betting that the option's price will fall as time passes and extrinsic value decays.

---

### 🧠 Quiz 1 — Buying vs. Shorting

````quiz
What is the key difference between buying and shorting an option?

  - [ ] Buying costs more money
    Both involve the same premium — the direction is what differs.

  - [x] Buying profits when the option price rises; shorting profits when it falls
    When you buy, you want the price to go up. When you short, you sell first and want to buy back cheaper.

  - [ ] Shorting requires no margin account
    Shorting requires a margin account with collateral. Buying does not.

  - [ ] Buying has unlimited risk
    Buying has limited risk (you can only lose the premium). Shorting has unlimited risk (for calls).
````

````quiz
When you short an option, what do you do first?

  - [ ] Pay the premium to acquire the option
    That's buying, not shorting.

  - [x] Collect the premium by selling the option
    Shorting means selling an option you don't own, collecting the premium upfront.

  - [ ] Wait for the option to expire
    You'd need to close the position before or at expiration.

  - [ ] Exercise the option
    You don't own the option — you sold it.
````

---

## 2. The IWM Short Call Example — 100% Extrinsic Value

Let's look at a concrete example from the course:

- **Stock:** IWM at **$120.59**
- **Option:** June $125 call, **36 days** to expiration
- **Option price:** $4.66 (premium = **$466**)

Since the strike ($125) is **above** the stock price ($120.59), this call option has **zero intrinsic value** — its entire $4.66 premium is **extrinsic (time) value**.

This is ideal for shorting because:
- The option is 100% extrinsic, meaning the entire premium is time value that will decay.
- The stock is below the strike, so there's no immediate intrinsic pressure.
- As time passes and the stock stays below $125, the extrinsic value shrinks.

If you short this option, you **collect $466** into your account. But this is **not profit yet** — you still need to close the trade by buying back the option at a lower price.

After 30 days, if IWM stays below $125, the option (with 1 day left) is worth only **$0.23** ($23 premium). You buy it back for $23, and your profit is:

```
$466 (collected) − $23 (paid to close) = $443 profit
```

---

### 🧠 Quiz 2 — Intrinsic Value in Short Positions

````quiz
In the IWM example, the stock is at $120.59 and the $125 call option has a premium of $4.66. What is the intrinsic value of this option?

  - [ ] $4.66
    That's the total premium. Since the stock is below the strike, intrinsic value is $0.

  - [x] $0
    The stock price ($120.59) is below the strike ($125), so this call has no intrinsic value. The entire premium is extrinsic.

  - [ ] $4.41
    That would be $125 − $120.59, which is the put's intrinsic value, not the call's.

  - [ ] $125
    That's the strike price.
````

````quiz
Why is a 100% extrinsic value option attractive to someone who wants to short it?

  - [ ] Because extrinsic value increases over time
    Extrinsic value decreases over time — that's time decay.

  - [x] Because the entire premium represents time value that will decay
    If the option is 100% extrinsic, the whole premium is "at risk" of decaying away as expiration approaches.

  - [ ] Because intrinsic value provides a safety net
    There is no intrinsic value in this case — it's 100% extrinsic.

  - [ ] Because shorting 100% extrinsic options requires no margin
    Shorting always requires a margin account regardless of the option's composition.
````

---

## 3. The Netflix Short Call Disaster — When It Goes Wrong

This is where the **unlimited risk** of shorting calls becomes painfully clear.

### The Setup
- **April 9:** Netflix closes at **$370**
- You believe Netflix will NOT rise above $400
- You **short** the June $400 call for **$17** ($1,700 premium)

### What Happened
- A few days later, Netflix surges to **$440**
- The June $400 call option now trades at **$62.50** ($6,250 premium)

### The Breakdown at $440 Stock Price

| Component | Value |
|-----------|-------|
| Stock price | $440 |
| Strike price | $400 |
| **Intrinsic value** | **$40.00** ($440 − $400) |
| Option price | $62.50 |
| **Extrinsic value** | **$22.50** ($62.50 − $40.00) |

### Your Loss
```
$1,700 (collected) − $6,250 (paid to close) = −$4,550 loss
```

Just one contract. In just a few days. The stock moved $70 in one direction and your loss was **$4,550**.

> **Key insight:** Even though the option gained $22.50 of extrinsic value, the **$40 of intrinsic value** was the main driver of the loss. When the stock surged past your strike, the option acquired massive intrinsic value that you're on the hook for.

---

### 🧠 Quiz 3 — Calculating Losses on Short Calls

````quiz
You short a call option for $8.00 ($800 premium). The stock surges and the option is now worth $25.00 ($2,500 premium). What is your loss?

  - [ ] $800
    That's the premium you collected, but you still need to buy back the option.

  - [ ] $2,500
    That's what you paid to close, but you collected $800 upfront.

  - [x] $1,700
    Loss = Premium paid to close − Premium collected = $2,500 − $800 = $1,700.

  - [ ] $3,300
    That's the sum of both premiums, not the difference.
````

````quiz
In the Netflix example, the stock was at $440 and the $400 call was worth $62.50. How much of that premium was intrinsic value?

  - [ ] $62.50
    That's the total premium, not just intrinsic.

  - [x] $40.00
    Intrinsic value = Stock Price − Strike Price = $440 − $400 = $40.00.

  - [ ] $22.50
    That's the extrinsic value, not the intrinsic value.

  - [ ] $400
    That's the strike price.
````

````quiz
Why did the Netflix short call option gain extrinsic value ($22.50) even though the stock was already above the strike?

  - [ ] Because extrinsic value only exists when options are OTM
    Extrinsic value exists in both ITM and OTM options — it reflects remaining time and volatility.

  - [x] Because there was still time until expiration and volatility in the stock
    Even ITM options have extrinsic value as long as there's time left and the stock could move further.

  - [ ] Because the strike price changed
    The strike price doesn't change after the option is created.

  - [ ] Because intrinsic value can become extrinsic value
    They are separate components; intrinsic doesn't "become" extrinsic.
````

---

## 4. Breakeven Price for Short Calls

You can still **make money** on a short call even if the stock price is **above the strike price** — as long as it's below your **breakeven price**.

### Formula
```
Breakeven Price = Strike Price + Premium Received
```

### Netflix Example
- Short the $400 call for **$17**
- Breakeven = $400 + $17 = **$417**

| Stock Price at Expiration | Intrinsic Value | Result |
|--------------------------|-----------------|--------|
| $400 | $0 | Full $1,700 profit (option expires worthless) |
| $410 | $10 | $700 profit ($1,700 − $700) |
| $417 | $17 | **Breakeven** ($1,700 − $1,700 = $0) |
| $420 | $20 | $300 loss ($1,700 − $2,000) |
| $440 | $40 | $2,300 loss (extrinsic also adds to it) |

> **Key insight:** At expiration, extrinsic value is $0. So the option's price equals its intrinsic value. Your breakeven is simply the strike plus what you collected.

---

### 🧠 Quiz 4 — Breakeven Calculations

````quiz
You short a call option with a $90 strike for a premium of $5.00 ($500). What is your breakeven stock price at expiration?

  - [ ] $90
    That's the strike price, but you collected premium that gives you a buffer.

  - [x] $95
    Breakeven = Strike + Premium = $90 + $5 = $95. At $95, the option's intrinsic value equals what you collected.

  - [ ] $100
    That would be a $5 loss, not breakeven.

  - [ ] $85
    That's below the strike — you'd make the full premium profit.
````

````quiz
You short a $130 call for $3.00 ($300 premium). At expiration, the stock is at $138. What is your P&L?

  - [ ] $300 profit
    The stock is above your strike, so there's intrinsic value to offset your premium.

  - [x] $500 loss
    Intrinsic = $138 − $130 = $8.00 ($800). Loss = $800 − $300 = $500 loss.

  - [ ] $200 profit
    The intrinsic value exceeds your premium, so you're in the red.

  - [ ] $1,100 loss
    That's too high — the intrinsic value is only $8, not $11.
````

````quiz
At expiration, why does the breakeven formula simply become Strike + Premium Received?

  - [ ] Because extrinsic value doubles at expiration
    Extrinsic value goes to ZERO at expiration.

  - [x] Because extrinsic value is zero at expiration, so the option price equals intrinsic value
    With no time left, the option's price is purely intrinsic. So you need intrinsic = premium collected to break even.

  - [ ] Because the strike price adjusts at expiration
    The strike price never changes.

  - [ ] Because margin requirements change at expiration
    Margin doesn't affect the breakeven calculation.
````

---

## 5. Margin Requirements — The Cost of Shorting

Shorting options is **incredibly risky** because:
- A call option's price has **no upper limit** (the stock can go to infinity)
- If you're wrong, your losses can be enormous

Because of this risk, you need a **margin account** with collateral.

### IWM Example — Margin
- Short IWM $125 call, collect **$466** premium
- Platform requires **~$2,000** in buying power (collateral) set aside
- You're putting up $2,000 to potentially make $466

This is the asymmetric risk: you risk $2,000+ in potential losses to make $466. That's why shorting options is considered an **expensive trade to enter** in terms of required capital.

---

### 🧠 Quiz 5 — Risk & Margin

````quiz
Why does shorting a call option have theoretically unlimited risk?

  - [ ] Because the option premium keeps increasing
    The risk is unlimited because the stock price has no upper limit, not because of the premium itself.

  - [x] Because the stock price has no upper limit, so the call option price can rise indefinitely
    If the stock goes to $1,000, $5,000, or beyond, your short call loses more and more money with no cap.

  - [ ] Because extrinsic value always increases
    Extrinsic value decays over time, it doesn't increase.

  - [ ] Because margin requirements double every day
    Margin requirements don't work that way.
````

````quiz
In the IWM example, you collected $466 in premium but the platform required $2,000 in collateral. What does this tell you about shorting options?

  - [ ] You can always make more than your collateral requirement
    The collateral is there because you could lose far more than you collect.

  - [x] Shorting options requires significant capital because potential losses can far exceed the premium collected
    You collected $466 but need $2,000 set aside because the stock could surge, creating large losses.

  - [ ] The platform is charging an unfair fee
    This isn't a fee — it's margin/collateral to cover potential losses.

  - [ ] You should never short options because the margin is too high
    While risky, shorting options is a legitimate strategy — just one that requires understanding the risk.
````

````quiz
What is the minimum amount you can lose when you buy an option vs. when you short a call option?

  - [ ] Buying: unlimited; Shorting: premium collected
    Reversed — buying has limited risk, shorting has unlimited risk (for calls).

  - [x] Buying: premium paid; Shorting: theoretically unlimited
    When you buy, you can only lose what you paid. When you short a call, losses are unlimited if the stock surges.

  - [ ] Both have unlimited risk
    Buying an option caps your loss at the premium paid.

  - [ ] Both have limited risk
    Shorting a call has unlimited risk because the stock can rise without limit.
````

---

## 6. Quick Reference Cheat Sheet

| Concept | Formula / Rule |
|---------|---------------|
| **Short call profit** | Premium collected − Premium paid to close |
| **Breakeven (short call)** | Strike Price + Premium Received |
| **Intrinsic (call)** | max(0, Stock Price − Strike Price) |
| **Intrinsic (put)** | max(0, Strike Price − Stock Price) |
| **Extrinsic** | Option Premium − Intrinsic Value |
| **Buying power effect** | Margin required to enter a short position |
| **Short call risk** | Theoretically unlimited (stock can rise forever) |
| **Short put risk** | Substantial (stock can fall to $0) |
| **At expiration** | Extrinsic value = $0; Option price = Intrinsic value |

---

## 7. Summary: The Big Picture

### When Shorting Works (Your Best Case)
- Stock stays **below** the call strike (or above the put strike)
- **Time decay** erodes extrinsic value
- You buy back the option cheaper (or it expires worthless)
- You keep most or all of the premium

### When Shorting Fails (Your Worst Case)
- Stock **surges** (for calls) or **crashes** (for puts)
- Option gains **intrinsic value** rapidly
- Losses can be **far greater** than the premium collected
- **Unlimited risk** on short calls

### The Role of Intrinsic & Extrinsic Value
- **Extrinsic value** is your friend when shorting — it decays over time, working in your favor
- **Intrinsic value** is your enemy when shorting — it grows as the stock moves against you, and it has no upper limit
- The best short trades target **100% extrinsic value** options (OTM) where time decay does the heavy lifting

---

> **Final thought from the course:** Shorting options flips the script on buying. Instead of hoping the option gains value, you're hoping it loses value as time passes. But that convenience comes with a dangerous trade-off: unlimited risk. Always understand the intrinsic and extrinsic components of the option you're selling before putting up the collateral.
