#include<iostream>
#include<vector>
using namespace std;

struct hospital{
    string name, address, blood_group;
    int age, contact;
}; hospital hsptl;

vector<hospital>vh;


int main(){
    cout<<"Welcome To The Hospital Managment System "<<endl<<endl;
    while(true){ int value;
        cout<<"1. for admit patient: "<<endl;
        cout<<"2. for show all patient: "<<endl;
        cout<<"3. for dismiss patient: "<<endl;
        cout<<"4. for exit: "<<endl;

        cin>>value;

        switch(value){
            case 1:{ system("cls"); 
                int choice;
                do{
                    cout<<"Name: "; cin>>hsptl.name;
                    //getline(cin,hsptl.name);
                    cout<<"Age: "; cin>>hsptl.age;
                    cout<<"Contact: "; cin>>hsptl.contact;
                    cout<<"Blood Group: "; cin>>hsptl.blood_group;
                    cout<<"Address: "; cin>>hsptl.address;
                    vh.push_back(hsptl);
                    for(int i=0; i<vh.size(); i++){
                        system("cls");
                        cout<<i+1<<" "<<"Patient admitted "<<endl;
                    }
                    cout<<"1 for continue or 0 for exit: ";cin>>choice;
                }
                while(choice!=0&& choice==1);
                break;
            }//case 1
            case 2:{ system("cls");

                for(int i=0; i<vh.size(); i++){
                cout<<i+1<<" "<<"Name: "<<vh[i].name<<endl;
                cout<<"Age: "<<vh[i].age<<endl;
                cout<<"Contact: "<<vh[i].contact<<endl;
                cout<<"Blood Group: "<<vh[i].blood_group<<endl;
                cout<<"Address: "<<vh[i].address<<endl<<endl;
                }
                break;
                
            }//case2
            case 3:{ system("cls");
                string n;
                cout<<"Enter name for dismiss: "; cin>>n;

                for(int i=0; i<vh.size(); i++){

                    if(n==vh[i].name){

                  cout<<i+1<<" "<<"Name: "<<vh[i].name<<endl;
                  cout<<"Age: "<<vh[i].age<<endl;
                  cout<<"Contact: "<<vh[i].contact<<endl;
                  cout<<"Blood Group: "<<vh[i].blood_group<<endl;
                  cout<<"Address: "<<vh[i].address<<endl<<endl;

                  vh.erase(vh.begin()+i); //This function are used to previous input and output erase and new input and output begin start of new display

                    }
                    cout<<"Patient Dismissed "<<endl;
                    cout<<"NO of Admitted Patient: "<<vh.size()<<endl<<endl;
                }
                break;
            }// case 3
            
            case 4:{
                exit(0);
                break;
            }//case 4
            default:{ system("cls");
                cout<<"Invalid Input "<<endl<<endl;
                break;
            }
        }//switch

    }//while
    
}//main