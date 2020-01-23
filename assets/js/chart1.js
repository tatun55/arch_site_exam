function chart_generate() {
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            x: 'x',
            columns: [
                ['x', '国内建材販売 A社', '国内建材販売 B社', 'xxx'],
                ['工場品出し価格', 0, 0, 0],
            ],
            type: 'bar',
            order: null
        },
        bar: {
            width: {
                ratio: 0.3 // this makes bar width 50% of length between ticks
            }
        },
        transition: {
            duration: 1500
        },
        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: '％(パーセント)',
                max: 100,
                padding: { top: 0, bottom: 0 }
            }
        },
        color: {
            pattern: ['#000', '#444', '#888', '#ccc', 'red', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            // pattern: ['#00215d', '#00468b', '#0071bc', '#589fef', 'red', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
        },
        tooltip: {
            format: { // 各値のツールチップ表示内容を変更
                value: function (value) { return value + ' ％'; }
            }
        }
    });

    var time_interval = 1500;
    var i = 0;
    setTimeout(function () {
        chart.load({
            columns: [['工場品出し価格', 15, 15, 15]]
        });
    }, time_interval * i);
    i++;
    setTimeout(function () {
        chart.groups([['工場品出し価格', '販売会社 経費・利益']]);
        chart.load({
            columns: [['販売会社 経費・利益', 30, 35, 15]]
        });
    }, time_interval * i);
    i++;
    setTimeout(function () {
        chart.groups([['工場品出し価格', '販売会社 経費・利益', '国内代理店 経費・利益', '大手商社店 経費・利益', 'コストカット']]);
        chart.load({
            columns: [['国内代理店 経費・利益', 30, 25, 0], ['大手商社店 経費・利益', 25, 25, 0], ['コストカット', 0, 0, 70]]
        });
        $('#price-dummy').hide();
        $('#total-price').fadeIn(1500);
        $('#off-amount').fadeIn(1500);
    }, time_interval * i);
    i++;
}

