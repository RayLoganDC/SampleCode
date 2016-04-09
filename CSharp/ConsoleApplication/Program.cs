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
            Console.WriteLine(intExample);
            var v = Console.Read();
            Console.WriteLine(v);
            
        }
        
        public static int IntExample()
        {
            int a = 1;
            int b = 2;
            int c;
            
            c = a * b;
            Console.WriteLine(c); 
            return c;
        }
        
    }
}

