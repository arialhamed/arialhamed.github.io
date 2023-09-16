---
title: "BMC: Terminal Basics - Exploring the Equity Market"
layout: default
permalink: /notes/bmc/terminal-basics/exploring-the-equity-market
redirect_from:
 - /notes/bmc/1/3
---

# Exploring the Equity Market

Good at picking stocks to beat the market? Not many people do.  
To deliver _higher returns_ than a **simple passive strategy** and to justify the _management fees_ of an **active investment style**, you need to know what do. Be good at making sure the stocks you choose to put in your portfolio end up delivering higher returns than the benchmark.  
Finance professionals rely on Bloomberg to help them outperform the market

### Equity Functions 

image 1

### `EQS` - Stock Screening

Go to `EQS`, which screens stock based on a customized set of criteria.  
It shows the following sections:
- My Recent Screens
- Popular Screens
- Screening Criteria
- Add Criteria (amber field)
- Selected Screening Criteria

For example, our investment mandate is to invest in profitable, large-cap growth companies. How would we find these in EQS?  
We can put 2 indicators for profitabilty, and 1 indicator for size.
- Gross Margin (Latest Filing) + Greater than + 25%
- Return on Common Equity + Greater than + 25%
- Market Cap (Current) + Rank (Sequential) + Top (10) 
	- Change currency to USD

basically a filter of companies

### `WATC` - Watchlist Analytics
Fun fact, you can save this search by clicking on "Actions" & "Save screen", and you can name it as well.  
Go to Results tab. It is sorted by GM LF (Latest Filing by Growth Margin). Which of these should be explored?  
Go to Overview tab. Sort the company by potential 1yr return (Exp Return) given by Wall Street analysts. 
Click on the name to open a menu. Click on `DES`

### `DES` - Security Description
image2

Here you can learn all about this company.
- The Primer is like the bio but without the link
- The top right shows the industry Classification

This function has tabs & menus, explore gogo  
Whether or not this company has good year-to-date change depends on whether or not the company has overpeformed or underperformed the market.  
You can add an appropiate index for comparison. Go to the "Issue info" tab, find which is a good index that the company has membership.  
Go back to profile then click on `GP`.

### `GP` - Graph Price
image4

Click on "Chart content", type the index mnemonic in the amber field and select from the dropdown.  
In order to understand which security has performed better in the last year, change the "Normalized by" to "Percent Appreciation". This will show price changes in percentage terms. 

The last 12 months & year-to-date are different. The latter means from calendar start. 

You can still chart more data points, such as Dividends (under Events) by typing it in the amber field. You can also select the "News Headlines" to make this graph more interesting (and easier) to find events about this company. 

### `BICO` - Bloomberg Intelligence Company Primer
image3

Those 2 faces are the Bloomberg assigned analysts that keep this company up-to-date, and also makes our job easier by explaining what company is, what the company did, doing now, and what they are bad or good at.  
From here you can type "financials' or `FA` in the command line

### `FA` - Financial Analysis
This function provides comprehensive financial information for a company or index, from historical data to future estimates. Bloomberg gets these data from every public company's annual reports & funnels it all to `FA` within mere seconds (dayum).  
Clicking on the company's revenue can lead to the source. Here you can get specific data from the documents, like the raw documents.  
These data can be obtained from `FA` or Excel (later). In the "Segments" tab, you can look at it more graphically by segments  

There are so many data points, how could make this terminal help you??? 

### `KI` - Key Insights
ARITIFICIAL INTELLIGENCE, of course Bloomberg has that lol. Typing "insights" or `KI` in the command line.  
This function presents most relevant facts about the company in an easy-to-read feed. It unearths deep content throughout the Terminal, and also shows whether or not the insights would have a positive or negative impact on the company.  
There will be some insights where the algorithm is not sure (like 340 gains but 350 loss) so it shows a grey diamond, like an enby. 

### `CP` - Company Profile
`KI` can also be found in this function. `CP` is basically a dashboard that provides all valuation data & financial info about a company. In the "News & Activity" section provides high-relevance articles about the company. Look through some of these for more insights as these are Company News (`CN`)  
Clicking on the "Comparables" section allows you to compare this company to its competitors. 

"P/E" or Price-to-Earnings ratio is a commonly used indicator to compare companies. You can click on the Relative Valuation (`RV`) from here.

### `RV` - Relative	Valuation
This function expands your analysis by showing more metrics, such as Return on Equity (`ROE`) & Gross Margin (`GM`). Quite self-explanatory in this screen.  
A company may have the highest `ROE` but it's `GM` is quite mid. Hmmmm, is the P/E normal for the company or is it an outlier?  

Click on **Related Functions Menu** in the toolbar, click on "Analyze company Equity", then click on Equity Relative Valuation (`EQRV`) which should be in the same section as `RV`. 

### `EQRV` - Equity Relative Valuation
This function is meant to see if the company is fairly valued relative to a group of its peers, given its historical performance compared to the group. This function can also be used to analyze a company's multiple versus its standalone history.  

"BF P/E" or Blended Forward P/E allows us to compare companies that have different reporting dates. This just unifies the P/E as if they were equivalent.  
This company has a BF P/E that is a higher or lower premium (like 10% more or less or etc). If a company has 10% more BF P/E than the median, it means that the investors are more willing to pay 10% more than its peers. 
- Is it normal to pay 10% more for this stock?
- Or did something happen that caused investors to be more wiling to pay more?

To find this out, compare the premiums to the past 2 years (more or less). The data is right there (Hist Avg) in the Current vs n Historical Premium section  

In the `EQRV` provides further context, showing whether or not the company's P/E ratio is average, compared to `RV`. `EQRV` also helps us determine if it is fairly priced by calculating an implied price based on its historical multiples.  
Click on the first row of the Implied Price column to pull up a popup box  called Implied Multiple and Price Transparency to show the calculations done. This determines if the stock is overvalued or undervalued.

Looking back at `WATC`, what if a company has a large difference between Total Return & Expected Return?

### `ANR` - Analyst Recommendations, `PBAR` - Peer Ratings
Go back to `CP` then click on Analyst Ratings.  
This screen shows 2 functions:
- Analyst Recommendations (`ANR`)
- Peer Ratings (`PBAR`)

Subtract the 12-month target price by its recent stock price, divide that by the last price to get the return potential. 

Click on `ANR`. This function shows who are recommending stuff. It can show certain patterns, such as majority of analysts can recommend one action, showing that perhaps analysts & investors think differently (recommendation & actual respectively)

### `TECH` - Technical Analysis
This function provides access to all types of technical analysis studies, provided by you, third-party studies, or shared to you.  
Click on any indicator to display a description to the right. Click on more and use the scrollbar to get more details.  
Click on the link on the bottom of the extended description, it displays more in-depth explanation about how the indicator generates buy & sell signals. There is a loooooot of indicators. 

Bloomberg cannot say which technical indicator would be the best for the future, but it can say which is the best for a period in the past. 

### `BTST` - Basic Backtesting
Click on "Related Functions Menu", go to "Technical Research Tools", and select Basic Backtesting (`BTST`)  
This function tests the effectiveness of different trading strategies (with indicators) with historical data. Not only will this show the best technical indicator(s) but also how it compares to other strategies.  
Choosing "Daily" is short-term, "Monthly" is long-term  
The best ones here is sorted with Total under Profit (Loss).  
Take note of the winners for both "Daily" & "Monthly", and also close runner-ups.

Think there is something better than what it is? (like Buy & Hold)?

### `BT` - Backtesting & Optimization
Here is where you can create your own strategy (own technical study)  
You can use sample strategies created by Bloomberg, or optimize	parameters of chosen indicators.  

Technical analysis only shows which strategy is the best _in the past_. If we believe history repeats itself, then what is here can be a roadmap. It's all up to you.

Wow, never realized that market analysis & finance could introduce this level of creativity. damn i love this frfr no cap

### `COMP` - Comparative Returns
This function shows what the total return would've been if you bought the stock at its IPO (initial public offering) compared to its main indices (now). 

You can add more companies here, and also the date range if company IPO dates are different. 

### `XLTP` - Excel Template Library, `DAPI` - Desktop API
In `DES`, `CP` or `XLTP`, you can get the report summaries for a company. 
- `DES` is small & compact
- `CP` is all data
- `XLTP` allows custom analysis on Bloomberg's data

yo some of these excel files are some crazy dank calculators ngl

Excel is everywhere with the Desktop API (`DAPI`)

### Summary
Exploring the Equity Market, here are the functions thought. These are not all though, there are more related to further aspects of a company if you want to find out more!
