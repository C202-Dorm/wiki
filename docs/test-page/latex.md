disqus:
pagetime:
title: latex

# $\LaTeX$

## 基本功能

<!-- 
$ 普通公式 $

$ \begin{aligned} 普通 \\ 换行 \end{aligned} $
-->

$$ 居中公式 $$

$$ \begin{aligned} 居中 \\ 换行 \end{aligned} $$

## 初等运算

$$
\begin{align*}
a + b \ \ \ \ a - b \ \ \ \ a \times b \ \ \ \ a \div b \\
a \cdot b \ \ \ a^b \ \ \sqrt[b]{a} \ \ \ \log_a b \ \ \exp_a b
\end{align*}
$$

$$
\sin x \ \ \cos x \ \ \tan x \ \ \sec x \ \ \csc x \ \ \cot x
$$

$$
\arcsin x \ \ \arccos x \ \ \arctan x \\
$$

## 求和求积公式

$$
\sum_{k=1}^n k = \frac{1}{2} n (n+1)
$$

$$
\sin z = z \prod_{k=1}^{\infty} \left(1-\dfrac{z^2}{k^2\pi^2}\right)
$$

## 矩阵行列式

$$
\begin{gather*}
\begin{matrix} 0 & 1 \\ 1 & 0 \end{matrix}\quad
\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}\\
\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}\quad
\begin{Bmatrix} 1 & 0 \\ 0 & -1 \end{Bmatrix}\\
\begin{vmatrix} a & b \\ c & d \end{vmatrix}\quad
\begin{Vmatrix} i & 0 \\ 0 & -i \end{Vmatrix}
\end{gather*}
$$

## 积分

### 定积分

$$ \mathop {\int} \nolimits _a^b f { \left( {x} \right) } \text{d} x = -\mathop {\int} \nolimits _b^a f { \left( {x} \right) } \text{d} x $$

### 不定积分

$$
\begin{align*}
& \int k \text{d} x = kx + C \\
& \int \mathop{x} ^{\mu} \text{d} x = \frac{ \mathop{x} ^{\mu + 1} }{\mu + 1} + C, \ \mu \neq -1 \\
& \int \frac{1}{x} \text{d} x = \ln { \left| {x} \right| } + C \\
& \int \frac{1}{1 + \mathop{x}^2} \text{d} x = \arctan x + C\\
& \int \frac{1}{\sqrt{1 - \mathop{x}^2}} \text{d} x = \arcsin x + C
\end{align*}
$$

### 曲线积分

$$
\begin{align*}
& {L=\mathop{L}\nolimits_{ {1} }+\mathop{L}\nolimits_2 \Rightarrow \mathop{ \int }\nolimits_{L}f{ \left( {x,y} \right) } \text{d} s=\mathop{ \int }\nolimits_{ {\mathop{L}\nolimits_{ {1} } } }f{ \left( {x,y} \right) } \text{d} s+\mathop{ \int }\nolimits_{ {\mathop{L}\nolimits_2} }f{ \left( {x,y} \right) } \text{d} s} \\
& {\mathop{ \iint }\nolimits_{L}{ \left[ { \alpha f{ \left( {x,y} \right) }+ \beta f{ \left( {x,y} \right) } } \right] } \text{d} s= \alpha \mathop{ \iint }\nolimits_{L}f{ \left( {x,y} \right) } \text{d} s+ \beta \mathop{ \iint }\nolimits_{L}f{ \left( {x,y} \right) } \text{d} s} \\
& {f{ \left( {x,y} \right) } \le g{ \left( {x,y} \right) } \Rightarrow \mathop{ \iint }\nolimits_{L}f{ \left( {x,y} \right) } \text{d} s \le \mathop{ \iint }\nolimits_{L}g{ \left( {x,y} \right) } \text{d} s} \\
& { \left| {\mathop{ \iint }\nolimits_{L}f{ \left( {x,y} \right) } \text{d} s} \left|  \le \mathop{ \iint }\nolimits_{L}{ \left| {f{ \left( {x,y} \right) } } \right| } \text{d} s\right. \right. }
\end{align*}
$$

