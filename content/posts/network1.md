+++
title = "Write-up for Corporate Finance Policies and Social Network"
math = true
+++

# Write-up for `Corporate Finance Policies and Social Network`
###### tags: `Research`
###### [paper link](https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2016.2433?journalCode=mnsc)

## Main discovery
- Managers are influenced by their social peers when making decisions since they share the information in the low cost.
- The more social connection two companies share, the more similar both their level and change over time in investment.
- More connected firms show better economic performance.
    - Robust even after controlling for industry variable.
    - Explanation: Not only the company is influenced by their social connections but also they observe their competitive position in the network to make better policy.
- Companies in the central position in the network have a less different investment way since they are exposed to a higher flow of word-of-mouth information.

## Method
### Build networks
The author defines 5 networks:
1. `Current Employment Network (CE)`: Connected if two individuals work in the same company and in the either board of directors（董事會） or top management group. Individuals may work for multiple companies.（Ａ擔任兩間公司的獨董或是Ａ、Ｂ在公司Ｃ的董事會皆算。）
2. `Past Employment Network (PE)`: Connected if two individuals worked in the same company at the same time and either on the board of directors or top management group.
3. `Education Network (ED)`: Connected if they went to the same school and graduated within one year with the same professional degree.
    - To substatiate the hypothesis that two individuals actually met and spent time together
4. `Other Activities Network (OA)`: Connected if they share membership in clubs or organization and have an active role.
5. `Social Network Index (SNI)`: Connected if two individuals are connected in any of the above network.

### Measure of centrality
The author uses 
1. `degree` (sum of all valued links for each firm): to take the information that a company is exposed to into account.
2. `betweenness` (number of shortest paths linking two companies in the network): to capture the absolute position in the network.
3. `closeness` (average number of steps that a company needs to take within the social network to reach any other firm): to capture the highly influential companies

as the measure of centrality.

### Policy performance
The author uses `Investment`, defined as the ratio of capital expenditure over property, plant and equipment to represent the corporate finance policy variable.
In addition, the author explains that
- Investment is a discretionary decision made by key executives and approved by the board of directors.
- Investment is partially persistent over time and exhibits large heterogeneity across firms.

### Data
2101 firms, 30023 individuals from 1999 to 2007.

### Model
#### Hypothesis Test
The author runs a `F-test` of joint significance of the strength coefficient to determine 
whether social connections are important determinants of corporte finance policy decisions. 

Regression:
{{< math >}} 
\begin{array}{rcl}
Policy_{i,t} & = &\alpha_0+\alpha_1X_{P_{i,t}}+\sum_{j=1}^n\alpha_{2,i,j}Strength_{i,j,t}+\varepsilon_{i,t} (\text{regression 1}), \\
Policy_{i,t} &= &\alpha_0+\alpha_1X_{P_{i,t}}+\varepsilon_{i,t} (\text{regression 2}), \\
\text{F-value} & = & \left(\frac{RSS_1-RSS_2}{RSS_2}\right)\cdot\left(\frac{n-p_2}{p_2-p_1}\right)
\end{array}
{{< /math >}}
where $Strength_{i,j,t}$ is the number of social connections between company $i$ and $j$ at time $t$; $X_{P_{i,t}}$ are the control variables selecting company size (Total Assets and Total Assets Squared), investment opportunities (Tobin's Q), profitability (Cash Flow), the interaction of size and investment opportunities, and year and industry (Fama French 49 industry code) dummies, $n$ is the number of observations and $p_i$ is the number of parameters in regression $i$.

The null hypothesis is that the social network variable coefficients are jointly equal to zero.
![](https://i.imgur.com/w9o0Oqd.png)

### Pair Model
The author wants to address whether two companies that are more socially connected have a more similar investment strategy relative to two companies that are not as well socially connected, and whether two companies that are more socially connected change their investment over time in a more similar way relative to two companies that are not as well socially connected. That is, to investigate
- how the level of social connections affects the level of capital expenditure at each point in time (statically)
- how the level of social connections affect the changes in their capital expenditures over time (dynamically).

The pair model formulate the questions. The step of the model is:
{{< math >}}
\begin{array}{ll}
\text{Stage 1:} & Policy_{i,t}=\alpha_0+\alpha_1X_{P_i,t}+\varepsilon_{i,t}\\
\text{Stage 2:} &
abs(\varepsilon_{i,t}-\varepsilon_{j,t})=\beta_0+\beta_1S_{i,j,t}+\beta_2X_{C_i,j,t}+\eta_{i,j,t}\\
& \text{(Compare Inv. Levels (over companies))} \\
\text{Stage 3:} &
abs((\varepsilon_{i,t}-\varepsilon_{j,t})-(\varepsilon_{i,t-1}-\varepsilon_{j,t-1}))=
\gamma_0+\gamma_1S_{i,j,t}+\gamma_2X_{C_i,j,t}+\delta_{i,j,t}\\
& \text{(Compare Inv. Changes (over time))}
\end{array}
{{< /math >}}

The result is significant and shows that `the social network connection index has the strong and negative effect on the absolute value of the difference in residuals`. The variable for different columns in the table below is
- Column (1): only include the Strength variable and control industry, year, size, investment opportunity and profitability in the first stage
- Column (2): add three control variables: the number of key executives and directors in both companies, to control for the fact that the larger the board and management group, the more social connections they have; and an industry dummy that takes a value 1 if the pair of companies are in the same industry
- Column (3): control variable that measures whether two individuals went to the same school, earned the same professional degree, but graduated not within one year of each other, to address the no-information-change concern. (這篇論文想看到的是network connection能夠帶來較低的資訊交換成本，所以對於經理人與公司間的溝通和影響非常重大。但可能有些人會覺得出自同一間學校的人會有相同的決策風格是受到學校的校風、教學風格影響，例如哈佛主打個案教學，但ＭＩＴ卻非常不注重個案等等。所以作者控制了同校或同公司但待的時間不同來解決這個疑問)
- Column (4): control pair dummies to absorb any unobserved fixed pair omitted variables by looking at the correlation between a change in the lagged social network parameter and a change in the dependent variable over time for each pair of companies.
- Column (5) shows the result of IV: select all the pairs of companies that at some point in time were socially connected through an individual that passed away, weakening the connection. IV is a dummy that counts the number individuals with ties with both companies who have died within 1 year of leaving the company, up to the current fiscal year.
- Column (6) is also an IV result: the absolute value of the difference in residuals is regressed over the endogenous strength of the SNI social connection variable
![](https://i.imgur.com/nXoxBTK.png)
The result displays `a causal, positive and statistically significant relationship exists between the strength of the connection and the similarity of their investment behavior`. The author also uses the difference in difference as dependent variable to display the result, and obtain a consistent findings.
![](https://i.imgur.com/cCAKiAs.png)

### Network Influence
The author also investigate which network has more influence in the investment policy, and find that the `Other Activities` network plays a larger role than other networks in influencing investment policies.
![](https://i.imgur.com/l7ddrmo.png)
In addition, all network components are important determinants of a company’s investment strategy.
![](https://i.imgur.com/44QkYLE.png)

### Centrality Model
The author wants to show that the position of companies in the network also matters: the more central the position is, the less different their policy decisions is. Therefore, he extends the pair model to figure out the policy difference:
$$
\text{Stage 1:} Policy_{i,t}=\alpha_0+\alpha_1X_{P_i,t}+\varepsilon_{i,t}\\
\text{Stage 2:} abs(\varepsilon_{i,t})=\beta_0+\beta_1C_{i,t}+\beta_2X_{C_i,t}+\eta_{i,t}.
$$
$abs(\varepsilon_{i,t})$ captures the difference of policy behavior.
![](https://i.imgur.com/J1yzDbP.png)

Note for the table above:
- Column (5) controls for heteroscedasticity of the second moments adding year and industry fixed effects, as well as board size controls.
- Column (6) adds the dummy to indicate whether people stay in the same university and the same company in the same time.
- Column (7) controls for firm-heterogeneity (firm-fixed effects) and runs a panel regression
The result gives a strong evidence that companies that are more centrally positioned in the network have less idiosyncratic investment behavior.

The author also runs the Centrality Model for different types of social networks and finds that the `past employment` and the `other activities` networks affect the investment policies more than the current and the education networks
![](https://i.imgur.com/DVC6bzX.png)

The results above shows that the network connection is an important channel to information flow and establishes a causal relationship exists between social networks and investment policy decisions. `The companies in the central position are exposed to a higher flow of word-of-mouth information and therefore will take decisions that are less idiosyncratic.`

### Economic Performance
The author here replaces the `investment` with `assets` to find the relationship between assets and the centrality measure. Here he uses the degree centrality as the measure since the degree measure is the one that best captures the information flow that a company is exposed to from its nearest neighbors. Consequently, the author finds a positive and significant correlation between economic performance and the degree measure of social network centrality.
![](https://i.imgur.com/0xrgip4.png)
![](https://i.imgur.com/rYt2xtN.png)


