//Find the second largest element in an array

public class SecLar {
    public static void main(String[] args) {
        int arr[]={4, 2, 5, 1, 6, 3};

        int largest=Integer.MIN_VALUE;
        int Seclargest=Integer.MIN_VALUE;

        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]>largest)
            {
                Seclargest=largest;
                largest=arr[i];
            }else if(arr[i]>largest && arr[i]<largest)
            {
                Seclargest=arr[i];
            }
        }
        if(Seclargest==Integer.MIN_VALUE)
        {
            System.out.println("not exist");
        }else{
            System.out.println(Seclargest);
        }

    }
}