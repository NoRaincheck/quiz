---
title: "Managing a PMCC — 3 Scenarios"
order: 9
tags: [options, pmcc, covered-call, management, rolling, scenarios, diagonal-spread]
group: "Options Trading"
---

# Managing a PMCC — 3 Scenarios

> A study guide based on real-world PMCC management scenarios. This guide covers the three
> situations every PMCC trader faces: the stock approaching the short strike, the short call going
> deep ITM, and the stock collapsing into a losing position.

---

## Video Overview

The video explores **three scenarios** for managing a Poor Man's Covered Call:

1. **Stock approaching and testing the short call strike** — How to roll up and out
2. **Short call already deep ITM** — When rolling becomes difficult and options are limited
3. **Stock collapsed, position in the red** — How to handle a losing trade

![Title slide — How to Manage a Poor Man's Covered Call](../ref/pmcc-3-scenarios/frames/frame_0001.jpg)

---

## 1. Scenario 1 — Stock Approaching the Short Call Strike

### The Setup

The video uses a **HOOD (Robinhood) PMCC** as the example:

| Leg        | Strike   | Expiration | DTE      |
| ---------- | -------- | ---------- | -------- |
| Long LEAP  | $50 Call | Jan 2028   | 647 days |
| Short Call | $80 Call | May 2026   | ~30 days |

- Stock was at **$69** when the trade was entered
- Stock has since risen to **~$80**, testing the short call strike
- The short call was sold for **$6.15** ($615 per contract)

![HOOD PMCC position — stock at $79.09 testing the $80 short strike](../ref/pmcc-3-scenarios/frames/frame_0010.jpg)

### Why Rolling Matters

When the stock approaches the short strike, **profitability tapers off**. The upside is capped at
the short strike. Rolling up and out extends that cap.

### How to Roll Up and Out

To roll the short call for **free (zero debit)**, you must:

1. **Buy back** the short call (costs $615 in this example)
2. **Sell a new call** further out collecting **more than $615**

The key principle: **the further out you go, the higher the strike you can sell.**

### Roll Options — Near Term vs. Far Out

| Roll Target        | Strike | Credit | New Upside         |
| ------------------ | ------ | ------ | ------------------ |
| June 2026 (65 DTE) | $85    | $6.55  | +$5 points         |
| July 2026 (94 DTE) | $90    | >$6.15 | More upside        |
| Sep 2026 (157 DTE) | $100   | >$6.15 | Significant upside |

![Rolling up and out — P&L chart showing extended upside with adjustment](../ref/pmcc-3-scenarios/frames/frame_0022.jpg)

**The trade-off:** Rolling to June 2026 only adds ~$5 of upside, but HOOD moved $7.50 in a single
day. The further out you roll, the more upside you capture.

### The Maximum Roll — Converting to a Bull Call Spread

The furthest you can roll the short call is to the **expiration of your long LEAP** (Jan 2028). In
this case:

- You could sell the **$220 strike** call in Jan 2028
- This creates a **$50/$220 bull call spread** with 647 days to expiration
- **Massively** increases your upside

> ⚠️ **This changes the trade** from a PMCC to a long-term call spread. You lose the benefit of
> month-to-month rolling and the income stream from repeated short-call sales.

### Margin Warning

You **cannot** roll the short call beyond the LEAP expiration. Your broker will require **margin**
for the naked short call, which ties up capital — defeating the capital efficiency of the PMCC.

### The Trade-Off: Rolling Up and Out vs. Holding

There is a cost to rolling. If the stock reverses and falls back to your original short strike:

![Rolling trade-off — P/L delta of -$544 if stock settles at $80 after roll](../ref/pmcc-3-scenarios/frames/frame_0040.jpg)

In the video's example:

- Stock at $87, rolling from $80 to $85 strike (93-day cycle)
- If HOOD settles at $80 in 30 days, the rolled position is **$544 worse** than holding the original
- **You sacrifice downside protection for more upside**

> **Key takeaway:** Rolling up and out gives you more upside potential, but you're worse off if the
> stock reverses to your original short strike level.

---

### 🧠 Quiz 1 — Stock Approaching the Short Strike

```quiz
In the HOOD PMCC example, what was the original short call strike and premium?

  - [ ] $85 strike for $6.55
    The $85 strike was a roll target, not the original.

  - [x] $80 strike for $6.15
    The original short was the May 2026 $80 call sold for $6.15.

  - [ ] $75 strike for $7.00
    The original short was $80, not $75.

  - [ ] $80 strike for $61.50
    The premium was $6.15 per share ($615 total), not $61.50.
```

```quiz
To roll a short call for free (zero debit), what must you do?

  - [ ] Close the entire position
    Closing exits the trade — that's not rolling.

  - [x] Sell a further-out call collecting more than the buyback cost of the short
    You buy back the short call and sell a new one further out, collecting enough premium to cover the cost.

  - [ ] Wait for the short call to expire
    Waiting is passive — rolling is an active adjustment.

  - [ ] Roll to a nearer expiration with the same strike
    A nearer expiration would cost more, not less.
```

```quiz
What is the furthest you can roll the short call in a PMCC?

  - [ ] 90 days out
    You can roll further — the limit is determined by the LEAP.

  - [x] The expiration of the long LEAP call
    The short call cannot extend beyond the long call, or the broker requires margin.

  - [ ] 1 year out
    You can roll to the LEAP expiration, which may be 2+ years.

  - [ ] There is no limit
    The LEAP expiration is the hard limit — beyond that, it becomes a naked short.
```

```quiz
What is the P/L trade-off when rolling a short call up and out?

  - [ ] You always win — more upside with no downside
    There is a clear downside if the stock reverses.

  - [x] You gain more upside but are worse off if the stock settles near the original short strike
    In the example, rolling cost $544 in P/L if HOOD settled back at $80.

  - [ ] You lose everything on the roll
    The roll extends the position, it doesn't destroy it.

  - [ ] The trade-off only matters if the stock goes to zero
    The trade-off matters at any level between the original and new short strikes.
```

```quiz
Why can't you roll the short call beyond the LEAP expiration?

  - [ ] Because brokers prohibit all diagonal spreads beyond 1 year
    Brokers allow diagonal spreads — the issue is margin.

  - [x] Because the broker will require margin on the naked short call
    Without the LEAP as coverage, the short call becomes naked and requires margin.

  - [ ] Because the options market closes at that point
    Options markets don't have such restrictions.

  - [ ] Because the short call would automatically exercise
    Exercise is determined by the buyer, not the expiration of the long leg.
```

---

## 2. Scenario 2 — Short Call Deep ITM

### The Problem

When the stock surges well above the short strike, the short call has **significant intrinsic
value**, making it much harder to roll for a credit.

### NVDA Example

| Leg                      | Strike | Stock Price | Intrinsic Value  |
| ------------------------ | ------ | ----------- | ---------------- |
| Stock                    | —      | $196.51     | —                |
| Short Call               | $180   | —           | $16.51 intrinsic |
| Short Call Total Premium | —      | —           | $19.42           |

To roll the $180 short call for a credit, you need to sell a call worth **more than $19.42**.

### The Dilemma

| Expiration            | Highest Rollable Strike | OTM?                                         |
| --------------------- | ----------------------- | -------------------------------------------- |
| June 2026 (65 DTE)    | $186                    | Still ITM                                    |
| August 2026 (130 DTE) | $195                    | OTM, but only tiny credit ($20.15 vs $19.42) |

![Short call deep ITM — forced to roll far out for OTM strike](../ref/pmcc-3-scenarios/frames/frame_0065.jpg)

**The key insight:** Once the short call is deep ITM, you are **forced to roll far out in time** to
find an OTM strike with enough premium.

### The Solution: Convert to a Long-Term Bull Call Spread

When the short call is this deep ITM, the video suggests considering a **full conversion** to a
long-term bull call spread:

1. **Close the $180 short call**
2. **Roll to the $250 strike in June 2027** (where the long LEAP is)
3. **Collect $21.43** for the new short call
4. **Net credit: ~$200** from the adjustment
5. **New position:** $125/$250 bull call spread in June 2027

![Converting to long-term bull call spread — P&L extending much higher](../ref/pmcc-3-scenarios/frames/frame_0095.jpg)

> **When to consider this:** When the short call is so deep ITM that rolling to an OTM strike
> requires going 130+ days out. At that point, the PMCC structure has broken down, and a long-term
> bull call spread may be a better fit.

---

### 🧠 Quiz 2 — Short Call Deep ITM

```quiz
In the NVDA example, what was the intrinsic value of the $180 short call when the stock was at $196.51?

  - [ ] $19.42
    $19.42 was the total premium, not just intrinsic value.

  - [x] $16.51 ($196.51 − $180)
    Intrinsic value = stock price − strike price.

  - [ ] $2.91
    This was likely the extrinsic (time) value, not intrinsic.

  - [ ] $250
    $250 was the target strike for the bull call spread conversion.
```

```quiz
Why is it difficult to roll a deep ITM short call for a credit?

  - [ ] Because near-term options have no premium
    Near-term options still have premium, but it's dominated by intrinsic value.

  - [x] Because the intrinsic value is high, requiring a further-out option to collect enough premium for an OTM strike
    The deep ITM call costs a lot to buy back, so you need a far-out option to collect enough to cover it.

  - [ ] Because brokers won't allow the roll
    Brokers allow the roll — the issue is economics, not rules.

  - [ ] Because the LEAP also goes ITM
    The LEAP going ITM is irrelevant to the roll cost.
```

```quiz
In the NVDA example, what was the furthest out you needed to go to roll to an OTM strike?

  - [ ] June 2026 (65 DTE) — $186 strike
    The $186 strike was still ITM.

  - [x] August 2026 (130 DTE) — $195 strike
    Only at 130 DTE could you roll to an OTM strike, and even then the credit was tiny.

  - [ ] June 2027 (long LEAP expiration) — $250 strike
    This was the bull call spread conversion target, not the roll target.

  - [ ] You couldn't roll to an OTM strike at all
    You could, but only far out in time.
```

```quiz
When might converting a PMCC to a long-term bull call spread make sense?

  - [ ] When the stock is flat
    Flat markets are ideal for PMCCs — no conversion needed.

  - [x] When the short call is deep ITM and rolling OTM requires going 130+ days out
    The PMCC structure has broken down — a long-term spread may be more appropriate.

  - [ ] When you want to collect more premium in the near term
    A bull call spread caps your upside, reducing near-term premium potential.

  - [ ] Never — a PMCC should never be converted
    Sometimes the market moves against you, and adapting is smart.
```

```quiz
In the NVDA conversion example, what was the net credit from rolling the $180 short to the $250 strike in June 2027?

  - [ ] $0 — it was a debit roll
    The roll actually produced a credit.

  - [x] Approximately $200
    The $250 call was sold for $21.43, producing a net credit after buying back the $180.

  - [ ] $21.43
    $21.43 was the premium of the new short call, not the net credit.

  - [ ] $16.51
    $16.51 was the intrinsic value of the original short call.
```

---

## 3. Scenario 3 — Stock Collapsed, Position Losing

### The Setup

The video uses a **TSLA PMCC** as the example:

| Leg        | Strike    | Expiration | DTE | Entry Price | Current Mark | P/L         |
| ---------- | --------- | ---------- | --- | ----------- | ------------ | ----------- |
| Long LEAP  | $400 Call | Jan 2028   | 647 | $166.00     | $92.95       | **−$7,305** |
| Short Call | $420 Call | May 2026   | 31  | $20.90      | $4.13        | **+$1,677** |

- Stock has dropped significantly
- The short call is **up 80%** of its max value (good for the short)
- The LEAP is **down 44%** (bad for the long)
- Net position is **losing money**

![TSLA PMCC — stock dropped, short call showing +80.2% profit](../ref/pmcc-3-scenarios/frames/frame_0097.jpg)

### Option A: Roll the Short Call Down (Same Expiration)

Since the short call is profitable (up 80%), you **can buy it back for a profit**. But be careful:

- **Don't roll too aggressively** — stocks can reverse quickly
- The video notes TSLA went from $360 to $470 in a single month (September 2025)
- Rolling too far down leaves you vulnerable to a sharp reversal

**Conservative approach:**

- Buy back the $420 short call
- Sell the **$400 call** in the **same expiration cycle**
- This collects additional credit while keeping the short call in a shorter-term OTM position
- Shorter-term OTM calls decay faster

> **Warning:** Rolling down reduces your downside protection. If the stock bounces back, you'll be
> worse off with a lower short strike.

### Option B: Full Restructure — Close and Reset

The most aggressive option is to **close both legs and restart the entire position**:

1. **Sell the $400 LEAP** (close the long) — realize ~$7,000 loss
2. **Buy back the $420 short** — collect ~$4.13
3. **Total credit from closing: ~$9,000**

Then reopen with a fresh PMCC:

| New Leg   | Strike    | Expiration | Cost             |
| --------- | --------- | ---------- | ---------------- |
| New LEAP  | $350 Call | Jun 2027   | ~$9,000          |
| New Short | $440 Call | 65 DTE     | Collects premium |

**Net result:** ~$527 credit to close the old position and open the new one.

![Full restructure — closing old PMCC and opening a new one with lower LEAP strike](../ref/pmcc-3-scenarios/frames/frame_0120.jpg)

**Trade-offs of restructuring:**

- ✅ Lower LEAP strike ($350 vs $400) = better entry
- ✅ New short call is further OTM ($440 vs $420) = more room
- ✅ $527 credit in your pocket
- ❌ Lost ~180 days on the LEAP expiration
- ⚠️ **Wash sale risk** — closing at a loss and immediately reopening may trigger wash sale rules

> **Important:** The wash sale rule applies when you close a position at a loss and buy a
> "substantially identical" security within 30 days. Consult a tax professional.

---

### 🧠 Quiz 3 — Stock Collapsed

```quiz
In the TSLA example, what was the P/L on the short $420 call when the stock had collapsed?

  - [ ] −$7,305
    That was the LEAP loss, not the short call.

  - [x] +$1,677 (up 80% of max value)
    The short call was profitable since the stock dropped.

  - [ ] −$44.0%
    That was the percentage loss on the LEAP, not the dollar amount on the short.

  - [ ] $0 — the short call was worthless
    The short call was worth $4.13, not zero.
```

```quiz
Why should you be cautious about rolling the short call too aggressively down when the stock has collapsed?

  - [ ] Because the short call will expire worthless anyway
    While true, the question is about the risk of rolling too far down.

  - [x] Because stocks can reverse quickly, and a lower short strike leaves you vulnerable
    TSLA went from $360 to $470 in one month — rolling too far down risks being caught in a reversal.

  - [ ] Because rolling down requires margin
    Rolling down to an OTM strike doesn't require margin.

  - [ ] Because the LEAP will recover faster than the short call decays
    LEAP recovery is uncertain — the risk is on the short strike being too low.
```

```quiz
What is the "conservative" approach to rolling the short call down in a losing position?

  - [ ] Roll to a further expiration with a lower strike
    Further expiration means slower decay.

  - [x] Keep the same expiration cycle and roll to a lower strike
    Same expiration keeps faster time decay on the short call.

  - [ ] Close the entire position immediately
    That's the aggressive restructure approach, not conservative.

  - [ ] Hold the position and do nothing
    Doing nothing isn't rolling — the question is about rolling conservatively.
```

```quiz
In the TSLA restructure example, what was the net credit from closing the old PMCC and opening the new one?

  - [ ] $0 — the costs and credits balanced out
    There was a net credit.

  - [x] Approximately $527
    Closing produced ~$9,000 credit, and the new LEAP cost ~$9,000, leaving ~$527.

  - [ ] $7,000
    $7,000 was the loss on the old LEAP, not the net credit.

  - [ ] $9,000
    $9,000 was the total credit from closing, but the new LEAP cost ~$9,000.
```

```quiz
What tax consideration should you be aware of when fully restructuring a losing PMCC?

  - [ ] Capital gains tax on the short call profit
    The short call profit is separate from the wash sale concern.

  - [x] Wash sale rules may apply when closing at a loss and immediately reopening
    Closing the LEAP at a loss and buying a similar one within 30 days could trigger wash sale rules.

  - [ ] You must pay the full LEAP loss immediately
    Losses are recognized on your tax return, not paid immediately.

  - [ ] There are no tax considerations for restructuring
    Tax considerations definitely exist, especially with wash sales.
```

```quiz
What trade-off does the full restructure approach involve?

  - [x] You gain a lower LEAP strike but lose ~180 days of LEAP time
    Correct — the new LEAP expires sooner, reducing total time value.

  - [ ] You lose all premium collected so far
    Premium collected is already yours — it's not lost.

  - [ ] You must pay additional margin
    Restructuring doesn't require extra margin if done properly.

  - [ ] You lose the ability to sell short calls going forward
    You can continue selling short calls on the new position.
```

---

## 4. Comparison — All Three Scenarios Side by Side

| Scenario                  | Stock Action            | Short Call Status        | Best Approach                           | Risk                                                 |
| ------------------------- | ----------------------- | ------------------------ | --------------------------------------- | ---------------------------------------------------- |
| **1. Approaching strike** | Rising to short strike  | OTM, testing             | Roll up and out for credit              | Worse if stock reverses to original strike           |
| **2. Deep ITM**           | Surged far above strike | Deep ITM, high intrinsic | Convert to long-term bull call spread   | Loses PMCC flexibility, long time commitment         |
| **3. Collapsed**          | Dropped significantly   | ITM but profitable       | Roll down conservatively or restructure | Reversal risk (roll down) or wash sale (restructure) |

---

## 5. Key Principles Across All Scenarios

### Principle 1: The Short Call Premium Defines Your Roll

To roll for free, you must **collect more than the buyback cost**. The short call premium ($6.15 in
the HOOD example, $19.42 in the NVDA example) is your **minimum target** for any roll.

### Principle 2: Time Is Your Ally for Finding Credits

The further out you go, the more premium you collect. This is why rolling to the LEAP expiration (as
in the HOOD example's maximum roll) gives you the most flexibility — but also changes the trade
structure.

### Principle 3: Every Adjustment Has a Trade-Off

- **Rolling up and out** → More upside, less downside protection
- **Rolling down** → More downside protection, more upside risk on reversal
- **Converting to bull call spread** → Maximum upside, loses income stream
- **Full restructure** → Fresh start, but loses time and may trigger wash sale

### Principle 4: Don't Force Adjustments

Sometimes the best move is to **do nothing**:

- If the short call expires OTM, keep the premium and repeat
- If the stock is flat, the PMCC is working as intended
- Only adjust when the thesis is at risk

---

## 6. Flash Cards

```flashcard
In the HOOD PMCC example, what was the original short call strike and premium?
  $80 strike for $6.15 ($615 per contract)
```

```flashcard
To roll a short call for free (zero debit), what must you collect?
  More than the buyback cost of the short call
```

```flashcard
What is the furthest you can roll the short call in a PMCC?
  The expiration of the long LEAP call
```

```flashcard
In the HOOD rolling example, what was the P/L delta if the stock settled at $80 after rolling up?
  −$544 — the rolled position is worse than holding the original
```

```flashcard
In the NVDA example, what was the intrinsic value of the $180 short call at $196.51 stock price?
  $16.51 (stock price − strike price)
```

```flashcard
When is converting a PMCC to a long-term bull call spread a good idea?
  When the short call is deep ITM and rolling OTM requires going 130+ days out
```

```flashcard
In the TSLA example, what was the P/L on the short $420 call when the stock collapsed?
  +$1,677 (up 80% of max value)
```

```flashcard
What is the conservative approach to rolling the short call down in a losing position?
  Keep the same expiration cycle and roll to a lower strike for faster decay
```

```flashcard
What is the net credit in the TSLA full restructure example?
  Approximately $527 (close old PMCC for ~$9,000, open new one for ~$9,000)
```

```flashcard
What tax rule applies when closing a losing PMCC and immediately reopening?
  Wash sale rules — consult a tax professional
```

```flashcard
What principle connects all three PMCC management scenarios?
  Every adjustment has a trade-off — there's no free lunch
```

```flashcard
In the HOOD maximum roll example, what strike could you sell in Jan 2028?
  $220 strike (the highest strike collecting more than $6.15)
```

---

## 7. Summary — When to Act

| Situation                            | Action                                 | Urgency                                 |
| ------------------------------------ | -------------------------------------- | --------------------------------------- |
| Stock approaching short strike       | Roll up and out for credit             | Medium — plan ahead                     |
| Stock surges far above short strike  | Consider long-term bull call spread    | High — acting sooner gives more options |
| Stock drops, short call profitable   | Consider rolling down conservatively   | Low — short call is working for you     |
| Stock drops, full restructure needed | Close and reset with lower LEAP strike | Medium — watch wash sale rules          |
| Stock flat, short call OTM           | **Do nothing** — keep premium, repeat  | N/A — this is the sweet spot            |

---

> **Final thought:** Managing a PMCC is about **anticipation, not reaction**. The best adjustments
> are planned before the stock gets to the strike. When the short call is already deep ITM, your
> options narrow significantly. And when the stock collapses, the short call's profit may be
> tempting to lock in — but rolling too far down can leave you exposed to a reversal. Know your
> three levers: **roll up, roll down, or restructure** — and understand the trade-off of each.
