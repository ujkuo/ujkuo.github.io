+++
title = "Write-up for Ownership Network and Firm Growth"
math = true
+++

# Write-up for Ownership Network and Firm Growth
###### tags: `Research`

## Main Discovery
- Entering the ownership network and increase in network centrality, both globally and locally, are associated with higher future firm growth.
    - Such effect of network position is more significant for high productivity firms and non-state-owned enterprises (non-SOE, 非國有企業), which have financial constraints.
    - `Eigenvector centrality` has the largest economic impact and `degree centrality` is closely large. 1 std improvement in `eigenvector centrality` increases 16.9% firm growth.
- The effect of network centrality on growth is more pronounced for bank-affiliated (if a bank is its shareholder within the three layers of the entire ownership network) non-SOEs, and has been offset by state ownership connections

## Data
### Source
The Firm Registration and Ownership Database is originated from China’s State Administration for Industry and Commerce (SAIC), from 1950 to 2017, and the registered firms are around 90 million (including bankrupted ones and individual workshop).
### Information
1. Registration information contains:
- registration date
- registered capital
- industry
- ownership type
- status of the firm (either existing or bankrupt)
- location information
2. Shareholders and ownership structure: In each update for such information, it contains
- the time of the update
- all the shareholders
- firm's corresponding nature of legal person (natural person/individual or institutional)
- investment amount
- share percentage of the invested firm before and after the update.
3. Performance: the author uses the database from Annual Industry Survey (AIS) published by China’s National Bureau of Statistics (NBS).
### Data Clean
The author first eliminates individual firms which have been only held by individuals and have not invested in other firms to focus on the investment relationship. The available firms reduce to 5.6 million in 2017. Note that the in-network firms are either investors or investees (or both) in the author's definition.
Next, after obtaining the firm operation and performance from other database, the panel dataset of industrial firms with dynamic network structure from 2000 to 2013 comes to 79,627 in-network and 169,617 out-of-network industrial firms.

### Summary Statistics
![](https://i.imgur.com/SciqSBr.png)
- The centrality measures reveal firm heterogeneity, e.g., in-degree range from 0 to 350, and out-degree range from 0 to 32415.
- Though the stat. of eigenvector centrality is closed to 0.

### Data Observation
The author dynamically trace the network: in each year $t$, the author construct an equity ownership network based on the equity investment linkages between firms observed in year $t-1$. The author finds that `from 1999 to 2017, the network expands rapidly`.
![](https://i.imgur.com/ntGI5S9.png)

Moreover, the author wants to understand how equilty capital flows across industries, therefore, the author aggregate the equity investments by industry and investigate how capital flows across industries, and plots the heatmap of industry-level capital flows among pairs of industries using the equity ownership network in 2007.
![](https://i.imgur.com/oaltjDn.png)
![](https://i.imgur.com/PsXid46.png)
We can see that `transportation and postal services, manufacturing, rental and business services` are the top three industries in terms of absorbing investments **in the same industry**. Additionally, `financial industry` has **attracted the most capital among all industries**, followed by `construction and real estate industry`, and then `mining and utilities`.
- This is similar to other studies: real estate and construction have attracted the most capital among all non-financial sectors.

Also the mean value of centralities of all the in-network firms are shown as below.
![](https://i.imgur.com/jbfiAwZ.png)
- Increasing `degree` and `betweeneness` centralities suggest the increase of equity investment activities
- Downward trend for `authority` and `hub` centralities indicates that the `new entrant firms may have low global importance`, hence tend to attract or make less investment, compared to the existing in-network firms.

The relationship between centralities and registered capital is also plotted.
![](https://i.imgur.com/qpjiMLm.png)
- The author takes the natural log to centralities and registered capital.


## Method
### Graph
The author constructs the `weighted and directed` graph to figure out the relationship between firms. The nodes $N=\{1,\cdots,n\}$ represent firms/institutions as investors/investees. The edges $C=\{c_{ij}, (i,j)\in N\times N\}$ represent equity investment flows among firms/institutions, where $c_{ij}$ is the share or equilty of firm $j$ held by $i$. In addition, the firm $i$'s characters vector is $x_i=(x_{i1},\cdots,x_{ip})$, and the size of firm $i$ is $s_i$.

### Centrality
The author uses the following measure centralities:
1. `Degree centrality`: unweighted $InDegree_i=\sum_{j\in N\setminus\{i\}}1_{c_{ij}>0}$ represents the number of $investors$ for firm $i$ and similar to $OutDegree_i$. Moreover, the `weighted in degree` is defined as $WeightedInDegree_i=\sum_{j\in N\setminus\{i\}}c_{ij}s_j$, and similar to the weighted out degree.
2. `Betweenness`: used to capture the information flow or relationship accross the network, which is defined as $Betweenness_i=\sum_{j\neq i,k}\frac{g_{jk}(i)}{g_{jk}}$, where $g_jk$ is the number of shortest paths between $j,k$, and $g_jk$ is the number of shortest paths between $j,k$ through $i$.
3. `Eigenvector Centrality`: used to capture the importance of firm $i$, which relies on the importance of its holding firms. 
It's defined as $C'x^\*=\lambda x^\*$, where $ x^\* $ is the centrality vector of companies given $C$.
4. `Hub and Authority Centrality`: a firm is an authority if it is heavily co-invested by important investors and is a hub if it heavily co-invests to important firms. Note that a firm can be both an authority and a hub.
Definition: the authority centrality of firm $i$ is $a_i=c_1\sum_{j}C_{ji}h_J\iff a=c_1C'h$ and the hub centrality $h_i$ is $h_i=c_2\sum_{j}c_{ij}a_j\iff h=c_2Ca$, where $c_1, c_2$ are constants. These two definitions yeilds $a=\lambda C'Ca$ and $h=\lambda CC'h$, where $\lambda=c_1c_2$

### Variables
The variables are defined as follow:
- `Firm growth`: dependent variable, defiend as the growth rate of firm total assets
- `Firm size`: the natural logarithm of the book value of total assets
- `Firm age`: the natural logarithm of the years that the firm has operated since its establishment
- `ROA (return on assets, 資產報酬率)`: defined as the net income before extraordinary items from the main business as a percentage of total assets
- `Leverage`: the ratio of total liabilities to total assets
- `Reg cap`: firm’s registered capital
- `TFP (Total Factor Productivity, 全要素生產率，是指不包括資本和勞動力等外來輸入，其他所有影響產出的要素，講白一點就是一個經濟體本身實力的進步，它的特色是能夠通過一個簡單的數據說明經濟增長的因素。)`: estimated by the following function
$y_{it}=\beta_0+\beta_mm_{it}+\beta_ll_{it}+\beta_kk_{it}+\mu_{it}$, where $y_{it}, l_{it}, m_{it}, k_{it}$ represent the production output, natural logarithm of labor, intermediate input and capital. The author run the regressions with year ×2-digit CIC (industry) fixed effects. The TFP of firms $i$ at year $t$ is estimated as $\hat{\mu_{it}}$
- `Band subs`: a dummy. 1 for firms with banks as their shareholder if tracing up within three layers in the entire ownership network, and 0 otherwise.
- `SOE`: a dummy. 1 for state-owned enterprises and 0 otherwise.
All variables are summarized as below.
![](https://i.imgur.com/UT8onUW.png)
- The mean value of $In\ net=0.29$ suggests that on average 29% firms are in network over the sample.
- The mean value of $SOE=0.08$ suggests roughly 8% firms are state-owned.

### Regression
{{< math >}}
\begin{array}{rl}
Firm\ growth_{it}= &\alpha_i+\delta_t+\beta_0+\beta_1\cdot Centrality_{i,t-1}\\ 
& +\beta_2\cdot In\ net_{i,t-1}+\beta_3\cdot FirmCharacteristics_{i,t-1}+\varepsilon_{i,t},
\end{array}
{{< /math >}}
where $\alpha_i, \delta_t$ are firm and time fixed effects to capture the time- and firm-heterogeneities.
Expectation: positive $\beta_1$ to show the network effect matters
![](https://i.imgur.com/8jLBYXW.png)
- Excluding $log\ indegree$, all centralities are positive and significant.
    - The author explains that the effect of $indegree$ is absorbed by the effect of $in\ network$ position since the latter is economically important.
- Positive $In\ net$ shows better-connected firms in the ownership network are associated with sigificantly improved firm growth.

The result suggests that a firm benefits from having many ties (degree), especially when the ties involve other well- connected firms (eigenvector), and from investing more in other firms (out-degree).
Moreover, for robustness, the author change the centrality measure weighted by `share persentage` to weighted by `investment amount`, and the result still holds.
![](https://i.imgur.com/ObSAf79.png)

### Centrality Dynamics
![](https://i.imgur.com/GGyvDqF.png)
The author assume such diminishment over years is related to the impact of the [Economic Stimulus Plan in 2009](https://en.wikipedia.org/wiki/Chinese_economic_stimulus_program).


### InDegree
The author wants to figure out why the $inDegree$ contributes to a different effect. It is possible that firms with low in-degree are expected by investors to be less profitable and grow at a slower rate, and hence are selected by fewer investors. Thus, the author examines whether the remaining network centralities affect firm growth for `low inDegree` firms, where `low inDegree` is a dummy and  defined as 1 if a firm’s $inDegree$ is 0, and 0 otherwise. Note that $inDegree=0$ implies $betweeness=0$ thus it can be skipped in the analysis.
![](https://i.imgur.com/wZsQUSv.png)
`I don't understand the author's interpretation here. The author says:`
*For firms with low in-degree, the impact of network centrality is still significant or even more pronounced. For example, estimation in column (2) suggests that one-standard deviation in Log deg is associated with **10.5 (=0.01440.998/0.137)** percent increase in firm growth for firms with high in-degree centrality, and additional **9.2 (=0.01410.998/0.137)** percent increase in firm growth for firms with low in-degree. Column (3) shows that there is **no significant difference for the impact of eigenvector centrality between high and low in-degree firms**. Overall the results suggest that the effect of network position on firm growth is robust after taking into account the possible selection issue.*
`I want to ask how 10.5 and 0.2 are calculated, and why there is no significand difference for the impact of eigenvector centrality between high and low in-degree firms.`


