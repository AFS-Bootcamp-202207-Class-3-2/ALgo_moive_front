import Mock from 'mockjs';

Mock.setup({timeout: '100-300'});
//影厅座位信息
Mock.mock('/detailInfo', {
    "code": "200",
    "msg": "请求成功！",
    "data": {
        "sessionInfo": {
            "movieName": "ALGO",
            "movieType": "喜剧,科幻",
            "duration": "2分钟",
            "cinemaName": "ALGO巨幕影院",
            "roomName": "巨幕厅",
            "startTime": "2022-07-29 18:30:04",
            "price": 39.99,
            "poster": "",
            "seats": [
                [
                    {
                        "state": 1,
                        "index": 0
                    },
                    {
                        "state": 1,
                        "index": 1
                    },
                    {
                        "state": 2,
                        "index": 2
                    },
                    {
                        "state": 1,
                        "index": 3
                    },
                    {
                        "state": 1,
                        "index": 4
                    },
                    {
                        "state": 1,
                        "index": 5
                    },
                    {
                        "state": 1,
                        "index": 6
                    }
                ],
                [
                    {
                        "state": 1,
                        "index": 7
                    },
                    {
                        "state": 2,
                        "index": 8
                    },
                    {
                        "state": 1,
                        "index": 9
                    },
                    {
                        "state": 1,
                        "index": 10
                    },
                    {
                        "state": 1,
                        "index": 11
                    },
                    {
                        "state": 1,
                        "index": 12
                    },
                    {
                        "state": 1,
                        "index": 13
                    }
                ],
                [
                    {
                        "state": 1,
                        "index": 14
                    },
                    {
                        "state": 1,
                        "index": 15
                    },
                    {
                        "state": 1,
                        "index": 16
                    },
                    {
                        "state": 2,
                        "index": 17
                    },
                    {
                        "state": 1,
                        "index": 18
                    },
                    {
                        "state": 0,
                        "index": 19
                    },
                    {
                        "state": 1,
                        "index": 20
                    }
                ],
                [
                    {
                        "state": 1,
                        "index": 21
                    },
                    {
                        "state": 1,
                        "index": 22
                    },
                    {
                        "state": 2,
                        "index": 23
                    },
                    {
                        "state": 1,
                        "index": 24
                    },
                    {
                        "state": 2,
                        "index": 25
                    },
                    {
                        "state": 1,
                        "index": 26
                    },
                    {
                        "state": 1,
                        "index": 27
                    }
                ],
                [
                    {
                        "state": 2,
                        "index": 28
                    },
                    {
                        "state": 1,
                        "index": 29
                    },
                    {
                        "state": 1,
                        "index": 30
                    },
                    {
                        "state": 2,
                        "index": 31
                    },
                    {
                        "state": 1,
                        "index": 32
                    },
                    {
                        "state": 1,
                        "index": 33
                    },
                    {
                        "state": 1,
                        "index": 34
                    }
                ],
                [
                    {
                        "state": 1,
                        "index": 35
                    },
                    {
                        "state": 1,
                        "index": 36
                    },
                    {
                        "state": 1,
                        "index": 37
                    },
                    {
                        "state": 1,
                        "index": 38
                    },
                    {
                        "state": 1,
                        "index": 39
                    },
                    {
                        "state": 1,
                        "index": 40
                    },
                    {
                        "state": 0,
                        "index": 41
                    }
                ],
                [
                    {
                        "state": 1,
                        "index": 42
                    },
                    {
                        "state": 1,
                        "index": 43
                    },
                    {
                        "state": 0,
                        "index": 44
                    },
                    {
                        "state": 1,
                        "index": 45
                    },
                    {
                        "state": 1,
                        "index": 46
                    },
                    {
                        "state": 1,
                        "index": 47
                    },
                    {
                        "state": 1,
                        "index": 48
                    }
                ]
            ]
        }
    }
});
//电影信息
// Mock.mock('/filmInfo', {
//     data: {
//         filmId: 1,
//         name: "复仇者联盟3：无限战争",
//         type: "动作，冒险，科幻",
//         duration: "150分钟",
//         cinema: "万达影院",
//         filmRoom: "2号影厅",
//         version: "英语3D",
//         arrange: "今天 5月22 20:00",
//         price: "32.5",
//         poster: "../static/images/1.jpg"
//     }
// })
