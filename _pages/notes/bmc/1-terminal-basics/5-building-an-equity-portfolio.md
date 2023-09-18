---
title: "BMC: Terminal Basics - Building an Equity Portfolio"
layout: default
permalink: /notes/bmc/terminal-basics/building-an-equity-portfolio
redirect_from:
 - /notes/bmc/1/5
---

# Building an Equity Portfolio

Portfolio Manager's performance depends on a lot of factors:
- Changes in the market
- Every possibility
- Flexible plans to responding to economic, societal & political events

### Portfolio Management functions

Find wealthy investors & entrepenuers in the world
- [RICH](#rich---bloombergs-billionaires-index): Bloomberg's Billionairs Index

Research wealthy investors for insights
- [IP](#ip---investor-profile): Investor Profile

Create a portfolio
- [PRTU](#prtu---portfolio-administration): Portfolio Administration

Analyze a portfolio
- [PORT](#port---portfolio--risk-analysis): Portfolio & Risk Analytics

### `RICH` - Bloomberg's Billionaires Index
This function makes use of data & proprietary calculations to monitor the world's richest people (net worth) and how their fortunes changes when the markets change.  
Click on any rich person to open their biography, which contains:
- in-depth details (such as the overview)
- how they made their money
- how they spend & give

Usually a rich person is a chairman of a company. Go to a new screen and open `DES`.  
In the first amber field, enter in the company's name, select **class A equity ticker** in the dropdown.  
This is because it carries more voting rights and therefore the ones that mutual funds invest.  
Expand the company description and scroll down to **Strategy**

Now let's take a look at the person's investments, and create our own portfolio, basing on their's success.

### `IP` - Investor Profile
In `RICH`, type in `IP`.  
This function provides 5 years of data of holdings for analysis.  
Click on the Holdings tab to look at the company's investments.  

Now open a new panel, and type PORTFOLIO in the cmd and select "Portfolio Management & Risk" menu. This menu provides certain functions to:
- Create & maintain portfolios (`PRTU`, `BBU`), 
- Run an analysis of your portfolios on performance, attribution & risk, 
- Access the most relevant news & research, and
- Run reports

Now click on `PRTU`.

### `PRTU` - Portfolio Administration
This function allows you to Create & Manage (Actions) your portfolios. You can also share them to other Bloomberg users. Right now none is selected so the Remove & Share features are disabled.  

Click Create to setup. 
- Add a name
- Asset class -> Equity
- Currency -> USD
- Position type
	- Fixed weight means constantly selling & buying stock to maintain a fixed weight for each stock
	- Drifting weight means the weights drift, letting the stocks appreciate or depreciate. 
- Benchmark -> SPX
- Calculation profile -> BBG_EQTY_CALCS
- Default PORT View -> BBG_EQTY_VIEW

then click Create.

Right now there are 2 main parts:
- Top: Portfolio settings
- Bottom: Edit securities

You can set a date in a past for a historical chart of your performance.  
Now you can build your portfolio.  

Here's the multi-window part. There are 2 ways to add securities to your portfolio:
- Type in the ticker in `PRTU`
- Drag & drop from `IP` to `PRTU`
	- In this one, click on Merge since you're adding it in and not replacing it

After that, you can set the weights for each stock. If you are doing drifting weights, i'd recommend evenly splitting the weights.  
Click on Save  
You can access the portfolio by clicking on Related Functions Menu, then clickin on Portfolio & Risk Analytics (`PORT`)

### `PORT` - Portfolio & Risk Analysis
This function enables you to gain deeper insights into your portfolios by:
- providing you tools to understand the structure of the portfolios
- analyze positions & active bets, and
- explain the drivers of historical performance, and potential sources of future risks

This function is organized in a streamlined workflow, as show in the tabs:
- **Intraday**: Tracks intraday absolute or relative performance
- **Holdings**: View portfolio's current & historical positions, weights & sector grouping allocations
- **Characteristics**: Analyzes fundamental characteristics of portfolio and how they have changed over time
- **VaR (Value at Risk)**: Estimates maximum portfolio loss in P&L (Percent return)
- **Scenarios**: Stress tests portfolios based on historical or hypothethical errors based on market movements
- **Tracking Error/Volatility**: Analyzes ex-ante predicted risk using BB's multi-factor risk models. 
- **Performance**: Analyzes historical performance, shows risk-return behavior of portfolio
- **Attribution**: Attributes portfolio active performance to the benchmark

Each tab has subtabs, just more details.  
Under all of those are amber fields that allow you to load different portfolios, different benchmarks & breakdown attributes. These remain the same in all tabs

### `PORT`: Performance
Now, let's evaluate the portfolio's returns. Click on performance tab.  
Click on Total return subtab. Change the periodicity from the Time amber field to either a specific date or Maximum Range. 

The chart is split into 2 panels. 
- Top: Line graph's **total** return against the benchmark
- Bottom: **Difference** between the portfolio & the benchmark (active returns)

### `PORT`: Attribution
Go to attribution tab, then the summary subtab. This tab shows whether or not the portfolio outperformed the benchmark, and also which ones drove the performance (best ones)

Dude, it's basically like in AI where weights are changed when training.

There are some of the columns: 
- **Allocation**: Sectors that outperform the benchmark will be allocated more weight (Allocation Effect)
- **Selection**: Which stocks they believe would perform above average (Selection Effect)
- **Currency**: Currency which the stock trades versus the currency of the overall portfolio (Currency Effect)
	- Affected by appreciation or depreciation of a currency, could effect returns.
- **Interaction**: The results of Allocation, Selection & Currency (Interaction Effect)

Change the time to a specific time range if you want.  
Look at Return Summary:  
The Returns numbers represent percentage earns or losses. Active return means the performance versus the benchmark. 

What causes the Active return to be good or bad? Look at the Active Return Attribution Summary Section:  
This shows which effect have more or less good or bad effects (if Currency are all in USD, there will be no Currency effect).  

### `PORT`: VaR
You want to return where the returns are coming from and their risks  
Click VaR tab, then click VaR Comparison subtab. Look at the variables:
- As of **date**
- relative to **benchmark**
- with the VaR's confidence
- with historical 3 year simulation VaR or so

This uses BB's risk model. With an investment ased on the Portfolio's Value.  
You can look at the exact percentage by changing Unit amber field.  
The Conditional VaR column tells you how much you could lose on average if tomorrow is 1 out of top 5 worst days out of a 100 days

If it is less than 1 (with P%L), then it is actually ok because that is less than 1%, of probably millions

<br><br><br><br><br>
[Click here to go back](..)