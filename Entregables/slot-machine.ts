class SlotMachine {
    private coins: number = 0;

    play(): void {
        this.coins++; 

        const reel1 = Math.random() < 0.5;
        const reel2 = Math.random() < 0.5;
        const reel3 = Math.random() < 0.5;

        if (reel1 && reel2 && reel3) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0; 
        } else {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlotMachine();

machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"