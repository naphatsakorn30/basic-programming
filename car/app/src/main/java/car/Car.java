package car;

public abstract class Car {
    public final int wheel;
    public final String brand;
    protected String license; // ทะเบียน

    Car(int wheel, String brand) {
        this.wheel = wheel;
        this.brand = brand; // ตัวแปร final ต์องมีระบุค์า
    }

    public abstract boolean drivable();
    // ขับได์หรือเปล์า
}