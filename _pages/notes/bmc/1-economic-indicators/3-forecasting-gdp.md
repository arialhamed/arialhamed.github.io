---
title: "BMC: Economic Indicators - Forecasting GDP"
layout: default
permalink: /notes/bmc/economic-indicators/forecasting-gdp
redirect_from:
 - /notes/bmc/1/3
---

# Monitoring GDP

### Accessing economic forecasts
Let's take a look at the World Economic Calendar. 
- R column -> Relevance. The little LTE connection bar, the bigger it is the better relevance.
- Surv(M) -> Analyst's consensus forecast for that specific indicator

Right click on the estimated survey amount of one of the indicators, then select `ECOS` (Economic Estimates). This shows the calculations.  
The summary is right there, the yellow square is the actual result. If the red bars are far to the right of the yellow square, it means the economists were all too optimistic about the indicator O_O

Economists play 2 very different roles when it comes to estimates:
- Provide estimates for economic indicator values for the short-term
- Forming opinions for long-term, for the more important economic statistics, which can be found in `ECFC`.

Changes in the economy form the bedrock of financial markets.  
Long-term financial estimates are important as inputs to financial models.

### Spotting turning points
The plural of anecdotes is data. If there are many analysts who say things are gonna go down, it may actually go down. However, if surprises keep on happening, analysts gotta change their opinions to align to the surprises. 

Using `ECFC`, let's check out how UK's GDP estimates change in 2013. Pull out GDP growth, charting out estimates, and seeing how they evovled, focusing on the estimates for 2014. The charts starts at 2012. 

Reading from the charts, it appears that from 2012, economists were pessimistic about how the economy would do over a while. Then, a lot of surprises happened then they started being optimistic about it. 

### Using a mosaic to spot turning points
No single economic indicator is in itself good, but just like an orchestra in melody, harmony & rhythm, using the many economic indicators correctly may give highly accurate results of how the economy is, especially the turning points 

In the Economic Surprise Monitor (`ECSU`), 
- there are 40 handpicked meaningful leading economic indicators for the US economy in the left-hand column.
- The most recent date of release is in the second column
- The actual value upon release is the third
- The percentage by which the actual either exceeded or missed is in the 4th column (green is good red is bad)

The values in the surprise column are aggregated, to the white number at the first row. That is the Bloomberg ECO US Surprise Index. 

Click on Surprise History chart. Red area means unpleasant surprises, and vice-versa. Orange line reprents percentage change in the S&P 500 Equity Index. 

The movements of the surprises seem to predict the S&P 500 index quite well, but as the narrator proclaimed, "Models such as this work beautifully, until they don't". Technology ain't there yet imo. 

## Summary

Forecasting GDP
- Analysts forecast key economic indicators
- Long-term economic estimates are foundational to financial models
- Changes in estimates illustrate economic optimism and pessimism. Significant changes in estimates may herald an economic turning point. 
- Investors compile many indicators, rather than one, to predict turning points.

Terminal functions used here:
- `NH` shows a real-time scroll of news headlines
- `ECST S` provides economic data with context and customizable graphs
- `ECFC` displays economic forecasts for identifying trends in global economies
- `GP` price chart used to identify trends and market patterns
- `WECO` shows economic calendars, events, and release by country
- `ECOS` provides full details behind econmist estimates for calendar releases
- `ECSU` estimates changes in the economy and financial markets	




