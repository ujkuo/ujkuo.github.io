+++
title = "[C] Why Do Economists Use Prime Instead of T to Represent the Matrix Transpose"
+++

<style>
/* Define the font for Chinese text */
p {
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

剛開始接觸計量的時候很不習慣用 prime 來表示矩陣的 transpose，
剛剛寫計量作業寫到一半突然很想知道為什麼經濟學家會沿用這個 notation，查了一下發現原來 prime 的使用比 transpose 早：

在 1929 年 Florian Cajori 的 "A History of Mathematical Notations (vol. 2)" 中提到 A' 用來表示矩陣的共軛 (conjugate)，但其實就是現在指的轉置矩陣，
並且這套使用方法首見於 C.E. Cullis, "Matrices and Determinoids" (Cambridge), Vol. I (1913)；用 T 來表示 transpose 的濫觴似乎出自 Macduffee's 1933年的 
"The Theory of Matrices"，其中他特別在 footnote 標注說其實 transpose 在當時（和之前）有很多種表示方式，但他用 T 來表示並希望讓這套標示變得更系統化。

這其實滿合理的，畢竟線性代數算是相對近代的學科，被廣泛應用應該也是近 100 多年內的事情，一開始用 prime 表示矩陣間的這種共軛關係也還算方便，
後來為了把矩陣的共軛跟轉置區分開來才改用 T 來標示轉置。而且後來想想，我會不習慣最大的原因是因為一階常微分把 prime 拿去用，而我比較早接觸到微分，
再加上第一次見到轉置時的課本是用 T 來表示；但其實用 prime 來表示轉置在使用情境上幾乎不會遇到問題，因為矩陣如果要微分根本不會用 prime 來表示，
不會造成混淆。但這也讓我很好奇為什麼ＣＳ領域會用 T 來表示，應該也沒什麼會造成混淆的場景（嗎），畢竟大部分會用到微分的時候都用梯度來表示了（？）
從覺得是邪門歪道到被說服再到覺得原本的想法是邪門歪道，這算是種入教且變成虔誠信徒的過程嗎？

Ref: 
1. [Who established the tradition of using 𝑋′ X ′  instead of 𝑋𝑇 X T  to denote the matrix transpose?](https://math.stackexchange.com/questions/2582286/who-established-the-tradition-of-using-x-prime-instead-of-xt-to-denote?fbclid=IwAR12PKPqyTBy7TFYvbsXonZC1mo9nxsylkR__HPJHtSmBLERFzGnH-xCyAs)
2. [A History of Mathematical Notations](https://archive.org/details/b29980343_0002/page/102/mode/2up?view=theater)
