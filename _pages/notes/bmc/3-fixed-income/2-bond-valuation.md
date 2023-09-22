---
title: "BMC: Fixed Income - Bond Valuation"
layout: default
permalink: /notes/bloomberg-market-concepts/fixed-income/bond-valuation
redirect_from:
 - /notes/bmc/3/2
---

# Bond Valuation
The name's Bond, Bames Nond.  
Yields facilitate bond valuation. Let's see how they are calculated and why they move. 

### Illustration of a bond yield
So imagine you're an aspiring leprechaun. You are given $80 for your birthday, and you want save it up to buy a bike in 3 years time. 

There 2 investment options that magically appeared to you:
- Your sister just turned 18 and wants to buy a used sleigh. If you lend her $80, she promises to give it back $90 spread over time  
$10 next year, $10 the second year & $70 the third year. 
- Your mother suggested that you deposit the $80 to Rumpelstiltskin State Bank, which is offering 4.53% per year interest. 

Which investment path would lead you to a bigger pot of gols? 

The yield on the loan- what on earth is the narrator talking about now. $80 is too small an example, and too short time, and needs to know what the interest rate is in the bank

### How to guess a bond yield
Ok now the number is bigger. Your brother wants to borrow a million. He will pay 100k in Year 1 & Year 2 (each), then 1.1m when he comes into inheritance although he is younger. That's because your father is an ogre. Thankfully, your mother's genes are the strongest so you still have human privelege.

It's the weekend and Rumpelstiltskin State Bank is sleeping. Honestly, just wait for the weekdays, like damn. Calculate the brother's rate, then wait for the Rumpelstiltskin to release their interest rates. 
- If the bank's is higher than bro's, bank it.
- If the bank's is lower than bro's, lend it to broski. 

The part here is just ez math that you can just do with Python scripts or Excel.
- Assume that the banks gives 5% interest, 
	- so at 3 years & 1M deposit, 
	- each year would be:
		- $55,125
		- $52,500
		- $50,000 + $1,000,000 
	- that would end up with $1,157,625
- If you lent to your bro with interim payments to bank as well (treating each interim as a seperate deposit). 
	- at the same metrics
	- each year would be:
		- $105,000
		- $110,250
		- $1,100,000
	- that would end up with $1,315,250

<span style="font-size:150%;">by right, the amount between banking it in & lending it to bro should be the same. This is not the right interest rate.</span>

Once again, you can do with Excel. As orthodox as guessing may be, it's just more faster & accurate using technology to depend on this. 

either way:
- 15% interest
	- $1,520,875 to bank
	- $1,347,250 to broski

dude, if bro says 100k per year, the narrator should've gone straight to "let's do 10%".  
Omg the answer is right there when bro said how much he'll give back.  
Yeah so for 10% interest, both the bank & brodeo will give $1,331,000 (THE SAME). 

oml. Ok so 10% interest means that that is where you will benchmark yourself. If the bank interest rates on Monday is higher, then you should go to put it in the bank, else if it is lower, you may lend it instead.

ok all the calculations here make sense :o

the narrator has so much attitude in this section??? oml THERE IS A SHORTCUT IN THE TERMINAL THE WHOLE TIME -> `YAS`!!!!

### Shortcut to calculating bond yields
Here's just going through the kinda same thing. See who's giving the higher interest. broski's interest rate is unintentionally provided when he said how much he'll pay every year, which is the fraction of what your prinicipal is. 

### Deciphering bond yields 
Bond yields are kinda like the rates shown through a bank's windows.  
`WB` shows all world bond market (not `W`indow of `B`ank) (the actually good joke the narrator gave lmaoooooo)  
The yields are in a column

Huh, but what makes the bond yields move!!!!?????

### Bond Valuation Drivers
- [Credit Risk](#credit-risk)
	- [Credit Risk Factors](#credit-risk-factors)
		- [Debt/GDP](#debtgdp)
		- [Deficit/GDP](#deficitgdp)
		- [Repayment schedule](#repayment-schedule)
	- [Credit Risk Indicators](#credit-risk-indicators)
		- [Credit Ratings](#credit-ratings)
		- [Credit Default Swaps](#credit-default-swaps)
- [Macroeconomics](#macroconomics)
	- [Short-term interest rates](#short-term-interest-rates)
	- [Inflation](#inflation)

### Credit Risk
ohhhh so this is where that john oliver thing is about equifax. It is known that even government could default on bonds. 

If you believe the borrower would go oopsie, then the borrower will be given a lower credit score. 
Bond prices today reflect believes on payment likelihood tomorrow. 	

The same amount of cash tomorrow, for less upfront today, means more bang for your buck (moooo)

When lenders begins to doubt borrowers' ability to repay, yields would go upwards
- That's because you would be willing to give less, 
- but your coupon amount stays the same, 
- so by comparison, the coupon will appear to "grow" compared to the price, but really, the price is just shrinking. 

Let's see some examples of poor credit-worthiness:
- Argentina in 2001, defaulting on 132 billion
- Cuba, 1986
- Ecuador, 2008
- Ivory Coast, 2011

This will ensure that governments remain disciplined. 

### Credit Risk Factors
There are 3 metrics to credit risk:
- [Debt/GDP](#debtgdp)
- [Deficit/GDP](#deficitgdp)
- [The aggressiveness to payment schedule](#repayment-schedule)

#### Debt/GDP
When a government borrows to built something good like a hospital or whatever, the money used in the projects contributes to GDP. However, the resulting debt payed does not contribute to GDP, because the GDP already happends.  
When a government borrows, uses, & returns, it drives GDP growth,  
but when debt comes due, the payments will inhibit GDP growth.  
The greater the debt/GDP, the greater the debt repayments, the greater the drag on economy.

In the World Countries Debt Monitor (`WCDM`), the far right shows the value of gov debt to gdp per proportion (percentage). There is no known limit to this before the market should panic.  
Greece, for example, the Debt/GDP spiked in 2011, and Greek bond yields spiked at the same time as well. Greece struggled to find buyers in its government bond auctions. 

Unlike Greece, there are good examples of countries who handle this problem well.  
Greece still has a high Debt/GDP, but Japan has the highest of any country (at 2017). Greece still has a relatively high tenor bond yield at about 7%, but Japan has almost 0%.  
This was because Japan printed more yen & purchased more government bonds in order to tackle inflation at the time.  
Greece couldn't do that because they can't have the ability to print more greek yoghurt. 

There is no general rule at what percentage of debt to GDP will make a government's bond yields spike. 

#### Deficit/GDP
Investors also look at the size budget funding gap that needs to be plugged by the bond market. Deficit/GDP is also a percentage.  
A negative Deficit/GDP means that the government has deficit. 

The higher the Deficit/GDP, the higher the rate that the gov is racking up new debt. This means that interest go up as well (mostly). The bond market could have a choice of not catering to governments with deficits, but just like Debt/GDP, there is no general rule.

#### Repayment Schedule
This is just whether or not the lender believes that the borrower would be able to pay back when it is due. 

Governments can borrow long or short term. Usually, short-term is more tempting for governments because lower interest rates for bonds. However there is a snag to this.  
For example, a student starts a credit card with no interest payments. After the time is up, he applies for a different credit card that promises no interest on transfer debt. If he continues to do this though, the credit card companies will start to question his abilities to repay, and demand high interest rates.  
The downside for govs for low-interest, short-term debt is that lenders can pull a funky and suddenly demand high yields, just like what happened with Greece. 

Let's go to `DDIS`. This shows the repayment schedule for any government.  
The UK decided to long-term borrow, which is very risky, so this is only open to only the credit-worthy countries. 

An then there's the short-term harlots, like the US. Looking at their chart, the amount outstanding kept on going down, quite the opposite to the UK. The interest rate increased, like very fast. 

However, as i get my ass handed to me in the knowledge check, both countries are still highly creditworthy. 

The US as the ability to borrow on a short-term and refinance the debt on a regular basis because they have the strongest currency in the world, and also are quite creditworthy. 

In the Asian crisis in the late 1990s, Thailand, South Korea & Indonesia fell into this trap because they weren't creditworthy. 

my gosh there are more

### Credit Risk Indicators
So there was 3 factors, how to know what do? we look go to credit risk indicators:
- [Credit Ratings](#credit-ratings)
- [Credit Default Swaps](#credit-default-swaps)

#### Credit Ratings
Credit ratings for government bonds are created by credit ratings agencies. Check it out at Ratings Definitions (`RATD`) and World Countries Debt Monitor (`WCDM`). 

Go to Sovereign Ratings (`CSDR`), which shoes countries' ratings from all rating agencies. Red means recent downgrade, green means recent upgrade. 

Rating agencies also rate corporate bonds. Credit rating for corporate bonds are quite patchy though. Take a look an Enron, check it out at `CRPR`. 

#### Credit Default Swaps
Ever since Enron, CDS has been more popular as an alternative to ratings. The higher the CDS spread, the more riskae it is. This is basically a seismograph. It MOSTLY gives more timely ratings, though not all the time. Morgan stanley's still here. 

This also applies for government bonds. CDS is influenced by Bloomberg's Sovereign Risk model.

### Macroconomics
more drivers bruhhhhh
- [short-term interesting rates](#short-term-interest-rates)
- [inflation owo](#inflation)

#### Short-term Interest Rates
when things become cheaper, you may get it cheaper, but if something is cheaper AND reliable, no second though you go straight to it.  
- AMAZON		= FED
- BOOKS			= BONDS
- OTHER VENDORS	= OTHER BOND ISSUERS
- BOOK PRICES	= YIELDS

#### Inflation
it's related to interest rates, so it's related to bonds DUHHH


When there is inflation, lenders lose, borrowers win:
- Imagine you have a mortgage
- When inflation happens, your employer will have to give signficant cost increase
- The mortgage will not change because it is fixed 

The lenders lose out on the inflation increase, and new borrowers will be able to buy for much less  
This applies in the other way round for deflation, where the lenders will get a get a higher pay due at the end of the period, new borrowers will have to spend more, and existing borrowers will miss out on the higher price at maturity.  
Since most governments are borrowers, it's no wonder they don't mind a dash of inflation (narrator sighs)

### Section Quiz
- What is the primary reasaon for U.S. government bond yields to ripple through the bond market?
	- Government bonds form a large portion of investor holdings, and corporate bonds are often priced relative to government bonds. 
	- Government bonds form a large proportion of investors portfolios as they are a key component in many large pension and insurance company holdings. Additionally, corporate bonds usually trade on a credit spread above the government bond yield, so changes in the government bonds will affect nearly all corporate bond prices. 
- What would need to drop so that it would typically send a government bond price down?
	- Creditworthiness. 
	- When investors become less comfortable that a borrower can repay, the risk and therefore the yield on the bond tend to go up, meaning that the price goes down. A drop in inflation or interest rates typically sends yields down and prices up, as we saw. There is less of a connection between the level of government borrowing and the yield on a government bond. 
- Between Norway, Switzerland, United Kingdo, & Australia, which one makes the greatest relative use of long-term government financing? 
	- United Kingdom
	- According to Bloomberg's `DDIS`, the U.K. government has the largest portion of debt payable after 2049. In the bottom table, `DDIS` also calculates the weighted average years to maturity of the outstanding debt, and U.K. has the highest. 
- An investor is comparing two bonds of similar structure from the same issuer. Which bond should the investor buy? 
	- The bond with the highest yield if the two bonds have the same maturity date. 
	- All else being equal, the bond with the highest yield is the investor's best choice. A high coupon/low yield has a high price. A longer maturity bond has a high risk. A high-priced bond offers a lower return, not a bigger return. 

- A bond yield is just the interest rate on an equivalent bank account for the duration of the bond. 
- The three biggest factors driving bond yields are the creditworthiness of the borrower, inflation, and short-term interest rates. 
- The bond market instills discipline in governments as declining creditworthiness makes future borrowing more expensive. 
- Short-term borrowing is cheaper but riskier for borrowers than long-term borrowing as it relies on the ongoing appetite of lenders. 
- As repayments to bondholders are fixed, inflation will corrode the purchasing power of fixed bond repayments, sending yields up. 
- As U.S. government bond yields serve as benchmarks for all investments, yields on other bonds tend to move with them. 


<br><br><br><br><br>
[Click here to go back](..)