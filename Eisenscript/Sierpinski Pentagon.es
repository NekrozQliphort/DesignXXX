// Write EisenScript code here...
set maxdepth 10
{ h 120} foo
#define ratio 0.4
#define dh -30
rule foo{
{ x 1 s ratio h dh} foo
{ x 0.309017 y 0.951057 s  ratio h dh} foo
{ x -0.809017 y 0.587785 s ratio h dh} foo
{ x -0.809017 y -0.587785 s ratio h dh} foo
{ x 0.309017 y -0.951057 s  ratio h dh} foo
{ s 1} sphere

}


