package car;

public class Camry extends Car {
    private final float maxFuel;
    private float fuel;

    Camry() {
        super(4, "Camry");
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
