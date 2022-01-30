 t1 = 0;
 t2 = 1;
 nextTerm = 0;
  
var n = prompt("Enter the n value: ");

n = parseInt(n);

if(n == 0 || n == 1) 
        console.log(n);
   else
        nextTerm = t1 + t2;
for (i = 3; i <= n; ++i)
{
           t1 = t2;
           t2 = nextTerm;
          nextTerm = t1 + t2;
}
      console.log(n + " " + "fabonacci number is ", + t2);