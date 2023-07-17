+++
title = "(English + Chinese) Trend words in the title of NBER Working Papers"
+++

<style>
/* Define the font for Chinese text */
.chinese {
    font-family: "Noto Serif Traditional Chinese"; 
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
}
</style>

### Trend words in the title of NBER working papers

<span class = "chinese">
好一陣子前做了一份 nber working paper 文章標題最常見的用字（去除 the, of 這種 stopping words），
可以從用字跟摘要長短與口氣來看經濟學家的研究主題跟寫作行為變化。
</span>

A while ago, I conducted an analysis of the most common words used in titles of NBER working papers, 
excluding common stopping words such as "the" and "of." By examining the vocabulary, length of abstracts, 
and tone of the titles, one can observe changes in the research topics and writing behavior of economists.

<span class = "chinese">
結果如下：
</span>

The results are shown below.

- 1970-1979 top 10 (1~10): inflation, model, economic, demand, social, analysis, labor, interest, effect
- 80-89: policy, exchange, market, tax, monetary, interest, rate, model, capital, rates
- 90-99: evidence‡, capital, trade, market, economic, policy, growth, tax, labor, exchange
- 00-10: evidence, market, trade, effects, policy, financial, capital, health, new, international
- 10-19: evidence†, effects, health, market, financial, policy, labor, economic, trade, impact
- 20-22: covid-19, evidence, policy, effects, economic, pandemic, social, health, labor, financial

<span class = "chinese">
‡ 從 90-99 這個時間段開始，evidence就呈現了霸榜的姿態，直到 20-22 有了更具時效性的 covid-19 才稍稍落後，
我想這個落後也不會持續太長時間。
</span>

‡ Starting from the 90-99 period, 
the word "evidence" consistently topped the list until it was surpassed by the more time-relevant term "covid-19" in 20-22. 
However, I believe this temporary decline in prominence will not last long.

<span class = "chinese">
† 其中在 10-19 年期間 evidence 和其他關鍵字的數量跟比例都呈現壓倒式的差距。
當然有可能 10-19 年經濟學家發的文章數量比較多，這我沒有數，
不過至少可以確定在 10-19 這個時間段是實證較為強勢的年代，
可能跟 ML/DL 等資料處理分析方法的崛起（有機會探索跟生出更多資料集）以及電腦性能越來越強有關。
</span>

† During the 10-19 period, there was a significant gap in the quantity and proportion of articles containing the keyword
"evidence" compared to other keywords. 
It is possible that economists published more articles during this period, although I did not collect such data. 
However, it can be confirmed that the 10-19 period was dominated by empirical research, 
which may be attributed to the rise of data processing and analysis methods 
such as ML/DL (Machine Learning/Deep Learning) and the increasing computational power of computers, 
which facilitated the exploration and generation of more datasets.

<span class = "chinese">
用 nber working paper 有一定的好處在於文章作者必須至少有一人是 nber fellow，
而 nber fellow 大概就是當今主流經濟學界有不錯成就的研究者們，類似或相當於 IEEE fellow 在 EECS 的地位，
所以相比 ssrn, arXiv 等等，透過 nber wp 的結果可能更能反映當時學界的主流與領頭的研究風潮，
但我也沒有去拿其他 preprint 平台的資料來分析就是了。
</span>

The use of NBER working papers offers certain advantages, 
as it requires at least one author to be an NBER fellow. 
NBER fellows are esteemed researchers who have achieved significant accomplishments in the field of economics, 
similar to the status of IEEE fellows in the EECS (Electrical Engineering and Computer Science) community. 
Therefore, compared to platforms like SSRN and arXiv, the findings from NBER working papers may better 
reflect the mainstream and leading research trends of the academic community at that time. 
However, I did not analyze data from other preprint platforms.

<span class = "chinese">
不過讓我比較訝異的是 networks 居然還沒有排上前10，我後來在 stopping words 
中把 social, economic, effects 等字也算進去，這幾個字比較不 informative，
可以出現在個體總體計量的各個領域中，出來的結果也沒有 network，不過 u.s. 在 90-99 跟 10-19 都有進到前十，
risk 在 10-19 也在前十（不知道是什麼關係），而 theory 在 70-79 也在前十ＸＤ
另外我以為 inequality, discrimination 之類的也會上榜，畢竟這類題目體感滿多人做的（嗎）
</span>

I was surprised to find that "networks" did not make it into the top 10. 
Hereafter, I included words such as "social," "economic," and "effects" in the stopping words category, 
as they are less informative and can be found across various areas of individual and macroeconomic analysis. 
However, these words did not yield the term "networks." 
Interestingly, "U.S." appeared in the top 10 for both 90-99 and 10-19, 
while "risk" ranked in the top 10 for 10-19 (the reason is unclear). 
Additionally, "theory" made it into the top 10 for 70-79. 
I expected words like "inequality" and "discrimination" to be present as well, 
given the prevalence of research in these areas (or so I thought).

<span class = "chinese">
此外，除了比較多學者關心的 labor, trade 等領域外，我認為 learning, user, platform, digital 等，
也可能是這年代的研究熱字，只能等 2030 年時再來跑一次分析看看預測準不準了。
</span>

Furthermore, apart from the well-studied areas of labor and trade, 
I believe "learning," "user," "platform," and similar terms may also be popular research topics during this time. 
Only time will tell if these predictions hold true when I conduct the analysis again in 2030.


