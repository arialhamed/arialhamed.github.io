---
title: "BMC: Terminal Basics - Discovering Fixed Income"
layout: default
permalink: /notes/bmc/terminal-basics/discovering-fixed-income
redirect_from:
 - /notes/bmc/1/4
---

# Discovering Fixed Income

<table style="border-collapse: collapse; border: none;">
    <thead>
        <tr>
            <td>Exploring the Equity Market</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            <b>Screen for stocks</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#eqs---stock-screening">EQS</a>: Stock Screening</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#watc---watchlist-analytics">WATC</a>: Watchlist Analytics</li>
            </ul>
            <b>Investigate company overviews</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#des---security-description">DES</a>: Security Description</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#cp---company-profile">CP</a>: Company Profile</li>
            </ul>
            <b>Research a company</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#bico---bloomberg-intelligence-company-primer">BICO</a>: Bloomberg Intelligence Company Primer</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#ki---key-insights">KI</a>: Key Insights</li>
                <li>CN: Company News</li>
            </ul>
            <b>Explore fundamentals and estimates</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#fa---financial-analysis">FA</a>: Financial Analysis</li>
            </ul>
            </td>
            <td>
            <b>Compare a company to peers</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#rv---relative-valuation">RV</a>: Relative Valuation</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#eqrv---equity-relative-valuation">EQRV</a>: Equity Relative Valuation</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#comp---comparative-returns">COMP</a>: Comparative Returns</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#gp---graph-price">GP</a>: Graph Price</li>
            </ul>
            <b>Examine analyst recommendations</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#anr---analyst-recommendations-pbar---peer-ratings">ANR</a>: Analyst Recommendations</li>
            </ul>
            <b>Perform technical analysis</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#tech---technical-analysis">TECH</a>: Technical Analysis</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#btst---basic-backtesting">BTST</a>: Basic Backtesting</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#bt---backtesting--optimization">BT</a>: Backtesting & Optimization</li>
            </ul>
            <b>Download data</b>
            <ul>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#xltp---excel-template-library-dapi---desktop-api">XLTP</a>: Excel Template Library</li>
                <li><a href="https://arialhamed.github.io/notes/bmc/terminal-basics/exploring-the-equity-market#xltp---excel-template-library-dapi---desktop-api">DAPI</a>: Overview of Desktop API</li>
            </ul>
            </td>
        </tr>
    </tbody>
</table>

Previously, we learned how to search on stocks & conduct research on a company in detail  
Now, we will learn how to discover an interesting opportunity in the bond market

image 2

### `SRCH` - Fixed Income Search
This function will bring up a searching & filtering screen. This tool will allow us to create unique lists that include:
- Loans, 
- Government bonds, 
- Corporate bonds, 
- Structured notes, 
- Municiple bonds, &
- Preferred securities. 

This screen is divided into 3 sections
- Security universe
- Search criteria
- Additional analysis

In "Asset Classes", you can consolidate duplicate bonds by chacking "Consolidate Duplicate Bonds". 

For Bloomberg to show safer bonds, which are rated by **investment grade** by a ratings agency. Type that in the criteria amber field, then select "S&P rating".  
When you click "Results", you can see the list of companies that has issued the specific bond that you are on. 

There are several features here that the course goes through as if you're as old as a typical businessman, but it's pretty self-explanatory (just look around)
- See who issued the largest bonds
- See who are the largest holders

If we want to understand more about the markets in these areas, we need to know how much return would these return YTD. We also need to know the difference in yield compared to the US Treasury curve, the risk-free rate in the US.  
Go Back to the `SRCH`, then click on Evaluate Pricing (`FIW`) which is "Relative Value and Performance" section in "Additional Analysis Options"

image 3

### `FIW` - Fixed Income Worksheet
When entering `FIW` from `SRCH`, we have just exported that list of bonds here. This is a robust credit-to-value tool, where you can sort a lot & filter a lot.

To find the YTD return, click on "Bond List" tab, then click on "Performance", then switch "Change" to "Return".  
The YTD return & Custom Period is in the first row.

To find out which bond returns the highest return, change "Group by" to "None", then click on "YTD Return" to sort. The first bond is the best performing bond, which may or may not be better back then compared to YTD (now). 

To find out the spread of the bonds' yields versus the U.S. Risk-free curve.  
Go to the Bond chart tab, and make sure Y is Yield & X is Duration.  
Next, go to the left panel, and change the Rating Agency from Moody to S&P. Click on the pencil.  
To aggregate the rating groups, change "A+" to "A+ to A-", then change "BBB+" to "BBB+ to BBB-". Click update.  
Go back to "Group by" and change it to S&P.  
The graph shows the distribution of the bonds grouped by rating buckets ("A+ to A-" and "BBB+ to BBB-"

To plot regression lines for the 2 groups, click on the chart icon in the "Ratings" or "Groups" section to the right of the chart.  
To compare yield spreads atop of benchmark rates (US Treasury), click "Add a curve" amber field and type "US Treasury Actives Curve", and select the first option.  
To add legend, click on Legend which is to the top-left of the graph.  
To calculate extra yield (yield pickup), click Annotate, then on "Biaxis Net Change"  
- Place the first point on the 10Y point for US Treasury
- Then draw it upwards to the nearest curve. 

Do it again for the other curve (click on "Biaxis Net Change" again)

So, let's assume we want to explore one of these bonds in more detail. There are a lot of bonds here, how does `FIW` help here?	

Click on Bond list tab, then Relative value subtab.  
Change Z-spread to G-spread (you can also change the period).  
Scroll a bit to the right to see the Average, Low & High current G-spread.  
The Range column shows 2 dots:
- Blue is current G-spread level
- Red is average G-spread level for the period of this data (6mo default)

Look at the top-right. `BVAL` is the pricing source for `FIW`. well golly, what is it?

### `BVAL` - Bloomberg Valuation
If you enter `BVAL` from here, an error would occur. Apparently we were not on a fixed income security. Just click the first example (the terminal damn smart liao)
This function provides transparent & highly defensible prices for fixed income securities across the liquidity spectrum. 
- This is done by real-time access to market observations from an abundance of contributed sources.
- `BVAL` prices around 2million securities daily, dawg. 
- This is why `FIW` have `BVAL`'s data

ok now go back to `FIW`. Choose an interesting bond:
- maybe 5-7yrs maturity
- A+ to A- rating
- Sort list by standarad deviation (s/d)
	- This ranks bonds that are further away from the average G-spread.

### `DES` again
So there's a bond that you see. Click on the bond, more related functions, then `DES`.  
`DES` has 2 tabs:
- Bond description (the thing)
- Issuer description (the person who gave the thing)

Why these 2 tabs tho? Because investors want to know if a company is in good credit health before getting deeper into the bond.  
Don't forget to jot down some deets.  

Check out the ratings from different raters (note the different dates as per rating as well)

### `CAST` - Capital Structure
In Bond description, click on Company info (to the left), then look at Corporate Structure section.  
Here you can see the Obligor & Guaranteed Subsidaries. Normally, holding companies do not have operating assets.  
Click on `CAST`. 

This function allows us to analyze debt hierarchy, whether or not if there are any subsidiary debts and where there may be guarantees.  
This will allow us to determine the risks of the investment. 

### `DDIS` - Debt Distribution
aight get outta there, click on Debt Summary in `DES`. You can see a general pattern of debt increase or decrease over the years.  
If the company issued more bonds, loans are increased as well (?).  
To compair the debt maturity profile with a competitor, click on Debt Distribution (`DDIS`)

This function allows us to analyze the ability of an issuer(s) to meet obligations to debt holders. 
- Top is data controls
- Middle is maturity distribution
- Bottom is statistics
- Right is control panel

In Add Comparison, add the compettitor. 
- Top chart is company
- Middle chart is competitor
- Bottom chart is differnce between company & competitors debt. 

Here you can take some notes whether or not the company needs refinancing in the long or short term.  
Click on "Table" next to Show As to confirm your "intuition" 
- Does the comopany have greater outstanding debt compared to the competitor?
- Which company has greater bond maturity? Take not of the maturity differences. 

### `AGGD` - Aggregated Debt 
Go back to `DES` then click on Major Creditors.  
Here you can see: 
- the aggregated debt, 
- debt holders of the company, and
- latest bonds change (purchase or sell)

In this screen, click on Bloomberg Default Risk (`DRSK`) under Quick links

### `DRSK` - Bloomberg Default Risk
This function generates independant evaluation of a company's credit health by using
- scrubbed fundamental data
- cutting-edge quantitative models

It provides daily estimates for:
- default risk,
- 1yr default probability, &
- `CDS` model

That big word there, "IG1" or something else, that shows Bloomberg's investment risk rating. Clicking on it shows Bloomberg's rating scale (though the method is proprietary)  
The 1yr default probability indicates how safe the company is for investors to invest in. 

ok now close this page back to `DES`, then click on Relative Value Ranking (`RVRD`) in Quick links

### `RVRD` - Relative Value Ranking 
This function allows you to perform fundamental debt & credit ratio benchmarking of the security's performance against the relative index & peer groups (customizable). 

There are 2 credit metrics here:
- Debt/T12M EBITDA
	- Provides investor approximate amt of time the company needs to pay off all debt (ignoring interest, taxes, depreciation & amortization)
- EBITDA/Interest Expense
	- Provides company's financial durability, by examining if it is profitable enough to pay off its interest expenses

*EBITDA is a great proxy for cash flow EXCEPT for capital intensive industries, such as oil & gas.

If both EBITDA ratios are higher than the competitors, then that means its pretty solid to invest. 



### `YAS` - Yield and Spread Analysis
If a company's bond has high G-spread (high standard deviation), it could mean that the bond could revert back to normal, or worse.  
How to understand how the G-spread could have change over a period of time, and how to this in Bloomberg?
Go to the company's bond, then go to the menu screen, then click on Yield and Spread Analysis (`YAS` queen) under Analytics.  

This function allows you to explore pricing & spreads, and how it changed in the past. For now, look at Yield & Spread tab. 

This page has 5 areas:
- Top left is calculator, with a lot inputs
- Top right is risk, showing several measures of risk
- Bottom left is spreads, the difference between the yield on a bond & the yield on a benchmark _in a given time_.
- Bottom middle is yield calculations, displays bond deals using multiple compounding conventions. 
- Bottom right is invoice, total amount of money required to settle a trade.

just crunch it in here (it's all here already but modify it to your loving nature)
- in general, the longer the maturity of a bond, the higher the modified duration (which are subject to interest rate risk)
- the graphs tabs shows a visual representation of the spreads. you can modify the deets here (rmb to change from mid-spread to g-spread)

Yo so if it's planned to be longer, interest rate could change and kick you in the nards. 

Nani?? You think that this is an outlier? There could be an opportunity then, so where could you buy this bond from, at what price? Is it juicy (liquid)? Type `LQA` in cmd.

### `LQA` - Liquidity Assessment
This function helps you to create trading strategies, and check the strategy's liquidity risk. 

For now, look at Liquidity Score.  
This represents the security's percentile rank, where 100 is the most liquid.  
If a bond is liquid, you should be able to find pricing providers in Bloomberg.  
In cmd, type in `FIPX`

### `FIPX` - Fixed Income Price Discovery
This function gives you the pricing data when
- analyzing a potential trade
- determining mark-to-market

The pricing data is aggregated in:
- your message inbox, MSG1 (`QNGR`)
- all dealers contributing prices to Bloomberg (`ALLQ`)
- Bloomberg generic & evaluated price price (`BVAL`)
- trade history (TRAC) (`TDH`)

See that chart? The 2 green dots shows the best levels you could buy or sell through Bloomberg (if you could)  
The 2 green dots represents: 
- The best ask price (can buy), which is lower than the 
- The best bid (can sell)  
Bloomberg calls this an "inverted market"  
Take a look at TRAC. You can see the trade history, whether or not it is higher yesterday or the day before.  
In the Intraday Chart, there are more buyers than sellers in a certain date if a green bubble is bigger than the red bubble (and vice versa)

---

If you are:
- satisfied with the credit risk for this company
- believe there could be price reversal soon
- like the fact the bond is liquid
- know what levels you could buy the bond on Bloomberg

So now simulate a trade

### `ALLQ` - All Quotes
Go to Related functions menu, click `ALLQ` under Current Pricing.  
This function allows you to monitor current market data for a selected fixed income security by contributed pricing sources  
The columns include the security's current:
- Price
- Spread
- Yield
- Liquidity

`ALLQ` has 2 modes:
- display contributed quotes from the dealers (read)
- performance metrics for each dealer (performance)

The terminal has a bright "Buy" & "Sell" buttons  
If your terminal is not enabled for trading, type in `ALLQ DEMO` in cmd for emulation

Ok so now you want to buy a bond, click "Buy"  
In the dropdown on the bottom left, select all for all dealers.  
In Quantity, you can type "1M" to by 1 million bonds, then press enter.  
Since you are outside of the US, click "Submit to MtF" to send the trade to the Multi-lateral Trading Facility.  
A request for pricing has been automatically sent to all dealers, while Bloomberg highlights the best price.  
You can either trade straight away, or click "Pass". 
You may click the green "Lift" button OR click on "Ex. Best" TO AVOID CLICKING ON THE WRONG DEALER LMAOOO. 

Now you can check `MESSAGE`. If you were working in asset management, you can send it to the back office to settle the trade on your behalf. 

<br><br><br><br><br>

---

## There you go! Now you went from seeing a potential investment to now owning the company's bond! CONGRAJURASHONS

---

<br><br><br><br><br>

ngl, kinda giving up on the images heeheehoohoo  
Oh and if the feds increase the interest rates a lot, you can use Fixed Income Scenario Analysis (`FISA`) to find out!

<br><br><br><br><br>
[Click here to go back](..)