//Java Stream API Practice Questions (map, filter, reduce)

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Day31 {
    public static void main(String[] args) {
        //Q1. Given a list of integers, return a list of squares of only even numbers.
    

        // List<Integer>list=Arrays.asList(1, 2, 3, 4, 5);
        // List<Integer>Ans=list.stream().filter(n->n%2==0).map(n->n*n).collect(Collectors.toList());
        // System.out.println(Ans);


        // Q2. Given a list of names, return a list of names in 
        //uppercase which have more than 3 characters.

        // List<String>list=Arrays.asList("Ram", "Shyam", "Om", "Sita");
        // List<String>Ans=list.stream().filter(n->n.length()>3).map(n->n.toUpperCase()).collect(Collectors.toList());
        // System.out.println(Ans);

        // Q3. Find the sum of all odd numbers in a list.
        // List<Integer>list=Arrays.asList(1, 2, 3, 4, 5);
        // int Ans=list.stream().filter(n->n%2!=0).reduce(0,(a,b)->a+b);
        // System.out.println(Ans);

        //Q4. Convert a list of words to their lengths.

        // List<String>list=Arrays.asList("Java", "Stream", "API");
        // List<Integer> ans = list.stream()
        //                              .map(String::length)
        //                              .collect(Collectors.toList());
        // System.out.println(ans);


        // Q5. From a list of prices, remove duplicates, 
        //filter prices above 1000, and return total sum.

        // List<Integer> prices = Arrays.asList(999, 1000, 1500, 1000, 2000);

        
        // int total = prices.stream()
        //                   .distinct()
        //                   .filter(price -> price > 1000)
        //                   .reduce(0, Integer::sum);

        // System.out.println(total);

        //Q6. Count how many strings in a list start with letter 'A' or 'a'

        // List<String>list=Arrays.asList("apple", "banana", "apricot", "cherry", "Avocado");
        // long ans=list.stream().filter(n->(n.charAt(0)=='a'|| n.charAt(0)=='A')).count();
        // System.out.println(ans);

        // Q7. Return a comma-separated string of all names with more than 4 letters
        // List<String>list=Arrays.asList("John", "Ravi", "Abhishek", "Raj");
        // String ans=list.stream().filter(n->n.length()>4).collect(Collectors.joining(", "));
        // System.out.println(ans);

        //Q.8 Check if any number in a list is divisible by 7

        // List<Integer>list=Arrays.asList(10, 14, 22, 30);
        // boolean ans=list.stream().anyMatch(n->n%7==0);
        // System.out.println(ans);


        //Q.9 Multiply all the numbers in a list using reduce().
        // List<Integer>list=Arrays.asList(10, 14, 22, 30);
        // int ans=list.stream().reduce(1, (a, b) -> a * b);
        // System.out.println(ans);

        //Q.10 From a list of sentences, return list of words (flat list)
        List<String> sentences = Arrays.asList("Java is fun", "Streams are powerful");

        List<String> words = sentences.stream()
                .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
                .collect(Collectors.toList());

        System.out.println(words);



    }
}
