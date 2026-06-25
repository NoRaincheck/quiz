---
title: "Iron Condor Strategy"
order: 10
tags: [options, iron condor, spreads, premium selling]
group: "Options Trading"
---

# Iron Condor Strategy — Study Guide

> A self-study companion built from the Options Trading Beginners course. Read each section, then
> test yourself with the embedded quiz.

---

## 1. What Is an Iron Condor?

The iron condor is one of the most popular options strategies for **making money without picking a
direction**. It has **limited risk** and a **high probability of profit**, and it makes money when
the stock price trades within a specific range you choose.

The iron condor consists of **four different options**. The easiest way to understand it is:

> **Iron Condor = Selling a Call Spread + Selling a Put Spread at the same time**

- When you **sell a put spread**, you make money if the stock price stays **above** a certain price
  over time.
- When you **sell a call spread**, you make money when the stock price stays **below** a certain
  price as time passes.
- The iron condor simply combines these two positions where you profit when the stock price
  **remains in a specific range**.

---

### 🧠 Quiz 1 — Iron Condor Basics

```quiz
What is an iron condor composed of?

  - [ ] Buying a call spread and buying a put spread
    Buying spreads costs money (debit), while an iron condor is a credit strategy.

  - [ ] Selling a call and selling a put
    That's a short strangle, not an iron condor. An iron condor adds long options to limit risk.

  - [x] Selling a call spread and selling a put spread simultaneously
    An iron condor combines a short call spread (above the stock price) with a short put spread (below the stock price).

  - [ ] Buying a call and buying a put
    That's a long straddle, the opposite strategy.
```

```quiz
When does an iron condor make money?

  - [ ] When the stock price moves sharply in either direction
    That's the opposite — iron condors profit when the stock stays still.

  - [x] When the stock price stays within a specific range
    The iron condor profits as long as the stock remains between the short strike prices through expiration.

  - [ ] When implied volatility increases significantly
    Iron condors have negative vega, meaning they lose money when IV rises.

  - [ ] Only when the stock price goes up
    The iron condor is a neutral strategy — direction doesn't matter.
```

---

## 2. Iron Condor Example — Building the Position

Let's walk through a concrete example. Consider a stock trading at **$200**:

| Leg | Action | Strike    | Type                         |
| --- | ------ | --------- | ---------------------------- |
| 1   | Sell   | $220 Call | Short call (above stock)     |
| 2   | Buy    | $230 Call | Long call (above short call) |
| 3   | Sell   | $180 Put  | Short put (below stock)      |
| 4   | Buy    | $170 Put  | Long put (below short put)   |

Both spreads are **$10 wide** and have **60 days to expiration**.

![Iron Condor Calculator](../ref/iron-condor/frames/frame_0065.jpg) _Iron Condor Calculator on
projectoption.com showing the position setup._

### Key Metrics

| Metric              | Value        | Meaning                                                        |
| ------------------- | ------------ | -------------------------------------------------------------- |
| **Net Credit**      | $3.00 ($300) | What you collect when opening the trade                        |
| **Max Profit**      | +$300        | The credit received — this is the most you can make            |
| **Max Loss**        | -$700        | Width of spread ($10) minus credit ($3) = $7 per spread, × 100 |
| **Lower Breakeven** | $177.00      | Short put strike minus credit                                  |
| **Upper Breakeven** | $223.00      | Short call strike minus credit                                 |

![Key Metrics](../ref/iron-condor/frames/frame_0105.jpg) _Key metrics showing max profit, max loss,
breakevens, and Greeks at entry._

### How Max Loss Is Calculated

The max loss is $700 because each spread is $10 wide, and the most a $10 wide spread can be worth is
$1,000. You sold the iron condor for $300, so if one spread blows out to the max value of $1,000,
that's a $700 move against you.

![Max Loss Explanation](../ref/iron-condor/frames/frame_0120.jpg) _Max Loss: Sell at $300 → Close at
$1,000 = $700 against you._

---

### 🧠 Quiz 2 — Position Construction

```quiz
In an iron condor with a stock at $200, you sell the 220 call and buy the 230 call. What is this portion of the trade called?

  - [ ] A put spread
    This involves call options, not put options.

  - [x] A call spread (specifically a short call spread)
    You're selling a call at $220 and buying a higher-strike call at $230, creating a short call spread above the stock price.

  - [ ] A long straddle
    A straddle involves buying both a call and a put at the same strike.

  - [ ] A protective put
    A protective put is a hedging strategy, not part of an iron condor.
```

```quiz
If you sell an iron condor for a $3.00 credit with $10-wide spreads, what is the maximum loss?

  - [ ] $300
    $300 is the max profit (the credit received).

  - [ ] $1,000
    $1,000 is the max value of one spread, but you collected $300 upfront.

  - [x] $700
    Max loss = Spread width ($10) − Credit ($3) = $7 per share × 100 = $700.

  - [ ] $1,300
    That would be the spread width plus the credit, which isn't how max loss works.
```

---

## 3. The Payoff Diagram

The payoff graph shows how much you can make or lose at various stock prices right now and through
expiration.

![Payoff Diagram](../ref/iron-condor/frames/frame_0130.jpg) _Payoff diagram showing the T+0 line
(blue) and expiration line (white)._

Key elements of the payoff diagram:

- **Blue line (T+0)** — Estimated P&L today if the stock price moves. This is the current P&L
  exposure.
- **White line (Expiration)** — The final outcome for the trade. The flat top represents max profit.
- **Max Profit Zone** — The flat portion of the white line, anywhere between $180 and $220. If the
  stock closes inside that zone at expiration, every option expires worthless and the iron condor is
  worth zero. Since you sold it for $300, that's a $300 gain.
- **Max Loss Zone** — Above $230 or below $170 at expiration. One spread is fully in the money
  (worth $1,000) while the other expires worthless.

### When the Stock Moves Toward a Spread

![Stock at $245](../ref/iron-condor/frames/frame_0175.jpg) _When the stock moves to $245, the T+0
line shows a loss of $458 and the expiration line shows the max loss of $700._

If the stock price moves toward one of the spreads, you'll see losses on your position — especially
if that movement happens quickly after entering the trade. This is the key risk of iron condors:
**large, fast moves in either direction**.

---

### 🧠 Quiz 3 — Reading the Payoff Diagram

```quiz
On the expiration line (white), what does the flat top of the iron condor payoff diagram represent?

  - [ ] The maximum loss
    The flat top is at the positive P&L level, not the loss level.

  - [x] The maximum profit zone
    If the stock closes between the short strikes at expiration, all options expire worthless and you keep the full credit.

  - [ ] The breakeven points
    Breakeven points are where the white line crosses the $0 axis, not the flat top.

  - [ ] The current P&L
    The current P&L is shown by the blue T+0 line, not the white expiration line.
```

```quiz
If the stock price is above the upper long strike at expiration, what happens?

  - [ ] You make the maximum profit
    Max profit only occurs when the stock is between the short strikes.

  - [ ] The trade breaks even
    The stock is past the breakeven point, so the trade is in a loss.

  - [x] One spread is fully in the money and you realize the maximum loss
    The call spread is worth $1,000 (its max value), while the put spread expires worthless. The net result is the max loss.

  - [ ] Both spreads expire worthless
    Only the put spread expires worthless; the call spread is deep in the money.
```

---

## 4. Real Trade Examples — Tesla Iron Condors

### Example 1: Tesla — Full Profit

![TSLA Full Profit](../ref/iron-condor/frames/frame_0240.jpg) _TSLA Iron Condor — Full Profit.
190/200 Put Spread • 280/290 Call Spread • 60 DTE • $3.32 Credit._

| Detail               | Value        |
| -------------------- | ------------ |
| Stock Price at Entry | ~$231        |
| Put Spread           | $200/$190    |
| Call Spread          | $280/$290    |
| Days to Expiration   | 60           |
| Net Credit           | $3.32 ($332) |
| Max Profit           | $332         |
| Max Loss             | $668         |

The stock price stayed between the short strikes the entire trade. Halfway through, Tesla reached
$276 — very close to the call spread strikes of $280/$290 — and the trade showed a **loss of $104**
at that moment. But Tesla pulled back and stayed within the short strikes. At expiration, all four
options expired worthless and the trade ended with the **full profit of $332**.

![TSLA Full Profit Result](../ref/iron-condor/frames/frame_0330.jpg) _TSLA Iron Condor result: Net
Credit $335, Max Profit $335, Result = Max Profit._

### Example 2: Tesla — Drawdown Then Profit

![TSLA Drawdown](../ref/iron-condor/frames/frame_0260.jpg) _TSLA Iron Condor P/L showing the
drawdown when Tesla approached the call spread._

This Tesla iron condor had the stock at ~$251 at entry, selling the $215/$205 put spread and
$320/$330 call spread for a
$3.35 credit. Early in the trade, Tesla fell through the entire put spread and on August 7th the trade was down **$339**.
If the stock had stayed below the put spread through expiration, this loss would have increased
toward the max loss of $665. Fortunately, the trade ended with **full profit** as the stock price
ended between the short strikes at expiration.

### Example 3: Tesla — Late Reversal to Max Loss

![TSLA Near Profit](../ref/iron-condor/frames/frame_0350.jpg) _TSLA was up $268 (85% of max profit)
on Nov 4th — but the trade wasn't over._

![TSLA Exit Breakdown](../ref/iron-condor/frames/frame_0380.jpg) _Entering vs. Exiting the Trade:
Could have closed for $268 profit, but held to expiration._

This is the most painful example. With the stock at $227, the iron condor was selling the $190/$180
put spread and $295/$305 call spread for $3.15 credit. For the first 80% of the trade, Tesla sat
right between the short strikes. On November 4th, the trade was **up $268** — 85% of the max profit
of $315. The trader could have closed the position by buying back the spreads for $47. But they
held.

![TSLA Max Loss](../ref/iron-condor/frames/frame_0410.jpg) _Tesla at $320.72 at expiration. The call
spread is worth $10.00. Result = Max Loss._

In the final moments before expiration, the stock shot up. At expiration, Tesla closed at $320.72 —
above the call spread. The 295 call was worth $25.72 and the 305 call was worth $15.72, making the
call spread worth $10.00. Since the iron condor was sold for $3.15, that's a **$6.85 loss per
share** — a **$685 maximum loss**.

> **Key Lesson:** You don't have to hold until expiration. Closing early at 50–85% of max profit is
> a common and prudent approach.

---

### 🧠 Quiz 4 — Real Trade Scenarios

```quiz
In the Tesla example where the trade was up $268 with a max profit of $315, what could the trader have done to secure the profit?

  - [ ] Waited until expiration for the full $315
    Waiting introduces additional risk — the stock could move against the position.

  - [x] Closed the trade early by buying back the iron condor for $47
    Since they sold it for $315 and it's now trading for $47, closing locks in $315 − $47 = $268 profit.

  - [ ] Rolled to a longer expiration
    Rolling extends the trade's duration and doesn't lock in current profits.

  - [ ] Done nothing — the profit was guaranteed
    Nothing is guaranteed until expiration. The stock can still move.
```

```quiz
A Tesla iron condor is entered for a $3.32 credit with $10-wide spreads. Tesla closes above the upper long strike at expiration. What is the result?

  - [ ] $332 profit
    That would only happen if the stock stayed between the short strikes.

  - [ ] $332 loss
    The loss is much larger than the credit received.

  - [x] $668 loss (the maximum loss)
    Max loss = $1,000 (spread value) − $332 (credit) = $668.

  - [ ] Break even
    The stock is past the breakeven point, so the loss exceeds zero.
```

---

## 5. The Greeks — How the Iron Condor Behaves

To understand how an iron condor behaves, let's look at an NVDA example using the option modeling
platform.

![NVDA Iron Condor Setup](../ref/iron-condor/frames/frame_0450.jpg) _NVDA iron condor: Selling 240
call/190 put, buying 245 call/185 put. $5 wide on both sides._

### Greeks at Entry

| Greek         | Value    | What It Means                                                                |
| ------------- | -------- | ---------------------------------------------------------------------------- |
| **Delta (Δ)** | ~0       | Very little directional exposure — the position is market neutral            |
| **Theta (θ)** | +$2/day  | The position gains ~$2 in value per day from time decay (if stock stays put) |
| **Vega (ν)**  | Negative | The position profits when implied volatility decreases                       |
| **Gamma (Γ)** | Negative | Small negative gamma — losses accelerate if the stock moves sharply          |

![NVDA Greeks](../ref/iron-condor/frames/frame_0500.jpg) _NVDA modeled P/L with T+0, T+26, and T+51
curves. Notice the flat shape around the current price = near-zero delta._

### Theta — Time Decay Is Your Friend

The iron condor has **positive theta**, meaning each passing day brings you closer to profit — as
long as the stock stays between your short strikes. In the NVDA example, the position is expected to
pick up **$2 in profits per day** from time decay alone.

### Vega — Decreasing IV Helps

The iron condor has **negative vega**, meaning a decrease in implied volatility makes the position
more profitable. When IV drops, option prices decrease, and since you sold the options, that's good
for you.

![IV Decrease](../ref/iron-condor/frames/frame_0550.jpg) _A decrease in IV means options are pricing
in less stock volatility. With the stock in the profit zone, the iron condor gets cheaper, improving
P&L for the seller._

### IV Rank and IV Percentile

Traders prefer to sell iron condors when **IV Rank** and **IV Percentile** are high, because:

- These metrics tell you how rich implied volatility is relative to historical norms
- High IV Rank/Percentile means there's a higher probability that IV will go down (mean reversion)
- Decreasing IV after you sell = the iron condor gets cheaper = you profit

![IV Stats](../ref/iron-condor/frames/frame_0600.jpg) _NVDA IV30 at 43.7%, Rank 51, Percentile 66 —
moderate levels for iron condor selling._

> **The catch:** High IV also means the stock is moving around a lot. A big move in either direction
> can still put your iron condor in a losing position, even with favorable IV dynamics.

---

### 🧠 Quiz 5 — Greeks and Iron Condors

```quiz
Why does an iron condor have positive theta?

  - [ ] Because the stock price is expected to go up
    Theta is about time decay, not directional movement.

  - [x] Because the position benefits from the passage of time — options lose value as expiration approaches, and you're a net seller of options
    Selling more premium than you buy means time decay works in your favor.

  - [ ] Because implied volatility is decreasing
    That's vega, not theta.

  - [ ] Because the stock is staying still
    Theta works regardless of stock movement — it's purely a time effect.
```

```quiz
If implied volatility decreases after you enter an iron condor, what happens to your position?

  - [ ] You lose money because the options become more expensive
    Decreasing IV makes options cheaper, not more expensive.

  - [x] You make money because the options you sold decrease in value
    Negative vega means you profit when IV drops — the iron condor gets cheaper to buy back.

  - [ ] Nothing — IV doesn't affect iron condors
    Vega is one of the most important Greeks for iron condors.

  - [ ] You only profit if the stock also moves in your direction
    IV decrease helps regardless of stock direction.
```

---

## 6. When Things Go Wrong — Adjustments

What do you do when an iron condor moves against you?

### The Tested vs. Untested Side

When a stock moves toward one of your spreads, that spread is the **tested side**. The other spread
(which is still profitable) is the **untested side**.

![NVDA Iron Condor Under Pressure](../ref/iron-condor/frames/frame_0650.jpg) _NVDA iron condor
position showing the call spread in the money (tested side) and put spread profitable (untested
side)._

### Adjustment 1: Roll the Untested Side

You can **buy back the untested spread and sell a new one at higher strikes**, closer to the stock
price. This:

- Collects additional credit (reducing your max loss)
- Narrows your profit zone (reducing the probability of max profit)
- Moves the untested side closer to the stock price

![Debit vs Credit](../ref/iron-condor/frames/frame_0700.jpg) _Debit = you pay to make the trade
(reduce cash). Credit = you receive money (increase cash)._

### Adjustment 2: Roll into a Butterfly

The most aggressive roll converts the iron condor into a **butterfly** by moving the untested side's
strikes to match the tested side's short strike. This:

- Collects significant additional credit
- Reduces max loss dramatically
- Creates a very narrow profit window (very low probability trade)

![Butterfly Adjustment](../ref/iron-condor/frames/frame_0800.jpg) _Adjustment modeling showing the
butterfly conversion. The dashed lines show the original iron condor; solid lines show the adjusted
position._

### Adjustment 3: Re-center the Iron Condor

Close the current iron condor and open a new one centered around the current stock price. This:

- Resets directional risk to near zero
- Requires paying a debit (you'll lose some money on the adjustment)
- Gives you a fresh start with a market-neutral position

![Re-centered Iron Condor](../ref/iron-condor/frames/frame_0900.jpg) _After re-centering, the new
T+0 curve is flat around the current stock price — directional risk is reset to zero._

> **Key Insight:** Adjustments are a trade-off. Rolling the untested side reduces max loss but also
> reduces your probability of profit. Sometimes the best adjustment is simply closing the trade for
> a loss and moving on.

---

### 🧠 Quiz 6 — Managing Losing Trades

```quiz
When an iron condor's call spread becomes tested (stock rises toward the short call), what does "rolling the untested side" mean?

  - [ ] Closing the call spread and opening a new one at lower strikes
    That would roll the tested side, not the untested side.

  - [x] Closing the put spread (untested) and selling a new put spread at higher strikes closer to the stock price
    The untested put spread is profitable, so you close it and sell a new one closer to the stock for additional credit.

  - [ ] Buying more call options to hedge the upside risk
    That would add cost and complexity, not reduce risk through the untested side.

  - [ ] Waiting for the stock to come back down
    That's not an active adjustment — it's hoping.
```

```quiz
What is the main trade-off when you adjust an iron condor by rolling the untested side closer to the stock?

  - [ ] You increase both max profit and max loss
    You increase max profit AND decrease max loss, but there's a catch.

  - [x] You reduce max loss but also narrow your profit zone, reducing the probability of max profit
    The narrower profit zone means the stock is more likely to end up outside it.

  - [ ] There is no trade-off — it's always beneficial
    Every adjustment has a cost. Narrowing the profit zone is a real downside.

  - [ ] You convert the iron condor into a long position
    Rolling the untested side keeps you as a net seller of premium.
```

---

## 7. Liquidity — Choosing the Right Options

One of the most important factors when trading iron condors is **how liquid the options are**.
Liquidity means how much trading activity the options have — measured by **open interest**,
**volume**, and **bid-ask spreads**.

### Illiquid Example: SOXX (iShares Semiconductor ETF)

![SOXX Illiquid](../ref/iron-condor/frames/frame_0950.jpg) _SOXX option chain with wide bid-ask
spreads. Even though open interest exists in the hundreds, the bid-ask spread is enormous._

If you buy this 460 call for $26 (ask) and immediately sell at the bid of $17.60, you'd **lose over
$800** just from the spread — that's called **slippage**. With an iron condor trading four separate
options, wide spreads destroy your P&L.

### Liquid Example: SoFi

![SoFi Liquid](../ref/iron-condor/frames/frame_1000.jpg) _SoFi option chain with tight bid-ask
spreads. Open interest in the thousands, volume in the thousands._

The 16 call option has a bid-ask spread of $1.13 / $1.18 — only **five pennies wide**. Trading iron
condors on options like this is much better for your P&L because you lose far less to slippage.

> **Rule of thumb:** Look for options with high open interest, high volume, and tight bid-ask
> spreads. If the bid-ask spread is wider than $0.10–$0.15, think twice about trading that option.

---

### 🧠 Quiz 7 — Liquidity

```quiz
Why are wide bid-ask spreads problematic for iron condors?

  - [ ] They make the position more likely to be profitable
    Wide spreads hurt you in both directions.

  - [x] They cause slippage — you lose money on every entry and exit because you buy at the ask and sell at the bid
    With four options in an iron condor, the slippage cost compounds across all legs.

  - [ ] They increase the max profit potential
    Wide spreads reduce your effective credit received.

  - [ ] They have no impact on iron condors
    Liquidity directly affects execution quality and P&L.
```

```quiz
Which of these option chains is MOST suitable for selling an iron condor?

  - [ ] Open interest: 50 contracts, bid-ask spread: $2.00/$3.50
    Very low liquidity and extremely wide spread.

  - [x] Open interest: 5,000 contracts, bid-ask spread: $1.13/$1.18
    High open interest and only a 5-cent spread — excellent liquidity.

  - [ ] Open interest: 200 contracts, bid-ask spread: $0.50/$1.20
    Moderate open interest but still a wide spread.

  - [ ] Open interest: 10 contracts, bid-ask spread: $0.05/$0.10
    Very tight spread but almost no open interest — you may not get filled.
```

---

## 8. Choosing Expiration and Strike Prices

### Expiration Selection

![Time to Expiration](../ref/iron-condor/frames/frame_1050.jpg) _More time = wider profit zone, but
slower time decay. The sweet spot is 30–45 days._

| Time to Expiration | Pros                                        | Cons                                        |
| ------------------ | ------------------------------------------- | ------------------------------------------- |
| **30–45 days**     | Faster time decay, quicker profits          | Must sell strikes closer to the stock price |
| **60+ days**       | Can sell wider spreads (further from stock) | Slower time decay, longer wait for profits  |

Most traders prefer **30–45 days** as the sweet spot because even though you have to sell spreads
closer to the stock price, profits come through much more quickly.

### Strike Price Selection

Start with the **short strikes first**:

1. Choose which **call to sell** and which **put to sell** based on delta (typically 15–25 delta)
2. Choose a **fixed spread width** (e.g., $5 or $10)
3. Buy the long options at the appropriate distance

Using delta as a guide:

- A **20-delta put** has roughly a 20% chance of finishing in the money
- A **20-delta call** has roughly a 20% chance of finishing in the money
- This gives your iron condor approximately a **60% probability of profit**

### Giving a Directional Bias

You can make an iron condor **slightly bullish or bearish** by using asymmetric spread widths:

- **Bullish bias:** Sell a wider put spread and a narrower call spread → less upside risk, slight
  positive delta
- **Bearish bias:** Sell a narrower put spread and a wider call spread → less downside risk, slight
  negative delta

---

### 🧠 Quiz 8 — Strike and Expiration Selection

```quiz
Why do many traders prefer the 30–45 day expiration window for iron condors?

  - [ ] It gives the stock more time to make a big move
    Iron condors want the stock to NOT make big moves.

  - [x] Time decay accelerates in this window, so profits come through more quickly
    Theta is highest in the 30–45 day range, meaning you collect time decay faster.

  - [ ] The spreads are always wider at this expiration
    Wider spreads can actually be found at longer expirations.

  - [ ] It guarantees a profit
    No strategy guarantees a profit — it's about probability and risk management.
```

```quiz
You want to give your iron condor a slight bullish bias. How would you adjust the spread widths?

  - [ ] Make both spreads the same width
    Equal widths create a market-neutral position, not a bullish one.

  - [x] Sell a wider put spread and a narrower call spread
    A wider put spread collects more premium on the downside, reducing upside risk and creating slight positive delta.

  - [ ] Sell a narrower put spread and a wider call spread
    That would create a bearish bias, not a bullish one.

  - [ ] Buy additional call options
    That would change the strategy entirely — it's no longer a simple iron condor.
```

---

## Flash Cards

```flashcard
What is the formula for max profit in an iron condor?
  Max Profit = Net Credit Received. The most you can make is the total credit collected when opening the trade.

What is the formula for max loss in an iron condor?
  Max Loss = (Spread Width − Net Credit) × 100. For a $10-wide spread with $3 credit: ($10 − $3) × 100 = $700.

What is the net credit in an iron condor?
  The net credit is the total premium received from selling options minus the total premium paid for buying options. It's the trade price × 100.

What are the breakeven points of an iron condor?
  Lower Breakeven = Short Put Strike − Net Credit. Upper Breakeven = Short Call Strike + Net Credit.

What does positive theta mean for an iron condor?
  The position gains value each day from time decay, as long as the stock stays between the short strikes.

What does negative vega mean for an iron condor?
  The position profits when implied volatility decreases. Lower IV = cheaper option prices = profit for the seller.

What is "rolling the untested side"?
  Closing the profitable spread (the one the stock hasn't moved toward) and selling a new spread at strikes closer to the stock price for additional credit.

What is slippage in options trading?
  The cost of the bid-ask spread — you buy at the ask and sell at the bid. Wide spreads mean more slippage and worse execution.

What delta range is commonly used for iron condor short strikes?
  15–25 delta. This gives roughly a 60–70% probability of the option expiring out of the money.

What is the ideal expiration window for iron condors?
  30–45 days to expiration. This balances faster time decay with reasonable strike selection.
```
