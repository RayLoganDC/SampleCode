using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Trending;

namespace MSTest
{
    [TestClass]                    // Defines a testing class
    public class MSTestExample     // name, like any other class
    {
        [TestMethod]                          // this mark the method as a test
        public void Test_Trending_MSTest_OK() // method name, like any other
        {
            var result = TrendingRunner.WhatsTrending(1);
            Assert.AreEqual("Paul Walker", result);
        }
    }
}