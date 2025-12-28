# 如何編輯樂樂的回憶網站 (CONTENT.md)

這份文件包含根據你照片實際內容所撰寫的程式碼。
我已經同步更新了 `script.js`，所以你的網站現在應該已經顯示這些內容了！

如果你需要手動調整，可以參考以下內容：

## 1. 完整的照片清單 (Code Snippet)

你可以隨時複製這段程式碼回 `script.js`：

### 時間軸 (Timeline Events)
我挑選了三張代表性的照片：小時候喝水、去賞油桐花、以及可愛的笑容。

```javascript
    const timelineEvents = [
        {
            date: "2010 初遇",
            title: "緣分開始",
            desc: "還記得你小時候乖乖喝水的樣子，剛來到家裡還有點害羞。",
            img: "assets/img/gallery-01.jpg"
        },
        {
            date: "2015 旅行",
            title: "桐花步道",
            desc: "帶著你一起去賞油桐花，白色的花瓣落在石頭路上，你走得好開心。",
            img: "assets/img/gallery-06.jpg"
        },
        {
            date: "2020 相伴",
            title: "最暖的笑容",
            desc: "不管過了多久，你燦爛的笑容總能融化我們的心。",
            img: "assets/img/gallery-15.jpg"
        }
    ];
```

### 回憶牆 (Memories)
我根據每一張照片的動作與場景，加上了對應的標籤 (Tag) 與描述。

```javascript
    const memories = [
        // 04: 草地休息
        { title: "草地時光", tags: ["日常", "快樂"], desc: "在綠草地上捲成一團，享受大自然的氣息。", img: "assets/img/gallery-04.jpg" },
        // 05: 油桐花步道 (牽繩視角)
        { title: "花徑漫步", tags: ["旅行", "日常"], desc: "走在滿是落花的古道上，一步一步慢慢走。", img: "assets/img/gallery-05.jpg" },
        // 07: 草地伸懶腰 (瑜珈狗)
        { title: "伸大懶腰", tags: ["搞笑", "日常"], desc: "這是什麼瑜珈姿勢？後腿拉得直直的，太軟Q了吧！", img: "assets/img/gallery-07.jpg" },
        // 08: 繼續伸懶腰
        { title: "曬曬太陽", tags: ["搞笑", "日常"], desc: "陽光這麼好，當然要盡情伸展筋骨。", img: "assets/img/gallery-08.jpg" },
        // 09: 草叢探險
        { title: "叢林探險", tags: ["旅行", "快樂"], desc: "鑽進草叢裡，像個小探險家一樣。", img: "assets/img/gallery-09.jpg" },
        // 10: 草地翻滾
        { title: "快樂翻滾", tags: ["快樂", "搞笑"], desc: "背癢癢嗎？在草地上扭來扭去好開心。", img: "assets/img/gallery-10.jpg" },
        // 11: 森林背影
        { title: "森林漫遊", tags: ["旅行"], desc: "看著你小小的背影走在樹林間，感覺好療癒。", img: "assets/img/gallery-11.jpg" },
        // 12: 大樹旁
        { title: "大樹與你", tags: ["旅行"], desc: "在巨大的樹幹旁，你顯得更迷你了。", img: "assets/img/gallery-12.jpg" },
        // 13: 森林坡地
        { title: "爬山健行", tags: ["旅行", "快樂"], desc: "雖然腿短短，但爬坡可是難不倒你。", img: "assets/img/gallery-13.jpg" },
        // 14: 森林回眸
        { title: "森林合影", tags: ["旅行"], desc: "停下來回頭看我，是在確認我有沒有跟上嗎？", img: "assets/img/gallery-14.jpg" },
        // 16: 機車踏板
        { title: "準備兜風", tags: ["旅行", "搞笑"], desc: "熟練地跳上機車踏板，「出發了嗎？」", img: "assets/img/gallery-16.jpg" },
        // 17: 紅色地毯
        { title: "優雅休息", tags: ["睡覺", "日常"], desc: "趴在紅地毯上曬太陽，看起來好愜意。", img: "assets/img/gallery-17.jpg" },
        // 18: 鄉間小路
        { title: "鄉間小路", tags: ["旅行"], desc: "走在寬闊的馬路上，路邊的風景真美。", img: "assets/img/gallery-18.jpg" },
        // 19: 石階梯
        { title: "挑戰階梯", tags: ["旅行"], desc: "望著長長的石階梯，準備一鼓作氣衝上去！", img: "assets/img/gallery-19.jpg" },
        // 20: 機車饋頭
        { title: "等到睡著", tags: ["搞笑", "睡覺"], desc: "「還沒要出發喔？」下巴饋在機車邊緣等到愛睏。", img: "assets/img/gallery-20.jpg" },
        // 21: 路邊聞聞
        { title: "聞聞花草", tags: ["日常"], desc: "路邊的小花小草都有好多訊息。", img: "assets/img/gallery-21.jpg" },
        // 22: 認真探索
        { title: "探索世界", tags: ["日常"], desc: "每一個角落都不放過，認真聞聞聞。", img: "assets/img/gallery-22.jpg" },
        
        // 備用：其他照片
        { title: "喝水時間", tags: ["日常"], desc: "乖乖補充水分。", img: "assets/img/gallery-02.jpg" },
        { title: "路邊散步", tags: ["日常"], desc: "簡單的散步就是最棒的時光。", img: "assets/img/gallery-03.jpg" },
        { title: "帥氣新衣", tags: ["搞笑", "日常"], desc: "穿上這件黃色衣服，我是不是看起來特別帥氣？", img: "assets/img/gallery-23.jpg" }
    ];
```
