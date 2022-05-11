package main

import "sort"
func minAvailableDuration(slots1 [][]int, slots2 [][]int, duration int) []int {
      first, second := 0, 0
    sort.SliceStable(slots1, func(i, j int) bool {
        return slots1[i][0] < slots1[j][0]
    })
    sort.SliceStable(slots2, func(i, j int) bool {
        return slots2[i][0] < slots2[j][0]
    })
    for(first <len(slots1) && second < len(slots2)){
        a:= max(slots1[first][0],slots2[second][0])
        b:= min(slots1[first][1],slots2[second][1])
        if b-a >= duration {
            return []int{a, a + duration}
        } else {
            if slots1[first][1] < slots2[second][1] {
                first++
            } else {
                second++
            }
        }
    }
    return []int{}
}

func max(a,b int) int {
    if(a>b){
        return a
    }
    return b
}
func min(a,b int) int {
    if(a>b){
        return b
    }
    return a
}