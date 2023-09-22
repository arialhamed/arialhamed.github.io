---
title: "BMC: Terminal Basics - Analyzing the Market"
layout: default
permalink: /notes/bloomberg-market-concepts/terminal-basics/analyzing-the-market
redirect_from:
 - /notes/bmc/5/2
---

# Analyzing the Market

Before interacting the market, you must analyze it. There is a lot to it, like political turmoil & natural disasters and whatnot. 

### `GMM` - Global Macro Movers
![](https://github.com/arialhamed/static/blob/main/images/notes/bmc/5-2-1.png?raw=true)
An election is a macro event.  
Typing MACRO in the cmd will show the biggest moves in a specific time-span (amber fields here).  
Remember these dates  

### `COUN` - Country Guide, `GP` - Price Chart, `GCT` - Graph Curve Tenors
![](https://github.com/arialhamed/static/blob/main/images/notes/bmc/5-2-2.png?raw=true)
Right clicking on a country's stock market, and selecting COUN will pull up an overview of the country's financial markets
- The left shows Asset Class sections
- The bottom is top news for the country
- The top-right is Price Chart (`GP`) (price movement from main equity index)
	- Clicking on it enlarges it 
	- By default, the prices are shown in the past year
	- Changes can be measured with Annotate
- The bottom-right is the yield curve, the risk-free rate of the country (Sovereign Yield Curve), aka the Graph Curve Tenors (`GCT`)
	- Left side is curve chart, realtime or historical of our choice
	- Right side allows us to choose curves & yields, or spread some ratio along the y-axis
		- Also allows us to monitor analyse & compare securities & curves
	- For single curves, the lower chart displays a table of rates for each tenure (3m, 1y, 2y, 10y, etc)
	- By default it shows the yield for the day
		- Clicking on Modify can show yields for specific dates
		- You can see the changes in the bar graph below, double clicking on one of them will pull up the Graph Curve Tenure (`GCT`), which allows us to plot values of curve tenures over time
		- Click on custom to input specific dates again, here you can see how the change happened in the specific period.
		- Clicking on Annotate can show the net change
Hitting the menu key will return from the price chart and yield curve to this guide

Now, how to know if a different country is affected by the net changes in this country?

### `GMM` again
Go back to `GMM`, it went back to default, select the date again  
Now that you're back, look at Sovereign Bonds for the country. Right click on that tile and choose World Bonds Markets (`WB`)

### `WB` - World Bonds
This is to see the historical bond spreads
- Left is Sovereign Details
- Middle is Intraday Data
- Right is Historical Data

The next tab is Spreads
- Here you can change the Maturity & Sell Country (different country) of the spread
- Now you can see the bond spread between the two countries in Basis Points (or bps? it says Spd in the column, probably means Spread). You can find the highest or lowest spreads here. Clicking on the chart icon will pull up a chart so that you can see the line chart, also to see the largest or lowest spreads.
- You can select the other chart icons of other countries to add to that popup, clicking on Track next to Annotate can show where there are peaks, if there any ripple effects.

The origin of the moves can be found by examining the news. We know the markets move, but why?

### `TOP` - Top News, `QUIC` - QuickTake, `OPIN` - Opinion
`TOP` will bring you to the Top News. Use the command line to specify the country/date/etc

In Background & Opinion, the first article is the QuickTake (`QUIC`). The QuickTake are Bloomberg's one-page guide to current news topics. Click the "Menu to Return" to return (duh).   
There are other worthwhile editorials under this section that hold valuable information & estimates by Bloomberg editors, aka Opinion (`OPIN`). 

### `ECO` - Economic Calendars, `ECOS` - Economic Estimates, `ECOD` - Economic Release Details
Once again, you can change the date range & country, and more i guess. Oh and also you can click on Settings to add, remove & reorder columns here.  
Right click on any number here and click on Economic Estimates (`ECOS`) to see how far the estimates were compared to the actual number. 

"Generic" means historic (compared to current, lel)  
Selecting one of these will show a security menu, if you want to chart, click on Chart & uhhh

### `GIY` - Intraday Yield Chart
Of course, you can change the date range here, use the Track feature to a certain time.  
When you find that, you can search the country's outstanding debt. You can find when the country issued tenor bonds or not, but what price? How much more did a country pay to attract investors?

### `ECO` again
You can find the Economic Releases followed by the country's name  
You select Economic Releases dropdown to Government Auctions (and the dates of course, for filtering)

News (`TOP`) can show the political climate, and the key economic data releases through `ECO`.  
There is more! This is by Bloomberg Economic Analysts

### `BI` - Bloomberg Intelligence
Here there are sectors & topics, click on Economics.  
Here you can find previews, reactions & insight pieces around major data releases & events, categorized by regions, all written by Bloomberg analysts  
Clicking on a country here, you can check out the country primer. The analysts insights are here.  
On the left, there is Data Library folder that provides deep Macro & Sector analysis.  
In the Macro, you can find all kinds of stuff (such as the Consumer Confidence Index)  

Now that you're more comfortable exploring what's happening in the wider markets, you can get into more specific securities, such as Fixed Income & Equities.

## Summary 
You've learned how to use the terminal:
- Use the command line
- Navigate the menus
- Use the Menu key
- Use the search field 
- Manipulate amber fields
- Customize screens using settings
- Customize a screen for a particular date in the past
- Chart yields and manipulate charts

You've also learned how to analyze the market:
- `GMM`: Global Macro Movers
- `WB`: World Bonds
- `COUN`: Country Guide
- `GP`: Price Chart
- `GC`: Graph Curves
- `GCT`: Graph Curve Tenors
- `GIY`: Intraday Yield Chart
- `TOP`: Top News
- `QUIC`: Bloomberg QuickTakes
- `OPIN`: Bloomberg Opinion
- `ECO`: Economic Calendars
- `ECOS`: Economic Estimates
- `ECOD`: Ecocnomic Release Details
- `BI`: Bloomberg Intelligence

The narrator here be like "is there political turmoil?" like sure pineapples are flying off the shelves but hey better than staying in the closet.

<br><br><br><br><br>
[Click here to go back](..)