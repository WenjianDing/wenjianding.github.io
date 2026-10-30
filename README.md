# Wenjian Ding — personal website

无需构建的静态学术主页，可直接部署到 GitHub Pages。

## 文件

- `index.html`：个人简介、教育经历、11 篇论文和 Experience。
- `style.css`：桌面与手机布局、文字及小图标链接样式。
- `portrait.js`：鼠标悬停时在头像框内查看局部小图，随鼠标移动，移开恢复。
- `campus-cifar10-preview.webp`：校园 CIFAR-10 拼图的 1024×768 网页预览。
- `campus-cifar10-full.webp`：同一拼图的 6144×4608 高清版，页面打开后低优先级预加载。
- `portrait.jpg`：此前的简历照片备份，主页不再使用。
- `Wenjian_Ding_Resume.pdf`：作者提供的英文简历原文件，对应 Resume 链接。
- `Wenjian_Ding_Resume_CN.pdf`：作者提供的中文简历原文件，对应中文简历链接。
- `favicon.svg`：网页图标。
- `.nojekyll`：按普通静态文件发布。

## 发布

把本目录的内容放到 `WenjianDing/wenjianding.github.io` 仓库根目录。在 Settings → Pages 中选择 Deploy from a branch、`main`、`/(root)`，然后保存。

发布后的地址为 `https://wenjianding.github.io/`。创建仓库或保存本地文件不代表已经发布。

## 更新内容

直接编辑 `index.html`。论文按年份排列，姓名加粗，资源以 `[ paper 图标, code 图标 ]` 展示。添加真实链接后即可增加新的资源条目；没有公开地址的资源不显示。

本版依据提供的 Resume.pdf 和用户补充制作：现任顺天堂大学特任助理教授，KBS 已录用。网页正文没有包含手机号或出生日期。按作者要求公开提供 Wenjian_Ding_Resume.pdf 和 Wenjian_Ding_Resume_CN.pdf，保留原文件内容。

头像下的 Google Scholar 链接使用用户提供的个人主页：https://scholar.google.com/citations?user=DkeNqvoAAAAJ&hl=en 。

Email、GitHub、Google Scholar 下方独立一行显示两个文档图标链接：Resume 打开英文 PDF，中文简历打开中文 PDF，均在新标签页打开。

KBS 条目不显示单独的 Accepted 标签；代码按作者要求链接到与 LREC-COLING 2024 论文相同的 VQADG 仓库。News 记录所有带分区标签的 9 篇论文，会议和期刊名称加粗，不包含超链接，保留分区。消息精简为录用结果；两篇 IJCNN 论文合并为一条，使用“two papers were accepted”。

About 使用两段：第一段合并当前任职、博士学位和研究学生经历；第二段以“My work focuses on multimodal understanding and question-answer generation.”概括研究工作，再介绍近期研究兴趣及合作邀请。孙哲关系按作者要求写为“supervised by”。杨征路链接到作者提供的 Google Scholar；孙哲链接到作者提供的顺天堂大学教员页。News 首条按作者提供的暂定时间标为 Nov 2026，以“I plan to join”表述加入顺天堂大学 Faculty of Health Data Science 担任特任助理教授。

Research interests 仅保留作者指定的四项，并统一标题式大写：Reliable Diagnostic Reasoning、Multimodal Clinical Evidence Integration、Natural Language Processing、Multimodal Question Answering。Education 年份省略月份，以括号紧接大学名称，例如 Nankai University (2022–2026)；桌面端两栏上下对齐。

视觉主色使用深紫色 `#472573`，取自 [顺天堂大学英文官网](https://en.juntendo.ac.jp/)导航按钮的实际背景色（2026-10-30 核对）。链接与分区标签配套使用紫色，交替分区底色为淡紫白；标签页图标保留圆角紫底白字 WD。样式表和图标链接使用版本参数，避免浏览器继续显示旧蓝色缓存。

Experience 按时间倒序列出研究学生经历（Aug 2025 – Feb 2026）和科大讯飞算法工程师经历（Algorithm Engineer, iFLYTEK, Sep 2019 – Aug 2022）。研究学生条目仅保留职位、单位、时间、地点和导师，不展示两条具体工作；科大讯飞条目依据作者补充，不添加未提供的职责或地点。Honors & awards 暂时移除。

### 校园 CIFAR-10 拼图

使用作者指定的最终校园版本，原照片已水平镜像以转正校名，保留完整 4:3 横向构图。192×144 网格由 27,648 块真实 CIFAR-10 图片组成，每块原始尺寸为 32×32；从官方 data_batch_1.bin 的 10,000 张图中选用了 4,882 种素材，允许重复，并做有限的逐块 RGB 调整，没有叠加原照片。网页版本仅做 WebP 编码以减小传输量，高清图保留 6144×4608 分辨率。

原校园高清拼图 JPEG 的 SHA-256：`c4a614b1049ceea6693e6f6a8a2c5045584d0daf13bc44ebeafaf8f8047f7da5`。

头像交互参考 [David Heineman 网站的公开实现](https://github.com/davidheineman/davidheineman.com/blob/main/js/main.js)：悬停时在固定头像框内显示局部小图，移动鼠标可查看不同区域，移开恢复完整头像。本图网格为 192 列，采用与参考站一致的 20 倍局部缩放和 0.35 秒过渡；在 285 像素宽的头像框内，每块小图约 30 像素宽。取消放大弹窗及所有可见说明文字；高清素材未就绪时保留预览。键盘可用 Enter/Space 切换细节、方向键移动、Esc 恢复；触屏可按住查看，松开恢复，保留纵向页面滚动。

缩放中心保持固定，位移与缩放统一使用 transform 过渡，并通过 will-change 提前准备合成层。鼠标事件只保存最新坐标，requestAnimationFrame 每帧合并一次布局读取与样式更新；高清图解码完成后才启用细节显示。系统的减少动态效果设置仍然生效。

数据来源：[CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html)，Alex Krizhevsky, *Learning Multiple Layers of Features from Tiny Images*, 2009。

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
