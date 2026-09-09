#include<iostream>
using namespace std;
int main()
{
	string i;
	cout << "SAY HI TO TUTTU (only hi)""\n";
	cin >> i;
	if (i == "hi")
	{
		double a, b, sum, diff, div, multi;
		char n;
		cout << "I AM A CALCULATOR""\n";
		cout << "which mathematical operation you prefer(+,-,/,*)""\n";
		cin >> n;
		cout << "Enter 2 numbers""\n";
		if (n == '+')
		{
			cin >> a >> b;
			sum = a + b;
			cout << "sum is""\t" << sum;
		}
		else if (n == '-')
		{
			cin >> a >> b;
			diff = a - b;
			cout << "difference is""\t" << diff;
		}
		else if (n == '/')
		{
			cin >> a >> b;
			div = a / b;
			cout << "division is""\t" << div;
		}
		else if (n == '*')
		{
			cin >> a >> b;
			multi = a * b;
			cout << "multiplication is""\t" << multi;
		}
	}
	else
		cout << "TUTTU IS SHUTING DOWN";
	return 0;
}