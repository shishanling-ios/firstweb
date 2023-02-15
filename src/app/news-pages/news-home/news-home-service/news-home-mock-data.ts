import {HttpClient} from "@angular/common/http";
import * as url from "url";
import * as Url from "url";

export interface NewsLeftData {
    id: string;
    type: string;
    main_news: LeftNews;
    other_news: LeftNews[];
}

export interface LeftNews {
    title: string;
    imgUrl: string;
}

export interface CanterNews{
    title:string;
    digest:string;
    docurl:string;
    commenturl:string;
    tienum:number;
    tlastid:string;
    tlink:string;
    label:string;
    keywords:CenterKeywords[];
    time:string;
    newstype:string;
    pics3:[];
    channelname:string;
    source:string;
    point:string;
    imgurl:string;
    add1:string;
    add2:string;
    add3:string;


}

export interface CenterKeywords{
    akey_link:string;
    keyname:string;
}
//轮播图
export interface CarouselModel{
    title:string;
    src:string;
}

export let homeLeftNewsMockData: NewsLeftData[] = [
    {
        id: "1",
        type: "tag_qsyk",
        main_news: {
            title: "两万的月薪算低薪？我狠狠破防了",
            imgUrl: "https://cms-bucket.ws.126.net/2023/0110/cb45df27p00roa1pg002kc0005k002ic.png?imageView&amp;thumbnail=200y90&amp;type=webp",
        },

        other_news: [
            {
                title: "果然，每年的沙雕都不会让人失望",
                imgUrl: "",
            },
            {
                title: "时隔多年，某衣库又出幺蛾子了…",
                imgUrl: "",
            },
        ]
    },
    {
        id: "2",
        type: "tag_sd",
        main_news: {
            title: "卫龙上市了，但我吃不起了",
            imgUrl: "https://cms-bucket.ws.126.net/2023/0107/32dcfc6cp00ro3pkd003uc0005k002ic.png?imageView&amp;thumbnail=200y90&amp;type=webp",
        },
        other_news: [
            {
                title: "2022国民好品牌，瑞幸卷死星巴克",
                imgUrl: "",
            },
            {
                title: "保研，逼出了多少卷王",
                imgUrl: "",
            },
        ]
    },
    {
        id: "3",
        type: "tag_caozhi",
        main_news: {
            title: "越卖越贵的卫龙辣条，你早就吃不起了",
            imgUrl: "https://cms-bucket.ws.126.net/2023/0111/0ca92a31p00rob0rs0058c000go005kc.png?imageView&amp;thumbnail=200y90&amp;type=webp",
        },
        other_news: [
            {
                title: "花1999烫头后,丑得不敢回家过年",
                imgUrl: "",
            },
            {
                title: "被惯坏的北方人,在南方撑不过3秒",
                imgUrl: "",
            },
        ]
    },
    {
        id: "4",
        type: "tag_tanxinshe",
        main_news: {
            title: "三集飙到9.5，国剧开年第一炸来了",
            imgUrl: "https://cms-bucket.ws.126.net/2023/0111/74f4f279p00roaywi00d7c000go005kc.png?imageView&thumbnail=200y90&type=webp",
        },
        other_news: [
            {
                title: "碰瓷国产9.6，别只甩锅杨超越",
                imgUrl: "",
            },
            {
                title: "骂不完的翻拍剧，开始糟蹋“童年阴影”",
                imgUrl: "",
            },
        ]
    },
    {
        id: "5",
        type: "tag_yjws",
        main_news: {
            title: "把抗原炒到几十元一支后，报应来了！",
            imgUrl: "https://cms-bucket.ws.126.net/2023/0107/6bc1136fj00ro3guu003kc0005k002ic.jpg?imageView&thumbnail=200y90&type=webp",
        },
        other_news: [
            {
                title: "买不到退烧药的乱象何时能终结？",
                imgUrl: "",
            },
            {
                title: "第二剂次加强针开打，一文盘点疫",
                imgUrl: "",
            },
        ]
    },


]
//
export let homeData:CanterNews[] = [];
///新闻版面右侧新闻第一个轮播图
export let homeRightNewsCarouselFirst = [
    {title:"神十五乘组首次出舱画面曝光",src:"https://cms-bucket.ws.126.net/2023/0210/198cd9b0p00rpua6l0029c0008c00b4c.png?imageView&thumbnail=300y400&type=webp"},
    {title:"中国首批医疗物资运抵叙利亚", src:"https://cms-bucket.ws.126.net/2023/0210/3ff04c8ap00rpua8r0025c0008c00b4c.png?imageView&thumbnail=300y400&type=webp"},
    {title:"梅花开成绝美中国风壁纸", src:"https://cms-bucket.ws.126.net/2023/0210/81b9f47fp00rpua7v00afc0008c00b4c.png?imageView&thumbnail=300y400&type=webp"},
    {title:"20余省份启动公务员招录", src:"https://cms-bucket.ws.126.net/2023/0210/6c967c63p00rpuabp001sc0008c00b4c.png?imageView&thumbnail=300y400&type=webp"},
];
//280 436
export let homeRightNewsCarouselSecond = [
    {title:"从一杯奶茶看东盟产业合作再升级",src:"https://cms-bucket.ws.126.net/2022/0914/b69baa8dj00ri6tza001nc0007s00c4c.jpg?imageView&thumbnail=280y436&type=webp"},
    {title:"心脏不好的人，推荐多吃3种食物", src:"https://cms-bucket.ws.126.net/2022/0914/ec913510j00ri6tyg000uc0007s00c4c.jpg?imageView&thumbnail=280y436&type=webp"},
    {title:"玄奘抵达西域，第一眼竟看到汉人", src:"https://cms-bucket.ws.126.net/2022/0914/4bfd0014j00ri6txh0012c0007s00c4c.jpg?imageView&thumbnail=280y436&type=webp"},
    {title:"欧美人都在喝芹菜汁？有什么好处？", src:"https://cms-bucket.ws.126.net/2022/0714/caffce21p00rezqm10017c0007s00c4c.png?imageView&thumbnail=280y436&type=webp"},
];
//广告
export let homeRightADList = [
    {title:'路虽远,行则将至.'},
    {title:'事虽难,做则将成.'},
    {title:'难的是迈出第一步.'},
    {title:'不止是看客.'},
];
//新闻专题
export let homeRightNewsFeatures = [
    {title:'路虽远,行则将至.'},
    {title:'事虽难,做则将成.'},
    {title:'枯藤老树昏鸦.'},
    {title:'小桥流水人家.'},
];
//热点排行
export let homeRightHotRankings = [
    { hot:31237, title:'又来了！五角大楼宣称F-16战机在休伦湖上空击落一个空中物体'},
    { hot:29193, title:'海洋发展局短信提醒渔民：日照附近海域发现不明飞行物，有关部门正准备击落'},
    { hot:27478, title:'上蔡县委书记回应房产展销会上女子跳钢管舞：节目审查不力要追责'},
    { hot:14938, title:'俄媒：拉夫罗夫称美官员承认他们为“北溪”管道爆炸事件负责'},
    { hot:13390, title:'土叙地震可能致中国3年内发生7-8级强震？专家：无须恐慌'},
    { hot:10067, title:'土耳其抓捕对震区劣质建筑负有责任的承包商和工程师'},
    { hot:9802, title:'航行警告！黄海北部实弹射击'},
    { hot:8946, title:'中资券商国泰君安国际暂停内地居民身份开户'},
    { hot:7568, title:'北京：近期发生4级以上地震可能性不大'},
    { hot:7462, title:'山东日照海域发现不明飞行物，正准备击落？官方回应'},
]

//热点排行下方,所有的数据,除了广告一模一样,



export let homeRightOtherNews:{title:string,img:{title:string, src:string,}, list:{title:string}[]}[] = [
    {
        title:"财经",
        img:{title:'周鸿祎不想被淘汰', src:'https://cms-bucket.ws.126.net/2023/0213/d37e6712p00rpzsin0058c0008c0046c.png?imageView&thumbnail=300y150&type=webp'},
        list: [
            {title:'GDP30强城市“洗牌”：武汉超杭州'},
            {title:'多项经济数据“开门红”，需求恢复仍偏弱'},
            {title:'永辉超市正在被抖音、美团们疯狂“内卷”'},
            {title:'热搜！知名品牌道歉但不改？网友怒了'},
        ]
    },
    {
        title:"体育",

        img:{title:'吴易昺晒官方夺冠照 中国人的新历史', src:'https://cms-bucket.ws.126.net/2023/0213/e5807972j00rq0a8t000wc000go00b4c.jpg?imageView&thumbnail=300y150&type=webp'},
        list: [
            {title:'超级碗的这一刻，他们等待了100年'},
            {title:'农场主凯尔特人，正在带着火鸡们狂飙'},
            {title:'狠人范德彪：从左手詹姆斯，到湖人罗德曼'},
            {title:'厄德高:在皇马曾迷失自我 阿森纳让我找到了家'}
        ]
    },
    {
        title:"娱乐",

        img:{title:'赵今麦芬兰雪夜美照', src:'https://cms-bucket.ws.126.net/2023/0213/43946cc3p00rpzuta000uc0008c0046c.png?imageView&thumbnail=300y150&type=webp'},
        list: [
            {title:'热巴黄景瑜这事过不去了!疑内行发文:是真爱'},
            {title:'李亚鹏娇妻为女儿拍写真 夏夏越长越像爸爸'},
            {title:'《狂飙》京海F4拍杂志 高启盛扎辫子姨味浓'},
            {title:'郑嘉颖晒三胎儿子满月照 陈凯琳产后更瘦'},
        ]
    },
    {
        title:"汽车精选",
        img:{title:'法拉利首款"SUV"采用对开门四座', src:'https://cms-bucket.ws.126.net/2023/0213/c433c436j00rpzxrr000pc0008c0050c.jpg?imageView&thumbnail=300y150&type=webp'},
        list: [
            {title:'梅赛德斯-迈巴赫首款插混车型年内上市'},
            {title:'智能化功能升级 起亚新K3将于今晚上市'},
            {title:'十万级营造运动氛围感 GS3影速做到了'},
            {title:'ChatGPT帮我们造了辆车 连发布会都有了'},

        ]
    },
    {
        title:"科技",
        img:{title:'字节等不及“吃”外卖了', src:'https://cms-bucket.ws.126.net/2023/0213/abfcdab4p00rpzui2003wc000mc00ckc.png?imageView&thumbnail=300y150&type=webp'},
        list: [
            {title:'外媒曝光ChatGPT背后的“血汗工厂”'},
            {title:'传多位跨国公司高管计划访华 包括库克'},
            {title:'ChatGPT正“侵入”中学甚至学龄前'},
            {title:'美团大佬连夜冲向ChatGPT，自带3.5亿'},

        ]
    }
]






//这和,借钱卖房不一样,结婚都要借钱,那以后的日子会更难.





