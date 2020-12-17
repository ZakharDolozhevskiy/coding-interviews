// Reorder array with new indexes
// https://bigfrontend.dev/problem/reorder-array-with-new-indexes

const sort = (items, order) => {
    for (let pos = 0, nextPos = 0; pos < items.length; pos++) {
        if (pos !== order[pos]) {
            nextPos = order[pos];
            [items[pos], items[nextPos]] = [items[nextPos], items[pos]];
            [order[pos], order[nextPos]] = [order[nextPos], order[pos]];
        }
    }
}