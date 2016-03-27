//
//  ViewController.swift
//  TestApp
//
//  Created by Sankuru, Kiran on 4/15/15.
//  Copyright (c) 2015 RayLoganInc. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var testHeaderLabel: UILabel!
    @IBOutlet weak var btnClickMe: UIButton!
    
    @IBAction func btnClick(sender: AnyObject) {
        
        testHeaderLabel.text = "Modified Header on 'Click'"

    
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        
        println("Sample output")
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

