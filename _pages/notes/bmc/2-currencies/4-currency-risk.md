---
title: "BMC: Currencies - Currency Risk"
layout: default
permalink: /notes/bloomberg-market-concepts/currencies/currency-risk
redirect_from:
 - /notes/bmc/2/4
---

# Currency Risk

### The Inconvenience of Currency Volatility
Currency movements can cause damage to investment returns & corporate planning. 

Imagine you are US woman who wants to invest in Japanese stocks. Type in `TOPIX`, then `GP`.  
In this hypothetical, you get the luxury of hindsight. Overlay Japanese yen per U.S. dollar.  
You want to repatriot to. The prevailing exchange rate at the end of the year.  

When the TOPIX strenghtens, the Yen weakens.  
Japan is a heavy exporter, as in heavy stuff. As the yen weakens, the products become cheaper to foreigners and more attractive. The companies selling obviously want more sales, so they took it personally. The stock market went up. 

### Tools to Assess Currency Risk
- Historic Volatility of Currency Pair Values (past)
- Analyst Forecasts of Currency Pairs (future)

### Historic Volatility of Currency Pair Values
Go to FX Forecast Model (`FXFM`). This function shows the chances of future currency rates in a specified historic time-frame.  
The red-bell curve shows the likelihood of shifts of the value.  
X-axis refers to no. of U.S. dollars to the currency.  
A currency pair of high volatility has a wider bell-curve (wider along X-axis)

For example, you are a german. 
- selling stuff in US
- costs are in Euros
- if dollar become weaker, it becomes harder to pay costs. 
- if you get 1 euro for every 1.36 us ----> profit is about 2000
- if you get 1 euro for every 1.40 us (dollar becomes weaker) ----> profit is about 0 

In the chart here, click on range. The part between the blue bars represents 1 standard deviation on either side of the exchange rate. 

The one with highest Q2 'year' is more stable and most likely to cancel order due to volatility. 

### Analyst Forecasts of Currency Pairs
Type in FX Forecasts (`FXFC`). Investment banks have teams that forecast currency pairs, usually in the next few quarters and the next few years.  
Take a pick here, such as the EURJPY forecast. 

These forecasts come from the average from various investment bank analyst teams. The teams will compile a lot factors in order to create the forecast, such as opinions, trades and historic forecasts. 

Click on Chart in the red bar. There you can see the mean at first, and the current currency exchange rate. You can check contributor investment groups to see what they predict for the quarters to come. 

### Hedging currency risk
Investors can lock their currency exposure for a long period using the currency-forward market. 

The Forward Calculator (`FRD`) shows the forward exchange rate for a selected currency pair.  
It is for those who want to edge, uhh i mean, hedge, aka knowing the risk. 

In the forward market, traders would agree to exchange according to a rate that is predicted at a certain time (i.e. 10yrs) after that period of time.  
It is quite a bet to be honest.  
If you exchange now, you will get that exchange 10 years later, but the rate is at what was predicted 10 years ago.  
If the predicted rate was better than the actual rate after 10 years, then you won,  
and you get to own a bigger vineyard, yim yum. 

### Gold: The Ancient Currency
"Let's revisit gold" - Narrator

Gold is a non-yielding asset, which means no interest or dividends. Gold is durable, rare, and non-manipulatable. It is the inflation hedge. 

Type in "gold", go to `XAU`. After adjusting the date range, you can see that when Reagan decoupled Gold from the US dollar, the price of it increased over the decades, from $35 to breaking beyond $1500.  
$35 dollars in that time, when adjusted for inflation (with CPI), would be worth $214. Some shiny piece of metal really was a better source of value compared to piece of plastic (or paper). 


## Summary
Currency Risk
- Currency movements can wreak havoc on corporations and investors. 
- Historic volatility and currency rate forecasts shed light on currency risk. 
- Forward agreements lock in currency rates in the future, facilitating hedging and speculation. 
- The fact that gold is scarce and cannot simply be printed has meant that it has retained value. 


Terminal functions in this section:
- `ECTR`, an interactive tradeflow map
- `FXCA`, a currency conversion calculator
- `PEG`, a table of currencies linked to other currencies
- `BI`, provides analysis and data on a series of tailored industry dashboards
- `FXTF`, a library of all the world's currencies
- `FXC`, a matrix of currency exchange rates
- `WCRS MAC`, Big Mac index identifying potentially overvalued or undervalued currencies
- `IFMO`, world inflation monitor
- `FXFC`, displays foreign exchange rate forecasts
- `FX24`, displays currency pair trading 24/7
- `FXFM`, an FX rate forecast model which displays a bell curve of implied volatility
- `FRD`, displays FX forward rates for currency pairs

The US dollar is the heart of the world currency markets.  
Pegs don't always work.  
In the long term, currency values are dependant on surprises.  
Central banks target 2% of inflation rate.  
Investors can lock exchange rates in the forward market.  
Gold, the ancient currency, is the canary in the coal mine.  


<br><br><br><br><br>
[Click here to go back](..)