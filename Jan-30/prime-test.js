 var input = prompt("Enter the numbers ");
 input = parseInt(input);

        console.log("User Enter total required prime numbers:  "  + input);        

         var count = 0;
         num = 0;
         isPrime = input;
 
        console.log("A List of the first " + input + " prime numbers");
 
        for (num = 2; count < input; num++)
        {
 
             isPrime = true;
            for ( i=2; i <= num/2; i++)
            {
                if ( num % i == 0)
                {
                    isPrime = false;
                    break;
                }
            }
 
            if ( isPrime == true )
            {
                console.log(num);
                count++;
            }
        }
    

 