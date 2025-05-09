//Day 17
//Date: 08/05/2025

//abstract class and abstract method



import java_training.Test;

abstract class Payment{    // abstract class
    abstract void pay(int a); //abstract method
    void print(){
        System.out.println("Payment done");
    }
}
 
class UPIPAYMENT extends Payment{
    void pay(int a){
        System.out.println("Payment done via UPI "+a);
    }
}

class CardPayment extends Payment{
    void pay (int a ){
        System.out.println("Payment done via CARD "+a);
    }
}

public class Day17 {
    public static void main(String[] args) {
        Payment obj = new UPIPAYMENT();
        obj.pay(10000);
        obj.print();

        Payment obj1 = new CardPayment();
        obj1.pay(5000);
        obj1.print();

        Test t=new Test();
        System.out.println(t.x);
        t.print();
    }
}


