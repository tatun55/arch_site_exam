function chart2_generate() {
    var time_interval = 1500;
    var i = 0;

    let array1 = ['投資なし'];
    let array2 = ['xxx'];
    let array3 = ['他社'];
    for (let index = 0; index < 12; index++) {
        array1.push(50 * index);
        array2.push(200 * index - 2500);
        array3.push(200 * index - 10000);
    }

    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            x: 'x',
            columns: [
                ['x', '2020-1-1', '2020-2-1', '2020-3-1', '2020-4-1', '2020-5-1', '2020-6-1', '2020-7-1', '2020-8-1', '2020-9-1', '2020-10-1', '2020-11-1', '2020-12-1'],
                array1,
                array2,
                array3,
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m',
                }
            }
        },
        grid: {
            y: {
                lines: [{ value: 0 }]
            }
        }
    });

    let array4 = ['投資なし'];
    let array5 = ['xxx'];
    let array6 = ['他社'];
    for (let index = 12; index < 24; index++) {
        array4.push(50 * index);
        array5.push(200 * index - 2500);
        array6.push(200 * index - 10000);
    }

    setTimeout(function () {
        chart2.flow({
            columns: [
                ['x', '2021-1-1', '2021-2-1', '2021-3-1', '2021-4-1', '2021-5-1', '2021-6-1', '2021-7-1', '2021-8-1', '2021-9-1', '2021-10-1', '2021-11-1', '2021-12-1'],
                array4,
                array5,
                array6
            ],
            duration: 1500
        });
    }, time_interval * i);
    i++;

    let array7 = ['投資なし'];
    let array8 = ['xxx'];
    let array9 = ['他社'];
    for (let index = 24; index < 36; index++) {
        array7.push(50 * index);
        array8.push(200 * index - 2500);
        array9.push(200 * index - 10000);
    }

    setTimeout(function () {
        chart2.flow({
            columns: [
                ['x', '2022-1-1', '2022-2-1', '2022-3-1', '2022-4-1', '2022-5-1', '2022-6-1', '2022-7-1', '2022-8-1', '2022-9-1', '2022-10-1', '2022-11-1', '2022-12-1'],
                array7,
                array8,
                array9
            ],
            duration: 1500
        });
    }, time_interval * i);
    i++;

    let array10 = ['投資なし'];
    let array11 = ['xxx'];
    let array12 = ['他社'];
    for (let index = 36; index < 48; index++) {
        array10.push(50 * index);
        array11.push(200 * index - 2500);
        array12.push(200 * index - 10000);
    }

    setTimeout(function () {
        chart2.flow({
            columns: [
                ['x', '2023-1-1', '2023-2-1', '2023-3-1', '2023-4-1', '2023-5-1', '2023-6-1', '2023-7-1', '2023-8-1', '2023-9-1', '2023-10-1', '2023-11-1', '2023-12-1'],
                array7,
                array8,
                array9
            ],
            duration: 1500
        });
    }, time_interval * i);
    i++;

    let array13 = ['投資なし'];
    let array14 = ['xxx'];
    let array15 = ['他社'];
    for (let index = 48; index < 60; index++) {
        array13.push(50 * index);
        array14.push(200 * index - 2500);
        array15.push(200 * index - 10000);
    }

    setTimeout(function () {
        chart2.flow({
            columns: [
                ['x', '2024-1-1', '2024-2-1', '2024-3-1', '2024-4-1', '2024-5-1', '2024-6-1', '2024-7-1', '2024-8-1', '2024-9-1', '2024-10-1', '2024-11-1', '2024-12-1'],
                array7,
                array8,
                array9
            ],
            duration: 1500
        });
    }, time_interval * i);
    i++;


    //    setTimeout(function () {
    //         chart2.flow({
    //             columns: [
    //                 ['x', '2013-01-11', '2013-01-21'],
    //                 ['投資なし', 500, 200],
    //                 ['xxx', 100, 300],
    //                 ['xxx', 200, 120],
    //             ],
    //             duration: 1500,
    //             done: function () {
    //                 chart2.flow({
    //                     columns: [
    //                         ['x', '2013-02-11', '2013-02-12', '2013-02-13', '2013-02-14'],
    //                         ['投資なし', 200, 300, 100, 250],
    //                         ['xxx', 100, 90, 40, 120],
    //                         ['xxx', 100, 100, 300, 500]
    //                     ],
    //                     length: 0,
    //                     duration: 1500,
    //                     done: function () {
    //                         chart2.flow({
    //                             columns: [
    //                                 ['x', '2013-03-01', '2013-03-02'],
    //                                 ['投資なし', 200, 300],
    //                                 ['xxx', 150, 250],
    //                                 ['xxx', 100, 100]
    //                             ],
    //                             length: 2,
    //                             duration: 1500,
    //                             done: function () {
    //                                 chart2.flow({
    //                                     columns: [
    //                                         ['x', '2013-03-21', '2013-04-01'],
    //                                         ['投資なし', 500, 200],
    //                                         ['xxx', 100, 150],
    //                                         ['xxx', 200, 400]
    //                                     ],
    //                                     to: '2013-03-01',
    //                                     duration: 1500,
    //                                     done: function () {
    //                                         ['x', '2012-12-29', '2012-12-30', '2012-12-31'],
    //                                         ['投資なし', 230, 300, 330],
    //                                         ['xxx', 190, 230, 200],
    //                                         ['xxx', 90, 130, 180],
    //                                     }
    //                                 });
    //                             }
    //                         });
    //                     }
    //                 });
    //             },
    //         });
    //     }, 1000);
}

