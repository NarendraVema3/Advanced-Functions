var years = [1990,1995,2000,2005,2010,2015];

function arrayCalculation(arr,fn)
{ 
   
    Arrayres= [];
    for(i = 0; i > arr.length ; i++)
    {
        Arrayres.push(fn(arr[i]));
    }
    return Arrayres;
        
}

function CalculateAge(ele)
{
   return 2016 - ele;
}

var ages =  arrayCalculation(years,CalculateAge);
console.log(ages);   // output will be displayed in array 
