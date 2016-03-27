// Playground - noun: a place where people can play

import UIKit


// Close Keybvoard
override func touchesBegan(touches: NSSet, withEvent event: UIEvent) {
    
    self.view.endEditing(true)
    
}

func textFieldShouldReturn(textField: UITextField!) -> Bool {
    
    textField.resignFirstResponder()
    
    return true
    
}



var str:String = "Hello, playground"

var iValue:Double = 3.5


var arrTest = [1, 2, 3, 4, 5]
arrTest.append(6)
println(arrTest)
arrTest.count
arrTest.removeAtIndex(2)



var arrInit = [String]()
arrInit.append("6")
//arrInit.append(3)
arrInit.count
println(arrInit)




var dictInit = ["name": "Ray", "age": 34]
println (dictInit["age"]!)

dictInit["City"] = "B'More" // Append
println(dictInit)

var CityName = dictInit["City"]
var testString = "Test string " + "\(CityName!)"
testString = "Test string \(CityName!)"
testString = "Test string \(arrInit[0])"




var iTempValue = 44
if iTempValue % 2 == 0 {
    println ("iTempValue is even")
    
}
else {
    println("iTempValue is odd")
}


for var iForTemp = 0; iForTemp <= 5; iForTemp++ {
    println ("test")
    println (iForTemp)

}

println(arrTest)
for (index, xValue) in enumerate(arrTest) {
    arrTest[index] = arrTest[index] * 5
}
println(arrTest)



iTempValue = 1
while iTempValue < 10 {
    println (iTempValue)
    iTempValue++
}









