// Playground - noun: a place where people can play

import UIKit

var iNumber = 23
var isPrime = true

if iNumber != 2 && iNumber != 1 {
    for var i = 2; i < iNumber; i++ {
            if iNumber % i == 0 {
                isPrime = false
        }
    }
}

println (isPrime)
