---
title: "PMCC Advanced Scenarios"
order: 8
tags: [options, pmcc, covered-call, diagonal-spread, management, scenarios]
group: "Options Trading"
---

# PMCC Advanced Scenarios — Study Guide

> A companion to the Poor Man's Covered Call study guide. This guide focuses on real-world scenarios
> you'll encounter when managing a PMCC, including stock drops, flat markets, LEAP decay, and
> multi-cycle premium collection.

---

## 1. PMCC Approval and Capital Requirements

### Options Approval Level

PMCCs typically require **higher approval** than basic covered calls:

| Strategy                | Typical Approval Level |
| ----------------------- | ---------------------- |
| Covered Call            | Level 1 or 2           |
| Poor Man's Covered Call | **Level 3**            |

Brokers treat PMCCs as **diagonal spreads**, which require higher approval because they involve two
different expirations and strikes.

### Capital Requirements

The capital advantage is significant:

- **Covered call:** 100 shares × stock price (e.g., $100 stock = $10,000)
- **PMCC:** Deep ITM LEAP call (e.g., $3,000–$4,000)

You control similar exposure with **30–40% of the capital**.

---

### 🧠 Quiz 1 — Approval and Capital

```quiz
Why does a PMCC typically require higher options approval than a standard covered call?

  - [ ] Because it uses more capital
    PMCCs actually use less capital than covered calls.

  - [ ] Because it has unlimited risk
    PMCCs have defined risk (max loss = net debit paid).

  - [x] Because brokers classify it as a diagonal spread with two different expirations
    Diagonal spreads require Level 3 approval at most brokers, while basic covered calls only need Level 1 or 2.

  - [ ] Because it involves selling naked calls
    The short call is covered by the long LEAP, not naked.
```

```quiz
If a stock trades at $100 and a deep ITM LEAP costs $3,500, how much capital does a PMCC save compared to a traditional covered call?

  - [ ] About 10%
    The savings are much greater.

  - [x] About 65% — you control similar exposure for $3,500 instead of $10,000
    The PMCC uses roughly one-third of the capital, saving about 65%.

  - [ ] No savings — both require the same capital
    The whole point of a PMCC is capital efficiency.

  - [ ] It depends on the strike prices chosen
    While strikes affect cost, the capital savings are always significant.
```

---

## 2. Common Scenarios — What Happens in Real Life

### Scenario A: Stock Stays Flat (The Sweet Spot)

A flat market is often the **best environment** for a PMCC:

- The short call **decays** and expires worthless
- The LEAP **holds most of its value** (it still has time)
- You **collect premium** and your adjusted basis drops

![Flat market — short call decays while LEAP retains value](../ref/pmcc/frames_unique/frame_0068.jpg)

**What to do:**

1. Let the short call decay toward expiration
2. Close it early if you want to start the next cycle sooner
3. Sell another OTM call to continue collecting premium
4. Repeat as long as the thesis holds

**Example cycle:**

- Sell May $110 call for +$200
- Stock closes at $104 (flat, below $110)
- Short call expires worthless
- Adjusted basis drops by $200
- Sell June $112 call for +$160
- Repeat

---

### Scenario B: Stock Drops Significantly

When the stock falls, the short call usually expires worthless (good), but the **LEAP loses value**
(bad):

**Example:**

- Stock drops from $100 to $88
- LEAP value falls from $3,200 to ~$2,400
- Short call expires worthless, collecting $200
- Net position: LEAP down $800, premium up $200 → **net loss $600**

**What to do:**

1. **Reassess the bullish thesis** — is the stock drop temporary or fundamental?
2. **Avoid forcing a new short strike too close** to the current stock price
3. **Consider reducing risk** if the LEAP no longer behaves like quality stock replacement
4. **Don't panic** — your max loss is capped at the net debit paid

> **Key point:** Premium cushions the drawdown, but the anchor can lose more than the short-call
> income collected.

---

### Scenario C: Stock Rallies Above the Short Strike

The short call goes ITM, creating assignment pressure:

**What to do:**

1. **Roll up and out** before assignment risk becomes uncomfortable
2. **Time the roll carefully** — avoid rolling right before ex-dividend dates
3. **Ensure the roll is for a credit** (collect more than you pay)
4. **Keep the LEAP in place** — don't close the anchor unless you're exiting entirely

![Roll up and out — buy back ITM call, sell higher strike further out](../ref/pmcc/frames_unique/frame_0071.jpg)

---

### Scenario D: LEAP Decay Becomes Significant

As the LEAP approaches expiration, **theta accelerates** and the anchor may stop acting like
efficient stock replacement:

**When to worry:**

- LEAP has **less than 3–6 months** remaining
- Delta starts dropping below 70
- The option behaves more like a short-term call than a stock replacement

**What to do:**

1. **Roll the LEAP earlier** — don't wait for decay to speed up near the end
2. **Buy a new deep ITM LEAP** with 1–2 years to expiration
3. **Time the roll** when the old LEAP still has decent value

> **Pro tip:** Rolling the LEAP with a few months left preserves more value than waiting until
> expiration approaches.

---

### 🧠 Quiz 2 — Common Scenarios

```quiz
In a flat market, what happens to your PMCC position?

  - [ ] You lose money because the stock isn't moving
    Flat markets can be ideal — the short call decays while the LEAP holds value.

  - [x] The short call decays, you collect premium, and your adjusted basis drops
    This is the sweet spot — time decay works in your favor on the short leg.

  - [ ] You get assigned on the short call
    Assignment only happens if the stock is above the short strike.

  - [ ] The LEAP loses all its value
    The LEAP retains value as long as there's time remaining.
```

```quiz
If the stock drops significantly, what is the correct approach?

  - [ ] Immediately sell a new short call at a lower strike
    Selling too close to the current price increases assignment risk.

  - [x] Reassess the bullish thesis and avoid forcing a new short strike too close to the stock
    You need to determine if the drop is temporary before committing to a new cycle.

  - [ ] Exercise the LEAP to buy shares at the old strike
    Exercising burns extrinsic value and doesn't solve the directional problem.

  - [ ] Close everything immediately
    Your max loss is capped — panic selling isn't necessary.
```

```quiz
When should you consider rolling the LEAP anchor?

  - [ ] Only when it expires
    Waiting too long means accelerated decay and poor stock-replacement behavior.

  - [ ] Every 30 days
    Rolling too frequently incurs unnecessary costs.

  - [x] When it has less than 3–6 months remaining and delta starts dropping below 70
    Early rolls preserve more value and maintain efficient stock-replacement characteristics.

  - [ ] Never — the LEAP should be held to expiration
    Holding to expiration defeats the purpose of the long-term anchor.
```

```quiz
When rolling a short call that has gone ITM, what is the most important requirement?

  - [ ] Roll to a lower strike
    Rolling down reduces your upside and premium potential.

  - [ ] Roll to a nearer expiration
    Rolling closer increases gamma risk and assignment pressure.

  - [x] Ensure the roll is for a credit
    A credit roll means you're being compensated for extending the position.

  - [ ] Close the LEAP and start fresh
    The LEAP is your anchor — closing it exits the entire strategy.
```

---

## 3. Multi-Cycle Premium Collection — The Power of Repeating

The real edge of a PMCC comes from **repeating short-call sales** and watching your adjusted basis
decline over time.

### Worked Example: XYZ at $100

**Initial setup:**

- LEAP cost: $3,200 (Jan 2027 $70 call)
- First short call: May $110 call = +$200 premium
- Adjusted basis after cycle 1: $3,000

| Cycle | Short Call | Premium | Stock at Expiry | Result      | Adjusted Basis |
| ----- | ---------- | ------- | --------------- | ----------- | -------------- |
| 1     | May $110   | +$200   | $104            | Expires OTM | $3,000         |
| 2     | June $112  | +$160   | $108            | Expires OTM | $2,840         |
| 3     | July $115  | +$145   | $113            | Expires OTM | $2,695         |

**After 3 cycles:**

- Total premium collected: **$505**
- New effective basis: **$2,695** (down from $3,200)

The LEAP stays open, and you restart the loop with a lower cost basis.

---

### 🧠 Quiz 3 — Multi-Cycle Premium

```quiz
After 3 PMCC cycles collecting $200, $160, and $145 in premium on a $3,200 LEAP, what is the adjusted basis?

  - [ ] $3,200 (premium doesn't affect basis)
    Premium collected reduces your effective cost basis.

  - [ ] $3,000 (only the first premium matters)
    All premium collected counts toward basis reduction.

  - [x] $2,695 ($3,200 − $505 total premium)
    Each premium payment reduces your adjusted basis: $3,200 − $200 − $160 − $145 = $2,695.

  - [ ] $2,840 (average of the premiums)
    Basis reduction is cumulative, not averaged.
```

```quiz
Why is repeating short-call cycles the "real edge" of a PMCC?

  - [ ] Because you can sell more calls than a covered call
    You sell the same number of calls — the edge is in the capital efficiency.

  - [x] Because each cycle reduces your adjusted basis, lowering your effective cost over time
    Premium collection systematically reduces your cost basis, improving your risk/reward profile.

  - [ ] Because the LEAP appreciates faster than shares
    The LEAP tracks stock movement — it doesn't outperform shares.

  - [ ] Because you avoid all risk
    Risk remains; the edge is in capital efficiency and basis reduction.
```

---

## 4. Trade Outcomes — Decision Tree

Here's a quick decision guide for managing each short-call cycle:

```
Short call expires worthless?
├── YES → Keep premium, sell next OTM call (repeat cycle)
└── NO (stock above short strike)
    ├── Roll up and out for a credit?
    │   ├── YES → Execute roll, continue PMCC
    │   └── NO → Consider closing position
    └── Assignment risk high?
        ├── Sell LEAP + buy back stock (preserve extrinsic)
        └── Exercise LEAP (burns extrinsic — last resort)
```

---

### 🧠 Quiz 4 — Decision Tree

```quiz
When the short call expires worthless, what should you do next?

  - [ ] Close the entire position
    Expiring OTM is the best outcome — you keep the premium and continue.

  - [x] Keep the premium and sell a new OTM call for the next cycle
    The LEAP stays open, and you restart the income loop.

  - [ ] Roll the LEAP to a later expiration
    The LEAP doesn't need rolling — only the short call cycles.

  - [ ] Wait 60 days before selling the next call
    Waiting too long wastes time decay opportunity.
```

```quiz
When should you consider closing the entire PMCC position?

  - [ ] Every time the short call expires OTM
    That's the best outcome — you should continue, not close.

  - [x] When the roll cannot be done for a credit and the bullish thesis is weakened
    If you can't roll profitably and the stock outlook has changed, exiting may be appropriate.

  - [ ] When the LEAP reaches maximum value
    Maximum value occurs at the short strike — that's your profit target, not exit signal.

  - [ ] Never — always hold to expiration
    Circumstances change; being willing to exit is part of risk management.
```

---

## 5. LEAP Decay — When the Anchor Weakens

The LEAP is your stock replacement, but it's not permanent. Understanding when it weakens helps you
maintain the strategy's effectiveness.

### Decay Characteristics

| Time to Expiration | Theta Impact | Stock Replacement Quality      |
| ------------------ | ------------ | ------------------------------ |
| 18+ months         | Minimal      | Excellent — behaves like stock |
| 12–18 months       | Low          | Good — still effective         |
| 6–12 months        | Moderate     | Declining — delta may drop     |
| 3–6 months         | Significant  | Poor — no longer efficient     |
| < 3 months         | Accelerating | Avoid — too much decay         |

### Signs the LEAP Needs Rolling

1. **Delta drops below 70** — less stock-like movement
2. **Theta accelerates** — daily decay becomes noticeable
3. **Time remaining < 6 months** — approaching inefficient zone
4. **Premium collected exceeds LEAP's remaining time value** — diminishing returns

### How to Roll the LEAP

1. **Sell** the current LEAP (preserve remaining value)
2. **Buy** a new deep ITM LEAP with 1–2 years to expiration
3. **Target delta 70–90** for the new anchor
4. **Time the roll** when the old LEAP still has decent extrinsic value

---

### 🧠 Quiz 5 — LEAP Decay

```quiz
At what point should you consider rolling the LEAP anchor?

  - [ ] When it expires
    Waiting until expiration means you've lost all time value.

  - [x] When it has less than 6 months remaining and delta drops below 70
    This is the warning zone where the LEAP stops behaving like efficient stock replacement.

  - [ ] Every 30 days regardless of time remaining
    Rolling too frequently incurs unnecessary costs.

  - [ ] Only when the stock drops 50%
    Stock movement alone doesn't determine when to roll the LEAP.
```

```quiz
What is the primary risk of holding a LEAP too close to expiration?

  - [ ] You might get assigned
    Assignment only affects short options, not long options.

  - [x] Theta accelerates and the LEAP stops acting like efficient stock replacement
    As expiration approaches, the LEAP's delta and behavior become less stock-like.

  - [ ] The stock might drop
    Stock drops affect the position regardless of LEAP expiration.

  - [ ] You lose the ability to sell short calls
    You can still sell short calls, but the anchor is weakened.
```

---

## 6. Summary — Key Takeaways

### Scenario Checklist

| Scenario                             | Action                               | Priority                       |
| ------------------------------------ | ------------------------------------ | ------------------------------ |
| **Stock stays flat**                 | Let short call decay, repeat cycle   | Low stress — sweet spot        |
| **Stock drops significantly**        | Reassess thesis, avoid tight strikes | Medium — manage carefully      |
| **Stock rallies above short strike** | Roll up and out for credit           | High — act before assignment   |
| **LEAP decay accelerates**           | Roll to new LEAP with 1–2 years      | Medium — proactive maintenance |

### The Three Rules of PMCC Management

1. **Collect premium systematically** — each cycle reduces your adjusted basis
2. **Manage the short call proactively** — don't wait for assignment
3. **Maintain the LEAP anchor** — roll before decay accelerates

### When to Exit

- Bullish thesis is no longer valid
- Roll cannot be done for a credit
- LEAP is approaching expiration and can't be rolled efficiently
- Risk/reward no longer favors the position

---

> **Final thought:** The PMCC is a system, not a one-time trade. Success comes from disciplined
> premium collection, proactive management, and maintaining the LEAP anchor. When the stock stays
> flat or rises moderately, you win. When it drops significantly, your max loss is capped. The key
> is managing each component actively rather than passively holding.
