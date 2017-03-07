Array.multi = function(rows, cols, initial){
    var arr = [];
    for (var i = 0; i < rows; ++i){
        var columns = [];
        for (var j = 0; j < cols; ++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
