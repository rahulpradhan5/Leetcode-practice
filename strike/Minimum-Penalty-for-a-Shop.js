/*
You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y':

if the ith character is 'Y', it means that customers come at the ith hour
whereas 'N' indicates that no customers come at the ith hour.
If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:

For every hour when the shop is open and no customers come, the penalty increases by 1.
For every hour when the shop is closed and customers come, the penalty increases by 1.
Return the earliest hour at which the shop must be closed to incur a minimum penalty.

Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.
*/
/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
    customers = [...customers];
    var bestTime = 0,
        panalty = 0;
    for (var i = 0; i < customers.length; i++) {
        if (customers[i] == 'Y') {
            panalty = panalty - 1;

        } else {
            panalty = panalty + 1;
        }

        if (panalty < 0) {
            panalty = 0;
            bestTime = i + 1;
        }
    }
    return bestTime;
};

// Complaxity
// Time compalxity = O(n)
