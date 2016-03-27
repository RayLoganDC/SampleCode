//
//  ViewController.swift
//  Navigation
//
//  Created by Sankuru, Kiran on 4/20/15.
//  Copyright (c) 2015 RayLoganInc. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var timer = NSTimer()
    var count = 0
    
    @IBOutlet weak var StopWatch: UILabel!

    func result () {
        count++;
        println(count)
        
    }
    
    func updateTimer () {
        count++
        StopWatch.text = "\(count)"
    }
    
    @IBAction func Pause(sender: AnyObject) {
        timer.invalidate()
        
    }
    
    @IBAction func Start(sender: AnyObject) {
        timer = NSTimer.scheduledTimerWithTimeInterval(1, target: self, selector: Selector("updateTimer"), userInfo: nil, repeats: true)

        
    }
    
    @IBAction func Stop(sender: AnyObject) {
        timer.invalidate()
        count = 0
        StopWatch.text = "\(count)"
        
    }
    
    
    @IBAction func Refresh(sender: AnyObject) {
        
        count = 0
        
    }

    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        
        
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

