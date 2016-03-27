//
//  ViewController.swift
//  CatYears
//
//  Created by Sankuru, Kiran on 4/16/15.
//  Copyright (c) 2015 RayLoganInc. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    
    @IBOutlet weak var txtFldAge: UITextField!
    @IBOutlet weak var txtRealAge: UITextView!
    
    @IBAction func btnShowAge(sender: AnyObject) {
        var initAge = txtFldAge.text.toInt()
        if initAge != nil {
        
            var catYears = initAge! * 7
            var ageString = "Converted age: \(catYears)"
            
            println("Init age: " + txtFldAge.text)
            
            txtRealAge.text = ageString
        }
        else {
            
            txtRealAge.text = "Please enter valid age!"
            
        }
        
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        txtRealAge.text = "Ready to calculate Cat Years!"
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        
        
    }


}

