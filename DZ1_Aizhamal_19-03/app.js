
//  var i;
// for (i = 0 ; i < 100; i++){
//     if(i%3==0) 
//      printf("Buzz");
//      else if(i%5==0) 
//      printf("Buzz");
//     else (!(i % 15))
//             printf("%d", i)          
//             printf(" ");
// }


// for (i=1; i<=100; ++i) {
//     if (!(i % 15))
//         printf("FizzBuzz");
//     else if (!(i % 3))
//         printf("Fizz");
//     else if (!(i % 5))
//         printf("Buzz");
//     else
//         printf("%d", i);

    for (let i = 0 ; i <=100; i++){
        if (i%5===0 && i%3===0){
            console.log("fuzzbbug:", i)
        } else if (i%5===0){
            console.log("Buzz!:" , i)
        }else if (i%3===0){
            console.log("Fuzz!:" , i)
        }else{
            console.log((i))
        }
    }