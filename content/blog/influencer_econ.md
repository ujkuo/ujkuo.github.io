+++
title = "[E,C] A Write-up for Influencer Economy"
math = true
+++
<style>
/* Define the font for Chinese text */
.chinese {
    font-family: "Noto Serif Traditional Chinese"; 
    font-size: 20px;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, h6, code {
    font-family: "Noto Serif Traditional Chinese"; 
  }
ul, ol {
    font-family: "Noto Serif Traditional Chinese"; 
  }
li {
    font-family: "Noto Serif Traditional Chinese"; 
  }
</style>

<style>
/* Define the font for Chinese text */
.chinese {
    font-family: "Noto Serif Traditional Chinese"; 
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
}
</style>

### How firms and influencers work in the influencer era?

<span class = "chinese">
昨天把 NBER 一篇在講網紅經濟學的wp讀完了 (Lin William Cong and Siguang Li: A Model of Influencer Economy, NBER wp (2023))，
這是一篇 structural model 的行銷論文，主要希望透過賽局模型捕捉 firm, influencer（下可能稱網紅或ＫＯＬ） 和 consumer 之間的互動關係。
這篇文章的模型設定可以當作是 Hotelling model 的延伸，此時網紅和消費者都落在一個單位圓上
（消費者同時會受產品價值跟網紅喜好程度影響，這個設定在討論這個問題我覺得 make sense），
而消費者的效用函數受到商品本身的價值 y、ＫＯＬ的影響力 I、消費者對於ＫＯＬ風格的喜好接近程度
(style affinity $\theta$，取 influencer and consumer 之間的 arc norm) 以及商品價格 p 影響，如果消費者跟ＫＯＬ的風格越接近，
則購買這個商品對消費者所獲得的效用用高。寫成式子就是
</span>
$$u = y * (1 - \theta / I) - p$$

<br>Yesterday, I read NBER's wp on influencer economics (Lin William Cong and Siguang Li: [A Model of Influencer Economy](https://www.nber.org/papers/w31243), NBER wp (2023)). 
This is a structural model marketing paper, mainly through The game model captures the interaction between firm, 
influencer (may be referred to as internet celebrity or KOL below) and consumer. The model setting of this article can be regarded 
as an extension of the Hotelling model. At this time, both the Internet celebrity and the consumer fall on the same unit circle 
(consumers will be affected by the product value and the Internet celebrity’s preference at the same time. This setting is discussed in the I think this question makes sense),
and the consumer’s utility function is affected by the value of the product itself $y$, the influence of KOL $I$, and the proximity of consumers to the style of KOL 
(style affinity $\theta$, which is taken by the arc norm between influencer and consumer),
as well as the effect of product price $p$. If the style of the consumer is closer to the KOL, the utility of purchasing this product will be higher for the consumer. 
The formulation is 
$$u = y * (1 - \theta / I) - p$$

<span class = "chinese">
讓顧客的效用受ＫＯＬ的影響力以及ＫＯＬ與顧客之間的匹配程度旨在充分捕捉讓名人或有影響力的人參與廣告活動的典型原因：
吸引註意力、通過專業知識說服以及全球影響力 (Moeran, Celebrities and the name economy (2003))，
所以大家會看到 Dior Cartier Celine或任何品牌辦一堆增加曝光的活動，而網紅也有誘因參加，因為為了要提升他的客群。
這個模型設定讓我回想起兩年前修資訊經濟之前並沒有修過任何經濟學的課，
對於hotelling model, game theory的掌握度都沒有非常高，當初原本也想在作業跟project用類似的 2-dim 技巧來捕捉 agents 之間的關係，
果然知識跟想法總是會在某刻串起來。
</span>

</br>The reason of the influencer’s impact and the matching degree between the influencer and the consumer in determining consumer utility 
aims to comprehensively capture the typical reasons for celebrities or influential individuals participating in advertising activities, 
such as attracting attention, persuading through expertise, and having global influence (Moeran, [Celebrities and the name economy](https://ideas.repec.org/h/eme/reanzz/s0190-1281(03)22011-4.html) (2003)). 
Therefore, it is common to observe various activities 
organized by brands like Dior, Cartier, and Celine, aimed at increasing exposure. 
Influencers also have an incentive to participate in these activities to expand their client base. 
This model reminds me of my studies in information economics two years ago, 
where I did not have a strong grasp of Hotelling models or game theory at the time. 
I originally intended to use similar two-dimensional techniques in assignments and projects to capture the relationships between agents. 
It is remarkable how knowledge and ideas connect at certain moments.

<span class = "chinese">
整個 game 的進行步驟為：
1. 市場上有許多ＫＯＬ，他們的風格 (type) 跟影響力 (power) 是自過去建立起來的。
2. 廠商決定要賣什麼產品後開始找網紅幫忙行銷並決定工商費。
3. 消費者決定要跟哪個網紅買產品。
4. 接下來就是在不同設定下 (monopoly, competing firms/influencers, market discussion, etc.) 
找 best response among all enrolled agents 與相對應的 prices/profits。
</span>


</br>The steps of the entire game are as follows:
1. There are multiple KOLs in the market, with their own established styles and levels of influence. 
2. Firms decide on the products to sell and seek the assistance of influencers for marketing purposes, determining the fees involved. 
3. Consumers decide which influencer to purchase products from. 
4. The subsequent analysis involves finding the best response among all enrolled agents and determining the corresponding prices and profits under different settings 
(e.g., monopoly, competition between firms/influencers, market discussion, etc.).

<span class = "chinese">
在作者的第一項分析中，他們發現中小型的網紅依舊能夠在面對大型網紅時吸引到一部分的消費者，
而這個結果也與另一篇 structural paper (Itay P. Fainmesser and Andrea Galeotti: The Market for Online Influence, AEJ:Micro (2021)) 
的結果相符。直觀的想法是，小網紅能夠在消費者眼中保持可信度。他們的追隨者並對其產品的推薦產生了高度的參與度。
這與擁有更多追隨者的大網紅或名人形成鮮明對比，但每個追隨者的參與度往往要低得多。或許也可以想成親民程度跟說服力跟死忠程度。
</span>

</br>In the first analysis by the authors, they find that small and medium-sized influencers can still attract a portion of consumers, 
even when competing against larger influencers. This finding aligns with another structural paper by 
Itay P. Fainmesser and Andrea Galeotti (2021), 
titled “[The Market for Online Influence](https://www.aeaweb.org/articles?id=10.1257/mic.20200050).” Intuitively, small influencers can maintain credibility in the eyes of consumers, 
and their followers exhibit a high level of engagement with their product recommendations. 
This contrasts with larger influencers or celebrities who may have more followers but lower levels of engagement from each follower. 
It can be understood as a measure of relatability, persuasiveness, and loyalty.

<span class = "chinese">
與一般的 contract theory approach 相比，通常係由廠商提供合約，網紅再決定要不要簽，
這篇文章考慮了廠商和ＫＯＬ之間的議價能力，這決定了網紅能夠從廠商中分得多少錢。
會加上這個考量的原因主要是希望捕捉科技進步造成提升影響力的成本降低一事對於ＫＯＬ的收入之間的影響。
分析結果直觀地說，當擁有影響力成本非常高時（例如你要當傳統名星），技術進步為賣家和ＫＯＬ創造了「雙贏」的局面，
因為新出現的通用技術（IG等社群平台）幫助網紅吸引更多客戶，並且ＫＯＬ之間的競爭沒有激烈到非常大，
也可能是形成成本太高所以市場沒有那麼擠，這會導致總收入增加，進而增加廠商的收益和ＫＯＬ的收入，
所以上一倍的傳統明星賺得盆滿缽滿不是沒有原因，因為ＫＯＬ沒有那麼多加上當時要提升影響力跟能見度不容易；
然而，當獲得名氣的技術足夠便宜並且ＫＯＬ已經有很大的影響力時，意味著網紅更多地成為替代品，而通過僱用兩名ＫＯＬ，
賣方可以利用ＫＯＬ之間的激烈競爭來獲得議價能力，從而向兩名ＫＯＬ支付最低工資。
</span>

</br>Compared to the conventional contract theory approach where firms provide contracts and influencers decide whether to sign them, 
this article considers the bargaining power between firms and KOLs, which determines how much the influencers receive from the firms. 
The inclusion of this consideration aims to capture the impact of cost reduction in increasing influence due to technological advancements on the income of KOLs. 
The analysis results intuitively show that when the cost of obtaining influence is very high (e.g., traditional celebrities), 
technological advancements create a win-win situation for both sellers and KOLs. Emerging technologies (such as Instagram and other social media platforms) 
help influencers attract more customers, and the competition among influencers is not intense enough to saturate the market, 
possibly due to the high costs involved. This leads to increased total revenue, resulting in higher profits for both firms and influencers. 
This helps explain why traditional celebrities earn significantly more than influencers, as there are fewer influencers available at that level, 
and it is difficult to increase influence and visibility. 
However, when the technology for gaining fame becomes sufficiently cheap and the influencer already has substantial influence, 
it implies that influencers become more substitutable. 
By hiring two influencers, sellers can leverage the intense competition between them to negotiate and pay lower wages to both influencers.

<span class = "chinese">
另外值得一提的是，廠商可以把雇用風格不同的ＫＯＬ來行銷作為一種產品水平差異化的手段，
以直接避免競爭與差異化產品的成本。直觀概念是，由於市場差異化程度越高，產品之間的可替代性就越低，
因此企業最大限度地差異化以減少競爭（當然，ＫＯＬ的風格分散很重要）；而ＫＯＬ也可以作為垂直產品差異化的補充
（風格小分散）或替代（風格大分散）。這對我來說是相當有趣且重要的insight，讓我想起先前在學通路設定時，
當兩個廠商產品十分相似或競爭十分激烈時，廠商就有動機找零售商（中介層）來幫他賣東西來避免直接競爭，
也可以使價格更接近最大化市場總利潤的價格（因為多了中介層成為提高價格的誘因），亦即把餅做大。
(McGuire, T. W., R. Staelin.: An Industry Equilibrium Analysis of Downstream Vertical Integration, Marketing Science (1983))
</span>

</br>Additionally, it is worth mentioning that firms can employ influencers with different styles as a means of product differentiation, 
directly avoiding competition and the costs associated with product differentiation. 
The intuitive concept is that as the level of market differentiation increases, the substitutability between products decreases, 
leading to firms maximizing differentiation to reduce competition (of course, the dispersion of influencer styles is crucial). 
Influencers can also serve as a supplement (in the case of low style dispersion) or substitute (in the case of high style dispersion) 
for vertical product differentiation. This is an interesting and important insight, reminiscent of previous studies on 
channel settings where firms seek retailers (intermediaries) to avoid direct competition and align prices closer to the 
price that maximizes the total market profit (McGuire and Staelin, [An Industry Equilibrium Analysis of Downstream Vertical Integration](https://www.jstor.org/stable/40057250) 1983), 
thereby expanding the market.

<span class = "chinese">
當然文章中還有提及其他結果，例如ＫＯＬ的最大化風格差異選擇（盡可能地遠離另一個ＫＯＬ最好，因為可以盡可能避免競爭）、
產品較好的廠商會選擇較有影響力的ＫＯＬ（因為產品價值 y 高，所以廠商有能力盡可能多掌握多一點用戶）、
ＫＯＬ市場壅擠性（風格多元化通過有效區分消費者體驗來減輕市場集中度）、競品排外條款、廠商跟網紅之間的不平衡匹配等等的
，但那些不是沒什麼意思、我沒有特別感興趣，就是我沒能完全理解他想表達跟捕捉的現象為何。
值得一提的是作者之一的 Lin William Cong 超級高產，做的題目也很多很有趣，
而且又是 Cornell 的教授（Cornell 跟 UPenn marketing 有很多研究我有興趣的老師），
希望以後有機會跟他討論研究。
</span>

</br>Of course, the article also covers other results, 
such as the choice of maximum style differentiation for influencers (optimal to be as far away from each other as possible to avoid competition), 
the preference of better firms for more influential influencers (as higher product value allows firms to capture a larger customer base), 
market congestion of influencers (diversification of styles to alleviate market concentration through effective differentiation of consumer experiences), 
exclusionary clauses among competitors, and the imbalance in matching between firms and influencers. 
However, these results, although not devoid of significance, did not particularly interest me, 
as I did not fully understand the phenomena the authors sought to explain and capture. 

<span class = "chinese">
網紅、平台、廣告投放、多元支付，這些跟當代行銷有關的問題一直是我很有興趣的題目，
這些主題的文章也是各家爭鳴百花齊放，我其實都非常有興趣，但目前還沒有想到一個特別好的主題來研究。
目前手上跟老闆有一筆資料，目前正在處理 SQL 資料庫，（光是我想到的）
大概就可以拿來做兩三個滿有趣的題目（老闆那邊應該還有另外兩三個），
其中有一個偏 IO 的題目希望可以延續老闆之前做了但已經沒打算繼續做的內容，
把問題跟方法改成 mkt 領域學者會喜歡的口味（老闆說那篇被拒應該是方法跟問的問題不是 mkt 領域的口味），
看有沒有機會寫成 wp 投稿 mkt sci 或 mng sci。好想看 referee report 長怎樣（？？？
</span>

</br>Influencers, platforms, advertising placements, and diverse payment methods are all topics related to contemporary marketing that I find highly intriguing. 
There is a wealth of literature on these subjects, and various perspectives and opinions are expressed. 
I am genuinely interested in these topics; however, I have not yet come up with a specific research topic that stands out. 
Currently, I am working with my supervisor on a dataset and processing it using SQL databases. 
Based on what I have thought of so far, there are two or three interesting topics that can be explored (my supervisor likely has a couple more). 
One of them is related to IO and I hope to continue the work my supervisor started but does not plan to pursue further, 
adapting the problem and methods to suit the taste of marketing scholars, since
my supervisor mentioned that the previous submission was rejected due to the methods and research questions not aligning with the taste of marketing scholars. 
If possible, I would like to write it up as a working paper to submit to Marketing Science or Management Science
as I am curious to see how the referee report will turn out haha.

