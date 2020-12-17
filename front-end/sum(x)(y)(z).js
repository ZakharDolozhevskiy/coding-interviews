// create a sum()
// https://bigfrontend.dev/problem/create-a-sum

function sum(num) {
    function helper(num2) {
        return sum(num + num2)
    }

    helper.valueOf = () => num

    return helper
}