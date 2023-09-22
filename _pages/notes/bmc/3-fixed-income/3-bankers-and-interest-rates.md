---
title: "BMC: Fixed Income - Bankers & Interest Rates"
layout: default
permalink: /notes/bloomberg-market-concepts/fixed-income/bankers-and-interest-rates
redirect_from:
 - /notes/bmc/3/3
---

# Central Bankers & Interest Rates
Good ol fashioned price competition links all bond yields with government bond yields. This is done with a few factors/drivers:
- [Central Bank Mandates](#central-bank-mandates)
	- The Happy Medium
	- Inflation
	- Deflation
- [Central Bank Decision-Making](#central-bank-decision-making)
	- Inflation Measures
	- The Output Gap
- [Central Bank Toolkit](#central-bank-toolkit)
	- Short-Term Interest Rates
	- Statements
- [Short-Term Interest Rate Estimates](#short-term-interest-rate-estimates)

### Central Bank Mandates
Central banks targets 2% which is the happy medium. Not too hot, not too cold

### Central Bank Decision-Making
The output gap  
Check out `CBOPGDPR` index through `GP`. The output gap is calculated by (actual output - potential output ) / potential output.  
When the actual gdp is above potential gdp, it is a positive output gap. The economy is tight and the banks look out for inflation.  
When the actual gdp is below potential gdp, it is a positive output gap. The economy is loose and the banks look out for deflation.

### Central Bank Toolkit
When the bank identifies a large output gap (either negative or positive), they do stuff, usually print a lot money or some other things, such as:
- Short-term interest rate
	- When bank interest rates go up, it becomes attractive to deposit cash. This will appeal to consumers to decreasae expenditure, slowing growth of the output gap & contain inflation. 
	- Check it out at `FOMC` for meeting info about the rates. 
- Statements
	- Expectations of the people influences market prices. Any statement made that is different from what the market expects will move bond yields
	- Check some out in FOCM Statements in `FOMS`.
	- The Fed Chair can drop hints to influence interest rates. Check it out at 10 Year Yield (`USGG10YR`). Graph it from 2012 to 2014, reset Y axis to 0
		- Bernanke hinted that the Fed's purchase of bonds using central bank money may taper down, reduce the demand of treasuries, reduce the price of treasuries
		- Wihin the next for months, the yield shot from 1.6% to 3.0%

### Short-Term Interest Rate Estimates
The Federal Open Market Community has them meetings that will show what they do next in `FOMC`.  
Go to World Interest Rate Problem (`WIRP`). This shows the FOMC meetings.  
- The red line shows the percent chance of a rate cut.
- The blue line shows the percent chance of no rate change. 
- The white line shows the percent chance of rate hike. 

In March 2017, the US was coming out of recession. 

## i mean, like, these are all psychological at this point 

### Section Quiz
- In the `ILBE` function, it shows the U.S. 10-year inflation expectations as of early 2019. At the point in time shown, where is the country's 10-year inflation expectation in relation to the Central Bank's inflation target?
	- 0.0439% below. 
	- As we saw earlier, the inflation target for the U.S. is 2%. Therefore the inflation expectation for 1.9561% is 0.0439% below the target. 
- Investors who fear rising inflation may buy Treasury Inflation Protected Securities (TIPS). How do TIPS shield lenders from inflation?
	- By compensating investors for inflation. 
	- TIPS compensate the lender in the event of inlfatioin using CPI as a guide. 
- What is the Federal Reserves favorite inflation gauge? 
	- Core PCE
	- Core Personal Consumption Expenditure is the favorite inflation gauge of the Federal Reserve. The Consumer Price Index and the GDP deflator are both **affected by volatile food and energy prices** and are therefore de-emphasized. Household income is not in itself an inflation gauge. 
- Here is the output gap in the U.S. in early 1975. What was likely the Fed interest rate policy? 
	- To cut interest rates as that would decrease the cost of goods produced.
	- In 1975, U.S. actual GDP (yellow line) was declining well below potential GDP (white line), meaning there was a growing negative output gap. In this scenario, a central bank will typicall cut interest rates in order to stimulate the economy. At the onset of this recession, the Federal Reserve was aggressively cutting interest rates, which had reduced from 9% in late 1974 to 5.5% at the time the chart shows. Lower interest rates means manufacturers can borrow money at a lower rate from lenders to finance operations, resulting in a lower manufacturing cost of goods. 

## Summary
Central Bankers and Interest Rates
- Most central banks have a mandate to prevent runaway inflation and deflation. 
- As inflation is corrosive to bonds, fixed-income investors watch hawkishly for any signs of inflation. 
- Central banks closely monitor inflation expectations and the output gap when making rate decisions. 
- Central banks contain inflation and deflation by directly changing interest rates or by altering interest rate expectations. 
- Over the past few decades, short-term interest rates have been the tool of choice to steer economies. 


<br><br><br><br><br>
[Click here to go back](..)