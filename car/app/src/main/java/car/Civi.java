package car;

public class Civi extends Car {
    private final float maxFuel;
    private float fuel;

    Civi() {
        super(4, "civi");
        maxFuel = 100;
        fuel = 0;
    }

    @Override
    public boolean drivable() {
        if (fuel > 10)
            return true;
        else
            return false;
    }

    public void addFuel(int x) {
        this.fuel += x;
    }
}
