public class NUnitTest
{
    [TestCase]                  // this mark the method as a test in Nunit
    public void Test_Trending()
    {
        var result = TrendingRunner.WhatsTrending(1);
        Assert.AreEqual("Paul Walker", result);
    }
    
    [TestCase(1, Result = "Paul Walker")]
    [TestCase(2, Result = "Cory Monteith")]
    [TestCase(3, Result = "RoyalBaby")]
    public string Test_Trending(int anIndex)
    {
        return TrendingRunner.WhatsTrending(anIndex);
        // Note that you do not use the Assert now, you just return, and let NUnit take care of the rest
        
    }


    [TestCase]                  
    [TestCase(1, Result = "Paul Walker")]
    //...
    public string Test_Trending(int anIndex)
    {
        var result = TrendingRunner.WhatsTrending(anIndex);
        Console.Out.WriteLine("Call \t-> \tresult :\r\n  {0} \t-> \t\"{1}\""
                            , anIndex
                            , result );
        return result;
    }
    
    
    
}


