export abstract class AbstractModule {
    private active = false;

    public isActive() {
        return this.active;
    }

    protected setActive() {
        this.active = true;
    }    
}