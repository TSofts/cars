/**
 * Created by abby on 15/11/22.
 */
var car = {};

car.brands = [
    {
        id:1,
        brand:"AoDi",
        name:"奥迪",
        alpha: "A",
        series:[
            {
                name:"A3",
                volumes:[
                    {
                        name: "1.4T",
                        years:[
                            "2013",
                            "2014"
                        ]
                    },
                    {
                        name: "1.8T",
                        years:[
                            "2010",
                            "2011",
                            "2012",
                            "2013",
                            "2014",
                            "2015"
                        ]
                    }

                ]
            },
            {
                name:"A4",
                volumes:[
                    {
                        name: "2.0T",
                        years:[
                            "2013",
                            "2014"
                        ]
                    },
                    {
                        name: "1.8T",
                        years:[
                            "2010",
                            "2011",
                            "2012",
                            "2013",
                            "2014",
                            "2015"
                        ]
                    }

                ]
            }
        ],
        importSeries: []


    },
    {
        id:2,
        brand:"BieKe",
        name:"别克",
        alpha: "B"

    },
    {
        id:3,
        brand:"BuJiaDi",
        name:"布加迪",
        alpha: "B"

    },
    {
        id:4,
        brand:"ChangAn",
        name:"长安",
        alpha: "C"

    },
    {
        id:5,
        brand:"DaDi",
        name:"大地",
        alpha: "D"

    },
    {
        id:6,
        brand:"DaoQi",
        name:"大旗",
        alpha: "D"

    },
    {
        id:7,
        brand:"DaFa",
        name:"大发",
        alpha: "D"

    },
    {
        id:8,
        brand:"JiangNan",
        name:"江南",
        alpha: "J"

    },
    {
        id:9,
        brand:"JiangNan",
        name:"江南",
        alpha: "J"

    },
    {
        id:10,
        brand:"JiLi",
        name:"吉利",
        alpha: "J"

    },
    {
        id:10,
        brand:"JieBao",
        name:"捷豹",
        alpha: "J"

    }];

export default car;