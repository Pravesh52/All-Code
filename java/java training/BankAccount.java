// public class Day12{

    // public static void sortstring(String[] str) {
    //     for(int i=0;i<str.length;i++){
    //         for(int j=0;j<str.length-i-1;j++){
    //             if(str[j].charAt(0)>str[j+1].charAt(0)){
    //                 String temp=str[j];
    //                 str[j]=str[j+1];
    //                 str[j+1]=temp;
    //             }
    //         }
    //     }
    //     for(int i=0;i<str.length;i++){
    //         System.out.println(str[i]);
    //     }
        
    // }
    //     public static void main(String[] args) {
    //     String [] str={"B","A","C"};
    //     sortstring(str);

    //}

       
    // class student{
    //     String firstname="PRAVESH";
    //     String lastname="TIWARI";

    //     void fullName(){
    //         System.out.println(firstname+ " "+lastname);
    //     }
    // }


// class rectangle{
//         int length;
//         int width;
//         void areaofrectangle(int l,int w){
//                    length =l;
//                    width =w;
//                    System.out.println("Area of Rectangle: "+length*width);
//             }


//     }



    // public class Day12{
    //     public static void main(String[] args) {
    //         // student obj=new student();
    //         // obj.fullName();

    //         rectangle obj=new rectangle();
    //         obj.areaofrectangle(4,5);
    //     }



   // }



//}


public class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber, String accountHolder, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    // Method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    // Method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Invalid");
        }
    }

    // Method to display account details
    public void displayAccountInfo() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: " + balance);
    }

    
    public static void main(String[] args) {
        BankAccount myAccount = new BankAccount("123456789", "Pravesh Tiwari", 1000.0);

        myAccount.displayAccountInfo();
        myAccount.deposit(500.0);
        myAccount.withdraw(300.0);
        myAccount.withdraw(1500.0); // Attempt to overdraw
        myAccount.displayAccountInfo();
    }
}

