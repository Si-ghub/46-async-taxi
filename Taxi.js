class Taxi {
    drive(distance) {
        let currentDistance = 0;

        return new Promise((resolve, reject) => {
            const timer = setInterval(() => {
                console.log(`Nuvaziuota: ${++currentDistance} km`);

                if (currentDistance === distance) {
                    clearInterval(timer);
                    console.log(`Kelione baigta`);
                    resolve();
                }
            }, 1000);
        })
    }
}

module.exports = Taxi;