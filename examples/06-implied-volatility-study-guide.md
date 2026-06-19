---
title: "Implied Volatility"
order: 6
tags: [options, implied volatility, IV]
group: "Options Trading"
---

# Implied Volatility — Study Guide

> A self-study companion built from the Options Trading Beginners course. Read each section, then test yourself with the embedded quiz.

---

## 1. What Is Implied Volatility?

Implied volatility (IV) is the **market's expected magnitude of a stock's price fluctuations** in the future. Don't let the term intimidate you — swap out the words and you get:

> **Implied Volatility = Expected Magnitude of Stock Price Fluctuations**

The key insight: **option prices imply the level of expected volatility.** When you look at two similarly priced stocks and one has significantly more expensive options, that stock has higher implied volatility — the market expects larger price swings.

### The Visa vs. Teladoc Example (from the course)

Two stocks with nearly identical share prices:

| | Visa (V) | Teladoc (TDOC) |
|---|----------|----------------|
| **Stock Price** | ~$179 | ~$180 |
| **Option** | June 180 Call | June 180 Call |
| **Days to Expiration** | 36 | 36 |
| **Option Premium** | **$7.35** | **$15.45** |

Same stock price. Same strike price. Same time to expiration. But Teladoc's call option costs **twice as much** as Visa's.

- **Visa 180 call:** $7.35 → costs $735 per contract
- **Teladoc 180 call:** $15.45 → costs $1,545 per contract

Both options are out of the money (strike is slightly above stock price), so the entire premium is **extrinsic value**. The difference in extrinsic value tells us that the market expects Teladoc shares to move significantly more than Visa shares over the next 36 days.

---

### 🧠 Quiz 1 — Implied Volatility Basics

````quiz
What does implied volatility measure?

  - [ ] The historical price range of a stock
    That's historical or realized volatility. Implied volatility is forward-looking.

  - [x] The market's expected magnitude of future stock price fluctuations
    Implied volatility reflects what the market expects going forward, derived from option prices.

  - [ ] The intrinsic value of an option
    Implied volatility is related to extrinsic value, not intrinsic value.

  - [ ] The time remaining until an option expires
    Time to expiration is a separate factor from implied volatility.
````

````quiz
Two stocks are both trading at $50. Stock A has a 30-day $55 call priced at $1.20. Stock B has the same 30-day $55 call priced at $3.80. Which stock has higher implied volatility?

  - [ ] Stock A, because its option is cheaper
    Cheaper options indicate lower implied volatility, not higher.

  - [ ] They have the same implied volatility
    The option prices are different despite identical conditions, so IV differs.

  - [x] Stock B, because its option is more expensive
    Higher option prices (with the same strike and expiration) imply the market expects larger price movements in Stock B.

  - [ ] Cannot be determined from this information
    We have enough information — same stock price, same strike, same expiration — to compare IV.
````

---

## 2. Why Does Implied Volatility Differ Between Stocks?

The market prices options based on how much a stock is expected to move. A stock with larger daily price ranges (higher **historical volatility**) will tend to have higher implied volatility because:

1. **Buyers pay more** for options on volatile stocks — there's a higher chance those options become significantly intrinsically valuable before expiration.
2. **Sellers demand more** premium to take on the risk of writing options on volatile stocks.

### Historical Volatility Connection

In the Visa vs. Teladoc comparison, the course showed daily high-to-low price ranges over several weeks:

- **Visa:** daily range of ~$6 (e.g., on May 14th)
- **Teladoc:** daily range of ~$13–$14 (same day)

Teladoc's daily price swings were roughly **twice the magnitude** of Visa's. This observed (historical) volatility directly explains why Teladoc's options cost twice as much — the market is pricing in those larger expected moves.

---

### 🧠 Quiz 2 — Connecting IV to Volatility

````quiz
Why do options on a volatile stock typically cost more than options on a stable stock (assuming same price, strike, and expiration)?

  - [ ] Volatile stocks always go up
    Volatility means larger moves in either direction, not just up.

  - [ ] The government sets higher prices for volatile stocks
    Option prices are set by the market, not by government regulation.

  - [x] The market expects larger price swings, so option buyers pay more and sellers demand more premium
    Higher expected volatility increases the probability that options become valuable, driving up prices from both buyer demand and seller risk compensation.

  - [ ] Stable stocks have fewer option buyers
    Both stocks can have plenty of option activity; the price difference reflects risk expectations.
````

````quiz
A stock historically moves $2 per day on average. Another stock moves $10 per day. Both trade at $100. If all other factors are equal, which stock's options will likely have higher implied volatility?

  - [ ] The $2/day stock
    Lower historical volatility suggests lower expected volatility.

  - [x] The $10/day stock
    Higher historical volatility typically translates to higher implied volatility — the market expects those larger moves to continue.

  - [ ] They will have the same implied volatility
    Historical volatility differences typically lead to IV differences.

  - [ ] Implied volatility is unrelated to how much a stock moves
    IV is directly tied to expected price movement, which is informed by historical patterns.
````

---

## 3. How Implied Volatility Changes — and What Drives It

This is a critical and often misunderstood concept:

> **Option price changes cause implied volatility changes — not the other way around.**

Many beginners think IV is some external percentage that moves option prices. In reality, when option prices increase (due to higher demand, new information, or increased uncertainty), IV goes up. When option prices decrease, IV goes down.

### Example: News Hits Visa

Imagine Visa's 180 call is trading at $7.35. Then news comes out that causes the market to expect significantly more price movement from Visa through the June expiration:

1. Options traders start **buying Visa options aggressively**
2. Increased demand pushes the option price up — say from $7.35 to $15.00
3. Since the stock price and time to expiration haven't changed, this price increase is reflected as **higher implied volatility**

The option got more expensive → that's what caused IV to increase.

---

### 🧠 Quiz 3 — IV Changes

````quiz
Which of the following best describes the relationship between option prices and implied volatility?

  - [ ] Implied volatility changes cause option prices to change
    This is the common misconception. It's actually the reverse.

  - [x] Option price changes cause implied volatility to change
    IV is derived from option prices. When option prices move (with all else equal), IV moves in the same direction.

  - [ ] They are completely independent of each other
    IV is literally calculated from option prices — they are directly linked.

  - [ ] Only time decay affects implied volatility
    Time decay affects extrinsic value, but IV changes are driven by shifts in option prices from other factors.
````

````quiz
A call option is trading at $5.00. A major earnings announcement is scheduled for next week, and traders expect a large price move. Demand for the option surges and the price rises to $8.00 while the stock price stays the same. What happened to implied volatility?

  - [ ] It decreased
    Higher option prices (all else equal) mean higher IV.

  - [ ] It stayed the same
    The option price changed significantly with no stock movement, so IV must have changed.

  - [x] It increased
    The option became more expensive due to increased demand/expectations. Since the stock price and time didn't change, this price increase is reflected as higher implied volatility.

  - [ ] It became zero
    There's no scenario where IV becomes zero from an increase in option prices.
````

---

## 4. How IV Changes Affect Your Profits and Losses

When trading options, you can make or lose money from **three sources**:

| Source | Description |
|--------|-------------|
| **Stock price movement** | Directional gain or loss |
| **Time decay** | Extrinsic value shrinking as expiration approaches |
| **Implied volatility changes** | Option prices changing from shifts in market expectations |

### Buying Options and IV

- **IV increases → you profit** (option prices rise)
- **IV decreases → you lose money** (option prices fall, even if the stock doesn't move)

### Selling Options and IV

- **IV decreases → you profit** (option prices fall, you buy back cheaper)
- **IV increases → you lose money** (option prices rise against your position)

Some traders specifically buy options when IV is low (hoping it rises) and sell options when IV is high (hoping it falls).

---

### 🧠 Quiz 4 — Trading Implications

````quiz
You buy a call option for $4.00 when implied volatility is low. The stock price stays flat, no time passes, but IV increases significantly. What happens to your position?

  - [ ] You lose money
    An increase in IV makes your long option more valuable.

  - [x] You profit
    Higher IV means higher option prices. Since you own the option, the price increase benefits you — even without stock movement.

  - [ ] You break even
    The increase in IV has increased your option's value, so you're profitable.

  - [ ] Your option becomes worthless
    An increase in IV increases option value, it doesn't destroy it.
````

````quiz
You sell (short) a put option for $6.00 when implied volatility is very high. Two days later, IV drops and the option is now trading for $3.50. What is your profit?

  - [ ] You lost $2.50
    You sold high and can buy back lower — that's a profit.

  - [x] $2.50 per share ($250 per contract)
    You collected $6.00 when you sold, and it's now worth $3.50. Your profit = $6.00 − $3.50 = $2.50 per share.

  - [ ] $6.00
    $6.00 is what you collected, but you haven't closed the position yet.

  - [ ] $3.50
    $3.50 is the current price, not your profit.
````

````quiz
Which scenario would benefit a trader who bought call options?

  - [x] The stock price rises AND implied volatility increases
    Both factors increase the option's value — directional move plus IV expansion.

  - [ ] The stock price falls AND implied volatility decreases
    Both factors work against a long call position.

  - [ ] The stock price stays flat AND implied volatility decreases
    Time decay and IV decrease both hurt a long option.

  - [ ] The stock price stays flat AND time passes with no IV change
    Time decay alone erodes the option's value.
````

---

## 5. The Insurance Premium Analogy

The course uses a helpful analogy to make IV intuitive:

Think of **implied volatility like an insurance premium:**

- **Healthy lifestyle** → Low insurance premium → Low IV (not much risk expected)
- **Unhealthy lifestyle** → High insurance premium → High IV (more risk expected)

The insurance company charges you more when they expect higher risk of claims. Similarly, the options market charges higher premiums when it expects larger stock price swings.

The premium going from cheap to expensive **causes** IV to increase — just like your insurance premium going up reflects increased risk expectations.

---

### 🧠 Quiz 5 — Putting It All Together

````quiz
In the Visa vs. Teladoc example, why does the Teladoc 180 call cost $15.45 while the Visa 180 call costs $7.35?

  - [ ] Teladoc is a more popular stock
    Popularity doesn't directly determine option prices.

  - [ ] Visa options have more time until expiration
    Both options have the same 36 days to expiration.

  - [x] The market expects larger price swings in Teladoc, so options cost more
    Teladoc's higher historical volatility leads to higher implied volatility, meaning higher option premiums to reflect the greater expected price movement.

  - [ ] Teladoc has a higher stock price
    Both stocks are priced around $179–$180.
````

````quiz
A trader buys options when IV is at a historical low. They plan to profit when IV rises back to normal levels. What is this strategy based on?

  - [ ] Time decay
    Time decay works against option buyers, not for them.

  - [ ] Intrinsic value growth
    The strategy is about IV expansion, not necessarily the stock moving.

  - [x] The expectation that implied volatility will increase
    Buying cheap options (low IV) and profiting when IV expands and option prices rise.

  - [ ] Selling options at high prices
    This trader is buying, not selling.
````

````quiz
Which of the following statements about implied volatility is TRUE?

  - [ ] IV only affects put options
    IV affects both call and put options.

  - [ ] IV is set by the stock exchange
    IV is derived from market-driven option prices, not set by an exchange.

  - [ ] Higher IV always means the stock will go up
    Higher IV means larger expected moves in either direction, not just up.

  - [x] Changes in IV can cause profits or losses even when the stock price doesn't move
    IV changes directly affect option prices. A trader can profit or lose from IV movement alone, independent of stock price direction.
````

---

## 6. Quick Reference Cheat Sheet

| Concept | Definition |
|---------|-----------|
| **Implied Volatility (IV)** | The market's expected magnitude of future stock price fluctuations |
| **What implies IV** | Option prices — higher prices = higher IV (all else equal) |
| **IV vs. Historical Volatility** | Historical = past observed moves; Implied = expected future moves |
| **IV Increase** | Option prices rise (for any reason besides stock movement or time) |
| **IV Decrease** | Option prices fall (for any reason besides stock movement or time) |
| **Long Options + IV ↑** | Profit |
| **Long Options + IV ↓** | Loss |
| **Short Options + IV ↓** | Profit |
| **Short Options + IV ↑** | Loss |

### Key Formula
```
Option prices change → Implied Volatility changes
(NOT the other way around)
```

### Insurance Analogy
```
Low risk  → Low premium  → Low IV
High risk → High premium → High IV
```

---

> **Final thought from the course:** Implied volatility is one of the three forces that determine your P&L in options trading — along with stock price movement and time decay. Understanding that IV is derived from option prices (not the other way around) is a key insight that separates informed traders from beginners. Master this concept, and you'll understand why options on some stocks cost so much more than others.
