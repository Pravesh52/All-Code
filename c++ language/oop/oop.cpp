#include<iostream>
#include<string>
using namespace std;
//create class and object
class Teacher{
    //Properties attributes
    private: 
    double salary;

    
    public:
    string name;
    string dept;
    string subject;
    //double salary;

    //method or memeber function

    void setsalary(double s) //this function name setter
    {
        salary = s;

    }

   double getsalary() //this function name getter
   {
    return salary;
   }

};
int main()
{
    Teacher t1;
    t1.name= "Pravesh";
    t1.dept="Cse";
    t1.subject="c++";
    t1.setsalary(25000);

    cout<<t1.name<<endl;
    cout<<t1.dept<<endl;
    cout<<t1.subject<<endl;
    cout<<t1.getsalary()<<endl;
    return 0;
    
}