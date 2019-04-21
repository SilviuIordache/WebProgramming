let primeLimit = prompt ("Display all prime numbers up to: ");
nextPrime: 
for (let i = 2; i <= primeLimit; i++)
{
    for (let j = 2; j < i**(1/2); j++)
    {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}

alert (8**(1/3));