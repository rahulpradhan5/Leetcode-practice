/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    // length of input array
    const size = height.length;

    // two pointers, leftinit as 0, right init as size-1
    let [left, right] = [0, size - 1];

    let maxWidth = size - 1;

    let area = 0;

    // trade-off between width and height
    // scan each possible width and compute maximal area
    for (let width = maxWidth; width > 0; width--) {

        if (height[left] < height[right]) {
            area = Math.max(area, width * height[left]);

            // move left index to righthand side
            left += 1;
        } else {
            area = Math.max(area, width * height[right]);

            // move right index to lefthand side
            right -= 1;
        }

    }
    return area;
};
