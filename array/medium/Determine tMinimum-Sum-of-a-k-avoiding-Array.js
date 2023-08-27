/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
n = 5;
k = 4;
var minimumSum = function (n, k) {
    arr = []
    for (var i = 1; i <= n; i++) {
        if (i == 1) {
            arr[i - 1] = 1;
        } else {
            if ((i - 1) * 2 <= k) {
                arr[i - 1] = (i - 1) * 2;
            } else {
                arr[i - 1] = (i - 1) * 2 - k + 1;
            }
        }

    }
    console.log(arr);
    console.log(arr.reduce((acc, val) => acc + val, 0));
};
minimumSum(n, k)
