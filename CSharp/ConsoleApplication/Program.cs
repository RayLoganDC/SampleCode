using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int iSum = 0;
            
            Console.WriteLine("Hello World");
            var intExample = IntExample();
            Console.WriteLine("Result in Main: " + intExample);
            //var v = Console.Read();
            //Console.WriteLine(v);
            
        }
        
        public static int IntExample()
        {
            int a = 3;
            int b = 2;
            int c;
            
            c = a * b;
            Console.WriteLine("Result within function: " + c); 
            return c;
        }
        
    }
}

