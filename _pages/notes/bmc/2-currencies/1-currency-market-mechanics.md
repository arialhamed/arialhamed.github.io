---
title: "BMC: Currencies - Currency Market Mechanics"
layout: default
permalink: /notes/bmc/currencies/currency-market-mechanics
redirect_from:
 - /notes/bmc/2/1
---

# Currency Market Mechanics
Every security is denominated with currencies. This module will cover these:
- How currency works 
- How currency valuation is driven
- How central banks tackle inflation & deflation
- Currency risk

### Growth of currency market
Go to Trade Flow (`ECTR`). This is a good starting point because of globalization over the decades, which drives currency transactions. 
- The outer rim is total import
- The inner rim is total export

It's quite a simple tool. You can change the year to see trade differences over the years. 

Currencies used to have locked exchange rates, due to the Breton-Woods agreement between the allies. USD$35 per ounce.  
However, after the Vietnam War, the US economy stagnated. Nixon decided to suspend the lock. A lot of money is exchanged everyday, which is also known as the fx market. 

Money Never Sleeps. The Currency markets operates 24hr per day (`FX24`). 

15 days of global currency transaction is the world's annual GDP. Who calculates this?

### Who trades currencies?
It is assumed that tourists are causing the transactions. No. Go to `FXCA`. The top 3 entities are:
1. Financial Investors. 
	- Buying & selling securities in foreign currencies. 
1. Corporations.
	- Conducting goods & services (like Alibaba & Shopee)
1. Travellers
	- duh

### Pegged currencies
Currency conversion is easy if a currency is locked to a certain major currency. Type in `PEG` to see a table of currencies that are linked or pegged to other countries' currency values, just like how the Brunei Dollar is the same as the Singapore Dollar. 

How can a government secure that lock? FX Reserves, interest rate changes, 

Argentina failed to justify their peg at 2002. The loss of peg also influences debt, so Argentina had no choice but to default their debt. 

### Floating Currencies
You can find this in Currency Codes (`FXTF`). When calculating here, you need to really really really make sure that you know what is the denominator.  
129 Jamaican dollars per 1 U.S. dollar, NOT Jamaican to U.S. dollar is 129.  
The narrator is really insistent about this lol. 

You can pull up the Currency Rates Matrix (`FXC`)  
The amber column denotes how much of that currency costs to by 1 dollar of the country row.  
Y axis, to right, then up to X axis. It costs "number" "amber column" to buy "country row".  
Even professionals may get this wrong. 

### Triangular Arbitrage
The floating matrix is locked. You cannot convert between 3 currencies to gain money. The bottom-right triangle is there to lock it there, ensuring that converting between 3 currencies won't give you free lunch or whatever that means. If anything, if you don't have a commission-free trading perk for investment companies, you may lose money instead lmao. 

85% of all fx volumes involve the US dollar

## Summary
Currency Market Mechanics
- Over $5T of currencies are traded every day.
- 1971 marked the dawn of the modern currency market. 
- Several countries peg their currencies to other currencies. 
- Locked exchange rates are not actually set in stone but are government aspirations. 
- Floating currencies move against one another in a matrix. 
- The U.S. dollar is the world's reserve currency and is the most heavily traded currency. 

<br><br><br><br><br>
[Click here to go back](..)