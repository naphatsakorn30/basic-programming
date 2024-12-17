/**
 * 2. Class Book 

สร้าง class Book เป็นรายการหนังสือในร้านขายหนังสือ โดยมีตัวแปร title, author, year, price, stock, discount

โดย title, author, year, price, stock ถูกระบุตอนสร้าง Object โดยมีแค่ price, stock และ discount เท่านั้นที่แก้ไขได้

มี Method

getTitle
getAuthor
getYear
getPrice แสดงราคาหลังหักส่วนลด
getStock
addStock(int a) เพิ่มหนังสือ a เล่มเข้า Stock
sell(int a) ขาย a เล่มโดยต้องแจ้ง ถ้าจำนวนหนังสือไม่พอ โดยส่งออกราคา
setDiscount(float a)
 */
package apptest;
import java.util.Scanner;

class book {
    private String title;
    private String author;
    private int year;
    public float price;
    public int stock;
    public float discount;

    book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public int getYear() {
        return year;
    }
    public String getStock(int a){
        stock = stock + a;
}

public class App {
    public String getGreeting() {
        return "";
    }
    

    public static void main(String[] args) {
        System.out.println(new App().getGreeting());
    }
}
