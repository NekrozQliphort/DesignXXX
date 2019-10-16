// Write EisenScript code here...
set background #c9bebc
set maxdepth 20
r2
8 * { ry 45} r1

rule r1{
{ x 0.45 ry 7 s 0.9 } r1
{ s 0.8 } box
}

rule r2{
{ s 0.9 y 0.1 } box
{ ry 30 } r2
}

