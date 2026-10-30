# Wenjian Ding — personal website

无需构建的静态学术主页，可直接部署到 GitHub Pages。

## 文件

- `index.html`：个人简介、教育经历、11 篇论文、研究经历和奖项。
- `style.css`：桌面与手机布局、文字及小图标链接样式。
- `portrait.jpg`：从本人提供的简历中提取的照片。
- `favicon.svg`：网页图标。
- `.nojekyll`：按普通静态文件发布。

## 发布

把本目录的内容放到 `WenjianDing/wenjianding.github.io` 仓库根目录。在 Settings → Pages 中选择 Deploy from a branch、`main`、`/(root)`，然后保存。

发布后的地址为 `https://wenjianding.github.io/`。创建仓库或保存本地文件不代表已经发布。

## 更新内容

直接编辑 `index.html`。论文按年份排列，姓名加粗，资源以 `[ paper 图标, code 图标 ]` 展示。添加真实链接后即可增加新的资源条目；没有公开地址的资源不显示。

本版依据提供的 Resume.pdf 和用户补充制作：现任顺天堂大学特任助理教授，KBS 已录用。公开页面没有包含手机号、出生日期或原始 PDF。

头像下的 Google Scholar 链接使用用户提供的个人主页：https://scholar.google.com/citations?user=DkeNqvoAAAAJ&hl=en 。

KBS 条目不显示单独的 Accepted 标签；代码按作者要求链接到与 LREC-COLING 2024 论文相同的 VQADG 仓库。News 记录所有带分区标签的 9 篇论文，会议和期刊名称加粗，不包含超链接，保留分区。消息精简为录用结果；两篇 IJCNN 论文合并为一条，使用“two papers were accepted”。

About 使用两段：第一段合并当前任职、博士学位和研究学生经历；第二段概括多模态问答与生成研究、近期研究兴趣及合作邀请。孙哲关系按作者要求写为“supervised by”。杨征路链接到作者提供的 Google Scholar；孙哲链接到作者提供的顺天堂大学教员页。News 首条按作者提供的暂定时间标为 Nov 2026，以“I plan to join”表述加入顺天堂大学 Faculty of Health Data Science 担任特任助理教授。

Research interests 仅保留作者指定的四项，并统一标题式大写：Reliable Diagnostic Reasoning、Multimodal Clinical Evidence Integration、Natural Language Processing、Multimodal Question Answering。Education 年份省略月份，以括号紧接大学名称，例如 Nankai University (2022–2026)；桌面端两栏上下对齐。

### News 日期依据

KBS、ACM MM 和两篇 IJCNN 的录用月份由作者确认。其余会议月份按官方录用通知日程推定，不等同于逐篇核验录用邮件；日期的 title 说明这一口径。Ad Hoc Networks 未找到确切录用月份，暂保留原年份，待作者补充。

- KBS：Aug 2026，作者确认。
- ACM MM：Jul 2026，作者确认。
- IJCNN（两篇）：Mar 2026，作者确认。
- Findings of ACL：May 2025，依据[ACL 官方日程](https://2025.aclweb.org/)。
- EMNLP：Sep 2024，依据[EMNLP 官方日程](https://2024.emnlp.org/)。
- LREC-COLING：Feb 2024，依据[官方日程](https://lrec-coling-2024.org/)。
- Computers & Electrical Engineering：Oct 2021，依据[论文首页](https://ri.conicet.gov.ar/bitstream/handle/11336/148943/CONICET_Digital_Nro.20fd1505-7a05-4175-9f8a-91dc81706de7_A.pdf?isAllowed=y&sequence=2)的 Accepted 16 October 2021；Publications 继续使用正式出版年份 2022。

## 论文分区（2026-10-30 核对）

每篇只显示一项标注。SCI 使用中科院升级版大类分区，不使用 JCR Q1–Q4 或新锐分区。2022 年两篇期刊论文使用发表时分区；2026 年 KBS 使用可核实的 2025 年分区。具体口径写在标签的 `title` 提示中，不能把这些不同体系当成官方等价换算。

| 刊物或会议 | 显示标注 |
| --- | --- |
| Knowledge-Based Systems | SCI 一区 |
| ACM MM | CCF-A |
| Findings of ACL | CCF-A（作者指定展示口径，非 CCF 官方对 Findings 的评级） |
| EMNLP 主会 | CCF-B |
| LREC-COLING 2024 主会 | CCF-B |
| IJCNN（两篇） | CCF-C |
| Ad Hoc Networks（2022） | SCI 二区 |
| Computers & Electrical Engineering（2022） | SCI 三区 |

ACL Findings 不属于 CCF 目录认定的正式长文范围。应作者明确要求，页面显示“Findings of ACL … CCF-A”，标签提示明确 CCF-A 指 ACL 主会等级、并非 CCF 官方对 Findings 的评级。Computers 的官方收录为 ESCI，因此不标 SCI。没有适用标注的条目保持空白。

核对来源：
- [CCF 官方目录与适用范围](https://www.ccf.org.cn/Academic_Evaluation/By_category/)，[2026 目录 PDF 镜像](https://scdm-shu.github.io/ccf/2026-CCF-Ranking.pdf)（ACM MM 第 47 页，EMNLP/COLING 第 58 页，IJCNN 第 60 页）。
- [KBS 2025 中科院大类一区说明](https://jxxy.cqnu.edu.cn/info/1998/8442.htm)。
- [LREC-COLING 2024 的 CCF-B 说明](https://cnic.cas.cn/gzdt/202404/t20240424_7131083.html)。
- [Ad Hoc Networks 历年分区](https://www.zazhi.com.cn/sci/213977.html)，[2022 发表论文的院校标注](https://it.hebtu.edu.cn/dynamic/content.jsp?id=a94920e244dc4b6295acb13944200840)。
- [Computers & Electrical Engineering 历年分区](https://www.zazhi.com.cn/sci/214008.html)。
- [Computers 官方收录信息](https://www.mdpi.com/journal/Computers)。

## 图标授权

GitHub 猫头图标来自 [Primer Octicons](https://github.com/primer/octicons/blob/main/icons/mark-github-16.svg)，使用其 MIT License：

```text
MIT License

Copyright (c) 2026 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
