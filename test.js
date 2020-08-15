package come.one;

public class Chongzai {

    public static void main(String args[]){

    System.out.println(a(10,20,30));
    System.out.println(a(10,20));
    System.out.println(a("king"));



}

public static int  a(int x,int y  ){

    return x + y;//原函数
}

public  static int a(int x,int y ,int z ){//三个自变量 没有自变量就可以不填/方法名称相同 参数类型 个数不同


    return x+y+z;
}
public static String a(String g){
    return g;


}






}
