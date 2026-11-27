/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
    
    const n = items.length;
    let cheapest = items[0][1];

    for (const [, price] of items) {
        cheapest = Math.min(cheapest, price);
    }

    // dp[money] starts with the number of extra copies we can afford.
    const dp = Array(budget + 1).fill(0);

    for (let money = 0; money <= budget; money++) {
        dp[money] = Math.floor(money / cheapest);
    }

    for (let i = 0; i < n; i++) {
        const [factor, price] = items[i];
        if (price > budget) continue;

        let copies = 1; // The paid copy

        for (let j = 0; j < n; j++) {
            if (i !== j && items[j][0] % factor === 0) {
                copies++;
            }
        }

        // Go backward so each item's free-copy offer is used only once.
        for (let money = budget; money >= price; money--) {
            dp[money] = Math.max(dp[money], dp[money - price] + copies);
        }
    }

    return dp[budget];
};
