function check(arr){
    var[n, k] = [arr[0], arr[1]]
    if(n < 3 * k) return -1
    var beems = [arr[2], arr[3], arr[4]]
    var res = 0
    beems.sort()
    var dist = [beems[1] - beems[0], beems[2] - beems[1], beems[0] + n - beems[2]]
    dist.sort()
    var res = 0
    if(k >= dist[0]) res += k - dist[0]
    if(k >= dist[1]) res += k - dist[1]
    return res
}

arr = [6,2,2,1,3]
console.log(check(arr))