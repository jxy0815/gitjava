package come.one;

public class Dg {//递归
    public static  void main(String args[]) {

//        int num = 1;
//        int result = 0;
//        while (num <= 100) {
////           result +=num;
//            result = result + num;
//            num++;
//
//
//        }
//
//        System.out.println(result);
    System.out.println(sum(3));



}



public static int sum (int num ){//方法可以定义变量

    if (num == 1) {//
        return 1;
    }
    return  num + sum( num -1);//1.100+100-1；99+99-1.。。。1+1-1---1+0/从任何数加到1/第一次主方法调用



}







}




