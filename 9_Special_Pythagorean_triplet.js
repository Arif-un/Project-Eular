/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var a;
var c;

for (var b = 1; b < 1000; b += 1) {
    a = (500000 - 1000 * b) / (1000 - b);

    if (Math.floor(a) === a) {
        c = 1000 - a - b;

        break;
    }
}

console.log(a, b, c);

/*
Explaination

Pythagoras
a^2 + b^2 = c^2

Also we have
a + b + c = 1000

algebra, rearrange c to left
c = 1000 - (a + b)

insert c back in pythagoras
a^2 + b^2 = (1000 - (a + b))^2

multiply out
a^2 + b^2 = 1000000 - 2000 * (a + b) + (a + b)^2

multiply out
a^2 + b^2 = 1000000 - 2000 * (a + b) + a^2 + 2 * a * b + b^2

rearrange a2 + b2 to simplify
0 = 1000000 - 2000 * (a + b) + 2 * a * b

rearrange unknowns to left
2000 * (a + b) - 2 * a * b = 1000000

simplify, / 2
1000 * (a + b) - a * b = 500000

factorsize
a(1000 - b) + 1000 * b = 500000

rearrange
a(1000 - b) = 500000 - 1000 * b

a = (500000 - 1000 * b) / (1000 - b)

now input b, calculate a and test if a is an integer as required by Pythagorean Triples
*/