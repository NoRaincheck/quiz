---
title: "Poor Man's Covered Call"
order: 7
tags: [options, covered-call, diagonal-spread, leaps, income]
group: "Options Trading"
---

# Poor Man's Covered Call (PMCC) — Study Guide

> A self-study companion built from the Poor Man's Covered Call course on Project Option. Learn how to run a covered-call-like strategy using far less capital by replacing 100 shares of stock with a long-term call option.

---

## 1. What Is a Poor Man's Covered Call?

A **Poor Man's Covered Call (PMCC)** — also called a **long call diagonal debit spread** — is an options strategy that mimics the payoff of a traditional covered call but uses significantly less capital.

### Traditional Covered Call vs. PMCC

| | **Traditional Covered Call** | **Poor Man's Covered Call** |
|---|---|---|
| **Long leg** | Buy 100 shares of stock | Buy a deep ITM LEAP call |
| **Short leg** | Sell an OTM call (30–60 DTE) | Sell an OTM call (30–60 DTE) |
| **Capital required** | Full share price × 100 | Option premium (much less) |
| **Max delta** | +100 | Approaches +100 |
| **Max loss** | Large (stock → $0) | Limited to net debit paid |

![Traditional vs PMCC comparison](../ref/pmcc/frames_unique/frame_0001.jpg)

In the example above, Robinhood (HOOD) trades at ~$70/share:

- **Traditional:** Buy 100 shares at $7,000, then sell a call against them
- **PMCC:** Buy a $50 strike LEAP for ~$3,500 (half the capital), then sell a call against it

You get very similar upside exposure with roughly **half the capital**.

---

### 🧠 Quiz 1 — What Is a PMCC?

````quiz
What is the core idea behind a Poor Man's Covered Call?

  - [ ] Buying 100 shares and selling puts instead of calls
    That's not a PMCC — it's a different strategy entirely.

  - [x] Replacing 100 shares of stock with a long-term deep ITM call option, then selling short-term OTM calls against it
    This is the PMCC: a LEAP call replaces the shares, and short-term calls generate income, all for far less capital.

  - [ ] Buying calls and selling puts simultaneously
    That's a conversion or synthetic, not a PMCC.

  - [ ] Selling a call and buying a put at the same strike
    That's a protective put / synthetic short, not a PMCC.
````

````quiz
How much capital does a PMCC typically require compared to a traditional covered call on the same stock?

  - [ ] About the same
    The whole point of a PMCC is to use significantly less capital.

  - [ ] More than a traditional covered call
    A PMCC uses an option instead of shares, which costs less.

  - [x] Significantly less — often 40–60% of the capital required for 100 shares
    By buying a LEAP call instead of 100 shares, you lock up much less capital while maintaining similar delta exposure.

  - [ ] It depends entirely on the stock price
    While stock price matters, PMCCs always use less capital than buying 100 shares.
````

---

## 2. How a PMCC Works — The Two Legs

A PMCC is a **two-leg diagonal spread**:

### Leg 1: Long Deep ITM LEAP Call (The "Stock Replacement")

- Buy a **deep in-the-money** call option with **1–2 years** to expiration
- Target a **delta of 70–90** (gives you 70–90% of the stock's price movement)
- This LEAP acts as your **stock replacement**

![Long LEAP vs 100 shares — both have max delta of +100](../ref/pmcc/frames_unique/frame_0021.jpg)

> **Key insight:** A deep ITM call option has a payoff curve that is nearly **linear** — just like owning stock. Its delta approaches **+100** as the stock rises, meaning you capture almost every dollar the stock gains.

### Leg 2: Short OTM Call (The "Income Generator")

- Sell an **out-of-the-money** call option with **30–60 days** to expiration
- Target a **delta of 15–30**
- This generates **premium income** (the "covered call" part)

![PMCC payoff graph — profit peaks at the short strike](../ref/pmcc/frames_unique/frame_0029.jpg)

The combined payoff peaks at the **short strike price** — just like a traditional covered call. At that price, your long LEAP has maximum value while your short call expires worthless.

---

### 🧠 Quiz 2 — The Two Legs

````quiz
What is the typical delta range you should target for the long LEAP call in a PMCC?

  - [ ] 20–40
    That delta is too low — the LEAP wouldn't act like stock.

  - [x] 70–90
    A delta of 70–90 gives you 70–90% of the stock's price movement, which is the sweet spot between stock-like exposure and capital efficiency.

  - [ ] 95–100
    While this gives nearly full stock exposure, it costs almost as much as buying 100 shares, defeating the capital advantage.

  - [ ] 0–10
    That's an OTM option with almost no stock-like behavior.
````

````quiz
What is the typical delta range you should target for the short call in a PMCC?

  - [ ] 70–90
    That's the range for the long LEAP, not the short call.

  - [x] 15–30
    A delta of 15–30 gives you a good balance: enough premium collected, but with some room for the stock to rise before profitability caps out.

  - [ ] 0–5
    That would be very far OTM, collecting very little premium.

  - [ ] 40–60
    That's too close to the money — your profitability would peak out too quickly.
````

````quiz
What is the typical time to expiration for the short call leg?

  - [ ] 1–2 years
    That's the LEAP expiration, not the short call.

  - [x] 30–60 days
    The short call is a near-term option that benefits from rapid time decay (theta).

  - [ ] 1–7 days
    Too short — you'd need to roll constantly and transaction costs would eat profits.

  - [ ] 90–180 days
    Longer than ideal — you want the short call to decay quickly for maximum theta benefit.
````

---

## 3. The Payoff Profile

Let's walk through a concrete example using Robinhood (HOOD) at **$68.90**:

### PMCC Setup
- **Long:** $50 strike call, 656 days to expiration (LEAP), cost = **$34.75** ($3,475)
- **Short:** $80 strike call, 40 days to expiration, premium collected = **$2.67** ($267)
- **Net debit:** $34.75 − $2.67 = **$32.08** ($3,208 max loss)
- **Profit peaks at:** $80 (the short strike)
- **Max profit at expiration:** $1,123

![PMCC payoff with multiple time curves — T+0, T+20, T+40](../ref/pmcc/frames_unique/frame_0016.jpg)

### Theta (Time Decay) Works in Your Favor

The PMCC has **positive theta** at entry — meaning time decay works for you. The blue line (T+0, today's estimated P&L) sits below the white line (T+40, expiration P&L).

![Positive theta — the T+0 line sits below the expiration line](../ref/pmcc/frames_unique/frame_0068.jpg)

For example, if HOOD is at $80:
- **Today (T+0):** Estimated profit ≈ $450
- **At expiration (T+40):** Estimated profit ≈ $1,123

As the stock approaches your short strike, **positive theta increases** — time decay works for you more quickly.

---

### 🧠 Quiz 3 — Payoff & Theta

````quiz
In the HOOD PMCC example ($50 long LEAP, $80 short call), at what stock price does profit peak?

  - [ ] $68.90 (the current stock price)
    Profit peaks at the short strike, not the current stock price.

  - [ ] $50 (the long LEAP strike)
    The long strike is your cost basis, not your profit cap.

  - [x] $80 (the short call strike)
    At $80, the LEAP has maximum value while the short call expires worthless — that's your peak profit.

  - [ ] $3,208 (the max loss amount)
    That's the maximum loss, not a stock price.
````

````quiz
What does "positive theta" mean in the context of a PMCC?

  - [ ] Time decay hurts you — you lose money every day
    Positive theta means time decay works *in your favor*.

  - [x] Time decay works in your favor — the short call loses value faster than the long LEAP
    The near-term short call loses extrinsic value quickly, while the long LEAP loses value more slowly. This difference benefits you.

  - [ ] Theta has no effect on a PMCC
    Theta is one of the key Greeks that makes PMCCs work.

  - [ ] Theta only matters at expiration
    Theta matters every day — it's the daily rate of time decay.
````

````quiz
If the stock price is at $80 today versus at expiration in 40 days, which scenario gives you more profit in a PMCC?

  - [ ] Today — because you get the money sooner
    No — the PMCC's positive theta means profit is *higher* at expiration if the stock is at the short strike.

  - [x] At expiration — because more time decay has occurred on the short call
    With positive theta, the short call loses more value over time than the LEAP, so your net profit increases as expiration approaches.

  - [ ] They are the same — the stock price determines everything
    Time decay (theta) also matters — it's why the T+0 and T+40 curves differ.

  - [ ] It depends on vega, not theta
    While vega matters, theta is the primary driver of the time-based P&L difference here.
````

---

## 4. Traditional Covered Call vs. PMCC — Side by Side

The key question: **How does a PMCC compare to a traditional covered call on the same stock?**

![Traditional CC vs PMCC comparison table](../ref/pmcc/frames_unique/frame_0053.jpg)

### Capital Comparison (HOOD at $68.90, short $80 call, 40 DTE)

| Metric | Traditional Covered Call | PMCC |
|--------|-------------------------|------|
| **Capital required** | $6,890 (100 shares) | $3,475 (LEAP call) |
| **Short call premium** | $267 | $267 |
| **Premium yield** | 3.8% | **7.7%** |
| **Max loss** | $6,623 | **$3,208** |

The PMCC delivers **double the premium yield** (7.7% vs 3.8%) and **less than half the max loss** because your capital base is smaller.

![Premium yield comparison — PMCC at 7.7% vs Traditional at 3.8%](../ref/pmcc/frames_unique/frame_0030.jpg)

### Payoff Comparison — Upside

![Traditional CC payoff (solid lines) vs PMCC payoff (dashed lines)](../ref/pmcc/frames_unique/frame_0036.jpg)

Both strategies have profits that **peak at $80** (the short strike). The traditional covered call has slightly **higher absolute P&L** because you own the actual shares (more intrinsic value), but you're putting up **twice the capital**.

![At $80 stock price, traditional CC has higher P&L but at T+0 it's only $186 higher](../ref/pmcc/frames_unique/frame_0025.jpg)

### Payoff Comparison — Downside

![PMCC advantage on the downside — at $50 stock price, traditional CC loses $378 more](../ref/pmcc/frames_unique/frame_0026.jpg)

Here's where the PMCC **shines**: if the stock falls, your loss is **limited to the net debit** you paid. The traditional covered call loses more because you own 100 shares worth of downside exposure.

![At $50 stock price (27% drop), traditional CC loses $378 more per contract](../ref/pmcc/frames_unique/frame_0027.jpg)

---

### 🧠 Quiz 4 — Comparing PMCC to Traditional CC

````quiz
In the HOOD example, the PMCC has a premium yield of 7.7% while the traditional covered call has 3.8%. Why is the PMCC yield higher?

  - [ ] Because the short call premium is higher in a PMCC
    The short call premium is the same ($267) in both cases.

  - [x] Because the PMCC's capital base ($3,475) is much smaller than the traditional CC's ($6,890)
    Premium yield = premium / capital base. Same premium divided by a smaller base = higher yield.

  - [ ] Because the PMCC collects extra dividends
    PMCCs don't collect dividends — you don't own the shares.

  - [ ] Because the PMCC has lower transaction costs
    Transaction costs are not the primary driver of the yield difference.
````

````quiz
If HOOD falls from $68.90 to $50 (a 27% drop), which strategy loses more money?

  - [ ] They lose the same amount
    They have different capital bases and different downside exposure.

  - [x] The traditional covered call loses more
    You own 100 shares worth of downside in a traditional CC, while the PMCC's max loss is capped at the net debit paid.

  - [ ] The PMCC loses more
    The PMCC's smaller capital base means less downside exposure.

  - [ ] Neither loses money because of the premium collected
    Both lose money on the downside — the difference is in the magnitude.
````

````quiz
Both the traditional covered call and PMCC have profits that peak at the short strike ($80). Why does the traditional covered call have slightly higher absolute P&L?

  - [ ] Because the short call expires faster in a traditional CC
    The short call expiration is the same in both strategies.

  - [x] Because the traditional CC owns actual shares with more intrinsic value at that price
    Owning 100 shares gives you more intrinsic value at $80 than a LEAP call does, resulting in slightly higher absolute P&L.

  - [ ] Because the traditional CC has better theta
    Theta works in your favor in both strategies.

  - [ ] Because the traditional CC collects more premium
    The short call premium is the same in both cases.
````

---

## 5. Setup Guidelines — The Strike Width Rule

### Rule: Debit Should Not Exceed Strike Width

The **total debit** you pay to enter a PMCC should **not exceed the width between the two strikes**.

![Strike width rule — debit should not exceed the strike width](../ref/pmcc/frames_unique/frame_0060.jpg)

**Example (good):** Long $50 call, short $90 call
- Strike width = $40
- If debit < $40, you have no upside loss potential

**Example (bad):** Long $50 call, short $70 call  
- Strike width = $20
- But the debit is $28.05 — **more than the $20 width**
- This creates **upside loss potential** if the stock rises far past the short strike

![PMCC with debit exceeding strike width — shows upside loss potential](../ref/pmcc/frames_unique/frame_0062.jpg)

If you pay more than the strike width, the position can actually **lose money** at very high stock prices — which defeats the purpose of a covered-call-like strategy.

![Upward loss potential when debit exceeds strike width](../ref/pmcc/frames_unique/frame_0063.jpg)

### Delta Target Summary

![Target delta 70–90 for the long LEAP call](../ref/pmcc/frames_unique/frame_0058.jpg)

![Target delta 15–30 for the short call](../ref/pmcc/frames_unique/frame_0059.jpg)

> **Note:** These delta targets are guidelines, not strict rules. A lower delta on the short call (e.g., 15) means **less premium** but **more room** for the stock to rise before your profit caps. A higher delta (e.g., 30) means **more premium** but your profitability peaks sooner.

---

### 🧠 Quiz 5 — Setup Rules

````quiz
You buy a $40 strike LEAP and sell a $60 strike call. What is the maximum debit you should pay for this PMCC?

  - [ ] $40
    That's the LEAP strike price, not the strike width.

  - [x] $20
    Strike width = $60 − $40 = $20. If you pay more than $20, you have upside loss potential.

  - [ ] $60
    That's the short strike price, not the width.

  - [ ] $100
    That's 100 shares × $1, which is irrelevant here.
````

````quiz
If you sell a $90 strike call (delta 14) instead of an $80 strike call (delta 30), what is the trade-off?

  - [ ] You collect more premium but have less room for the stock to rise
    Reversed — a higher strike collects less premium but gives more room.

  - [x] You collect less premium but have more room for the stock to rise before profit caps
    The $90 strike is further OTM, so it's cheaper to sell (less premium) but the stock can run higher before your profit peaks.

  - [ ] You collect the same premium either way
    The premium differs based on the strike distance and delta.

  - [ ] There is no trade-off — it doesn't matter which strike you choose
    The strike choice significantly affects your premium, risk, and profit ceiling.
````

````quiz
Why is a delta of 70–90 considered a "sweet spot" for the long LEAP in a PMCC?

  - [ ] Because it guarantees profit
    No option strategy guarantees profit.

  - [x] Because it provides significant stock exposure while cutting capital requirements substantially
    At delta 70–90, you get 70–90% of the stock's movement while paying far less than 100 shares. Going deeper ITM (delta 95+) costs nearly as much as shares.

  - [ ] Because it maximizes theta decay
    Theta is not the primary consideration for the long LEAP.

  - [ ] Because it matches the short call's delta exactly
    The long and short deltas are intentionally different — that's the diagonal spread.
````

---

## 6. Managing Your PMCC

### Scenario 1: Short Call Expires OTM (Best Case)

The stock stays below your short strike. The short call expires worthless, and you **keep the premium**. You then:

1. Sell a **new call** at a higher strike
2. Choose a **further-out expiration** (30–60 days)
3. Repeat the cycle as long as the stock stays below your strikes

![Best case — short call expires OTM, repeat the cycle](../ref/pmcc/frames_unique/frame_0068.jpg)

### Scenario 2: Stock Approaches Short Strike — Roll Up and Out

When the stock price approaches your short strike, you can **roll up and out for a credit**:

1. **Buy back** the original short call (at a loss)
2. **Sell** a higher-strike call in a further-out expiration (for more premium)
3. The net result should be a **credit** (you collect more than you pay)

![Roll up and out — buying back the 70 strike call](../ref/pmcc/frames_unique/frame_0071.jpg)

![Roll example — selling the 85 strike call in the 74-day cycle for a credit](../ref/pmcc/frames_unique/frame_0072.jpg)

The roll **unlocks more upside** — your profit now peaks at the new, higher strike instead of the old one.

![Roll result — new position has more upside](../ref/pmcc/frames_unique/frame_0073.jpg)

![Roll comparison — P&L improvement at $80 stock price: +$347 from the roll](../ref/pmcc/frames_unique/frame_0074.jpg)

> **Important limit:** The furthest you can roll is to the **same expiration as your LEAP**. At that point, you'd have a **bull call spread** (long and short calls in the same expiration).

### Scenario 3: Assignment on the Short Call

If you get **assigned** on the short call, you're now **short 100 shares** at the short strike price. **Don't panic** — your max risk does **not** change.

You have two options to handle assignment:

#### Option A: Exercise the Long LEAP Call
- Exercise the LEAP to **buy 100 shares** at the LEAP strike
- This cancels out your short 100 shares
- **Problem:** You burn all remaining **extrinsic value** in the LEAP

![Assignment — exercise the long LEAP to cancel the short shares](../ref/pmcc/frames_unique/frame_0075.jpg)

#### Option B: Sell the LEAP and Buy Back the Short Stock (Recommended)
- **Sell** the LEAP call in the market
- **Buy back** the 100 short shares
- Execute both in the **same transaction**
- **Advantage:** You **preserve the remaining extrinsic value** of the LEAP

![Assignment — sell the LEAP and buy back stock to preserve extrinsic value](../ref/pmcc/frames_unique/frame_0085.jpg)

> **Example:** If your $50 strike LEAP has $18.90 of intrinsic value but trades for $34.75, there's **$15.85 of extrinsic value**. Exercising the call burns this entire $15.85 — selling the call preserves it.

![Extrinsic value breakdown — $34.75 total premium = $18.90 intrinsic + $15.85 extrinsic](../ref/pmcc/frames_unique/frame_0090.jpg)

![Burning extrinsic value — exercising the LEAP wastes $15.85 of value](../ref/pmcc/frames_unique/frame_0100.jpg)

---

### 🧠 Quiz 6 — Managing PMCCs

````quiz
What is the best-case scenario for a PMCC?

  - [ ] The stock price doubles
    The stock doubling would likely trigger assignment or force a roll.

  - [x] The short call expires OTM, and you keep the premium to repeat the cycle
    When the short call expires worthless, you keep the full premium and can sell a new call to continue generating income.

  - [ ] The stock price goes to zero
    That would cause your maximum loss.

  - [ ] You get assigned on the short call
    Assignment is not ideal — it means the stock hit your short strike.
````

````quiz
When rolling a PMCC up and out, what should the net result be?

  - [ ] A debit — you pay money to extend the position
    Rolling should be done for a credit to be beneficial.

  - [x] A credit — you collect more from the new short call than you pay to buy back the old one
    A credit roll means you've been paid to extend your profitability ceiling and give the trade more room.

  - [ ] Break even — the debit equals the credit
    Break even doesn't add value — you want a credit.

  - [ ] It doesn't matter — debits and credits are the same
    A credit roll is better because you're being compensated for extending the position.
````

````quiz
Why is selling the LEAP and buying back the short stock (Option B) preferred over exercising the LEAP (Option A) when assigned?

  - [ ] Because exercising the LEAP is not allowed
    Exercising is allowed but suboptimal.

  - [x] Because selling the LEAP preserves its remaining extrinsic value, while exercising burns it
    If the LEAP has $15.85 of extrinsic value, exercising destroys it. Selling the LEAP in the market captures that value.

  - [ ] Because buying back stock is cheaper than exercising
    The stock buyback price is the same either way — the difference is in the LEAP's extrinsic value.

  - [ ] Because exercising triggers a tax event
    Both options trigger tax events; the extrinsic value is the key differentiator.
````

````quiz
What is the furthest you can roll a PMCC's short call?

  - [ ] To infinity — you can roll indefinitely
    There's a practical limit tied to your LEAP expiration.

  - [x] To the same expiration as your LEAP, creating a bull call spread
    When the short call's expiration matches the LEAP, you have a bull call spread (long and short calls in the same expiration).

  - [ ] To the next month's expiration
    You can roll further than one month.

  - [ ] You cannot roll at all — you must hold to expiration
    Rolling is a standard and recommended management technique.
````

---

## 7. Quick Reference Cheat Sheet

| Concept | Guideline |
|---------|-----------|
| **Long LEAP delta** | 70–90 (sweet spot for stock-like exposure) |
| **Long LEAP expiration** | 1–2 years out |
| **Short call delta** | 15–30 (guideline) |
| **Short call expiration** | 30–60 days out |
| **Strike width rule** | Debit paid ≤ Strike width (long strike − short strike) |
| **Premium yield** | Short call premium ÷ Net debit paid |
| **Max loss** | Net debit paid (long call cost − short call premium) |
| **Max profit** | Short strike − Long strike − Net debit |
| **Positive theta** | Time decay works in your favor |
| **Roll up and out** | Buy back short call, sell higher strike further out, for a credit |
| **Assignment handling** | Sell LEAP + buy back stock (preserve extrinsic value) |
| **Furthest roll** | Same expiration as LEAP → becomes a bull call spread |

---

## 8. Summary: The Big Picture

### Why PMCCs Are Attractive
- **Capital efficiency:** Use 40–60% of the capital of a traditional covered call
- **Higher premium yield:** Same short call premium divided by a smaller capital base
- **Lower max loss:** Capped at the net debit, not the full share value
- **Similar upside:** Delta of 70–90 gives you 70–90% of the stock's movement

### The Trade-Offs
- **Slightly lower absolute P&L** than a traditional covered call at the short strike
- **No dividends** — you don't own the actual shares
- **Management required** — you need to actively manage rolls and assignment
- **Complexity** — two legs, two different expirations, two different strikes

### The Key Principles to Remember
1. **Delta 70–90** for the long LEAP, **delta 15–30** for the short call
2. **Debit ≤ Strike width** — always check this rule
3. **Roll for credit** when the stock approaches your short strike
4. **Sell, don't exercise** the LEAP if assigned — preserve extrinsic value
5. **Repeat the cycle** when the short call expires OTM

---

> **Final thought from the course:** A PMCC lets you run a covered-call-like strategy with a fraction of the capital. The key is discipline: target the right deltas, respect the strike width rule, manage your rolls proactively, and always preserve that LEAP extrinsic value. When done right, the PMCC is one of the most capital-efficient income strategies in options trading.
